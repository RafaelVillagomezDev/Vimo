import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';

export const CarrousellContainer = styled.div`
    width: 100%;
    height: 1117px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const CarrousellPicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CarrousellTitle = styled.h1`
    font-family: 'Rokkitt', serif;
    font-size: 90px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    color: white;
    top: 12rem;
    flex-direction: column;
    justify-content: center;
    @media only screen and (${devices.sm}) {
        font-size: 200px;
    }
    @media only screen and (${devices.md}) {
        font-size: 250px;
    }
`;
