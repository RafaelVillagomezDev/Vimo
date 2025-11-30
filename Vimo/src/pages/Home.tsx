
import { lazy } from 'react';

const Carrousell = lazy(() => import('../components/carrousell/Carrousell'));
function Home() {
    return (
        <>
            <Carrousell
                
                
            />
        </>
    );
}

export default Home;
