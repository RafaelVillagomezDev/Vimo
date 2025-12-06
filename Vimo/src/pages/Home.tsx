
import { lazy } from 'react';


const Carrousell = lazy(() => import('../components/carrousell/Carrousell'));
 const CarrousellSlide = lazy(() => import('../components/carrousellSlide/CarrousellSlide'));

import disco_icon from '@assets/icons/disco_icon.webp';
import lugar_icon from '@assets/icons/lugar_icon.webp';
import transport_icon from '@assets/icons/transport_icon.webp';
import place_icon from '@assets/icons/place_icon.webp';
import restaurant_icon from '@assets/icons/restaurant_icon.webp';
import CarrousellCard from '../atoms/carrousellCard/CarrousellCard';



const dataCarrousel = [
    { to: '/restaurants', iconSrc: restaurant_icon, text: 'Restaurantes' },
    { to: '/discos', iconSrc: disco_icon, text: 'Discotecas' },
    { to: '/transport', iconSrc: transport_icon, text: 'Transporte' },
    { to: '/places', iconSrc: place_icon, text: 'Sitios' },
    { to: '/lugares', iconSrc: lugar_icon, text: 'Lugares' },
];

function Home() {
    return (
        <>
            <Carrousell/>
            <CarrousellSlide slidesData={dataCarrousel}/>
            <CarrousellCard/>
        </>
    );
}

export default Home;
