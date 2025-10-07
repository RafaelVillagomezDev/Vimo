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
    name:"taskreducer",
    initialState,
    reducers:{},
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
    
    
})


export default restaurantSlice.reducer;