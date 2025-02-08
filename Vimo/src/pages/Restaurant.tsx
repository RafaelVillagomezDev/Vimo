import Portada_576 from '../assets/pictures/restaurant/Portada_restaurant _576.jpg';
import Portada_768 from '../assets/pictures/restaurant/Portada_restaurant _768.jpg';
import Portada_1200 from '../assets/pictures/restaurant/Portada_restaurant _1200.jpg';
import { lazy } from 'react';

const Carrousell = lazy(() => import('../components/carrousell/Carrousell'));
const CardPost = lazy(() => import('../components/cardPost/CardPost'));

function History() {
    return (
        <>
            <Carrousell
                image576={Portada_576}
                image768={Portada_768}
                image1200={Portada_1200}
                altText="Banco de España"
            />
            <CardPost />
        </>
    );
}

export default History;
