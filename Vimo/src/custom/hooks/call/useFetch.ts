import { useState, useEffect } from 'react';

interface DataFetch {
  api_url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: Record<string, any>;
  headers?: Record<string, any>;
  token?: string;
}

interface UseFetchReturn<T = any> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useFetch = <T = any>({
  api_url,
  method = 'GET',
  body,
  headers = {},
  token
}: DataFetch): UseFetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const headersObject = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null); 

    try {
      const response = await fetch(api_url, {
        method,
        headers: headersObject,
        body: method !== 'GET' && body ? JSON.stringify(body) : undefined
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error: any) {
      setError(error.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  // `useEffect` only runs when `api_url`, `method`, `body`, or `token` changes
  useEffect(() => {
    fetchData();
  }, [api_url, method, JSON.stringify(body), token]); // Depend on parameters for refetch

  return { data, loading, error };
};
