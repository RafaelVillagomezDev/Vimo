import Seeker from '../../atoms/seeker/Seeker';
import Navbar from '../navbar/Navbar';
import { CarrousellContainer, CarrousellMain, CarrousellText } from './styles/CarrousellStyle';

function Carrousell() {
    return (
        <>
            <Navbar />
            <CarrousellContainer>
                <CarrousellMain>
                    <CarrousellText>
                        Planea y reserva en cualquiera de nuestras ilimitadas opciones
                    </CarrousellText>
                    <Seeker />
                </CarrousellMain>
            </CarrousellContainer>
        </>
    );
}

export default Carrousell;
