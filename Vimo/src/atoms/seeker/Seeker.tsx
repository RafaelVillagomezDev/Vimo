import { useState, useEffect, useCallback, useRef } from 'react';
import { SeekerMain, InputSeeker, IconMaterial, BtnSearch } from './styles/seekerStyles';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

function Seeker() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    // 1. Ref para saber si el cambio viene del usuario escribiendo
    const isTyping = useRef(false);

    const [valueSearch, setValueSearch] = useState(searchParams.get('name') || '');

    const handleUpdateParams = useCallback(
        (value: string, isManual = false) => {
            const trimmedValue = value.trim();
            const isResultsPage = location.pathname === '/restaurants';

            // Si estamos en Home, navegamos (crea historial)
            if (!isResultsPage) {
                if (trimmedValue !== '') {
                    navigate(`/restaurants?name=${encodeURIComponent(trimmedValue)}`);
                }
                return;
            }

            const params = new URLSearchParams(searchParams);
            if (!trimmedValue) {
                params.delete('name');
            } else {
                params.set('name', trimmedValue);
            }

            // isManual (Enter/Click) -> push (guarda historial)
            // Debounce -> replace (no ensucia el historial)
            setSearchParams(params, { replace: !isManual });
            isTyping.current = false; // Resetear el estado de escritura
        },
        [location.pathname, navigate, searchParams, setSearchParams]
    );

    // 2. Sincronización desde la URL (Botón atrás/adelante)
    useEffect(() => {
        const nameInUrl = searchParams.get('name') || '';
        // Solo actualizamos el input si NO estamos escribiendo
        if (!isTyping.current) {
            setValueSearch(nameInUrl);
        }
    }, [searchParams]);

    // 3. Debounce controlado
    useEffect(() => {
        // Si no estamos escribiendo (ej: cambio por botón atrás), no disparamos debounce
        if (!isTyping.current) return;

        const nameInUrl = searchParams.get('name') || '';
        if (valueSearch.trim() === nameInUrl.trim()) return;

        const timeoutId = setTimeout(() => {
            handleUpdateParams(valueSearch, false);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [valueSearch, handleUpdateParams, searchParams]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        isTyping.current = true; // Marcamos que el usuario está interactuando
        setValueSearch(e.target.value);
    };

    const handleManualSearch = () => {
        isTyping.current = false;
        handleUpdateParams(valueSearch, true);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleManualSearch();
    };

    return (
        <SeekerMain>
            <IconMaterial>map</IconMaterial>
            <InputSeeker
                value={valueSearch}
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                placeholder="Restaurante, Sitio..."
                id="seeker"
            />
            <BtnSearch onClick={handleManualSearch}>Buscar</BtnSearch>
        </SeekerMain>
    );
}

export default Seeker;
