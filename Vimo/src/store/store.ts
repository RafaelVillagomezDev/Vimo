import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from '../slices/restaurant/restaurant-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // usa localStorage
import { migrate } from './state/migrate';

// ✅ Definimos el ID del build aquí donde process.env funciona.
const APP_BUILD_ID : string = import.meta.env.REACT_APP_BUILD_VERSION ;


const restaurantPersistConfig = {
  key: 'restaurant',
  storage,
  whitelist: ['restaurant'], // solo persistimos el campo restaurant
  migrate:async(state:Record<string, any> | undefined | null , version:number) => migrate(state, version, APP_BUILD_ID),
};



const persistedRestaurantReducer = persistReducer(restaurantPersistConfig, restaurantReducer);


export const store = configureStore({
  reducer: {
    restaurant: persistedRestaurantReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Necesario para redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
});

// Creamos el persistor
export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
