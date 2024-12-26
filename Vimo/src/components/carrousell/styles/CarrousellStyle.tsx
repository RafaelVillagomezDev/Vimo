import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';

export const CarrousellContainer = styled.div`
    width: 100%;
    height: 450px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media only screen and (${devices.sm}) {
        height: 750px;
    }
`;

export const CarrousellPicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CarrousellTitle = styled.h1`
    font-family: 'Rokkitt', serif;
    font-size: 15vw; 
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    color: white;
    top: 12rem;
    flex-direction: column;
    justify-content: center;
  
`;
