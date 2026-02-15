import styled, { keyframes } from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;    
    background-color: #f9f9f9; 
    box-sizing: border-box;
    min-height: 100vh;
    padding: 2rem; /* Usamos padding en lugar de margin para evitar colapsos */

    @media ${devices.sm} {
        padding: 1rem;
        width: 100%;
    }
`;

export const FormBox = styled.div`
    width: 100%;
    max-width: 900px; 
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    /* Estabilización: */
    min-height: 700px; /* Ajusta este valor según el paso más alto */
    
    @media ${devices.sm} {
        padding: 1rem; /* Padding reducido en móvil */
        min-height: auto; 
    }
`;

// Nuevo componente para envolver los pasos y mantener la altura
export const StepsWrapper = styled.div`
    width: 100%;
    flex: 1; /* Empuja el ButtonContainer hacia abajo */
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden; /* Evita que el translateX cree scroll lateral */
    min-height: 450px; /* IMPORTANTE: Mantiene el tamaño constante entre pasos */
`;

export const Title = styled.h1`
    font-size: 28px;
    margin-bottom: 1rem;
    font-family: 'Poppins', sans-serif;
    color: darkslategrey;
    font-weight: 700;
    width: 100%;
    text-align: left;

    @media ${devices.sm} {
        font-size: 32px;
    }   
`;

export const StepContent = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem; 

    input, select, textarea {
        width: 100%; 
        padding: 0.8rem;
        border: 1px solid #ccc;
        border-radius: 6px;
        box-sizing: border-box; 
        font-size: 16px;
        outline-color: #007bff;
    }

    label {
        font-weight: 600;
        margin-bottom: -1rem; 
        color: #333;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    max-width: 550px;
    margin-top: 2rem;
    margin-bottom: 2rem; /* Espacio al final */
`;

export const FormButton = styled.button<{ $secondary?: boolean }>`
    flex: 1;
    padding: 0.8rem 1.5rem;
    font-family: 'inter', sans-serif;
    font-size: 15px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 2px solid ${props => props.$secondary ? 'darkslategrey' : '#007bff'};
    background-color: ${props => props.$secondary ? 'transparent' : '#007bff'};
    color: ${props => props.$secondary ? 'darkslategrey' : 'white'};

    &:hover:not(:disabled) {
        background-color: ${props => props.$secondary ? 'darkslategrey' : '#0056b3'};
        color: white;
        transform: translateY(-1px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &:disabled {
        background-color: #e2e8f0;
        border-color: #e2e8f0;
        color: #94a3b8;
        cursor: not-allowed;
    }
`;

const fadeInSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px); /* Cambiado a Y para evitar ensanchar el contenedor */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StepAnimated = styled.div`
  animation: ${fadeInSlide} 0.4s ease-out forwards;
  width: 100%;
  height: 100%;
`;