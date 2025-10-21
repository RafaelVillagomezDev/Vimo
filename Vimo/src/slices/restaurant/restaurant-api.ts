import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../utils/call/customFetch";
import { Restaurant } from "./restaurant-slice";

// NOTA: Asegúrate de que esta interfaz cumpla con el tipo 'DataFetch'
// que customFetch requiere, que probablemente es más extenso.
interface FetchRestaurantConfig {
    api_url: string;
    api_path: string; // Correcto: Este campo es crucial para HMAC y es obligatorio.
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: Record<string, unknown>;
    token?: string;
}

export const getRestaurant = createAsyncThunk(
    "restaurant/fetchRestaurant",
    async (config: FetchRestaurantConfig, { rejectWithValue }) => {

        // Desestructuración para establecer 'GET' como valor por defecto si 'method' no está presente.
        const { method = 'GET', ...rest } = config;

        // El objeto 'fetchConfig' ahora incluye 'method', 'api_path' y el resto de 'config'.
        // TypeScript infiere su tipo correctamente, cumpliendo con la estructura necesaria para customFetch.
        const fetchConfig = {
            method,
            ...rest
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
            const message = (error instanceof Error) ? error.message : 'Error desconocido al contactar la API.';
            return rejectWithValue(message);
        }
    }
);