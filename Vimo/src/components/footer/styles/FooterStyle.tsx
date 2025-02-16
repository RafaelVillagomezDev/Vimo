import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';
import { Link } from 'react-router-dom';

export const ContainerFooter = styled.div`
    height: 250px;
    background-color: hsl(0, 0%, 0%);
    padding: 2rem;
    @media only screen and (${devices.sm}) {
        height: 150px;
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
    @media only screen and (${devices.sm}) {
        flex-direction: row;
    }
`;

export const BoxFooter = styled.div`
    display: flex;
    justify-content: space-evenly;
    column-gap: 2rem;
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
