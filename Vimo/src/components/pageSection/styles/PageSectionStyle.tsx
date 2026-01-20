import styled from 'styled-components';
import { devices } from '@styles/mixin_styledComponent';

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
        grid-column: 4 / 12;
    }

`;