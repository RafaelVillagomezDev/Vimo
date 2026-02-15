export type AuthHeadersGenerator = (
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    url: string,
    body?: Record<string, unknown> | null
) => Promise<Record<string, string>>;

interface DataFetch {
    api_url: string; // URL completa para fetch
    api_path: string; // PATH limpio para la firma HMAC (req.originalUrl del backend)
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';
    body?: Record<string, unknown> | null;
    headers?: Record<string, unknown>;
    token?: string;
    authHeadersGenerator?: AuthHeadersGenerator; // Inyección
}

interface DataFetchFormData {
    api_url: string;
    api_path: string;
    method: 'POST' | 'PUT' | 'PATCH' | 'OPTIONS' | 'GET';
    body: FormData; // Obligatorio y de tipo FormData
    headers?: Record<string, unknown>;
    token?: string;
    authHeadersGenerator?: AuthHeadersGenerator;
    credentials: 'include'
}

interface CustomFetchReturn<T = unknown> {
    data: T | null;
    error: string | null;
}

const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
        let raw = parts.pop()?.split(';').shift() || null;
        if (!raw) return null;

        // Decodificamos el valor (Express escapa caracteres)
        raw = decodeURIComponent(raw);

        if (raw.startsWith('s:')) {

            return raw.slice(2).split('.')[0];
        }
        return raw;
    }
    return null;
};

const securityHeadersGenerator = async (method: string, path: string): Promise<Record<string, string>> => {
    const headers: Record<string, string> = {};
    const csrfToken = getCookie('_csrf_token');

    if (csrfToken) {
        headers['x-csrf-token'] = csrfToken;
    } else {
        // 🚨 EXCEPCIÓN: Si es la ruta de token y no hay cookie, permitimos continuar
        // para que el servidor nos la entregue por primera vez.
        const isLoginPath = path.includes('/anonymous/token');

        if (!isLoginPath && !['GET', 'OPTIONS'].includes(method)) {
            throw new Error('CSRF Token missing. Please refresh.');
        }
    }
    return headers;
};


export const customFetch = async <T = unknown>({
    api_url,
    api_path,
    method = 'GET',
    body,
    headers = {},
    token,
    authHeadersGenerator = securityHeadersGenerator, // Función de seguridad inyectada
}: DataFetch): Promise<CustomFetchReturn<T>> => {
    let securityHeaders: Record<string, string> = {};


    const requiresSecurity = method !== 'GET' && method !== 'OPTIONS';

    if (requiresSecurity) {
        try {
            securityHeaders = await authHeadersGenerator(method, api_path, body);
        } catch (e: unknown) {
            const errorMessage =
                e instanceof Error
                    ? e.message
                    : 'Error desconocido al generar encabezados de seguridad.';
            return { data: null, error: errorMessage };
        }
    }


    const headersObject = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...headers,
        ...securityHeaders,
    };

    try {
        const response = await fetch(api_url, {
            method,
            headers: headersObject,
            body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
            credentials: 'include'
        });


        if (!response.ok) {
            const errorText = await response.text();
            let errorMessage = `Error ${response.status}: ${response.statusText}`;

            try {
                const errorJson = JSON.parse(errorText);
                errorMessage = errorJson.message || errorMessage;
            } catch {

            }
            throw new Error(errorMessage);
        }

        const result = await response.json();
        return { data: result as T, error: null };
    } catch (error: unknown) {
        if (error instanceof Error) {
            return { data: null, error: error.message || 'Error de red o desconocido' };
        }
        return { data: null, error: 'Error de red o desconocido' };
    }
};

export const customFetchFormData = async <T = unknown>({
    api_url,
    api_path,
    method = 'POST',
    body,
    headers = {},
    token,

    authHeadersGenerator = securityHeadersGenerator,
}: DataFetchFormData): Promise<CustomFetchReturn<T>> => {
    let securityHeaders: Record<string, string> = {};


    const requiresSecurity = method !== 'GET' && method !== 'OPTIONS';

    if (requiresSecurity) {
        try {
            securityHeaders = await authHeadersGenerator(method, api_path, null);
        } catch (e: unknown) {
            const errorMessage =
                e instanceof Error
                    ? e.message
                    : 'Error al generar seguridad para archivos (CSRF).';
            return { data: null, error: errorMessage };
        }
    }

    const headersObject: Record<string, string> = {
        'Accept': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...(headers as Record<string, string>),
        ...securityHeaders,
    };

    try {
        const response = await fetch(api_url, {
            method,
            headers: headersObject,
            body,
            credentials: 'include',
        });

        if (!response.ok) {
            const errorText = await response.text();
            let errorMessage = `Error ${response.status}: ${response.statusText}`;

            try {
                const errorJson = JSON.parse(errorText);
                errorMessage = errorJson.message || errorMessage;
            } catch {
                errorMessage = errorText || "Error en el servidor al procesar archivos";
            }

            throw new Error(errorMessage);
        }

        const result = await response.json();
        return { data: result as T, error: null };

    } catch (error: unknown) {
        return {
            data: null,
            error: error instanceof Error ? error.message : 'Error de conexión al subir archivos'
        };
    }
};