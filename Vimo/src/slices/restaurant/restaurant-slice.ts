import { createSlice } from "@reduxjs/toolkit";
import { getRestaurant } from "./restaurant-api";

interface Restaurant{
    id:string,
    name:string,
    email:string,
    address:string,
    description:string
}

interface interfaceState{
    restaurant:Restaurant[],
    status: string,
    loading:boolean
}

// Estado inicial Redux
const initialState:interfaceState={
    restaurant:[],
    status:"idle",
    loading:false
}




export const restaurantSlice=createSlice({
    name:"restaurant",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=> {
        builder.addCase(getRestaurant.pending, (state) => {
            state.status = "loading";
            state.loading=false;
          });
          builder.addCase(getRestaurant.fulfilled, (state, action) => {
            state.status = "success";
            state.loading=true;
            state.restaurant = action.payload.data;
          });
          builder.addCase(getRestaurant.rejected, (state) => {
            state.status = "failed";
            state.loading=false;
          });
    },
    
    
})


export default restaurantSlice.reducer;