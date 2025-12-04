import { useState, useEffect } from "react"; // 👈 Añadimos useEffect
import { SeekerMain, InputSeeker, IconMaterial, BtnSearch } from "./styles/seekerStyles";
import { useSearchParams } from "react-router-dom";


function Seeker() {

    const [valueSearch, setValueSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {

        const delaySearch = setTimeout(() => {
            handleSearch();
        }, 500);


        return () => clearTimeout(delaySearch);

    }, [valueSearch]);

    function handleSearch() {
        const currentParams = Object.fromEntries(searchParams.entries());


        if (valueSearch.trim() === '') {

            delete currentParams.name;
            setSearchParams(currentParams, { replace: true });
        } else {

            setSearchParams({
                ...currentParams,
                name: valueSearch.trim()
            }, { replace: true });
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            handleSearch();
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
                <BtnSearch onClick={handleSearch}>Buscar</BtnSearch>
            </SeekerMain>
        </>
    )
}

export default Seeker;