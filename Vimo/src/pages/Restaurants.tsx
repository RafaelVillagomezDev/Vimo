import { lazy, Suspense, useEffect, startTransition, useCallback, useState } from 'react';
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
import { useFilter } from '@src/custom/hooks/render/useFilter';
import { ErrorMessage, NoResults } from '@components/errorMessage/ErrorMessage';

const Carrousell = lazy(() => import('@components/carrousell/Carrousell'));

const MENU_OPTIONS = [
    { label: 'Tipo de comida', subOptions: ['Japonesa', 'Española', 'China', 'Turca'] },
    { label: 'Ciudad', subOptions: ['Madrid', 'Barcelona', 'Sevilla', 'Bilbao'] },
];

const API_BASE_URL = 'http://localhost:3000/api/v1/restaurant';

function Restaurants() {
    const dispatch = useAppDispatch();
    const { name, address, type_food, limit, offset, setSearchParams } = useFilter();

    const filteredData = useAppSelector(selectFilteredRestaurants);
    const totalItems = useAppSelector(selectRestaurantCount);
    const status = useAppSelector(selectRestaurantStatus);

    // Estado para controlar el retraso visual del loading
    const [showDelayedLoading, setShowDelayedLoading] = useState(false);

    //  Lógica de retraso para evitar parpadeos en conexiones rápidas
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (status === 'loading') {
            timer = setTimeout(() => setShowDelayedLoading(true), 200);
        } else {
            setShowDelayedLoading(false);
        }
        return () => clearTimeout(timer);
    }, [status]);

    // Efecto de carga de datos
    useEffect(() => {
        dispatch(setSearchTerm(name));

        startTransition(() => {
            const params = new URLSearchParams();
            if (name.trim()) params.append('name', name.trim().toLowerCase());
            if (address.trim()) params.append('address', address.trim().toLowerCase());
            if (type_food.trim()) params.append('type_food', type_food.trim().toLowerCase());

            params.append('offset', offset.toString());
            params.append('limit', limit.toString());

            const apiPath = `?${params.toString()}`;
            
            dispatch(fetchTokenAndRestaurant({
                api_url: `${API_BASE_URL}${apiPath}`,
                api_path: apiPath
            }));
        });
    }, [name, address, type_food, limit, offset, dispatch]);

    const handlePageChange = useCallback((page: number) => {
        const newOffset = (page - 1) * limit;
        setSearchParams(prev => {
            const next = new URLSearchParams(prev);
            next.set('offset', newOffset.toString());
            return next;
        }, { replace: true });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [limit, setSearchParams]);

    const currentPage = Math.floor(offset / limit) + 1;

    const renderContent = () => {
        // Carga inicial (sin datos previos)
        if (status === 'loading' && filteredData.length === 0) return <LoadingScreen />;
        if (status === 'failed') return <ErrorMessage message="Error de conexión" />;
        if (status === 'success' && filteredData.length === 0) return <NoResults />;

        return filteredData.map((item, index) => (
            <CardPost key={item.id} data={item}>
                <CardPost.Image />
                <CardPost.Content>
                    <CardPost.Header id={index + 1 + offset} />
                    <CardPost.Description />
                    <CardPost.Actions />
                </CardPost.Content>
            </CardPost>
        ));
    };

    return (
        <Suspense fallback={<LoadingScreen />}>
            <Carrousell />
            <CardContainer>
                <Configurator menuOptions={MENU_OPTIONS} />
                <MainCard style={{ position: 'relative', minHeight: '600px' }}>
                    
                    {/* Overlay inteligente: solo si hay datos y la carga tarda más de 200ms */}
                    {showDelayedLoading && filteredData.length > 0 && (
                        <ContainerLoading>
                            <LoadingScreen isOverlay={true} />
                        </ContainerLoading>
                    )}

                    <ContainerRender 
                        $status={status}
                    >
                        {renderContent()}
                    </ContainerRender>
                </MainCard>
            </CardContainer>

            {status === 'success' && totalItems > limit && (
                <Pager
                    totalItems={totalItems}
                    itemsPerPage={limit}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            )}
            <Footer />
        </Suspense>
    );
}

export default Restaurants;