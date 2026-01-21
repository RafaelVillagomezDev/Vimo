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

// Define el tipo para el estado de apertura
interface OpenStates {
    [key: number]: boolean;
}

function Configurator({ menuOptions }: { menuOptions: MenuOption[] }) {
    const [openStates, setOpenStates] = useState<OpenStates>(() => {
        const initialStates: OpenStates = {};
        menuOptions.forEach((_, index) => {
            initialStates[index] = true;
        });
        return initialStates;
    });

    const toggleMenu = (index: number) => {
        setOpenStates((prevStates) => ({
            ...prevStates,
            [index]: !prevStates[index],
        }));
    };

    return (
        <ContainerConfigurator>
            <MenuContainer>
                {menuOptions.map((option, index) => (
                    <ul key={option.label || index}>
                        <MenuItem onClick={() => toggleMenu(index)} open={openStates[index]}>
                            <CardTitle>{option.label}</CardTitle>
                            <Arrow open={openStates[index]}>▼</Arrow>
                        </MenuItem>

                        <SubMenu open={openStates[index]}>
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
