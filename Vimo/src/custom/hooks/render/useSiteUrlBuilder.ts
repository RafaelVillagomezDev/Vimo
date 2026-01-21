import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

interface GenericUrlBuilderProps {
    pathId?: string;
    baseURL?: string;
    pageSize?: number; // Es opcional: si no se pasa, es 'undefined'
    filters?: Record<string, string | number | boolean | null | undefined>;
}

export const useSiteUrlBuilder = ({
    pathId,
    baseURL = '/api/restaurants',
    pageSize, // Recibido como undefined si no se provee
    filters = {},
}: GenericUrlBuilderProps): string => {
    const [searchParams] = useSearchParams();

    // Cálculo de paginación
    const currentPage = Number(searchParams.get('page')) || 1;
    // El offset es 0 si no hay pageSize (aunque no se usará)
    const offset = pageSize ? (currentPage - 1) * pageSize : 0;

    const apiUrl = useMemo(() => {
        let url = pathId ? `${baseURL}/${pathId}` : baseURL;
        const sp = new URLSearchParams();

        // 1. Añadir filtros genéricos (pasados por props)
        Object.keys(filters).forEach((key) => {
            const value = filters[key];
            if (value !== null && value !== undefined && value !== '') {
                sp.append(key, String(value));
            }
        });

        // 2. Añadir filtros del URL, excluyendo los de paginación
        searchParams.forEach((value, key) => {
            if (key !== 'page' && key !== 'limit' && key !== 'offset' && !sp.has(key)) {
                sp.append(key, value);
            }
        });

        // 3. LÓGICA CLAVE: Solo añade limit/offset si pageSize tiene un valor numérico
        if (pageSize) {
            sp.set('limit', String(pageSize));
            sp.set('offset', String(offset));
        }

        // 4. Adjuntar la cadena de consulta
        const queryString = sp.toString();
        if (queryString) {
            url += `?${queryString}`;
        }

        return url;
    }, [pathId, baseURL, pageSize, filters, searchParams, offset]);

    return apiUrl;
};
