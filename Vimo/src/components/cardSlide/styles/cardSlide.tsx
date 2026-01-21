import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex-shrink: 0;
    border-radius: 12px;
    overflow: hidden;
    background-color: #ffffff;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    &:hover {
        transform: translateY(-5px); /* Efecto de elevación */
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }
`;

export const CardBoxImage = styled.div`
    width: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;

export const CardBox = styled.div`
    width: 100%;
    flex: 1;
    flex-grow: 1;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 1rem;
`;

export const CardBoxTitle = styled.h3`
    font-size: 20px;
    color: black;

    @media only screen and (${devices.sm}) {
        font-size: 16px;
    }
`;

export const CardText = styled.p`
    font-size: 16px;
    padding-top: 12px;
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
    @media only screen and (${devices.sm}) {
        font-size: 16px;
    }
`;

export const CardIcon = styled.span`
    font-family: 'Material Symbols Outlined';
    color: ${({ color }) => color || 'orange'};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`;

export const CardImage = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Imagen card ',
}))`
    overflow: hidden;
    width: fit-content;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
`;

export const BuuttonLink = styled(Link)`
    /* Estructura */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    /* Espaciado y Tamaño */
    padding: 10px 20px;
    margin-top: 10px;

    /* Estilo Visual */
    background-color: #e63946; /* Rojo vibrante */
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 8px;
    border: none;

    /* Sombras y Transiciones */
    box-shadow: 0 4px 6px rgba(230, 57, 70, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;

    /* Icono de Google dentro del botón */
    span.material-icons {
        font-size: 18px;
    }

    /* Estados Interactivos */
    &:hover {
        background-color: #b91c1c;
        box-shadow: 0 6px 12px rgba(230, 57, 70, 0.3);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(230, 57, 70, 0.2);
    }
`;

export const LinkCard = styled(Link)`
    display: flex;
    align-items: center;
`;
