import styled , { keyframes } from 'styled-components';
import { devices } from '@styles/mixin_styledComponent';

interface StyledInputProps {
    $hasIcon?: boolean;
    $hasFlag?: boolean;
}

export const FormContainer = styled.div`
    width: 100%;
    padding-top: 1rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem; 
`;

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    width: 100%;
`;

export const FormLabel = styled.label`
    font-size: 16px;
    font-weight: bold;
    font-family: 'inter', sans-serif;
    color: darkslategrey;
`;


export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 550px;

    & > svg {
        position: absolute;
        left: 1rem;
        color: darkslategrey;
        pointer-events: none;
    }
`;

export const FlagContainer = styled.div`
    position: absolute;
    left: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    pointer-events: none;
    
    .flag {
        font-size: 1.2rem;
    }

    .prefix {
        font-family: 'inter', sans-serif;
        font-size: 14px;
        font-weight: bold;
        color: darkslategrey;
        border-right: 1px solid #ccc;
        padding-right: 0.5rem;
    }
`;

export const FormInput = styled.input<StyledInputProps>`
    padding: 1rem;
    padding-left: ${props => props.$hasIcon ? '3rem' : props.$hasFlag ? '4.8rem' : '1rem'};
    border: 2px solid darkslategrey;
    border-radius: 4px;
    font-family: 'inter', sans-serif;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }
`;

export const FormSelect = styled.select`
    padding: 1rem;
    padding-right: 3rem;
    border: 2px solid darkslategrey;
    border-radius: 4px;
    font-family: 'inter', sans-serif;
    font-size: 16px;
    width: 100%;
    max-width: 550px;
    background-color: white;
    cursor: pointer;
    color: darkslategrey;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='darkslategrey' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.2rem;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

export const FormTextArea = styled.textarea`
    padding: 1rem;
    border: 2px solid darkslategrey;
    border-radius: 4px;
    font-family: 'inter', sans-serif;
    font-size: 16px;
    width: 100%;
    max-width: 550px;
    min-height: 100px;
    resize: vertical;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;


export const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 550px;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const StyledDropZone = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border: 2px dashed #ccc;
  border-radius: 12px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;

  &:hover {
    border-color: darkslategrey;
    background-color: #f0f4f4;
  }

  & svg {
    font-size: 2rem;
    color: darkslategrey;
    margin-bottom: 10px;
  }

  span {
    color: darkslategrey;
    font-weight: 500;
  }

  small {
    color: #888;
    margin-top: 5px;
  }
`;