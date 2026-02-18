import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  width: 100%;
  min-height: 400px;
  text-align: center;
`;

export const ErrorIconBox = styled.div`
  background-color: #fff5f5;
  color: #e53e3e;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  span {
    font-size: 3rem;
  }
`;

export const ErrorTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 0.75rem;
  font-weight: 700;
`;

export const ErrorText = styled.p`
  color: #718096;
  font-size: 1.1rem;
  max-width: 400px;
  line-height: 1.6;
`;

export const Icon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px; 
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  color: inherit; 
  
  /* Centrado vertical si está junto a texto */
  vertical-align: middle;
  
  /* Evita que se seleccione el texto del icono */
  user-select: none;
`;

/**NO RESULTS */

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  width: 100%;
  text-align: center;
`;

export const NoResultsIllustration = styled.div`
  background-color: #f7fafc; /* Gris muy suave */
  color: #a0aec0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  border: 2px dashed #e2e8f0;

  span {
    font-size: 4rem;
  }
`;

export const NoResultsTitle = styled.h2`
  font-size: 1.5rem;
  color: #4a5568;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const NoResultsText = styled.p`
  color: #718096;
  font-size: 1rem;
  max-width: 320px;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const ClearFiltersButton = styled.button`
  background: none;
  border: 2px solid #3182ce;
  color: #3182ce;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #3182ce;
    color: white;
  }
`;