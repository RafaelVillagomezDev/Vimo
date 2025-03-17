import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';

export const Card = styled.div`
    width: 100%;
    padding: 12px;
    margin: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    background-color: white;
`;

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
    @media only screen and (${devices.sm}) {
        font-size: 22px;
    }
`;

export const ScheduleItem = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 8px;
    margin-bottom: 8px;
    column-gap: 1rem;

    text-align: center;
    @media only screen and (${devices.sm}) {
        flex-direction: row;
        row-gap: 1rem;
    }
`;

export const ScheduleText = styled.p`
    font-family: 'Roboto', serif;
    font-size: 16px;
    display: flex;

    flex-direction: row;
    @media only screen and (${devices.sm}) {
        flex-direction: column;
    }

    @media only screen and (${devices.lg}) {
        flex-direction: row;
    }
`;

export const ScheduleDay = styled.span`
    font-weight: bold;
`;
export const ScheduleTime = styled.span`
    padding-left: 6px;
`;
