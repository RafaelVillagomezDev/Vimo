// store/state/migrate.ts

import { initialState, interfaceState } from "../../slices/restaurant/restaurant-slice"; 
import Cookies from 'js-cookie';
import { PersistPartial } from 'redux-persist/es/persistReducer'; // 🔑 Importación clave


const COOKIE_BUILD_KEY = 'app_build_id_cookie';


export interface GlobalStoreState extends PersistPartial {
    restaurant: interfaceState;
}

// ✅ Aceptamos el ID de build como tercer argumento (currentBuildId)
export const migrate = async ( state: Record<string, any> | null | undefined, 
    _currentVersion: number,            
    currentBuildId: string   ) => { 
  

  const currentState = state || {} as Record<string, any>;
  const storedBuildId = Cookies.get(COOKIE_BUILD_KEY);

  // Usamos el ID pasado por argumento
  if (storedBuildId !== currentBuildId) { 
    console.warn(`[Redux Persist] ⚠️ ¡Nuevo Deployment Detectado! Cookie: ${storedBuildId || 'Ninguna'}, Actual: ${currentBuildId}. Restaurando slice 'restaurant'.`);

    // Guardar el nuevo ID en la cookie
    Cookies.set(COOKIE_BUILD_KEY, currentBuildId, { expires: 365, secure: true, sameSite: 'Lax' });

    return {
      ...currentState,
      restaurant: initialState 
    }  as GlobalStoreState;
  }

  return  currentState as GlobalStoreState; 
};