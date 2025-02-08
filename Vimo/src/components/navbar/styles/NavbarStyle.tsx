import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';

export const Nav = styled.nav`
    margin: 2rem;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    position: absolute;
    top: 2rem;
    width: -webkit-fill-available;
`;

export const NavContainer = styled.div`
    width: 100%;
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

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

// Estilos para los enlaces de navegación
export const NavLinker = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    font-weight: bold;
    &:hover {
        border-bottom: 5px solid black;
        font-size: 25px;
    }

    &.active {
        background-color: #6200ea; /* Color de fondo para el enlace activo */
        color: #fff;
    }
`;

export const NavButton = styled.button`
    width: 160px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 15px;
    border-radius: 250px;
    background: #ff3d00;
    border: none;
`;

export const NavText = styled.p`
    color: #fff;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
