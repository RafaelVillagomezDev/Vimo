import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';

export const GridContainer = styled.div`
    display: grid;
    gap: 16px;
    padding: 0rem 2rem  2rem;;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media only screen and (${devices.lg}) {
        grid-template-columns: 840px auto;
        padding: 0 2rem 2rem;
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

export const InfoContainer = styled.div`
    padding: 2rem;
    background-color: whitesmoke;
    width: 100%;
`;

export const IconInfo = styled.span`
    font-family: 'Material Symbols Outlined';
    font-size: 22px;
    color: ${({ color }) => color || 'orange'};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`;

export const BoxInfo = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const BoxText = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TitleInfo = styled.h3`
    font-family: 'Rokkitt', serif;
    font-size: 24px;
    font-weight: bold;
    @media only screen and (${devices.sm}) {
        font-size: 32px;
    }
`;

export const TextInfo = styled.p`
    font-family: 'Roboto';
    font-size: 16px;
`;
export const BoxShare = styled.div`
    font-family: 'Rokkitt', serif;
    font-size: 22px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`;

export const ButtonInfo = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const ButtonLike = styled.button.attrs<{
    $border?: string;
}>((props) => ({
    $border: props.$border || 'solid 1px black',
}))`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 6px;
    border-radius: 10px;
    &:hover {
        background-color: orangered;
    }
    @media only screen and (${devices.sm}) {
        border: ${(props) => props.$border};
    }
`;

export const ButtonText = styled.span.attrs<{
    $borderBottom?: string;
}>((props) => ({
    $borderBottom: props.$borderBottom || 'solid 1px black',
}))`
    font-family: 'Roboto';
    font-size: 16px;
    border-bottom: ${(props) => props.$borderBottom};
    line-height: 22px;
    display: none;

    @media only screen and (${devices.sm}) {
        display: block;
    }
`;

export const Text = styled.p`
    font-family: 'Roboto';
    font-size: 16px;
    padding: 12px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    @media only screen and (${devices.sm}) {
        flex-direction: row;
    }
`;

export const TextLine=styled.span`
    border-bottom: none;
    @media only screen and (${devices.sm}) {
        border-bottom: 1px solid gray;
    }
    
`