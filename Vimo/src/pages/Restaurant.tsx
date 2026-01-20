import { Suspense, useMemo } from 'react';
import Navbar from '../components/navbar/Navbar';
import { useAppSelector } from '../custom/hooks/call/useAppSelector';
import { useParams } from 'react-router-dom';
import { selectRestaurantById } from '../slices/restaurant/restaurant-slice';
import LoadingScreen from './LoadingScreen';
import { CardGallery } from '@components/cardGallery/cardGallery';
import { PageSection } from '@components/pageSection/PageSection';
import Description from "@components/descriptionSection/DescriptionSection";
import MenuSection from "@components/menuSection/MenuSection";
import ReviewSection from "@components/reviewSection/ReviewSection";

// Configuración de las pestañas
const TABS_CONFIG = [
    { id: 'desc', label: 'Descripción' },
    { id: 'menu', label: 'Menú' },
    { id: 'reviews', label: 'Opiniones' }
];

function Restaurant() {
    const { id } = useParams<{ id: string }>();

    const selectedRestaurant = useAppSelector((state) =>
        id ? selectRestaurantById(state, id) : null
    );

    // Mapeo de componentes para el panel
    const SECTIONS_CONTENT = useMemo(() => ({
        desc: <Description />,
        menu: <MenuSection />,
        reviews: <ReviewSection />,
    }), []);

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

                {/* Refactorizado: PageSection con hijos (Children) */}
                <Suspense fallback={<LoadingScreen />}>
                    <PageSection defaultTab="desc">
                        {/* Aquí insertamos los componentes uno tras otro */}
                        <PageSection.Tabs tabs={TABS_CONFIG} />
                        <PageSection.Panel sections={SECTIONS_CONTENT} />
                    </PageSection>
                    {/*Seccion contacto */}
                    

                </Suspense>
                <CardGallery data={selectedRestaurant}>
                        <PageSection.Contact />
                    </CardGallery>


            </main>
        </>
    );
}

export default Restaurant;