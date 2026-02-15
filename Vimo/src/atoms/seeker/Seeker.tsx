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

    // 1. Debounce para filtro local ( me filtra por mi estado de redux. )
    useEffect(() => {
        if (!isTyping.current) return;
        const timeoutId = setTimeout(() => {
            dispatch(setSearchTerm(valueSearch));
        }, 300);
        return () => clearTimeout(timeoutId);
    }, [valueSearch, dispatch]);

    // 2. Búsqueda profunda (Enter o Click): Actualiza URL para disparar API
    const handleDeepSearch = () => {
        isTyping.current = false;
        const trimmed = valueSearch.trim();
        
        if (location.pathname !== '/restaurants') {
            navigate(`/restaurants?name=${encodeURIComponent(trimmed)}`);
        } else {
            const params = new URLSearchParams(searchParams);
            trimmed ? params.set('name', trimmed) : params.delete('name');
            params.set('offset', '0');
            setSearchParams(params);
        }
        dispatch(setSearchTerm(trimmed));
    };

    return (
        <SeekerMain>
            <IconMaterial>search</IconMaterial>
            <InputSeeker
                value={valueSearch}
                onChange={(e) => { isTyping.current = true; setValueSearch(e.target.value); }}
                onKeyDown={(e) => e.key === 'Enter' && handleDeepSearch()}
                placeholder="Busca en 1200 restaurantes..."
            />
            <BtnSearch onClick={handleDeepSearch}>Buscar</BtnSearch>
        </SeekerMain>
    );
}

export default Seeker;