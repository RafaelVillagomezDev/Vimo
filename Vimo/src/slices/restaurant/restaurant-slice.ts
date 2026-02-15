import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { getRestaurant } from './restaurant-api';

export interface ImageDTO {
    id: string;
    url: string;
}

export interface LocationDTO {
    id: string;
    address: string;
    latitude: string;
    longitude: string;
    country: string;
    county: string | null;
}

export interface DishDTO {
    id: string;
    name: string;
    description: string | null;
    price: string; // O número si prefieres, pero el JSON lo tiene como string
    category: string;
}

export interface MenuDTO {
    id: string;
    name: string;
    description: string | null;
    dishes: DishDTO[];
}

export interface RestaurantDTO {
    src: string | undefined;
    id: string;
    name: string;
    email: string;
    address: string;
    description: string;
    phone: string;
    type_food: string;
    web: string;
    images: ImageDTO[];
    location: LocationDTO;
    menus: MenuDTO[];
}

export interface Restaurant {
    code: string;
    count: number;
    data: RestaurantDTO[];
    message: string;
}

export interface interfaceState {
    restaurant: Restaurant;
    status: string;
    loading: boolean;
    searchTerm:string;
}

// Estado inicial Redux
export const initialState: interfaceState = {
    restaurant: {
        code: '',
        count: 0,
        data: [],
        message: '',
    },
    status: 'idle',
    loading: false,
    searchTerm:''
};

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    // Funciones sincronas
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        // Opcional: Para limpiar todo el estado
        resetSearch: (state) => {
            state.searchTerm = '';
        }
    },
    // Funciones asincronas
    extraReducers: (builder) => {
        builder.addCase(getRestaurant.pending, (state) => {
            state.status = 'loading';
            state.loading = true;
        });
        builder.addCase(getRestaurant.fulfilled, (state, action) => {
            state.status = 'success';
            state.loading = false;
            state.restaurant = action.payload as unknown as Restaurant;
        });
        builder.addCase(getRestaurant.rejected, (state) => {
            state.status = 'failed';
            state.loading = false;
        });
    },

    selectors: {
        /**
         * Selector para extraer un RestaurantDTO por ID.
         * * Los selectores creados con createSelector (debajo del capó) pueden tomar argumentos.
         * El segundo argumento (id) se pasa al selector en el componente.
         * * @param sliceState El estado local de este slice (interfaceState).
         * @param id El ID del restaurante a buscar.
         * @returns El objeto RestaurantDTO encontrado o undefined.
         */
        selectRestaurantById: (state, id: string) => {
            // Buscamos directamente en el array de datos de este slice.
            const sliceState = state.restaurant.data;

            // Ahora accedemos al array de datos dentro del estado local del slice:

            return sliceState.find((restaurant) => restaurant.id === id);
        },

        
        /**
         * SELECTOR DINÁMICO: Filtra por Nombre o Dirección.
         * Este es el que debes usar en tu componente de lista (.map).
         * No modifica el estado global, solo devuelve una "vista" filtrada.
         */
        selectFilteredRestaurants: (state) => {
            const term = state.searchTerm.toLowerCase().trim();
            const allRestaurants = state.restaurant.data;

            // Si el buscador está vacío, devolvemos todos los restaurantes intactos
            if (!term) return allRestaurants;

            // Filtramos por nombre o dirección
            return allRestaurants.filter((restaurant) => {
                const nameMatch = restaurant.name.toLowerCase().includes(term);
                const addressMatch = restaurant.address.toLowerCase().includes(term);
                
                return nameMatch || addressMatch;
            });
        },
        selectSearchTerm: (state) => state.searchTerm,
        selectRestaurantStatus: (state) => state.status,
        selectRestaurantCount: (state) => state.restaurant.count,


    },
});
export const { setSearchTerm, resetSearch } = restaurantSlice.actions;
export const { selectRestaurantById,selectFilteredRestaurants,selectSearchTerm,selectRestaurantStatus,selectRestaurantCount } = restaurantSlice.selectors;
export default restaurantSlice.reducer;
