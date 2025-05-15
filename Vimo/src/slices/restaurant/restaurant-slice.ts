import { createSlice } from "@reduxjs/toolkit";
import { getRestaurant } from "./restaurant-api";
import { UUID } from "crypto";

export interface RestaurantItem {
  image_id:UUID
  image_url:string 
  location_address:string  
  location_country :string 
  location_county :string
  location_id :UUID
  location_latitude:string  
  location_longitude :string
  restaurant_address :string 
  restaurant_description :string
  restaurant_email :string 
  restaurant_id :UUID
  restaurant_name :string
  restaurant_type_food:string,
  restaurant_web:string,
  restaurant_phone:string
}

export interface Restaurant {
  code: string;
  count: number;
  data: RestaurantItem[];
  message: string;
}

interface interfaceState {
  restaurant: Restaurant; 
  status: string;
  loading: boolean;
}

// Estado inicial Redux
const initialState: interfaceState = {
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