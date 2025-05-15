import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../utils/call/customFetch";
import { Restaurant } from "./restaurant-slice";



export const getRestaurant=createAsyncThunk(
    "restaurant/fetchRestaurant",
    async()=>{
       
       const data = customFetch({api_url:"http://localhost:3000/api/v1/restaurant",method:"GET"})
       return data as unknown  as Restaurant;
    }
)