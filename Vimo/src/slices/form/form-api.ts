import { createAsyncThunk } from '@reduxjs/toolkit';
import { customFetch, customFetchFormData } from '../../utils/call/customFetch';
import { getToken } from '../../auth/auth-api';


// Configuración de constantes
const API_BASE_URL_TOKEN = 'http://localhost:3000/api/v1/anonymous/token';
const API_PATH_TOKEN = '/anonymous/token';

// Interfaces de entrada (Payloads)
interface FetchFormConfig {
    api_url: string;
    api_path: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any; // Usamos any para permitir tanto Record como FormData
    token?: string;
    headers?: Record<string, string>;
}

// Interfaz para subir imágenes específicamente
interface CreateImagesConfig {
    api_url: string;
    api_path: string;
    body: FormData;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    token?: string;
    headers?: Record<string, string>;
}


const registerRestaurant = createAsyncThunk(
    'restaurant/registerRestaurant',
    async (config: FetchFormConfig, { rejectWithValue }) => {
        const { method = 'POST', ...rest } = config;
        try {
            const { data, error } = await customFetch<any>({ method, ...rest });
            if (error) return rejectWithValue(error);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Error en registro');
        }
    }
);


export const createImages = async (config: CreateImagesConfig) => {
    const { api_url, api_path, body } = config;

    try {
        
        const responseToken = await customFetch<any>({
            api_url: API_BASE_URL_TOKEN,
            api_path: API_PATH_TOKEN,
            method: 'POST'
        });

        if (responseToken?.error) {
            return { data: null, error: responseToken.error };
        }

        
        const token = responseToken?.data?.data?.user?.token

        if (!token) {
            const errorMsg = "No se pudo encontrar 'user.token' en la respuesta del servidor";
            console.error(errorMsg, responseToken.data);
            return { data: null, error: errorMsg };
        }

        
        const result = await customFetchFormData<any>({
            api_url,
            api_path,
            method: 'POST',
            body: body,
            token: token,
            credentials: 'include'
        });

        if (result?.error) {
            return { data: null, error: result.error };
        }

        return { data: result.data, error: null };

    } catch (err: any) {
        console.error("Error crítico:", err);
        return { data: null, error: err.message || "Error inesperado" };
    }
};

// Creacion restaurante (Orquestador)
export const createRestaurant = createAsyncThunk<any, FetchFormConfig, { rejectValue: string }>(
    'api/createRestaurant',
    async (args, { dispatch, rejectWithValue }) => {
        const { api_url, api_path, body } = args;

        try {
            // Obtener Token
            const tokenResult = await dispatch(
                getToken({
                    api_url: API_BASE_URL_TOKEN,
                    api_path: API_PATH_TOKEN,
                    method: 'POST',
                })
            ).unwrap();

            const token = tokenResult?.data?.user?.token || tokenResult?.token;

            if (!token) return rejectWithValue('Token ausente');

            // Registrar Restaurante
            const restaurantResult = await dispatch(
                registerRestaurant({
                    api_url: api_url,
                    api_path: api_path,
                    method: 'POST',
                    headers: { Authorization: `Bearer ${token}` },
                    body: body,
                })
            ).unwrap();

            return restaurantResult;

        } catch (error: any) {
            return rejectWithValue(error || 'Fallo en el flujo unificado');
        }
    }
);