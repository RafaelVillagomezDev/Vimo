import { useMemo } from 'react';

// --- CONFIGURACIÓN ---
// Asumimos que esta variable existe en tu entorno React y no es undefined
const SHARED_SECRET_KEY = process.env.REACT_APP_HMAC_SECRET as string;
const CSRF_COOKIE_NAME = '_csrf_token';
const CSRF_HEADER_NAME = 'x-csrf-token';

/**
 * Obtiene el valor del token CSRF de la cookie.
 * @param name El nombre de la cookie ('_csrf_token').
 * @returns El valor del token (la parte antes del punto) o undefined.
 */
const getCsrfTokenFromCookie = (name: string): string | undefined => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            // Devuelve solo el token (lo que está antes del punto '.'),
            // ya que el backend espera el token sin la firma de la cookie.
            return cookie.substring(name.length + 1).split('.')[0];
        }
    }
    return undefined;
};

/**
 * Genera un Nonce aleatorio de 32 bytes (64 caracteres hexadecimales).
 */
const generateNonce = (): string => {
    // Código para generar un Nonce único
    const array = new Uint8Array(32);
    window.crypto.getRandomValues(array);
    return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Custom Hook para generar encabezados de seguridad (HMAC, Timestamp, Nonce y CSRF)
 * de forma dinámica antes de cada solicitud de cambio de estado.
 */
export const useAuthSecurityHeaders = () => {
    // 1. Obtener el token CSRF una sola vez usando useMemo
    const csrfToken = useMemo(() => getCsrfTokenFromCookie(CSRF_COOKIE_NAME), []);

    // 2. Función generadora central (ASÍNCRONA)
    const generateSignedHeaders = async (
        method: string,
        url: string,
        body: Record<string, unknown> | null = null
    ): Promise<Record<string, string>> => {
        if (!SHARED_SECRET_KEY) {
            // Esto solo se lanza si la aserción 'as string' falla o si el valor
            // es una cadena vacía (aunque técnicamente debería ser manejado por la aserción).
            throw new Error('FATAL: HMAC Secret Key no está configurada en variables de entorno.');
        }
        if (!csrfToken) {
            throw new Error(
                'CSRF token no encontrado. La petición será rechazada por el servidor.'
            );
        }

        const timestamp = Date.now();
        const nonce = generateNonce();

        // --- CADENA BASE PARA LA FIRMA ---
        const bodyString = body && Object.keys(body).length > 0 ? JSON.stringify(body) : ''; // Si el cuerpo es null o vacío, usamos una cadena vacía para la firma.

        // Cadena firmada: method:body:url:timestamp:nonce
        const dataToSign = `${method}:${bodyString}:${url}:${timestamp}:${nonce}`;

        // --- GENERACIÓN DE HMAC-SHA256 ---
        const key = new TextEncoder().encode(SHARED_SECRET_KEY);
        const data = new TextEncoder().encode(dataToSign);

        const cryptoKey = await window.crypto.subtle.importKey(
            'raw',
            key,
            { name: 'HMAC', hash: 'SHA-256' },
            false,
            ['sign']
        );

        const signatureBuffer = await window.crypto.subtle.sign('HMAC', cryptoKey, data);

        // Convertir el resultado a string hexadecimal
        const signature = Array.from(new Uint8Array(signatureBuffer))
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('');

        return {
            'x-hmac-signature': signature,
            'x-request-timestamp': timestamp.toString(),
            'x-request-nonce': nonce,
            [CSRF_HEADER_NAME]: csrfToken,
        };
    };

    return { generateSignedHeaders };
};
