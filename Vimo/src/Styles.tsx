import styled from 'styled-components';

// Definir un componente de estilo
const Button = styled.button`
  background-color: #6200ea;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3700b3;
  }
`;

export { Button };  // Exportación nombrada
