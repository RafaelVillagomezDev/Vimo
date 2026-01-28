import { createAsyncThunk } from '@reduxjs/toolkit';
import { customFetch } from '../../utils/call/customFetch';
import { Restaurant } from './restaurant-slice';
import { getToken } from '../../auth/auth-api';

// Tipo del argumento que recibe fetchTokenAndRestaurant
type FetchArgs = {
    api_url: string;
    api_path: string;
    headers?: Record<string, string>;
};


type RestaurantPayload = any;

const API_BASE_URL_TOKEN = 'http://localhost:3000/api/v1/anonymous/token'; // Ejemplo
const API_PATH_TOKEN = '/anonymous/token';
const API_KEY = import.meta.env.VITE_API_KEY_TOKEN;


// NOTA: Asegúrate de que esta interfaz cumpla con el tipo 'DataFetch'
// que customFetch requiere, que probablemente es más extenso.
interface FetchRestaurantConfig {
    api_url: string;
    api_path: string; // Correcto: Este campo es crucial para HMAC y es obligatorio.
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: Record<string, unknown>;
    token?: string;
    headers?: Record<string, unknown>;
}

export const getRestaurant = createAsyncThunk(
    'restaurant/fetchRestaurant',
    async (config: FetchRestaurantConfig, { rejectWithValue }) => {
        // Desestructuración para establecer 'GET' como valor por defecto si 'method' no está presente.
        const { method = 'GET', ...rest } = config;

        // El objeto 'fetchConfig' ahora incluye 'method', 'api_path' y el resto de 'config'.
        // TypeScript infiere su tipo correctamente, cumpliendo con la estructura necesaria para customFetch.
        const fetchConfig = {
            method,
            ...rest,
        };

        try {
            const { data, error } = await customFetch<Restaurant>(fetchConfig);

            if (error) {
                // Rechaza el Thunk con el mensaje de error de la API o de red.
                return rejectWithValue(error);
            }

            console.log(data);

            // Retorna el payload que será enviado al reducer.
            return data as Restaurant;
        } catch (error) {
            // Captura errores de red que no fueron manejados por customFetch.
            const message =
                error instanceof Error ? error.message : 'Error desconocido al contactar la API.';
            return rejectWithValue(message);
        }
    }
);

export const fetchTokenAndRestaurant = createAsyncThunk<
    RestaurantPayload, // Retorno exitoso (fulfilled payload)
    FetchArgs, // Argumentos de entrada
    { rejectValue: string } // Tipo del valor de rechazo
>('api/fetchTokenAndRestaurant', async (args, { dispatch, rejectWithValue }) => {
    const { api_url, api_path } = args;

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
            getRestaurant({
                api_url: api_url, // Usamos 'apiUrl' de los argumentos
                api_path: api_path, // Usamos 'apiPath' de los argumentos
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            })
        ).unwrap()) as RestaurantPayload;

        // Retorna el resultado final
        return restaurantResult;
    } catch (error) {
        let errorMessage: string;

        if (typeof error === 'string') {
            errorMessage = error;
        } else if (
            typeof error === 'object' &&
            error !== null &&
            'message' in error &&
            typeof error.message === 'string'
        ) {
            errorMessage = error.message;
        } else if (error instanceof Error) {
            errorMessage = error.message;
        } else {
            errorMessage = 'Error desconocido al encadenar las llamadas a la API.';
        }

        console.error('Fallo en el flujo de API unificado:', error);
        // Retorna el valor de rechazo, que debe ser una string según el tipo genérico.
        return rejectWithValue(errorMessage);
    }
});
