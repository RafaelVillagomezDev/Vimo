
import { lazy} from 'react';
import Footer from '../components/footer/Footer';


const Carrousell = lazy(() => import('../components/carrousell/Carrousell'));
const CardPost = lazy(() => import('../components/cardPost/CardPost'));

function Restaurants() {

  
  
   

    
    return (
        <>
            <Carrousell
               
            />
            <CardPost  />
            <Footer />
        </>
    );
}

export default Restaurants;
