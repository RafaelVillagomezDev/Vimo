import { initialState, interfaceState } from '../../slices/restaurant/restaurant-slice';
import Cookies from 'js-cookie';
import { PersistPartial } from 'redux-persist/es/persistReducer';

const COOKIE_BUILD_KEY = 'app_build_id_cookie';

export interface GlobalStoreState extends PersistPartial {
    restaurant: interfaceState;
}

// ✅ currentBuildId AHORA ES number (proviene de store.ts)
export const migrate = async (
    state: Record<string, any> | null | undefined,
    _currentVersion: number,
    currentBuildId: number
) => {
    const currentState = state || ({} as Record<string, any>);
    const storedBuildIdString = Cookies.get(COOKIE_BUILD_KEY);

    const storedBuildId = Number(storedBuildIdString);

    if (storedBuildId !== currentBuildId) {
        console.warn(
            `[Redux Persist] ⚠️ ¡Nuevo Deployment Detectado! Cookie: ${storedBuildIdString || 'Ninguna'}, Actual: ${currentBuildId}. Restaurando slice 'restaurant'.`
        );

        Cookies.set(COOKIE_BUILD_KEY, String(currentBuildId), {
            expires: 365,
            secure: true,
            sameSite: 'Lax',
        });

        // Si quieres borrar todo el slice 'restaurant' en un nuevo deployment:
        return {
            ...currentState,
            restaurant: initialState,
        } as GlobalStoreState;
    }

    // Si los IDs coinciden, devuelve el estado sin modificar
    return currentState as GlobalStoreState;
};
