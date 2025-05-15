interface DataFetch {
    api_url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: Record<string, unknown>;
    headers?: Record<string, unknown>;
    token?: string;
  }
  
  interface CustomFetchReturn<T = unknown> {
    data: T | null;
    error: string | null;
  }
  
  export const customFetch = async <T = unknown>({
    api_url,
    method = 'GET',
    body,
    headers = {},
    token
  }: DataFetch): Promise<CustomFetchReturn<T>> => {
    const headersObject = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers
    };
  
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
      return { data: result, error: null }; 
    } catch (error: unknown) {
      if(error instanceof Error){
        return { data: null, error: error.message || 'Error desconocido' }; 
      }
      return { data: null, error: 'Error desconocido' }; 
    }
  };
  