


import { useState } from "react";
import { SeekerMain, InputSeeker, IconMaterial, BtnSearch } from "./styles/seekerStyles";
import { useSearchParams } from "react-router-dom";


function Seeker() {

    const [valueSearch, setValueSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams()

    function handleSearch() {
    const currentParams = Object.fromEntries(searchParams.entries());
        
        // Si el valor está vacío, borra el parámetro 'name' de la URL para que quede limpia.
        if (valueSearch.trim() === '') {
            delete currentParams.name;
            setSearchParams(currentParams, { replace: true });
        } else {
            // Seteamos el nuevo parámetro 'name' y reemplazamos la entrada en el historial.
            setSearchParams({ 
                ...currentParams, 
                name: valueSearch.trim() 
            }, { replace: true });
        }
    }

    function handleKeyDown (e: React.KeyboardEvent<HTMLInputElement>)  {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <>

            <SeekerMain>
                <IconMaterial>map</IconMaterial>
                <InputSeeker value={valueSearch} onKeyDown={handleKeyDown} onChange={e=>setValueSearch(e.target.value)} name="valueSearch"  type="text" placeholder="Restaurante,Sitio,Transporte.." id="seeker" />
                <BtnSearch onClick={handleSearch}>Buscar</BtnSearch>
            </SeekerMain>
        </>
    )
}

export default Seeker;