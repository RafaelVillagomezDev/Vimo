import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';


export const CarrousellSection = styled.section`
    position: relative;
    padding: 3rem;
    margin: 0 auto;
    max-width: 1200px;
    
    
    @media only screen and (${devices.sm}){
      padding: 3rem;
    }
`;

// CRUCIAL 1: El Viewport de Embla - Debe ocultar el desbordamiento
export const CarrouselContainer = styled.div`
    overflow: hidden; 
    width: 100%;
    padding: 2rem;
    @media only screen and (${devices.sm}){
         
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
        
        @media only screen and (${devices.sm}){
         
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

