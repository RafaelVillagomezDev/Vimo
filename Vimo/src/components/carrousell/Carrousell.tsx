import Navbar from '../navbar/Navbar';
import { CarrousellContainer, CarrousellPicture, CarrousellTitle } from './styles/CarrousellStyle';

import Portada_576 from '../../assets/pictures/japan/tokio_576.jpg'; // Asegúrate de que esta imagen exista
import Portada_768 from '../../assets/pictures/japan/tokio_768.jpg'; // Asegúrate de que esta imagen exista
import Portada_1200 from '../../assets/pictures/japan/tokio_1200.jpg';

function Carrousell() {
    return (
        <>
            <CarrousellContainer>
                <CarrousellPicture
                    srcSet={`
                        ${Portada_576} 576w,
                        ${Portada_768} 768w,
                        ${Portada_1200} 1200w,
                    `}
                    sizes={`
                        (max-width: 576px) 100vw,
                        (max-width: 768px) 80vw,
                        (max-width: 1200px) 60vw,
                    `}
                    alt="Vista de Tokio, Japón"
                    loading="lazy"
                />
                <Navbar />
                <CarrousellTitle>JAPÓN</CarrousellTitle>
            </CarrousellContainer>
        </>
    );
}

export default Carrousell;
