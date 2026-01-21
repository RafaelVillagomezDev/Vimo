import { useState, useEffect } from 'react';

interface DataFetch {
    api_url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: Record<string, unknown>;
    headers?: Record<string, unknown>;
    token?: string;
}

interface UseFetchReturn<T = unknown> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export const useFetch = <T = DataFetch>({
    api_url,
    method = 'GET',
    body,
    headers = {},
    token,
}: DataFetch): UseFetchReturn<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const headersObject = {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
    };

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(api_url, {
                method,
                headers: headersObject,
                body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();
            setData(result);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Error desconocido');
            }
        }
    };

    // `useEffect` only runs when `api_url`, `method`, `body`, or `token` changes
    useEffect(() => {
        fetchData();
    }, [api_url, method, JSON.stringify(body), token]); // Depend on parameters for refetch

    return { data, loading, error };
};
