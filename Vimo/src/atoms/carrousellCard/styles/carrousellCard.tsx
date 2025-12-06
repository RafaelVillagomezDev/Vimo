import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';


export const CarrouselContainer = styled.div`
    margin: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-behavior: smooth; /* Desplazamiento suave para la navegación con botones/teclado */
    -webkit-overflow-scrolling: touch; /* Mejora la sensación de scroll en iOS */
    scrollbar-width: none; /* Oculta la barra de desplazamiento en Firefox */
    &::-webkit-scrollbar {
        display: none; /* Oculta la barra de desplazamiento en Chrome, Safari */
    }
    
    align-items: flex-start; /* Alinea los ítems al inicio verticalmente */
    padding: 0 3rem; 
    

  @media only screen and (${devices.sm}) {
          
        column-gap: 1rem;
    }
`

export const BtnNextSlide = styled.button`
    width: 60px;
    height: 40px;
    background-color: yellow;
    position: relative;
    margin: auto;
`
export const BtnPrevSlide = styled.button`
    width: 60px;
    height: 40px;
    background-color: yellow;
     position: relative;
    margin: auto;
`
