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

// ✅ CONVERSIÓN A NUMBER: Usamos Number() para convertir la cadena de Vite a un número.
// Es crucial asegurarse de que VITE_APP_BUILD_VERSION en tu .env sea solo un número (ej: "123").
const APP_BUILD_ID: number = Number(import.meta.env.VITE_APP_BUILD_VERSION);


const rootPersistConfig = {
  key: 'roott',
  storage,
  whitelist: ['restaurant'], // solo persistimos el campo restaurant
  // Nota: El tipo 'version' en 'redux-persist' es number por defecto,
  // por lo que es mejor asegurar que la versión de persistencia sea numérica si usas este campo.
  migrate: async(state:Record<string, any> | undefined | null , version:number) => migrate(state, version, APP_BUILD_ID),
 
};


const persistedRestaurantReducer = persistReducer(rootPersistConfig , restaurantReducer);


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
