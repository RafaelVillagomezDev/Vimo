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
import { CardContainer, MainCard } from '@components/cardPost/styles/CardPostStyle';

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

    // 1. Fuente de verdad: La URL
    const queryName = searchParams.get('name') || '';
    const queryLimit = parseInt(searchParams.get('limit') || '11', 10);
    const queryOffset = parseInt(searchParams.get('offset') || '0', 10);

    // 2. Cálculo de página para la UI del Pager
    const currentPage = Math.floor(queryOffset / queryLimit) + 1;

    // 3. Selectores de Redux
    const filteredData = useAppSelector(selectFilteredRestaurants);
    const totalItems = useAppSelector(selectRestaurantCount); // Aquí llega el 11
    const status = useAppSelector(selectRestaurantStatus);

    useEffect(() => {
        // Sincronizamos el término de búsqueda en Redux
        dispatch(setSearchTerm(queryName));
        
        startTransition(() => {
            const params = new URLSearchParams();
            if (queryName.trim()) params.append('name', queryName.trim());
            params.append('limit', queryLimit.toString());
            params.append('offset', queryOffset.toString());

            const apiPath = `?${params.toString()}`;
            
            // Llamada a la API combinando URL base y path
            dispatch(fetchTokenAndRestaurant({
                api_url: API_BASE_URL + apiPath,
                api_path: apiPath
            }));
        });
    }, [queryName, queryLimit, queryOffset, dispatch]);

    const handlePageChange = (page: number) => {
        const newOffset = (page - 1) * queryLimit;
        const newParams = new URLSearchParams(searchParams);
        newParams.set('limit', queryLimit.toString());
        newParams.set('offset', newOffset.toString());
        
        setSearchParams(newParams);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Suspense fallback={<LoadingScreen />}>
            <Carrousell />
            <CardContainer>
                <Configurator menuOptions={MENU_OPTIONS} />
                <MainCard>
                    {filteredData && filteredData.length > 0 ? (
                        filteredData.map((item: any) => (
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
                        status === 'success' && <p>No se encontraron restaurantes.</p>
                    )}
                    {status === 'loading' && <LoadingScreen />}
                </MainCard>
            </CardContainer>

            {/* El Pager ahora recibe el total real de Redux */}
            <Pager
                totalItems={totalItems} 
                itemsPerPage={queryLimit}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
            <Footer />
        </Suspense>
    );
}

export default Restaurants;