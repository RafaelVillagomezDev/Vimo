
import { useAppDispatch } from '@src/custom/hooks/call/useAppDispatch';
import * as S from './styles/ErrorMessageStyle';
import { useFilter } from '@src/custom/hooks/render/useFilter';
import { setSearchTerm } from '@src/slices/restaurant/restaurant-slice';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <S.ErrorContainer>
      <S.ErrorIconBox>
        {/* Usando la misma lógica de iconos que en tu CardPost */}
        <S.Icon style={{ fontSize: '3.5rem' }}>cloud_off</S.Icon>
      </S.ErrorIconBox>
      <S.ErrorTitle>{message}</S.ErrorTitle>
      <S.ErrorText>
        Parece que tenemos problemas para conectar con el servidor. 
        Por favor, revisa tu conexión a internet o intenta recargar la página.
      </S.ErrorText>
    </S.ErrorContainer>
  );
};

const NoResults = () => {
    const {clearFilters} = useFilter();
     const dispatch = useAppDispatch()
    const handleReset = () => {
        console.log("click")
        
        dispatch(setSearchTerm(''))
        clearFilters()
    };

    return (
        <S.NoResultsContainer>
            <S.NoResultsIllustration>
                <S.Icon>search_off</S.Icon>
            </S.NoResultsIllustration>
            <S.NoResultsTitle>No encontramos lo que buscas</S.NoResultsTitle>
            <S.NoResultsText>
                No hay restaurantes que coincidan con tus filtros actuales. 
                Intenta buscar con otros términos o limpia los filtros.
            </S.NoResultsText>
            <S.ClearFiltersButton onClick={handleReset}>
                Limpiar todos los filtros
            </S.ClearFiltersButton>
        </S.NoResultsContainer>
    );
};

export {ErrorMessage,NoResults}