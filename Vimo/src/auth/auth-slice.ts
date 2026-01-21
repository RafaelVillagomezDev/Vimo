// src/slices/auth/auth-slice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getToken } from './auth-api';
// Asumo que tu CustomFetch/Thunk devuelve una estructura que contiene AuthApiContainer
// Ejemplo de Payload: { data: AuthApiContainer }

// Interfaces de datos (sin cambios, son correctas)
export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'user' | 'cliente' | 'admin';
    created_at: string;
    isAuthenticated: false;
    token: null;
    refreshToken: null;
}

export interface AuthSessionData {
    user: User | null;
    token: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
}

export interface AuthApiContainer {
    code: string;
    count: number;
    user: User | null;
    message: string;
}

// 🛡️ AuthState: La interfaz del estado del slice
export interface AuthState {
    data: AuthApiContainer;
    status: 'idle' | 'loading' | 'success' | 'failed';
    loading: boolean;
    isAuthenticated: boolean;
    error: string | null;
    token: string | null;
    refreshToken: string | null;
}

// --- Estado Inicial CORREGIDO ---
export const initialState: AuthState = {
    data: {
        code: '',
        count: 0,
        user: null, // El valor inicial de AuthSessionData | null
        message: '',
    },
    // Inicialización de las propiedades de estado
    status: 'idle',
    loading: false,
    error: null,
    isAuthenticated: false,
    token: null,
    refreshToken: null,
};

// Define el payload esperado de tu Thunk (ajusta si tu Thunk devuelve diferente)
interface GetTokenPayload {
    data: AuthApiContainer;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,

    reducers: {
        // ... (otros reducers)
    },

    // Funciones asincronas
    extraReducers: (builder) => {
        builder.addCase(getToken.pending, (state) => {
            // ✅ Lógica de inicio de carga
            state.loading = true;
            state.status = 'loading';
            state.error = null;
            state.isAuthenticated = false;

            // Limpieza de datos anidados
            state.data.user = null;
            state.data.count = 0;
            state.data.message = '';
            state.data.code = '';
        });

        // ✅ Lógica Corregida para Asignación Segura
        builder.addCase(getToken.fulfilled, (state, action: PayloadAction<GetTokenPayload>) => {
            if (action.payload.data.user) {
                state.token = action.payload.data.user?.token;
                state.isAuthenticated = true;
                state.status = 'success';
            }
        });

        builder.addCase(getToken.rejected, (state, action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = (action.payload as string) || action.error.message || 'Fallo de red.';
            state.isAuthenticated = false;
            state.data.user = null;
        });
    },

    selectors: {
        // ... (selectores)
    },
});

export const {} = authSlice.selectors;
export default authSlice.reducer;
