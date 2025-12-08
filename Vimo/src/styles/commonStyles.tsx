import styled from 'styled-components';
import { devices } from './mixin_styledComponent'

export const CarrousellTitle=styled.h2`
    font-family: 'Poppins',sans-serif;
    font-size: 22px;
    font-weight: bold;
    padding: 1rem 2rem ;

    @media only screen and (${devices.sm}) {
       padding: 2rem 3.8rem ;
       font-size: 25px;
    }
`

