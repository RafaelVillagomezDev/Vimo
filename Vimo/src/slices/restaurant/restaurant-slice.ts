import { createSlice } from "@reduxjs/toolkit";

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
        
    },
    
    
})


