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


const restaurantPersistConfig = {
  key: 'restaurant',
  storage,
  whitelist: ['restaurant'] // solo persistimos el campo restaurant
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
