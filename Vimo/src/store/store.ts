import { configureStore } from '@reduxjs/toolkit';
import restaurantSlice from '../slices/restaurant/restaurant-slice';


export const store = configureStore({
  reducer: {
     restaurant:restaurantSlice
  }
});

// Exportamos tipos clave
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;