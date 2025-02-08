import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';

export const MainCard = styled.div`
    margin: 2rem;

    @media only screen and (${devices.sm}) {
        margin: 3rem; 
    }
`;

export const SectionCard = styled.div`
    display: grid; 
      
    @media only screen and (${devices.sm}) {
        display: grid; 
        grid-template-columns:300px auto;
        gap: 2rem; 
        width: 100%;
    }
  
`;

export const LeftColumn = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
`;

export const RightColumn = styled.div`
    max-width: 300px;
    width: 100%;
`;

export const BoxCard = styled.div`
    width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: column; 
    row-gap: 2rem;
`;

export const Card = styled.div`
    border-radius: 20px;
    background: #fff;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
`;

export const CardSection = styled.div`
    width: 50%;
`;



export const CardImage = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Imagen card ',
}))`
    width: fit-content;
    border-radius: 15px;
`;

export const CardBox = styled.div`
    padding: 1rem;
`;

export const CardTitle = styled.h3`
    font-family:'Rokkitt',serif;
    font-size: 22px;
    font-weight: bold;
`;

export const CardText=styled.p`
   font-family:'Rokkitt',serif;
   font-size: 20px;
`

export const Icon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 22px; 
  font-variation-settings:
    "FILL" 1,    
    "wght" 400,  
    "GRAD" 0,    
    "opsz" 24;   
`;