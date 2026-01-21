import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';

export const SeekerMain = styled.div`
    width: 100%;
    max-width: 500px;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 12px;
    overflow: hidden;
`;

export const InputSeeker = styled.input`
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    background-color: white;
    flex-grow: 1;
`;

export const BtnSearch = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 100%;
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.colors.redAlert};
    color: white;
    font-family: 'Poppins', sans-serif;
`;

export const IconMaterial = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 100%;
    font-family: 'Material Symbols Outlined';
    font-size: 22px;
    color: #333;
    font-variation-settings:
        'FILL' 1,
        'wght' 800,
        'GRAD' 0,
        'opsz' 24;

    @media only screen and (${devices.sm}) {
        font-size: 35px;
    }
`;
