import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';
import { Link } from 'react-router-dom';


export const ContainerFooter = styled.div`
    background-color:${(props) => props.theme.colors.blueDeep};
    padding: 2rem;
    position:-webkit-sticky;
    width: 100%;
    bottom :0px;
    @media only screen and (${devices.sm}) {
        height: 200px;
    }
`;

export const MainFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    row-gap: 2rem;
    column-gap: 2rem;
`;

export const BoxFooter = styled.div`
    display: flex;
    justify-content: space-evenly;
    column-gap: 2rem;
    align-items: center;
`;

export const IconText = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-family: 24px;
    font-weight: 500;
    color: white;
    @media only screen and (${devices.sm}) {
        font-family: 35px;
    }
`;

export const Icon = styled.img`
    width: ${({ sizes }) => sizes || '40px'};
    height: ${({ sizes }) => sizes || '40px'};
`;

export const IconMaterial = styled.span`
    font-family: 'Material Symbols Outlined';
    font-size: 22px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`;

export const IconMaterialWhite = styled(IconMaterial)`
    color: white;
`;
export const BoxList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    @media only screen and (${devices.sm}) {
    }
`;

export const BoxLink = styled(Link)`
    color: #fff;
    font-size: 12px;
    @media only screen and (${devices.sm}) {
        font-size: 16px;
    }
`;
