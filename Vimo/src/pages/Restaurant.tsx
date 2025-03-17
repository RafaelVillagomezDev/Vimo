import { lazy } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const CardGallery = lazy(() => import('../components/cardGallery/cardGallery'));

function Restaurant() {
    return (
        <>
            <Navbar />
            <CardGallery />
            <Footer />
        </>
    );
}

export default Restaurant;
