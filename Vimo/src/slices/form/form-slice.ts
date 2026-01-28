import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createRestaurant } from './form-api';

interface RegisterFormState {
    name: string;
    email: string;
    phone: string;
    type_food: string;
    description: string;
    address: string;
    web: string;
    status: 'idle' | 'loading' | 'success' | 'failed';
    loading: boolean;
}

const initialState: RegisterFormState = {
    name: '',
    email: '',
    phone: '',
    type_food: '',
    description: '',
    address: '',
    web: '',
    status: 'idle',
    loading: false,
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateFormField: (state, action: PayloadAction<{ field: keyof RegisterFormState; value: string }>) => {
            const { field, value } = action.payload;
            if (state[field] !== value) {
                (state as any)[field] = value;
            }
        },
        resetForm: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createRestaurant.pending, (state) => {
                state.status = 'loading';
                state.loading = true;
            })
            .addCase(createRestaurant.fulfilled, (state) => {
                state.name = initialState.name;
                state.email = initialState.email;
                state.phone = initialState.phone;
                state.type_food = initialState.type_food;
                state.description = initialState.description;
                state.address = initialState.address;
                state.web = initialState.web;
                state.status = 'success';
                state.loading = false;
            })
            .addCase(createRestaurant.rejected, (state) => {
                state.status = 'failed';
                state.loading = false;
            });
    },
});

export const { updateFormField, resetForm } = formSlice.actions;
export default formSlice.reducer;