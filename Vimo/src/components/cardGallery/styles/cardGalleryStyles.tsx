import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';

export const GridContainer = styled.div`
    display: grid;
    gap: 16px;
    padding: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media only screen and (${devices.lg}) {
        grid-template-columns: 840px auto;
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RightColumn = styled.div`
    display: none;

    @media only screen and (${devices.sm}) {
        display: none;
    }
    @media only screen and (${devices.lg}) {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 1rem;
        grid-template-rows: repeat(3, 175px);
        height: 558px;
    }
`;

export const ImageItem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;
