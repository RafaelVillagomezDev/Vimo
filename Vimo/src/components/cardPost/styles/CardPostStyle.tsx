import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';
import { Link } from 'react-router-dom';

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
        grid-template-columns: 275px auto;
        gap: 2rem;
        width: 100%;
    }
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
    padding: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media only screen and (${devices.xl}) {
        flex-direction: row;
        box-shadow: none;
    }
`;

export const CardOption = styled.div`
    display: none;
    @media only screen and (${devices.sm}) {
        display: block;
    }
`;

export const CardSection = styled.div`
    width: 100%;
    padding: 10px;
    width: 100%;
    @media only screen and (${devices.xl}) {
        width: 50%;
    }
`;

export const CardImage = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Imagen card ',
}))`
    width: fit-content;
    border-radius: 15px;
`;

export const CardBox = styled.div`
    display: flex;
    align-items: baseline;
    padding: 3px;
    @media only screen and (${devices.sm}) {
        padding: 0.1rem;
    }
`;

export const CardBoxFlex = styled(CardBox)`
    flex-direction: column;
`;

export const CardIcons = styled(CardBox)`
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (${devices.sm}) {
        padding: 0.1rem;
    }
`;

export const CardTitle = styled.h3`
    font-family: 'Roboto', serif;
    font-size: 16px;
    font-weight: bold;
    @media only screen and (${devices.sm}) {
        font-size: 22px;
    }
`;

export const CardSubtitle = styled(CardTitle)`
    font-weight: 400;
`;

export const CardText = styled.p`
    font-family: 'Roboto', serif;
    font-size: 16px;
    padding-bottom: 6px;
    display: flex;
    align-items: baseline;
    @media only screen and (${devices.sm}) {
        font-size: 20px;
        padding-bottom: 10px;
    }
`;

export const CardtTextFlex = styled(CardText)`
    display: flex;
    align-items: end;
    font-size: 16px;
    @media only screen and (${devices.sm}) {
        font-size: 18px;
    }
`;

export const ButtonOption = styled.button`
    padding: 10px 10px;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    font-size: 'Roboto',serif;
`;

export const Icon = styled.span`
    font-family: 'Material Symbols Outlined';
    font-size: 22px;
    padding-right: 10px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`;

export const LinkIcon = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 400;
    gap: 0.25rem;
`;

export const LinkIconWhite = styled(LinkIcon)`
    color: white;
    font-size: 12px;
    padding: 0rem;
    @media only screen and (${devices.sm}) {
        font-size: 15px;
    }
`;

export const TelLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    gap: 0.25rem;
`;

export const ButtonVerMas = styled.button`
    font-family: 'Roboto', serif;
    font-size: 12px;
    padding: 12px 10px;
    border: none;
    border-radius: 10px;
    background-color: #ff3d00;
    color: white;
    font-weight: 400;
    cursor: pointer;
`;
