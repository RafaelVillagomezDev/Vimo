import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';


export const Card = styled.div`
  width: 100%;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background-color: white;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
`;

export const ScheduleItem = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
  margin-bottom: 8px;
  column-gap: 1rem;
`;

export const ScheduleText=styled.p`

`

export const ScheduleDay=styled.span`
  font-family:  'Roboto', serif;;
  font-size: 16px;
  font-weight: bold;
  padding-right: 6px;
  
`
export const ScheduleTime=styled.span`
  font-family:  'Roboto', serif;;
  font-size: 14px;
 
`