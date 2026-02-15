import * as S from './styles/PagerStyle';
interface PagerProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}
const Pager = ({ totalItems, itemsPerPage, currentPage, onPageChange }: PagerProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) return null;

  
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <S.PaginationWrapper>
            <S.PageButton
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                &laquo; Anterior
            </S.PageButton>

            {pages.map((page) => (
                <S.PageNumber
                    key={page}
                    $active={page === currentPage}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </S.PageNumber>
            ))}

            <S.PageButton
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Siguiente &raquo;
            </S.PageButton>
        </S.PaginationWrapper>
    );
};

export default Pager;