import styled from 'styled-components';
import hands_map from '../../../assets/pictures/banner/hands_map.png';
import { devices } from '../../../styles/mixin_styledComponent';

export const CarrousellContainer = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CarrousellMain = styled.div`
    /* Dimensiones y espacio */
    width: -webkit-fill-available;
    height: 100%;
    max-height: 600px;
    padding: 2rem;
    object-fit: cover; /* No tiene efecto directo en un <div>, se mantiene por si se usa en otro contexto */

    /* Diseño visual y Flexbox */
    background-color: ${(props) => props.theme.colors.blueGray};
    display: flex;
    justify-content: center;
    flex-direction: column;

    /* Imagen de Fondo */
    background-image: url(${hands_map});
    background-position: right center;
    background-repeat: no-repeat;
    background-size: contain;

    @media only screen and (${devices.sm}) {
        margin: 4rem;
        padding: 2rem;
        border-radius: 12px;
    }
`;

export const CarrousellTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 4vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: white;
    flex-direction: column;
    justify-content: center;
`;

export const CarrousellText = styled.p`
    font-size: 22px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    line-height: normal;
    word-spacing: 3px;
    padding-bottom: 2rem;
    color: white;

    @media only screen and (${devices.sm}) {
        font-size: 30px;
    }
`;
