import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../utils/call/customFetch";
import { Restaurant } from "./restaurant-slice";

// Asume que este tipo es el que customFetch requiere, donde 'method' es OBLIGATORIO
// interface DataFetch { api_url: string; method: 'GET' | ...; /* ... */ }

interface FetchRestaurantConfig {
    api_url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'; // <-- Aquí es opcional
    body?: Record<string, unknown>;
    token?: string;
}

// Asegúrate de que tu función 'customFetch' está tipada con el tipo que retorna

export const getRestaurant = createAsyncThunk(
    "restaurant/fetchRestaurant",
    async (config: FetchRestaurantConfig, { rejectWithValue }) => {
        
        const { method = 'GET', ...rest } = config; 
        
        const fetchConfig = {
            method, 
            ...rest
        };
        
        try {
            
            const { data, error } = await customFetch<Restaurant>(fetchConfig); 

            if (error) {
                return rejectWithValue(error);
            }
            
            console.log(data);
            
            return data as Restaurant; 

        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Error desconocido al contactar la API.';
            return rejectWithValue(message);
        }
    }
);