interface DataFetch {
    api_url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: Record<string, any>;
    headers?: Record<string, any>;
    token?: string;
  }
  
  interface CustomFetchReturn<T = any> {
    data: T | null;
    error: string | null;
  }
  
  export const customFetch = async <T = any>({
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
    } catch (error: any) {
      return { data: null, error: error.message || 'Error desconocido' }; 
    }
  };
  