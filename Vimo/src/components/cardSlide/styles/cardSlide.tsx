import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';
import { Link } from 'react-router-dom';


export const CardContainer = styled.div`
   
    width: 100%;
    height: 450px; 
    display: flex;
    flex-direction: column;
    overflow: hidden; 
    flex-shrink: 0;
    margin-right: 15px;
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
    
   @media only screen and (${devices.sm}) {
      width: 250px;
      height: 350px;
    }
    
`;


export const CardBoxImage = styled.div`
    width: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
   
     @media only screen and (${devices.sm}) {
        height: 166px; 
    }
`;


export const CardBox = styled.div`
    width: 100%;
    flex: 1; 
    flex-grow: 1; 
    background-color: orangered;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 1rem;
    
`;

export const CardBoxTitle = styled.h3`
    font-size: 20px;
    color: aliceblue;
    
    @media only screen and (${devices.sm}) {
       font-size: 16px;
    }
`

export const CardText=styled.p`
     font-size: 16px;
     padding-top: 12px;
     @media only screen and (${devices.sm}) {
       font-size: 16px;
    }
`



export const CardImage = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Imagen card ',
}))`
 overflow: hidden;  
    width: fit-content;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  
`;

export const LinkCard = styled(Link)`
    
`;