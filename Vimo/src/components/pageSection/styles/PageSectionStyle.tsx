import styled from 'styled-components';
import { devices } from '@styles/mixin_styledComponent';
import { Link } from 'react-router-dom';

export const PageSectionContainer = styled.section`
    display: grid;

    grid-template-columns: repeat(12, 1fr); 
    grid-auto-rows: min-content;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 1rem;
    background-color: #f5f5f5;

    @media only screen and (${devices.md}) {
        padding: 2rem;
    }
`;


export const Section = styled.div`
    grid-column: 1 / -1; 
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;

    @media only screen and (${devices.md}) {
        grid-column: 2 / 8;
    }
`;

export const GallerySection = styled.div`
    grid-column: 1 / -1; 
    
    @media only screen and (${devices.md}) {
        grid-column: 2 / 8;
    }

`;

export const GalleryList = styled.ul`
    list-style: none;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e0e0e0;
    overflow-x: auto; 
    &::-webkit-scrollbar { display: none; }
`;

// Usamos una transient prop ($active) para no enviarla al DOM
export const GalleryItem = styled.li<{ $active?: boolean }>`
    cursor: pointer;
    font-family: inherit; /* Mejor que forzar Arial */
    font-size: 1rem;
    padding: 10px 5px;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    color: ${props => props.$active ? '#000' : '#666'};
    font-weight: ${props => props.$active ? '700' : '500'};
    position: relative;

    /* Indicador visual de activo permanente, no solo hover */
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${props => props.$active ? 'black' : 'transparent'};
        transition: background-color 0.3s;
    }

    &:hover {
        color: #000;
    }

    @media only screen and (${devices.md}) {
       font-size: 1.25rem;
    }
`;

export const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const ContactContent = styled.div`
    grid-column: 2; 
    
    @media only screen and (${devices.md}) {
        grid-column: 2 / 8;
    }

`;

export const BoxInfo = styled.div`
    display: flex;
    justify-content: space-around;
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


export const Box = styled(BoxInfo)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${devices.sm}) {
        row-gap: 1rem;
    }
`;

export const TitleInfo = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    margin-bottom: 0.5rem;
    color: #333;
    @media only screen and (${devices.md}) {
           font-size: 25px;
    }
`;

export const AboutText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: gray;
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    @media only screen and (${devices.md}) {
           font-size: 20px;
    }
`

export const LinkText = styled(Link)`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    color: gray;
    padding-bottom: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
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