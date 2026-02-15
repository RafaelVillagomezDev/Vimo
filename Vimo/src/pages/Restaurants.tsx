import { lazy, Suspense, useEffect, startTransition } from 'react';
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

    // 1. Lectura de URL
    const queryName = searchParams.get('name') || '';
    const queryLimit = parseInt(searchParams.get('limit') || '5', 10);
    const queryOffset = parseInt(searchParams.get('offset') || '0', 10);

    const currentPage = Math.floor(queryOffset / queryLimit) + 1;

    // 2. Selectores
    const filteredData = useAppSelector(selectFilteredRestaurants);
    const totalItems = useAppSelector(selectRestaurantCount);
    const status = useAppSelector(selectRestaurantStatus);

    // 3. Efecto de carga de datos
    useEffect(() => {
        dispatch(setSearchTerm(queryName));

        // startTransition ayuda a mantener la UI fluida durante re-renders pesados
        startTransition(() => {
            const params = new URLSearchParams();
            if (queryName.trim()) params.append('name', queryName.trim());
            params.append('limit', queryLimit.toString());
            params.append('offset', queryOffset.toString());

            const apiPath = `?${params.toString()}`;
            dispatch(fetchTokenAndRestaurant({
                api_url: API_BASE_URL + apiPath,
                api_path: apiPath
            }));
        });
    }, [queryName, queryLimit, queryOffset, dispatch]);

    // 4. Handlers con lógica de protección
    const handlePageChange = (page: number) => {
        const newOffset = (page - 1) * queryLimit;
        setSearchParams(prev => {
            prev.set('offset', newOffset.toString());
            return prev;
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Helper para renderizado condicional
    const hasResults = filteredData && filteredData.length > 0;

    return (
        <Suspense fallback={<LoadingScreen />}>
            <Carrousell />
            <CardContainer>
                <Configurator menuOptions={MENU_OPTIONS} />
                
                <MainCard style={{ position: 'relative', minHeight: '600px' }}>
                    {/* Overlay de carga: Solo si realmente está cargando */}
                    {status === 'loading' && (
                        <ContainerLoading>
                            <LoadingScreen />
                        </ContainerLoading>
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
                            // Solo mostramos "No encontrado" si la carga terminó con éxito
                            status === 'success' && (
                                <div style={{ textAlign: 'center', padding: '4rem' }}>
                                    <h2>No se encontraron restaurantes</h2>
                                    <p>Intenta con otro nombre o ajusta los filtros.</p>
                                </div>
                            )
                        )}

                        {status === 'failed' && (
                            <div style={{ textAlign: 'center', marginTop: '3rem', color: '#ff4757' }}>
                                <h3>⚠️ Error </h3>
                                <p>No pudimos cargar los datos. Revisa tu internet e inténtalo de nuevo.</p>
                                <button onClick={() => window.location.reload()} style={{marginTop: '1rem', cursor: 'pointer'}}>
                                    Reintentar
                                </button>
                            </div>
                        )}
                    </ContainerRender>
                </MainCard>
            </CardContainer>

            {/* 5. Protección del Pager: Solo si hay éxito y hay más de una página */}
            {status === 'success' && totalItems > queryLimit && (
                <Pager
                    totalItems={totalItems}
                    itemsPerPage={queryLimit}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            )}
            
            <Footer />
        </Suspense>
    );
}

export default Restaurants;