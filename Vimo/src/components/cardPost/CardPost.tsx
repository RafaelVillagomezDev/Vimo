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
import { getRestaurant } from '../../slices/restaurant/restaurant-api';
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
    // APi Get
    const dispatch = useAppDispatch();


    const customFilters = {
        name: searchParams.get("name"),
        address: searchParams.get("address"),

    };
    const apiUrl = useSiteUrlBuilder({
        pathId: id, // El ID capturado de la URL de la ruta
        baseURL: "http://localhost:3000/api/v1/restaurant/",
        filters: customFilters, // El objeto de filtros genéricos
    });


    useEffect(() => {

        if (apiUrl) {
            startTransition(() => {
                dispatch(getRestaurant({
                    api_url: apiUrl, // URL construida con useSiteUrlBuilder
                    method: 'GET',  
                    body: { id: id }
                }));
            });
        }
    }, [id,apiUrl, dispatch]);

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
                        data.map((restaurant: RestaurantDTO, index: number) => {
                            return (
                                <Card key={restaurant.id}>
                                    <CardSection>
                                        <LinkCard to={restaurant.id}>
                                            <CardImage
                                                alt={restaurant.name}
                                                src={restaurant.images[index]?.url}
                                                loading="lazy"
                                            />

                                        </LinkCard>
                                    </CardSection>

                                    {/* resto de la tarjeta */}
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
