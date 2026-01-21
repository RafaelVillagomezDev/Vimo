export type AuthHeadersGenerator = (
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
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

interface CustomFetchReturn<T = unknown> {
    data: T | null;
    error: string | null;
}
// Asume importaciones de interfaces DataFetch y CustomFetchReturn

export const customFetch = async <T = unknown>({
    api_url,
    api_path,
    method = 'GET',
    body,
    headers = {},
    token,
    authHeadersGenerator, // Función de seguridad inyectada
}: DataFetch): Promise<CustomFetchReturn<T>> => {
    let securityHeaders: Record<string, string> = {};

    // 1. GENERAR ENCABEZADOS DE SEGURIDAD (Solo para métodos que modifican estado)
    // 🚨 CORRECCIÓN: SOLO llamar al generador si está presente Y el método NO es GET/OPTIONS.
    const requiresSecurity = authHeadersGenerator && method !== 'GET' && method !== 'OPTIONS';

    if (requiresSecurity) {
        try {
            // Usamos api_path, body y method para la firma
            securityHeaders = await authHeadersGenerator(method, api_path, body);
        } catch (e: unknown) {
            const errorMessage =
                e instanceof Error
                    ? e.message
                    : 'Error desconocido al generar encabezados de seguridad.';
            // Si la generación de seguridad falla (ej. falta CSRF token), abortamos.
            return { data: null, error: errorMessage };
        }
    }

    // 2. CONSTRUIR TODOS LOS ENCABEZADOS
    const headersObject = {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
        ...securityHeaders, // Incluirá headers solo si se generaron en el paso 1
    };

    try {
        const response = await fetch(api_url, {
            method,
            headers: headersObject,
            // El body es solo para métodos que no son GET
            body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
        });

        // ... (Manejo de errores y retorno) ...
        if (!response.ok) {
            const errorText = await response.text();
            let errorMessage = `Error ${response.status}: ${response.statusText}`;

            try {
                const errorJson = JSON.parse(errorText);
                errorMessage = errorJson.message || errorMessage;
            } catch {
                /* no es json */
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
