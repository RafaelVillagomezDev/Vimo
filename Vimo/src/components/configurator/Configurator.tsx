import { useState } from 'react';
import {
    ContainerConfigurator,
    MenuContainer,
    MenuItem,
    Arrow,
    SubMenu,
    SubMenuItem,
    Checkbox,
} from './styles/ConfiguratorStyle';
import { CardTitle } from '../cardPost/styles/CardPostStyle';

interface MenuOption {
    label: string;
    subOptions: string[];
}

function Configurator({ menuOptions }: { menuOptions: MenuOption[] }) {
    // Inicializa openIndex con 0 para que el primer submenú esté abierto por defecto
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggleMenu = (index: number) => {
        // Permite cerrar el submenú si ya está abierto, de lo contrario abrirlo
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <ContainerConfigurator>
            <MenuContainer>
                {menuOptions.map((option, index) => (
                    <ul key={index}>
                        <MenuItem onClick={() => toggleMenu(index)} open={openIndex === index}>
                            <CardTitle>{option.label}</CardTitle>
                            <Arrow open={openIndex === index}>▼</Arrow>
                        </MenuItem>
                        <SubMenu open={openIndex === index}>
                            {option.subOptions.map((sub, subIndex) => (
                                <SubMenuItem key={subIndex}>
                                    <Checkbox type="checkbox" />
                                    {sub}
                                </SubMenuItem>
                            ))}
                        </SubMenu>
                    </ul>
                ))}
            </MenuContainer>
        </ContainerConfigurator>
    );
}

export default Configurator;
