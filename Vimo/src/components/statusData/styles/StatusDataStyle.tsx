import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';

interface StepProps {
    $active?: boolean;
    $completed?: boolean;
}

export const StatusDataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    gap: 0; 
    @media only screen and (${devices.sm}) {
        flex-direction: row ;
        gap: 0; 
        align-items: center;
    }
`;

export const StepBox = styled.div<StepProps>`
    display: flex;
    align-items: center;
    position: relative;
    flex: 1;
    padding: 1rem 0;


    &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 50%;
        left: calc(30px + 1rem); 
        right: 1rem;
        height: 2px;
        background-color: ${props => props.$completed ? 'black' : '#e0e0e0'};
        transition: background-color 0.3s ease;
        z-index: -1;
    }

    @media only screen and (${devices.sm}) {
        width: 100%;
        padding: 0.5rem 0;


        &:not(:last-child)::after {
            top: 40px; 
            left: 15px; 
            width: 2px;
            height: calc(100% - 20px);
            right: auto;
        }
    }
`;

export const StepNumber = styled.div<StepProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.$active || props.$completed ? 'black' : '#ccc'};
    color: white;
    font-weight: bold;
    font-size: 14px;
    margin-right: 1rem;
    z-index: 2;
`;
export const StepText = styled.p<StepProps>`
    margin: 0;
    font-size: 14px;
    font-weight: ${props => (props.$active ? '600' : '300')};
    color: ${props => (props.$active || props.$completed ? 'black' : '#999')};
    flex: 1;
    padding-right: 1rem; /* Espacio para que la línea no pise el texto en desktop */
`;