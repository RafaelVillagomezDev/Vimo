import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';
import { Link } from 'react-router-dom';


export const GridCarrousell = styled.div`
    display: grid;
    gap: 16px;
    /* Límite de ancho para controlar el número máximo de columnas visibles */
    max-width: 1400px; 
    width: 100%; 
    
    /* MANTENER: Posicionamiento dentro del Grid MÁS EXTERNO */
    grid-column: 2 / 7;
    grid-row: 3;

    justify-self: center; 
    
    grid-auto-rows: minmax(min-content, max-content); 
    
    /* Define 7 columnas explícitas para posicionar a los hijos */
    grid-template-columns: repeat(7, 1fr); 

    @media only screen and (${devices.md}) {
        grid-column: 2 / 7;
    }
`;

export const GridContent = styled.div`
    display: grid;
    gap: 16px;
    width: 100%;
    
 
    grid-column: 2 / 7; 
    grid-row: 2;
   
   
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); 
    
    grid-auto-rows: auto;

    @media only screen and (${devices.md}) {
        grid-column: 2 / 7;
    }
    
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    /* Relación de aspecto para la imagen principal */
    aspect-ratio: 4 / 3; 
    
    /* Ocupa 1 columna del grid interno por defecto */
    grid-column: span 1; 

    @media only screen and (${devices.md}) {
        /* En pantallas medianas y grandes, ocupa 2 columnas */
        grid-column: span 2; 
    }
`;

export const RightColumn = styled.div`
    display: none;
    /* Relación de aspecto para el collage */
    aspect-ratio: 3 / 4; 

     @media only screen and (${devices.sm}) {
        display: grid;
        /* Ocupa el espacio restante del GridContent (span 1) */
        grid-column: span 1; 
        
        /* Define su propia cuadrícula interna (2 columnas para las imágenes) */
        grid-template-columns: repeat(2, 1fr); 
        gap: 1rem;
        grid-auto-rows: 200px;
    }
    @media only screen and (${devices.lg}) {
        grid-auto-rows: 242px;
    }
`;

export const ImageItem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

export const InfoContainer = styled.div`
    padding: 2rem;
    background-color: whitesmoke;
    width: 100%;
    grid-column: 1 / -1; 
    grid-row: 1;
`;

export const IconInfo = styled.span`
    font-family: 'Material Symbols Outlined';
    color: ${({ color }) => color || 'orange'};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`;

export const BoxInfo = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const BoxText = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TitleInfo = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: bold;
`;


export const TextInfo = styled.p`
    font-family: 'Inter', 'sans-serif';
    font-size:16px;
`;

export const BoxShare = styled.div`
    font-family: 'Poppins',sans-serif;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`;

export const ButtonInfo = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const ButtonLike = styled.button.attrs<{
    $border?: string;
}>((props) => ({
    $border: props.$border || 'solid 1px black',
}))`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 6px;
    border-radius: 10px;
    &:hover {
        background-color: orangered;
    }
    @media only screen and (${devices.sm}) {
        border: ${(props) => props.$border};
    }
`;

export const ButtonText = styled.span.attrs<{
    $borderBottom?: string;
}>((props) => ({
    $borderBottom: props.$borderBottom || 'solid 1px black',
}))`
    font-family: 'Roboto';

    border-bottom: ${(props) => props.$borderBottom};
    line-height: 22px;
    display: none;
    font-size: 1;
    
    @media only screen and (${devices.sm}) {
        display: block;
    }
`;

export const Text = styled.div`
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    padding: 6px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (${devices.sm}) {
        flex-direction: row;
    }
    grid-row: 3;
`;

export const TextLine = styled.p`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border-bottom: none;
    padding: 10px 0px;
    @media only screen and (${devices.sm}) {
        border-bottom: 1px solid gray;
    }
`;


export const TextCard = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
`;

export const GridRestaurant = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem;
    grid-gap: 2rem;

    @media only screen and (${devices.sm}) {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: minmax(100px, auto);
    }
`;




export const Box = styled(BoxInfo)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${devices.sm}) {
        row-gap: 1rem;
    }
`;

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    @media only screen and (${devices.sm}) {
        row-gap: 3rem;
    }
`
export const TextMenu = styled.p`
    cursor: pointer;
   
    &:hover{
        text-decoration: line-through;
    }
`
export const TextSpan = styled.span`
   font-weight: bold;
   padding-right: 2px;
`