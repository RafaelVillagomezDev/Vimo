import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { setSearchTerm, selectSearchTerm } from '../../slices/restaurant/restaurant-slice';
import { SeekerMain, InputSeeker, IconMaterial, BtnSearch } from './styles/seekerStyles';

function Seeker() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    
    const reduxSearchTerm = useSelector(selectSearchTerm);
    const [valueSearch, setValueSearch] = useState(reduxSearchTerm);
    const isTyping = useRef(false);

    // Sincronizar estado local si redux cambia externamente (ej. al limpiar filtros)
    useEffect(() => {
        if (!isTyping.current) {
            setValueSearch(reduxSearchTerm);
        }
    }, [reduxSearchTerm]);

    useEffect(() => {
        if (!isTyping.current) return;
        const timeoutId = setTimeout(() => {
            dispatch(setSearchTerm(valueSearch));
        }, 300);
        return () => clearTimeout(timeoutId);
    }, [valueSearch, dispatch]);

    const handleDeepSearch = () => {
        isTyping.current = false;
        const trimmed = valueSearch.trim().toLowerCase(); // Normalizamos a minúsculas
        
        if (location.pathname !== '/restaurants') {
            // Si navegamos desde fuera, el orden es sencillo
            navigate(`/restaurants?name=${encodeURIComponent(trimmed)}&offset=0&limit=5`);
        } else {
            // 🛠 RECONSTRUCCIÓN: Mantener el orden para el Backend
            const next = new URLSearchParams();
            
            // 1. Filtro actual (nombre)
            if (trimmed) next.set('name', trimmed);
            
            // 2. Mantener otros filtros existentes (como type_food)
            const currentType = searchParams.get('type_food');
            const currentAddress = searchParams.get('address');
            if (currentType) next.set('type_food', currentType.toLowerCase());
            if (currentAddress) next.set('address', currentAddress.toLowerCase());

            // 3. Paginación SIEMPRE al final
            next.set('offset', '0');
            next.set('limit', searchParams.get('limit') || '5');

            setSearchParams(next, { replace: true });
        }
        dispatch(setSearchTerm(trimmed));
    };

    return (
        <SeekerMain>
            <IconMaterial>search</IconMaterial>
            <InputSeeker
                value={valueSearch}
                onChange={(e) => { 
                    isTyping.current = true; 
                    setValueSearch(e.target.value); 
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleDeepSearch()}
                placeholder="Busca en 1200 restaurantes..."
            />
            <BtnSearch onClick={handleDeepSearch}>Buscar</BtnSearch>
        </SeekerMain>
    );
}

export default Seeker;