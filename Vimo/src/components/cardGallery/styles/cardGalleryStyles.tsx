import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';


export const GridCarrousell = styled.div`
    display: grid;
    gap: 16px;
    /* Límite de ancho para controlar el número máximo de columnas visibles */
    max-width: 1400px; 
    width: 100%; 
    grid-column: 2 / 7;
    grid-row: 3;
    justify-self: center; 
    grid-auto-rows: minmax(min-content, max-content); 
    grid-template-columns: repeat(7, 1fr); 

    @media only screen and (${devices.md}) {
        grid-column: 2 / 7;
    }
`;

export const GridContent = styled.div<{ $isSingleImage?: boolean }>`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-column: 2 / 7;
    grid-row: 2;

    /* Móvil siempre 1 columna */
    grid-template-columns: 1fr;

    @media only screen and (${devices.sm}) {
        /* Si es única: 1 col, si hay varias: 3 cols */
        grid-template-columns: ${({ $isSingleImage }) => 
            $isSingleImage ? '1fr' : 'repeat(3, 1fr)'};
    }
`;

export const LeftColumn = styled.div<{ $isSingleImage?: boolean }>`
    display: flex;
    aspect-ratio: ${({ $isSingleImage }) => ($isSingleImage ? '21 / 9' : '4 / 3')};
    grid-column: span 1;

    @media only screen and (${devices.sm}) {
        /* Si es única ocupa las 3 columnas del grid, si no, solo 2 */
        grid-column: ${({ $isSingleImage }) => ($isSingleImage ? 'span 3' : 'span 2')};
    }
`;

export const RightColumn = styled.div`
    display: none;

    @media only screen and (${devices.sm}) {
        display: grid;
        grid-column: span 1;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        /* Esto asegura que las fotos del collage sean cuadradas o proporcionales */
        grid-auto-rows: 1fr; 
    }
`;

export const ImageItem = styled.img`
    width: 100%;
    height: 100%; /* Cambiado de fit-content a 100% para llenar el grid */
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02); /* Escala más sutil para no tapar bordes */
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
    font-size: 20px;
    font-weight: bold;
    padding-right: 0.2rem;
     @media only screen and (${devices.sm}) {
        font-size: 25px;
    }

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

export const ButtonLike = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 6px;
    border-radius: 10px;
   

    
`;

export const ButtonText = styled.span.attrs<{
    $borderBottom?: string;
}>((props) => ({
    $borderBottom: props.$borderBottom || 'solid 1px black',
}))`
    font-family: 'Roboto';

    border-bottom: ${(props) => props.$borderBottom};
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

export const AboutContent = styled.div`
    width: 100%;
    grid-column: 2/7;
    grid-row: 3;
     @media only screen and (${devices.md}) {
        grid-column: 2 / 4;
    }
`

export const AboutText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: gray;
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
      @media only screen and (${devices.md}) {
          font-size: 20px;
    }
`




