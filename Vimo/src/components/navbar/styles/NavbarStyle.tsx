import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '@styles/mixin_styledComponent';

export const Nav = styled.nav`
    background-color: ${(props) => props.theme.colors.blueDeep};
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    width: -webkit-fill-available;
`;
export const NavContainerRight = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: whitesmoke;
`;

export const NavContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavLinks = styled(NavContainer)`
    display: none;
    @media only screen and (${devices.sm}) {
        display: flex;
    }
`;

export const NavContact = styled(NavContainer)`
    display: flex;
`;

export const NavLogoLink = styled(Link)`
    display: flex;
    align-items: center;
`;

export const IconText = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
    @media only screen and (${devices.sm}) {
        font-size: 35px;
    }
`;
export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

// Estilos para los enlaces de navegación
interface NavLinkerProps {
    hoverColor?: string;
    color?: string;
    fontSize?: string;
}

export const NavLinker = styled(Link) <NavLinkerProps>`
    color:  ${props => props.color || 'white'};
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    font-weight: bold;
    font-size: ${props => props.fontSize || '16px'};
    /* Color cuando el enlace está activo */
    &.active {
        background-color: '#6200ea'; 
        color: #fff;
    }

    /* Color al pasar el ratón */
    &:hover {
        background-color: ${props => props.hoverColor || 'rgba(255, 255, 255, 0.1)'};
    }
`;
