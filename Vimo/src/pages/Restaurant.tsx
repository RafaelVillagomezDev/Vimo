// src/pages/Restaurant.jsx (Versión Final)

import { lazy, Suspense, } from 'react';
import Navbar from '../components/navbar/Navbar';
import { useAppSelector } from '../custom/hooks/call/useAppSelector';
import { useParams } from 'react-router-dom';
import { selectRestaurantById } from '../slices/restaurant/restaurant-slice';
import LoadingScreen from './LoadingScreen';
import CardGallery from '@components/cardGallery/cardGallery';



const PageSection = lazy(() => import('../components/pageSection/PageSection'));

function Restaurant() {

    const { id } = useParams<{ id: string }>();
    const selectedRestaurant = useAppSelector((state) =>
        id ? selectRestaurantById(state, id) : null
    );

    const handleShareLogic = (url: string) => {
        console.log('URL compartida:', url);
        return url;
    };


    return (
        <>
            <Navbar />
            <CardGallery data={selectedRestaurant} onShare={handleShareLogic} isVerified={true} />
            <Suspense fallback={<LoadingScreen />}>

                <PageSection />
            </Suspense>


        </>
    );
}

export default Restaurant;