import { startTransition, Suspense, useEffect, useMemo } from 'react';
import Navbar from '../components/navbar/Navbar';
import { useAppSelector } from '../custom/hooks/call/useAppSelector';
import { useParams } from 'react-router-dom';
import { selectRestaurantById } from '../slices/restaurant/restaurant-slice';
import LoadingScreen from './LoadingScreen';
import { CardGallery } from '@components/cardGallery/cardGallery';
import { PageSection } from '@components/pageSection/PageSection';
import Description from '@components/descriptionSection/DescriptionSection';
import MenuSection from '@components/menuSection/MenuSection';
import ReviewSection from '@components/reviewSection/ReviewSection';
import Footer from '@components/footer/Footer';

import { fetchTokenAndRestaurant } from '../../src/slices/restaurant/restaurant-api';
import { useAppDispatch } from '../../src/custom/hooks/call/useAppDispatch';

// Configuración de las pestañas
const TABS_CONFIG = [
    { id: 'desc', label: 'Descripción' },
    { id: 'menu', label: 'Menú' },
    { id: 'reviews', label: 'Opiniones' },
];

function Restaurant() {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch()

    const selectedRestaurant = useAppSelector((state) =>
        id ? selectRestaurantById(state, id) : null
    );

    // Mapeo de componentes para el panel
    const SECTIONS_CONTENT = useMemo(
        () => ({
            desc: <Description />,
            menu: <MenuSection />,
            reviews: <ReviewSection />,
        }),
        []
    );

    // EFECTO DE CARGA: Si no hay restaurante, lo pedimos a la API
    useEffect(() => {
        if (!selectedRestaurant) {
            startTransition(() => {
                dispatch(
                    fetchTokenAndRestaurant({
                        api_url: 'http://localhost:3000/api/v1/restaurant/',
                        api_path: id ? `/${id}` : '',
                    })
                );
            });
        }
    }, [selectedRestaurant, dispatch, id]); // Se ejecuta si selectedRestaurant es null

    const handleShareLogic = (url: string) => {
        console.log('URL compartida:', url);
    };

    if (!selectedRestaurant) {
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

                <Suspense fallback={<LoadingScreen />}>
                    <PageSection data={selectedRestaurant} defaultTab="desc">
                        <PageSection.Tabs tabs={TABS_CONFIG} />
                        <Suspense fallback={<LoadingScreen />}>
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
