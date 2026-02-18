import { startTransition, Suspense, useEffect, useMemo } from 'react';
import Navbar from '../components/navbar/Navbar';
import { useAppSelector } from '../custom/hooks/call/useAppSelector';
import { useParams } from 'react-router-dom';
import { selectRestaurantById, selectRestaurantStatus } from '../slices/restaurant/restaurant-slice';
import LoadingScreen from './LoadingScreen';
import { CardGallery } from '@components/cardGallery/cardGallery';
import { PageSection } from '@components/pageSection/PageSection';
import Description from '@components/descriptionSection/DescriptionSection';
import MenuSection from '@components/menuSection/MenuSection';
import ReviewSection from '@components/reviewSection/ReviewSection';
import Footer from '@components/footer/Footer';

import { fetchTokenAndRestaurant } from '../../src/slices/restaurant/restaurant-api';
import { useAppDispatch } from '../../src/custom/hooks/call/useAppDispatch';

const TABS_CONFIG = [
    { id: 'desc', label: 'Descripción' },
    { id: 'menu', label: 'Menú' },
    { id: 'reviews', label: 'Opiniones' },
];

function Restaurant() {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const selectedRestaurant = useAppSelector((state) =>
        id ? selectRestaurantById(state, id) : null
    );
    
    // Obtenemos el estado de la petición desde el slice
    const status = useAppSelector(selectRestaurantStatus);

    // --- LÓGICA DE NOT FOUND ---
    // Si la API ya terminó y no encontró el restaurante, o el estado es 'failed'
    // lanzamos una respuesta que activará el errorElement (NotFound)
    if (status === 'failed' || (status === 'success' && !selectedRestaurant && id)) {
        throw new Response("Not Found", { status: 404 });
    }

    const SECTIONS_CONTENT = useMemo(
        () => ({
            desc: <Description />,
            menu: <MenuSection />,
            reviews: <ReviewSection />,
        }),
        []
    );

    useEffect(() => {
        // Solo disparamos la carga si no tenemos el restaurante y no estamos ya cargando
        if (!selectedRestaurant && status !== 'loading') {
            startTransition(() => {
                dispatch(
                    fetchTokenAndRestaurant({
                        api_url: 'http://localhost:3000/api/v1/restaurant/',
                        api_path: id ? `${id}` : '',
                    })
                );
            });
        }
    }, [selectedRestaurant, dispatch, id, status]);

    const handleShareLogic = (url: string) => {
        console.log('URL compartida:', url);
    };

    // Mientras carga y no hay datos, mostramos LoadingScreen
    if (status === 'loading' || !selectedRestaurant) {
        return <LoadingScreen />;
    }

    return (
        <>
            <Navbar />
            <main>
                <CardGallery data={selectedRestaurant}>
                    <CardGallery.Header onShare={handleShareLogic} isVerified={true} />
                    <CardGallery.Visuals />
                    <CardGallery.Footer price="15$" rating="9.5/10" />
                </CardGallery>

                <Suspense fallback={<LoadingScreen isOverlay />}>
                    <PageSection data={selectedRestaurant} defaultTab="desc">
                        <PageSection.Tabs tabs={TABS_CONFIG} />
                        <Suspense fallback={<LoadingScreen isOverlay />}>
                            <PageSection.Panel sections={SECTIONS_CONTENT} />
                        </Suspense>
                        <PageSection.Contact />
                        <PageSection.Location />
                    </PageSection>
                </Suspense>
            </main>
            <Footer />
        </>
    );
}

export default Restaurant;