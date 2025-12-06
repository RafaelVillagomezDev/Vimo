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
    width: 100%;
    bottom: 3rem;
    cursor: grab;
`;

export const CarrousellSlideItem = styled.div`
    min-width: 30%;
    width: 30%;
    height: 100%;
    transition: transform 0.5s ease;
    text-align: center;
    background-color: transparent;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (${devices.sm}) {
        min-width: 20%;
        width: 20%;
    }
`;

export const CarrousellSlideCard = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 120px;
    object-fit: cover;
    object-position: center;
`;



export const CarrousellSlideText = styled.p`
    color: black;
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
     display: none;
     @media only screen and (${devices.sm}) {
           font-size: 18px;
           display: block;
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