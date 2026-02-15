import { lazy } from 'react';

const Carrousell = lazy(() => import('../components/carrousell/Carrousell'));
const CarrousellSlide = lazy(() => import('../components/carrousellSlide/CarrousellSlide'));

import disco_icon from '@assets/icons/disco_icon.webp';
import lugar_icon from '@assets/icons/lugar_icon.webp';
import place_icon from '@assets/icons/place_icon.webp';
import restaurant_icon from '@assets/icons/restaurant_icon.webp';
import CarrousellCard from '../atoms/carrousellCard/CarrousellCard';
import { CarrousellTitle } from '../styles/commonStyles';
import Footer from '@components/footer/Footer';

const dataCarrousel = [
    { to: '/restaurants', iconSrc: restaurant_icon, text: 'Restaurantes' },
    { to: '/restaurants', iconSrc: disco_icon, text: 'Pubs' },
    { to: '/restaurants', iconSrc: place_icon, text: 'Rurales' },
    { to: '/restaurants', iconSrc: lugar_icon, text: 'Vanguardistas' },
];

function Home() {
    return (
        <>
            <Carrousell />
            <CarrousellTitle>Categorias</CarrousellTitle>
            <CarrousellSlide slidesData={dataCarrousel} />
            <CarrousellTitle>Nuestras mejores ofertas</CarrousellTitle>
            <CarrousellCard />
            <Footer />
        </>
    );
}

export default Home;
