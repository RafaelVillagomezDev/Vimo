import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';
import { Link } from 'react-router-dom';

export const CarrousellSlideContainer = styled.div`
    display: flex;
    overflow-x: scroll; 
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    &::-webkit-scrollbar {
        display: none;
    }
    bottom: 3rem;
    margin: 2rem; 
    cursor: grab;
    
    /* ✅ 1. ESPACIADO MÓVIL: Reducido a 0.5rem (8px) */
    column-gap: 0.5rem; 

    @media only screen and (${devices.md}) {
         margin: 4rem;
          /* MANTENER ESPACIADO GRANDE EN ESCRITORIO (2rem) */
          column-gap: 2rem; 
    }
`;

export const CarrousellSlideItem = styled.div`
    height: 100%;
    transition: transform 0.5s ease;
    text-align: center;
    background-color: transparent;
  
    /* Propiedades Flexbox requeridas para el scroll horizontal */
    flex-shrink: 0; 
    
    /* 🎯 2. CÁLCULO MÓVIL (3 Slides con 0.5rem de gap) */
    /* Fórmula: (100% / 3) - (0.5rem / 3) = 33.333% - 0.1666rem */
    flex-basis: calc(33.333% - 0.1666rem); 
    
    /* Alineación de los elementos internos (img, texto) para móvil */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    @media only screen and (${devices.md}) {
        /* 🎯 CÁLCULO ESCRITORIO (3 Slides con 2rem de gap) */
        /* Fórmula: (100% / 3) - (4rem / 3) = 33.333% - 1.333rem */
        flex-basis: calc(33.333% - 1.333rem); 
        
        /* Ajuste de layout interno en escritorio */
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;

export const CarrousellSlideCard = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 12px;
    object-fit: cover;
    object-position: center;
    border-radius: 120px; /* Redondeado total en móvil */
     
     @media only screen and (${devices.md}) {
       border-radius: 12px; /* Cuadrado o menos redondeado en escritorio */
       height: 100%;
       width: 350px;
    }
`;

export const CarrousellSlideText = styled.p`
    color: black;
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
     
     /* El texto es visible en móvil ya que no tiene 'display: none' fuera de la media query */
     
     @media only screen and (${devices.md}) {
           font-size: 18px;
           display: block; /* Aseguramos visibilidad en escritorio si fuera necesario */
    }
`;

export const CarrousellSlideTitle = styled(CarrousellSlideText)`
    font-weight: bold;
    line-height: 30px;
    word-spacing: 5px;
    &:hover {
        border-bottom: solid 3px blue;
    }
`;


export const NavLinker = styled(Link)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   row-gap: 1rem;   
`;