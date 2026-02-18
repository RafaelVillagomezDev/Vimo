import { useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export const useFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const filters = useMemo(() => {
        const name = searchParams.get('name')?.toLowerCase() || '';
        const address = searchParams.get('address')?.toLowerCase() || '';
        const type_food = searchParams.get('type_food')?.toLowerCase() || '';
        
        const rawLimit = parseInt(searchParams.get('limit') || '5', 10);
        const rawOffset = parseInt(searchParams.get('offset') || '0', 10);
        
        const limit = isNaN(rawLimit) || rawLimit <= 0 ? 5 : rawLimit;
        const offset = isNaN(rawOffset) || rawOffset < 0 ? 0 : rawOffset;

        return { name, address, type_food, limit, offset };
    }, [searchParams]);

    // FORZADO: Limpia y establece parámetros base explícitos
    const clearFilters = useCallback(() => {
        // Al crear un objeto nuevo, forzamos el cambio de referencia en searchParams
        setSearchParams({ 
            limit: '5', 
            offset: '0' 
        }, { replace: true });
    }, [setSearchParams]);

    return { 
        ...filters, 
        setSearchParams, 
        searchParams,
        clearFilters 
    };
};