import {
    BoxCard,
    ButtonOption,
    ButtonVerMas,
    Card,
    CardBox,
    CardBoxFlex,
    CardIcons,
    CardImage,
    CardOption,
    CardSection,
    CardSectionText,
    CardSubtitle,
    CardText,
    CardTitleText,
    CardtTextFlex,
    Icon,
    LinkCard,
    LinkIcon,
    MainCard,
    SectionCard,
    TelLink,
} from './styles/CardPostStyle';
import { startTransition, useEffect, useState } from 'react';
import Configurator from '../configurator/Configurator';
import { useAppDispatch } from '../../custom/hooks/call/useAppDispatch';
import { fetchTokenAndRestaurant } from '../../slices/restaurant/restaurant-api';
import { useAppSelector } from '../../custom/hooks/call/useAppSelector';
import { RestaurantDTO } from '../../slices/restaurant/restaurant-slice';
import { useSiteUrlBuilder } from '../../custom/hooks/render/useSiteUrlBuilder';
import { useParams, useSearchParams } from 'react-router-dom';



function CardPost() {
    const [verMas, setVerMas] = useState(false);

    const handleVerMas = () => setVerMas(true);
    const handleVerMenos = () => setVerMas(false);

    const { restaurant } = useAppSelector((state) => state.restaurant);
    const { data } = restaurant ?? {};
    const { id } = useParams<{ id: string }>();

    const [searchParams] = useSearchParams();

    // 💡 Constante para la URL Base (debe ser el origen de la API)
    const API_BASE_URL = "http://localhost:3000/api/v1/restaurant/";

    // APi Get
    const dispatch = useAppDispatch();

    const getApiPath = (fullUrl: string, baseURL: string): string => {
        //  Asegura que el path empiece con el '/' para coincidir con req.originalUrl.
        const path = fullUrl.replace(baseURL, '');
        return baseURL.endsWith('/') ? '/' + path : path;
    };
    const customFilters = {
        name: searchParams.get("name"),
        address: searchParams.get("address"),

    }; 

    const apiUrl = useSiteUrlBuilder({
        pathId: id, // El ID capturado de la URL de la ruta
        baseURL: API_BASE_URL,
        filters: customFilters, // El objeto de filtros genéricos
    });


    const apiPath = apiUrl ? getApiPath(apiUrl, API_BASE_URL) : '';

    useEffect(() => {

        startTransition(() => {
            dispatch(fetchTokenAndRestaurant({
                api_url: apiUrl,
                api_path: apiPath,
            }));
        });

    }, [id, apiUrl, apiPath, dispatch]);

    interface MenuOption {
        label: string;
        subOptions: string[];
    }
    const menuOptions: MenuOption[] = [
        {
            label: 'Tipo de comida ',
            subOptions: ['Mediterranea', 'Japonesa', 'Mexicana', 'China', 'Turca'],
        },
        {
            label: 'Precio',
            subOptions: [
                'Menos de 15€ por persona.',
                'Entre 15€ y 30€ por persona.',
                'Más de 30€ por persona.',
            ],
        },
        {
            label: 'Guía Michelin',
            subOptions: [
                'Guía MICHELIN',
                '3 estrellas MICHELIN',
                '2 estrellas MICHELIN',
                '1 estrella MICHELIN',
            ],
        },
    ];
    return (
        <MainCard>
            <SectionCard>
                <CardOption>
                    <Configurator menuOptions={menuOptions} />
                </CardOption>
                <BoxCard>
                    {restaurant?.count > 0 ? (
                        data.map((restaurant: RestaurantDTO) => {

                            return (
                                <Card key={restaurant.id}>


                                    {restaurant.images.map((image, index) => (

                                        <CardSection key={image.url || index}>
                                            <LinkCard to={restaurant.id}>
                                                <CardImage
                                                    alt={`${restaurant.name} - Imagen ${index + 1}`}
                                                    src={image.url}
                                                    loading="lazy"
                                                />
                                            </LinkCard>
                                        </CardSection>
                                    ))}


                                    <CardSectionText>
                                        <CardBox>
                                            <CardSubtitle>
                                                Top 1 <Icon>editor_choice</Icon>
                                            </CardSubtitle>
                                            <ButtonOption>Michelin</ButtonOption>
                                        </CardBox>

                                        <CardBox>
                                            <LinkCard to={restaurant.id}>
                                                <CardTitleText>{restaurant.name}</CardTitleText>
                                            </LinkCard>
                                        </CardBox>

                                        <CardBox>
                                            <CardtTextFlex>
                                                <Icon>kid_star</Icon> Puntuación (9,6)
                                            </CardtTextFlex>
                                        </CardBox>

                                        <CardBox>
                                            <CardtTextFlex>
                                                <Icon>location_on</Icon>
                                                {restaurant.location?.address}
                                            </CardtTextFlex>
                                        </CardBox>

                                        <CardBox>
                                            <CardtTextFlex>
                                                <Icon>restaurant</Icon>
                                                {restaurant.type_food} . Precio medio: 20€
                                            </CardtTextFlex>
                                        </CardBox>

                                        <CardBoxFlex>
                                            <CardText>
                                                {restaurant.description}{' '}
                                                {verMas && restaurant.description}
                                            </CardText>
                                            <ButtonVerMas
                                                onClick={verMas ? handleVerMenos : handleVerMas}>
                                                {verMas ? 'Ver menos' : 'Ver más'}
                                            </ButtonVerMas>
                                        </CardBoxFlex>

                                        <CardIcons>
                                            <LinkIcon to={restaurant.web}>
                                                <Icon>language</Icon> Web
                                            </LinkIcon>
                                            <LinkIcon to={restaurant.web}>
                                                <Icon>menu_book</Icon> Menú
                                            </LinkIcon>
                                            <TelLink href={`tel:${restaurant.phone}`}>
                                                <Icon>call_quality</Icon>
                                                {restaurant.phone}
                                            </TelLink>
                                        </CardIcons>
                                    </CardSectionText>

                                </Card>
                            );
                        })
                    ) : (
                        <CardBox>
                            <CardText>No hay restaurantes disponibles</CardText>
                        </CardBox>
                    )}
                </BoxCard>
            </SectionCard>
        </MainCard>
    );
}

export default CardPost;
