import hands_map from '../assets/pictures/banner/hands_map.png';

import { lazy } from 'react';
import Footer from '../components/footer/Footer';

const Carrousell = lazy(() => import('../components/carrousell/Carrousell'));
const CardPost = lazy(() => import('../components/cardPost/CardPost'));

function Restaurants() {
    return (
        <>
            <Carrousell
                hands_map={hands_map}
            />
            <CardPost />
            <Footer />
        </>
    );
}

export default Restaurants;
