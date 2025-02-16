import { lazy } from 'react';
import Footer from '../components/footer/Footer';

const CardGallery = lazy(() => import('../components/cardGallery/cardGallery'));

function Restaurant() {
    return (
        <>
            <CardGallery/>
            <Footer />
        </>
    );
}

export default Restaurant;
