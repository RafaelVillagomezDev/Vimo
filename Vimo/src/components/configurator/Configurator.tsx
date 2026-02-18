import { useFilter } from "@src/custom/hooks/render/useFilter";
import { useState, useMemo } from 'react';
import * as S from './styles/ConfiguratorStyle';

interface MenuOption {
    label: string;
    subOptions: string[];
}

interface OpenStates {
    [key: number]: boolean;
}

function Configurator({ menuOptions }: { menuOptions: MenuOption[] }) {
    // Extraemos todos los filtros necesarios del hook
    const { type_food, address, name, limit, setSearchParams } = useFilter();

    const hasFilters = useMemo(() => {
        return !!(type_food || name || address);
    }, [type_food, name, address]);

    const [openStates, setOpenStates] = useState<OpenStates>(() => {
        const initial: OpenStates = {};
        menuOptions.forEach((_, i) => { initial[i] = true; });
        return initial;
    });

    const toggleMenu = (index: number) => {
        setOpenStates(prev => ({ ...prev, [index]: !prev[index] }));
    };

    // --- LÓGICA DINÁMICA ---
    const handleCheckboxChange = (label: string, value: string) => {
        const lowerValue = value.toLowerCase();
        
        // Mapeamos el Label del menú al parámetro de la URL
        let filterKey = 'type_food'; // por defecto
        if (label === 'Ciudad') filterKey = 'address';
        if (label === 'Precio') filterKey = 'price'; 

        setSearchParams(prev => {
            const next = new URLSearchParams(prev);
            const currentValue = prev.get(filterKey)?.toLowerCase();


            if (currentValue === lowerValue) {
                next.delete(filterKey);
            } else {
                next.set(filterKey, lowerValue);
            }

            // Al filtrar, siempre reseteamos a la página 1
            next.set('offset', '0');
            next.set('limit', String(limit));

            return next;
        }, { replace: true });
    };

    return (
        <S.ContainerConfigurator>
            <S.MenuContainer>
                {menuOptions.map((option, index) => (
                    // Usamos un li estándar para la lista, pero MenuItem debe ser un DIV o SECTION
                    <li key={`menu-${index}`} style={{ listStyle: 'none' }}>
                        <S.MenuItem 
                            as="div" // Forzamos que sea un div para evitar el error validateDOMNesting
                            onClick={() => toggleMenu(index)} 
                            open={openStates[index]}
                        >
                            <S.CardTitle>{option.label}</S.CardTitle>
                            <S.Arrow open={openStates[index]}>▼</S.Arrow>
                        </S.MenuItem>

                        <S.SubMenu open={openStates[index]}>
                            {option.subOptions.map((sub, subIndex) => {
                                // Lógica para saber si este checkbox específico debe estar marcado
                                const isChecked = 
                                    (option.label === 'Tipo de comida' && type_food === sub.toLowerCase()) ||
                                    (option.label === 'Ciudad' && address === sub.toLowerCase());

                                return (
                                    <S.SubMenuItem key={`${option.label}-${subIndex}`}>
                                        <S.Checkbox
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={() => handleCheckboxChange(option.label, sub)}
                                        />
                                        {sub}
                                    </S.SubMenuItem>
                                );
                            })}
                        </S.SubMenu>
                    </li>
                ))}
            </S.MenuContainer>

            {hasFilters && (
                <S.ClearButton onClick={() => setSearchParams({ limit: String(limit), offset: '0' }, { replace: true })}>
                    <S.Icon>filter_alt_off</S.Icon>
                    Limpiar filtros
                </S.ClearButton>
            )}
        </S.ContainerConfigurator>
    );
}

export default Configurator;