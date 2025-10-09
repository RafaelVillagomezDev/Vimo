import animationData from '../assets/lottie/lottie_load.json';
import Lottie from 'react-lottie-player';

function LoadingScreen () {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed', // Cubre toda la pantalla y se mantiene fija
                top: 0,
                left: 0,
                width: '100vw', // Cubre todo el ancho de la pantalla
                height: '100vh', // Cubre todo el alto de la pantalla
                backgroundColor: 'white',
                zIndex: 1, // Asegúrate de que esté por encima de otros elementos
            }}>
            <Lottie
                loop
                play
                animationData={animationData}
                style={{ width: 400, height: 400 }} // Ajustar tamaño
            />
        </div>
    );
};

export default LoadingScreen;
