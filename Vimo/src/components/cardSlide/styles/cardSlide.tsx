import styled from 'styled-components';

// 1. Contenedor principal con dimensiones fijas y Flexbox
export const CardContainer = styled.div`
    width: 258px;
    height: 376px;
    display: flex;
    flex-direction: column;
    overflow: hidden; 
    flex-shrink: 0;
    margin-right: 15px;
`;


export const CardBoxImage = styled.div`
    width: 100%;
   
    height: 192px; 
    background-color: rebeccapurple;
`;


export const CardBox = styled.div`
    width: 100%;
    flex: 1; 
    flex-grow: 1; 
    background-color: red;
    
    
`;