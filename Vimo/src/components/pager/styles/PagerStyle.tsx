import styled from 'styled-components';

// --- Estilos ---
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
    transition: all 0.2s;

    &:disabled {
        background: #f5f5f5;
        color: #ccc;
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        background: #f0f0f0;
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

    &:hover {
        border-color: #ff4757;
    }
`;

