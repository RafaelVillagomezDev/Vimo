import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';
import { Link } from 'react-router-dom';

export const CarrousellSlideContainer = styled.div`
    display: flex;
    overflow: hidden;
    width: 100%;
    position: absolute;
    bottom: 3rem;
    cursor: grab;
    @media only screen and (${devices.sm}) {
        bottom: 5rem;
    }
`;

export const CarrousellSlideItem = styled.div`
    min-width: 33.3%;
    width: 33%;
    height: 90px;
    transition: transform 0.5s ease;
    text-align: center;
    background-color: transparent;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (${devices.sm}) {
        height: 120px;
    }
`;

export const CarrousellSlideCard = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 120px;
    object-fit: cover;
    object-position: center;

    @media only screen and (${devices.sm}) {
        height: 120px;
        width: 120px;
    }
`;

export const CarrouselSlideCardText = styled(Link)`
    display: none;
    @media only screen and (${devices.sm}) {
        width: 40%;
        display: block;
    }
`;

export const CarrousellSlideText = styled.p`
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const CarrousellSlideTitle = styled(CarrousellSlideText)`
    font-weight: bold;
    line-height: 30px;
    word-spacing: 5px;
    &:hover {
        border-bottom: solid 3px white;
    }
`;
