import { createAsyncThunk } from '@reduxjs/toolkit';
import { customFetch } from '../../utils/call/customFetch';
import { getToken } from '../../auth/auth-api';


type FormPayload = any;

const API_BASE_URL_TOKEN = 'http://localhost:3000/api/v1/anonymous/token'; // Ejemplo
const API_PATH_TOKEN = '/anonymous/token';
const API_KEY = import.meta.env.VITE_API_KEY_TOKEN;


// NOTA: Asegúrate de que esta interfaz cumpla con el tipo 'DataFetch'
// que customFetch requiere, que probablemente es más extenso.
interface FetchFormConfig {
    api_url: string;
    api_path: string; // Correcto: Este campo es crucial para HMAC y es obligatorio.
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: Record<string, unknown>;
    token?: string;
    headers?: Record<string, unknown>;
}

const registerRestaurant = createAsyncThunk(
    'restaurant/registerRestaurant',
    async (config: FetchFormConfig, { rejectWithValue }) => {

        const { method = 'POST', ...rest } = config;

        const fetchConfig = {
            method,
            ...rest,
        };

        try {
            const { data, error } = await customFetch<FormPayload>(fetchConfig);

            if (error) {
                return rejectWithValue(error);
            }

            // Retorna el payload que será enviado al reducer.
            return data as FormPayload;
        } catch (error) {
            // Captura errores de red que no fueron manejados por customFetch.
            const message =
                error instanceof Error ? error.message : 'Error desconocido al contactar la API.';
            return rejectWithValue(message);
        }
    });


export const createRestaurant = createAsyncThunk<FormPayload, FetchFormConfig, { rejectValue: string }>('api/createRestaurant', async (args, { dispatch, rejectWithValue }) => {
    const { api_url, api_path , body} = args;
    try {
        const tokenResult = await dispatch(
            getToken({
                api_url: API_BASE_URL_TOKEN,
                api_path: API_PATH_TOKEN,
                method: 'POST',
                headers: { 'x-api-key': API_KEY },
            })
        ).unwrap();

        const token = tokenResult.data.user?.token;

        if (!token || typeof token !== 'string' || token === null) {
            return rejectWithValue('Token no válido o ausente en la respuesta de autenticación.');
        }


        const restaurantResult = (await dispatch(
            registerRestaurant({
                api_url: api_url,
                api_path: api_path,
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` },
                body: body,
            })
        ).unwrap()) as FormPayload;

        // Retorna el resultado final
        return restaurantResult;

    } catch (error) {
        console.error('Fallo en el flujo de API unificado:', error);
        return rejectWithValue(error as string);
    }
})