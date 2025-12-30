// src/pages/Restaurant.tsx
import { lazy, Suspense } from 'react';
import Navbar from '../components/navbar/Navbar';
import { useAppSelector } from '../custom/hooks/call/useAppSelector';
import { useParams } from 'react-router-dom';
import { selectRestaurantById } from '../slices/restaurant/restaurant-slice';
import LoadingScreen from './LoadingScreen';
import CardGallery from '@components/cardGallery/cardGallery';

// PageSection se mantiene lazy porque suele tener contenido pesado debajo del fold
const PageSection = lazy(() => import('../components/pageSection/PageSection'));

function Restaurant() {
    const { id } = useParams<{ id: string }>();
    
    // Usamos useMemo para evitar cálculos costosos en cada render
    const selectedRestaurant = useAppSelector((state) =>
        id ? selectRestaurantById(state, id) : null
    );

    // useCallback o una función fuera del componente evitaría re-crearla, 
    // pero para logs simples está bien así.
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
                <CardGallery 
                    data={selectedRestaurant} 
                    onShare={handleShareLogic} 
                    isVerified={true} 
                />
                
                {/* El resto de la página se carga en segundo plano */}
                <Suspense fallback={<div style={{ height: '500px' }} />}>
                    <PageSection />
                </Suspense>
            </main>
        </>
    );
}

export default Restaurant;