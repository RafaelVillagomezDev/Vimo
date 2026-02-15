import styled from 'styled-components';
import { devices } from '@styles/mixin_styledComponent';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
    display: grid;
    /* Definimos 12 columnas fijas para que las coordenadas 3/7 existan */
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    gap: 1rem;
    
`;

export const MainCard = styled.div`
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    @media only screen and (${devices.sm}) {
        grid-column: 6/ 12;
    }
    @media only screen and (${devices.md}) {
        grid-column: 5 / 12;
    }
    @media only screen and (${devices.lg}) {
        grid-column: 4 / 12;
    }
`;

export const SectionCard = styled.div`
    display: grid;
    @media only screen and (${devices.sm}) {
        display: grid;
        grid-template-columns: 275px auto;
        gap: 2rem;
        width: 100%;
    }
`;

export const BoxCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;

export const LinkCard = styled(Link)``;

export const Card = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 12px;
    overflow: hidden;

    @media only screen and (${devices.xl}) {
        flex-direction: row;
        align-items: center;
    }
`;

export const CardOption = styled.div`
    display: none;
    @media only screen and (${devices.sm}) {
        display: block;
    }
`;

export const CardSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
`;

export const CardSectionText = styled(CardSection)`
    padding: 1rem;
`;

export const CardImage = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Imagen card ',
}))`
    width: fit-content;
`;

export const CardBox = styled.div`
    display: flex;
    align-items: baseline;
    padding: 3px;
    @media only screen and (${devices.sm}) {
        padding: 0.1rem;
    }
`;

export const CardBoxFlex = styled(CardBox)`
    flex-direction: column;
    padding: 10px 0px;
`;

export const CardIcons = styled(CardBox)`
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (${devices.sm}) {
        padding: 0.1rem;
    }
`;

export const CardTitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
`;
export const CardTitleText = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: bold;
    padding: 10px 0px;
`;

export const CardSubtitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    font-weight: bold;
`;

export const CardText = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    padding-bottom: 6px;
    display: flex;
    align-items: baseline;
`;

export const CardtTextFlex = styled(CardText)`
    display: flex;
    align-items: end;
    font-size: 16px;
`;

export const ButtonOption = styled.button`
    padding: 6px 6px;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
`;

export const Icon = styled.span`
    font-family: 'Material Symbols Outlined';
    font-size: 16px;
    padding-right: 10px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`;

export const LinkIcon = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 400;
    gap: 0.25rem;
`;

export const LinkIconWhite = styled(LinkIcon)`
    color: white;
    font-size: 16px;
    padding: 0rem;
`;

export const TelLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    gap: 0.25rem;
`;

export const ButtonVerMas = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    padding: 12px 6px;
    border: none;
    border-radius: 10px;
    background-color: #ff3d00;
    color: white;
    font-weight: 400;
    cursor: pointer;
`;

export const ContainerLoading = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);
    transition: all 0.3s;
`;

export const ContainerRender = styled.div<{ $status: string }>`

    opacity: ${props => (props.$status === 'loading' ? 0.4 : 1)};
    transition: opacity 0.3s ease-in-out;
    pointer-events: ${props => (props.$status === 'loading' ? 'none' : 'auto')};
    /* obligamos al contenedor a crecer para ocupar el espacio */
    flex-grow: 1; 
    display: flex;
    flex-direction: column;
    gap: 1rem; 
`;