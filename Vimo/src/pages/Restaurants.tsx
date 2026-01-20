import { lazy, Suspense, useEffect, startTransition } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { useAppDispatch } from '../custom/hooks/call/useAppDispatch';

import { useSiteUrlBuilder } from '../custom/hooks/render/useSiteUrlBuilder';

import Footer from '../components/footer/Footer';
import LoadingScreen from './LoadingScreen';
import { useAppSelector } from '../custom/hooks/call/useAppSelector';
import { fetchTokenAndRestaurant } from '../slices/restaurant/restaurant-api';

import CardPost from '@components/cardPost/CardPost';
import Configurator from '@components/configurator/Configurator';
import { Card, CardContainer, MainCard } from '@components/cardPost/styles/CardPostStyle';
const Carrousell = lazy(() => import('@components/carrousell/Carrousell'));



const MENU_OPTIONS = [
    { label: 'Tipo de comida', subOptions: ['Mediterranea', 'Japonesa', 'Mexicana', 'China', 'Turca'] },
    { label: 'Precio', subOptions: ['< 15€', '15€-30€', '> 30€'] },
    { label: 'Guía Michelin', subOptions: ['Guía MICHELIN', '3 estrellas', '2 estrellas', '1 estrella'] },
];

const API_BASE_URL = "http://localhost:3000/api/v1/restaurant/";

function Restaurants() {
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const [searchParams] = useSearchParams();

    const { restaurant, status } = useAppSelector((state) => state.restaurant);

    const apiUrl = useSiteUrlBuilder({
        pathId: id,
        baseURL: API_BASE_URL,
        filters: { name: searchParams.get("name"), address: searchParams.get("address") },
    });

    useEffect(() => {
        if (!apiUrl) return;
        const apiPath = apiUrl.replace(API_BASE_URL, '').startsWith('/')
            ? apiUrl.replace(API_BASE_URL, '')
            : '/' + apiUrl.replace(API_BASE_URL, '');

        startTransition(() => {
            dispatch(fetchTokenAndRestaurant({ api_url: apiUrl, api_path: apiPath }));
        });
    }, [id, apiUrl, dispatch]);

    return (
        <Suspense fallback={<LoadingScreen />}>
            <Carrousell />
            <CardContainer>
                <Configurator menuOptions={MENU_OPTIONS} />
                <MainCard>
                    {restaurant?.data?.map((item: any) => (
                        <CardPost
                            key={item.id}
                            data={item}
                        >
                            <CardPost.Image />
                            <CardPost.Content>
                                <CardPost.Header />
                                <CardPost.Description />
                                <CardPost.Actions />
                            </CardPost.Content>
                       
                        </CardPost>
                    ))}
                </MainCard>


            </CardContainer>

            <Footer />
        </Suspense>
    );
}

export default Restaurants;