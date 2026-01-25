import styled ,{keyframes} from 'styled-components';
import { devices} from '../../../styles/mixin_styledComponent';

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;    
    background-color: #f9f9f9; 
    box-sizing: border-box;
     margin: 2rem;
     min-height: 100vh;
     height: 100%;
    @media ${devices.sm} {
       margin: 0rem;
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

    @media ${devices.sm} {
        padding: 3rem;
    }
`;

export const Title = styled.h1`
    font-size: 28px;
    margin-bottom: 2rem;
    font-family: 'Poppins', sans-serif;
    color: darkslategrey;
    font-weight: 700;
    width: 100%;
    text-align: left;

    @media ${devices.sm} {
        font-size: 35px;
    }   
`;


export const StepContent = styled.div`
    width: 100%;
    margin-top: 2rem;
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

    &:hover {
        background-color: ${props => props.$secondary ? 'darkslategrey' : '#0056b3'};
        color: white;
        transform: translateY(-1px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        background-color: #e2e8f0;
        border-color: #e2e8f0;
        color: #94a3b8;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }
`;

const fadeInSlide = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StepAnimated = styled.div`
  animation: ${fadeInSlide} 0.4s ease-out forwards;
  width: 100%;
`;