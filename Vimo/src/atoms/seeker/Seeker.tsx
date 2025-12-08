import { useState, useEffect } from "react";
import { SeekerMain, InputSeeker, IconMaterial, BtnSearch } from "./styles/seekerStyles";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAppSelector } from '../../custom/hooks/call/useAppSelector';


function Seeker() {

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    // 🎯 1. Inicializar valueSearch con el valor actual del parámetro 'name' de la URL
    const initialName = searchParams.get('name') || '';
    const [valueSearch, setValueSearch] = useState(initialName);

    // 👈 Accedemos al estado de los restaurantes
    const { restaurant } = useAppSelector((state) => state.restaurant);
    const { data } = restaurant ?? {};


    // 🎯 2. Sincronizar valueSearch con el parámetro 'name' en la URL
    useEffect(() => {
        const nameParam = searchParams.get('name') || '';
        // Solo actualizamos el estado local si difiere del valor de la URL
        if (valueSearch !== nameParam) {
            // Esto maneja casos donde el usuario navega con parámetros ya puestos
            setValueSearch(nameParam);
        }
    }, [searchParams]); // Se ejecuta cuando los parámetros de la URL cambian


    // Lógica para aplicar el filtro a la URL después de un retraso
  
    useEffect(() => {
        // Obtenemos el valor actual del parámetro 'name' para evitar bucles
        const nameParam = searchParams.get('name') || '';

        // Solo actualizamos la URL si el input es diferente del valor de la URL
        if (valueSearch.trim() !== nameParam.trim()) {
            const delaySearch = setTimeout(() => {
                handleUpdateParams();
            }, 500);
            return () => clearTimeout(delaySearch);
        }
    }, [valueSearch]); // Se ejecuta cuando cambia el valor del input



    useEffect(() => {

        if (data && data.length === 1 && valueSearch.trim() !== '') {
            const foundRestaurant = data[0];
            navigate(`/restaurants/${foundRestaurant.id}`);
        }
    }, [data, navigate, valueSearch]);


    function handleUpdateParams() {
        const currentParams = Object.fromEntries(searchParams.entries());

        if (valueSearch.trim() === '') {
            // Si el campo está vacío, eliminamos el parámetro 'name'
            delete currentParams.name;
            setSearchParams(currentParams, { replace: true });
        } else {
            // Si hay texto, actualizamos el parámetro 'name'
            setSearchParams({
                ...currentParams,
                name: valueSearch.trim()
            }, { replace: true });
        }
    }

    // Usaremos esta función para el botón y la tecla 'Enter'
    function handleManualSearch() {
        // Disparamos la actualización de parámetros inmediatamente
        handleUpdateParams();
    }


    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            handleManualSearch();
        }
    }

    return (
        <>
            <SeekerMain>
                <IconMaterial>map</IconMaterial>
                <InputSeeker
                    value={valueSearch}
                    onKeyDown={handleKeyDown}
                    onChange={e => setValueSearch(e.target.value)}
                    name="valueSearch"
                    type="text"
                    placeholder="Restaurante,Sitio,Transporte.."
                    id="seeker"
                />
                <BtnSearch onClick={handleManualSearch}>Buscar</BtnSearch>
            </SeekerMain>
        </>
    )
}

export default Seeker;