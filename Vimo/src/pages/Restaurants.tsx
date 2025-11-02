import hands_map from '../assets/pictures/banner/hands_map.png';
import { lazy, startTransition, useEffect } from 'react';
import Footer from '../components/footer/Footer';
import { useAppDispatch } from '../custom/hooks/call/useAppDispatch';
import { useAppSelector } from '../custom/hooks/call/useAppSelector';
import { getToken } from '../auth/auth-api';

const Carrousell = lazy(() => import('../components/carrousell/Carrousell'));
const CardPost = lazy(() => import('../components/cardPost/CardPost'));

function Restaurants() {

    const auth = useAppSelector((state) => state.auth.data.user?.token);
    const dispatch = useAppDispatch();


    const API_BASE_URL = "http://localhost:3000/api/v1/anonymous/token";
    const API_PATH = "/anonymous/token";
    const API_KEY = import.meta.env.VITE_API_KEY_TOKEN;


    useEffect(() => {
        startTransition(() => {
            dispatch(getToken({
                api_url: API_BASE_URL,
                api_path: API_PATH,
                method: 'POST',
                headers: { 'x-api-key': API_KEY },
            }));
        });

    }, [dispatch, API_KEY])

    // Observar el estado en cada renderizado
    console.log("Estado de Auth:", auth);

    
    return (
        <>
            <Carrousell
                hands_map={hands_map}
            />
            <CardPost  />
            <Footer />
        </>
    );
}

export default Restaurants;
