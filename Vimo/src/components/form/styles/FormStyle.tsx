import styled, { keyframes, css } from 'styled-components';


// --- Interfaces ---
interface StyledInputProps {
    $hasIcon?: boolean;
    $hasFlag?: boolean;
    $hasError?: boolean;
}

// --- Animaciones ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Mixins Reutilizables ---
const errorBorder = css<{ $hasError?: boolean }>`
    ${props => props.$hasError && css`
        border-color: #d32f2f !important;
        &:focus {
            border-color: #d32f2f !important;
            box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1) !important;
        }
    `}
`;

// --- Componentes de Estilo ---

export const FormContainer = styled.div`
    width: 100%;
    padding-top: 1rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem; 
`;

export const FormBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 25px; 
    width: 100%;
`;

export const FormLabel = styled.label`
    font-size: 16px;
    font-weight: bold;
    font-family: 'inter', sans-serif;
    color: darkslategrey;
    margin-bottom: 8px; 
    display: block;
`;

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 550px;

    & > svg, & > span.icon-placeholder {
        position: absolute;
        left: 1rem;
        color: darkslategrey;
        z-index: 2; 
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
    z-index: 2; 
    top: 23px;
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
    background-color: white;
    position: relative;
    z-index: 1;

    ${errorBorder}

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }
`;

export const FormSelect = styled.select<{ $hasError?: boolean }>`
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

    ${errorBorder}

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

export const FormTextArea = styled.textarea<{ $hasError?: boolean }>`
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

    ${errorBorder}

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

export const ErrorMessage = styled.div`
    color: #d32f2f;
    font-size: 13px;
    font-weight: 500;
    font-family: 'inter', sans-serif;
    position: absolute;
    bottom: 0px; 
    left: 0;
    animation: ${fadeIn} 0.2s ease-out forwards;
    z-index: 1;
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

  span {
    color: darkslategrey;
    font-weight: 500;
  }

  small {
    color: #888;
    margin-top: 5px;
  }
`;

export const FormButton = styled.button<{ $secondary?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  min-width: 140px;
  outline: none;

  /* Estilos para el botón Principal (Siguiente / Finalizar) */
  background-color: #4caf50;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover:not(:disabled) {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  /* Estilos para el botón Secundario (Atrás) */
  ${(props) =>
    props.$secondary &&
    css`
      background-color: #f5f5f5;
      color: #666;
      border: 1px solid #ddd;
      box-shadow: none;

      &:hover:not(:disabled) {
        background-color: #e8e8e8;
        color: #333;
        border-color: #ccc;
      }
    `}

  /* ESTADO DESHABILITADO (Cuando la validación de Zod falla) */
  &:disabled {
    background-color: #cccccc;
    color: #888888;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.7;
  }

  /* Responsive */
  @media (max-width: 480px) {
    width: 100%;
    padding: 14px;
  }
`;