import styled, { keyframes } from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';

export const CarrousellSection = styled.section`
    position: relative;
    padding: 3rem;
    margin: 0 auto;
    max-width: 1200px;

    @media only screen and (${devices.sm}) {
        padding: 3rem;
    }
`;

// CRUCIAL 1: El Viewport de Embla - Debe ocultar el desbordamiento
export const CarrouselContainer = styled.div`
    overflow: hidden;
    width: 100%;
    padding: 2rem;
    @media only screen and (${devices.sm}) {
        padding: 0rem;
    }
`;

export const EmblaContainerInner = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;

    gap: 1rem;

    /* Estilos para CADA SLIDE dentro del contenedor (& > *) */
    & > * {
        position: relative;
        flex: 0 0 100%;
        min-width: 0;

        @media only screen and (${devices.sm}) {
            flex: 0 0 calc(25% - 3.75px);
        }
    }
`;

// --- Botones de Navegación ---

const BtnSlide = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: opacity 0.3s;

    &:disabled {
        opacity: 0.3; /* Desactivado visualmente */
        cursor: not-allowed;
    }
`;

export const BtnPrevSlide = styled(BtnSlide)`
    left: 0px;
`;

export const BtnNextSlide = styled(BtnSlide)`
    right: 0px;
`;



export const ErrorMessage = styled.div`
    width: 100%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 2rem;
    background-color: #fff5f5; 
    border: 1px dashed #feb2b2;
    border-radius: 12px;
    color: #c53030; 
    font-family: 'Inter', sans-serif;
    text-align: center;

    &::before {
        content: '⚠️'; /* Icono rápido sin importar librerías */
        font-size: 1.5rem;
    }

    span {
        font-weight: 600;
        font-size: 1.1rem;
    }

    button {
        margin-top: 10px;
        background: none;
        border: 1px solid #c53030;
        color: #c53030;
        padding: 5px 15px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.8rem;
        transition: all 0.2s;

        &:hover {
            background: #c53030;
            color: white;
        }
    }
`;

// Opcionalmente, para cuando no hay datos (estado vacío)
export const EmptyStateMessage = styled(ErrorMessage)`
    background-color: #f7fafc;
    border-color: #e2e8f0;
    color: #4a5568;

    &::before {
        content: '📍';
    }
`;


const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const SkeletonCard = styled.div`
  /* Ajusta estas medidas a las de tu CardSlide real */
  min-width: 300px; 
  height: 250px;
  margin-right: 20px;
  border-radius: 12px;
  flex: 0 0 auto; 


  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 100%;
  
  /* Aplicación de la animación */
  animation: ${shimmer} 1.5s linear infinite forwards;

  /* Opcional: Puedes añadir formas internas si quieres que sea más detallado */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;

  &::after {
    content: '';
    height: 20px;
    width: 60%;
    background: #e2e8f0;
    border-radius: 4px;
    opacity: 0.6;
  }
`;