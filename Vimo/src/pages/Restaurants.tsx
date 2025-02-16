import Portada_576 from '../assets/pictures/restaurant/Portada_restaurant _576.jpg';
import Portada_768 from '../assets/pictures/restaurant/Portada_restaurant _768.jpg';
import Portada_1200 from '../assets/pictures/restaurant/Portada_restaurant _1200.jpg';
import { lazy } from 'react';
import Footer from '../components/footer/Footer';

const Carrousell = lazy(() => import('../components/carrousell/Carrousell'));
const CardPost = lazy(() => import('../components/cardPost/CardPost'));

function Restaurants() {
    return (
        <>
            <Carrousell
                image576={Portada_576}
                image768={Portada_768}
                image1200={Portada_1200}
                altText="Restaurante Madrid"
                subtitle='Restaurantes'
            />
            <CardPost />
            <Footer/>
        </>
    );
}

export default Restaurants;
