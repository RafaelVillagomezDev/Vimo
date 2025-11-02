import { createAsyncThunk } from "@reduxjs/toolkit";


import { customFetch } from "../utils/call/customFetch";
import { AuthState } from "./auth-slice";


interface FetchAuthConfig {
    api_url: string;
    api_path: string; // Correcto: Este campo es crucial para HMAC y es obligatorio.
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, unknown>;
}

export const getToken = createAsyncThunk(
    "auth/fetchAuth",
    async (config: FetchAuthConfig, { rejectWithValue }) => {

        // Desestructuración para establecer 'GET' como valor por defecto si 'method' no está presente.
        const { method = 'GET', ...rest } = config;

        // El objeto 'AuthConfig' ahora incluye 'method', 'api_path' y el resto de 'config'.
        // TypeScript infiere su tipo correctamente, cumpliendo con la estructura necesaria para customFetch.
        const fetchConfig = {
            method,
            ...rest
        };

        try {
            
            const { data, error } = await customFetch<AuthState>(fetchConfig);

            if (error) {
                // Rechaza el Thunk con el mensaje de error de la API o de red.
                return rejectWithValue(error);
            }

            console.log(data);

            // Retorna el payload que será enviado al reducer.
            return data as AuthState;

        } catch (error) {
            // Captura errores de red que no fueron manejados por customFetch.
            const message = (error instanceof Error) ? error.message : 'Error desconocido al contactar la API.';
            return rejectWithValue(message);
        }
    }
);