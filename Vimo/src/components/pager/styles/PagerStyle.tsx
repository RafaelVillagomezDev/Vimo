import styled from 'styled-components';

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: 2rem 0;
`;

export const PageButton = styled.button`
    padding: 8px 16px;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;
    border-radius: 4px;
    /* Añadimos transición a todas las propiedades */
    transition: all 0.3s ease-in-out; 

    &:disabled {
        background: #f5f5f5;
        color: #ccc;
        cursor: not-allowed;
        border-color: #eee;
    }

    &:hover:not(:disabled) {
        background: #f0f0f0;
        border-color: #bbb;
        transform: translateY(-1px); // Pequeño salto hacia arriba
    }

    &:active:not(:disabled) {
        transform: translateY(0); // Vuelve al sitio al pulsar
        background: #e0e0e0;
    }
`;

export const PageNumber = styled.button<{ $active: boolean }>`
    width: 40px;
    height: 40px;
    border: 1px solid ${props => props.$active ? '#ff4757' : '#ddd'};
    background: ${props => props.$active ? '#ff4757' : 'white'};
    color: ${props => props.$active ? 'white' : '#333'};
    border-radius: 4px;
    cursor: pointer;
    font-weight: ${props => props.$active ? 'bold' : 'normal'};
    /* Transición suave para el cambio de color de fondo y borde */
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        border-color: #ff4757;
        background: ${props => props.$active ? '#ff4757' : '#fff1f2'};
    }

    &:active {
        transform: scale(0.95); // Efecto de presión
    }
`;