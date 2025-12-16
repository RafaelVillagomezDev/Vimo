// src/pages/Restaurant.jsx (Versión Final)

import { lazy,  } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import { useAppSelector } from '../custom/hooks/call/useAppSelector';
import { useParams } from 'react-router-dom';
import { selectRestaurantById } from '../slices/restaurant/restaurant-slice';


const CardGallery = lazy(() => import('../components/cardGallery/cardGallery'));

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
            <CardGallery data={selectedRestaurant} 
                onShare={handleShareLogic} 
                isVerified={true} />
            
        </>
    );
}

export default Restaurant;