import { lazy, Suspense, useEffect, startTransition, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { selectFilteredRestaurants, selectRestaurantCount, selectRestaurantStatus, setSearchTerm } from '../slices/restaurant/restaurant-slice';
import { useAppDispatch } from '../custom/hooks/call/useAppDispatch';
import { useAppSelector } from '../custom/hooks/call/useAppSelector';
import { fetchTokenAndRestaurant } from '../slices/restaurant/restaurant-api';
import Footer from '../components/footer/Footer';
import Pager from '@components/pager/Pager';
import LoadingScreen from './LoadingScreen';
import CardPost from '@components/cardPost/CardPost';
import Configurator from '@components/configurator/Configurator';
import { CardContainer, ContainerLoading, ContainerRender, MainCard } from '@components/cardPost/styles/CardPostStyle';

const Carrousell = lazy(() => import('@components/carrousell/Carrousell'));

const MENU_OPTIONS = [
    { label: 'Tipo de comida', subOptions: ['Mediterranea', 'Japonesa', 'Mexicana', 'China', 'Turca'] },
    { label: 'Precio', subOptions: ['< 15€', '15€-30€', '> 30€'] },
    { label: 'Guía Michelin', subOptions: ['Guía MICHELIN', '3 estrellas', '2 estrellas', '1 estrella'] },
];

const API_BASE_URL = 'http://localhost:3000/api/v1/restaurant';

function Restaurants() {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    // Memorizamos los parámetros para tener una referencia estable
    const queryParams = useMemo(() => ({
        name: searchParams.get('name') || '',
        limit: parseInt(searchParams.get('limit') || '5', 10),
        offset: parseInt(searchParams.get('offset') || '0', 10),
    }), [searchParams]);

    // useCallback para que el Pager no se re-renderice innecesariamente
    const handlePageChange = useCallback((page: number) => {
        const newOffset = (page - 1) * queryParams.limit;
        setSearchParams(prev => {
            const next = new URLSearchParams(prev);
            next.set('offset', newOffset.toString());
            return next;
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [queryParams.limit, setSearchParams]);

    const currentPage = useMemo(() =>
        Math.floor(queryParams.offset / queryParams.limit) + 1
        , [queryParams.offset, queryParams.limit]);

    const menuOptions = useMemo(() => MENU_OPTIONS, []);

    const filteredData = useAppSelector(selectFilteredRestaurants);
    const totalItems = useAppSelector(selectRestaurantCount);
    const status = useAppSelector(selectRestaurantStatus);

    // Efecto de carga corregido (usando queryParams.prop)
    useEffect(() => {
        dispatch(setSearchTerm(queryParams.name));

        startTransition(() => {
            const params = new URLSearchParams();
            if (queryParams.name.trim()) params.append('name', queryParams.name.trim());

            // CORRECCIÓN AQUÍ: Usamos queryParams.limit y queryParams.offset
            params.append('limit', queryParams.limit.toString());
            params.append('offset', queryParams.offset.toString());

            const apiPath = `?${params.toString()}`;
            dispatch(fetchTokenAndRestaurant({
                api_url: API_BASE_URL + apiPath,
                api_path: apiPath
            }));
        });
    }, [queryParams, dispatch]);

    const hasResults = useMemo(() =>
        filteredData && filteredData.length > 0
        , [filteredData]);

    return (
        <Suspense fallback={<LoadingScreen />}>
            <Carrousell />
            <CardContainer>
                <Configurator menuOptions={menuOptions} />
                <MainCard style={{ position: 'relative', minHeight: '600px' }}>
                    {status === 'loading' && (
                        <ContainerLoading><LoadingScreen /></ContainerLoading>
                    )}

                    <ContainerRender $status={status}>
                        {hasResults ? (
                            filteredData.map((item) => (
                                <CardPost key={item.id} data={item}>
                                    <CardPost.Image />
                                    <CardPost.Content>
                                        <CardPost.Header />
                                        <CardPost.Description />
                                        <CardPost.Actions />
                                    </CardPost.Content>
                                </CardPost>
                            ))
                        ) : (
                            status === 'success' && (
                                <div style={{ textAlign: 'center', padding: '4rem' }}>
                                    <h2>No se encontraron restaurantes</h2>
                                    <p>Intenta con otro nombre o ajusta los filtros.</p>
                                </div>
                            )
                        )}

                        {status === 'failed' && (
                            <div style={{ textAlign: 'center', padding: '4rem' }}>
                                <h3>⚠️ Error de conexión</h3>
                                <p>No pudimos cargar los restaurantes.</p>
                            </div>
                        )}
                    </ContainerRender>
                </MainCard>
            </CardContainer>

            {status === 'success' && totalItems > queryParams.limit && (
                <Pager
                    totalItems={totalItems}
                    itemsPerPage={queryParams.limit}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            )}
            <Footer />
        </Suspense>
    );
}

export default Restaurants;