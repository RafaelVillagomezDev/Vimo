import { createSlice } from "@reduxjs/toolkit";
import { getRestaurant } from "./restaurant-api";


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
}

// Estado inicial Redux
export const initialState: interfaceState = {
  restaurant: {
    code: '',
    count: 0,
    data: [], 
    message: ''
  },
  status: 'idle',
  loading: false
};




export const restaurantSlice=createSlice({
    name:"restaurant",
    initialState,
    // Funciones sincronas 
    reducers:{

    },
    // Funciones asincronas
    extraReducers:(builder)=> {
        builder.addCase(getRestaurant.pending, (state) => {
            state.status = "loading";
            state.loading=false;
          });
          builder.addCase(getRestaurant.fulfilled, (state, action) => {
            state.status = "success";
            state.loading=true;
            state.restaurant = action.payload.data as unknown  as Restaurant;
          });
          builder.addCase(getRestaurant.rejected, (state) => {
            state.status = "failed";
            state.loading=false;
          });
    },

    selectors:{
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
         return sliceState.find(restaurant => restaurant.id === id);
            
        },
    }
    
    
})

export const { selectRestaurantById } = restaurantSlice.selectors;
export default restaurantSlice.reducer;