import Post from '../components/post/Post';
import Portada_576 from '../assets/pictures/spain/banco_españa_576.jpg';
import Portada_768 from '../assets/pictures/spain/banco_españa_768.jpg';
import Portada_1200 from '../assets/pictures/spain/banco_españa_1200.jpg';
import { lazy } from 'react';

const Carrousell = lazy(() => import('../components/carrousell/Carrousell'));
function History() {
    return (
        <>
            <Carrousell
                image576={Portada_576}
                image768={Portada_768}
                image1200={Portada_1200}
                altText="Banco de España"
                subtitle="Historia"
            />
            <Post />
        </>
    );
}

export default History;
