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
import { RestaurantItem } from '../../slices/restaurant/restaurant-slice';

function CardPost() {
    const [verMas, setVerMas] = useState(false);

    const handleVerMas = () => setVerMas(true);
    const handleVerMenos = () => setVerMas(false);

    const { loading, restaurant } = useAppSelector((state) => state.restaurant);
    const { data } = restaurant;

    // APi Get

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!data || data.length === 0) {
            startTransition(() => {
                dispatch(getRestaurant());
            });
        }
    }, [data, dispatch]);
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
                    {restaurant.count > 0 && loading ? (
                        data.map((restaurant: RestaurantItem, index: number) => {
                            const urls_images = JSON.parse(restaurant.image_url);
                            return (
                                <Card key={index}>
                                    <CardSection>
                                        <LinkCard to={restaurant.restaurant_id}>
                                            <CardImage
                                                alt={restaurant.restaurant_name}
                                                src={urls_images}
                                                loading="lazy"
                                            />
                                        </LinkCard>
                                    </CardSection>

                                    <CardSection>
                                        <CardBox>
                                            <CardSubtitle>
                                                Top 1 <Icon>editor_choice</Icon>
                                            </CardSubtitle>
                                            <ButtonOption>Michelin</ButtonOption>
                                        </CardBox>
                                        <CardBox>
                                            <LinkCard to={restaurant.restaurant_id}>
                                                <CardTitleText>
                                                    {index}. {restaurant.restaurant_name}
                                                </CardTitleText>
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
                                                {restaurant.location_address}
                                            </CardtTextFlex>
                                        </CardBox>
                                        <CardBox>
                                            <CardtTextFlex>
                                                <Icon>restaurant</Icon>
                                                {restaurant.restaurant_type_food} . Precio medio:
                                                20€
                                            </CardtTextFlex>
                                        </CardBox>
                                        <CardBoxFlex>
                                            <CardText>
                                                {restaurant.restaurant_description}{' '}
                                                {verMas && restaurant.restaurant_description}
                                            </CardText>
                                            <ButtonVerMas
                                                onClick={verMas ? handleVerMenos : handleVerMas}>
                                                {verMas ? 'Ver menos' : 'Ver más'}
                                            </ButtonVerMas>
                                        </CardBoxFlex>
                                        <CardIcons>
                                            <LinkIcon to={restaurant.restaurant_web}>
                                                <Icon>language</Icon>Web
                                            </LinkIcon>
                                            <LinkIcon to={restaurant.restaurant_web}>
                                                <Icon>menu_book</Icon>Menu
                                            </LinkIcon>
                                            <TelLink href={`tel:${restaurant.restaurant_phone}`}>
                                                <Icon>call_quality</Icon>
                                                {restaurant.restaurant_phone}
                                            </TelLink>
                                        </CardIcons>
                                    </CardSection>
                                </Card>
                            );
                        })
                    ) : (
                        <CardBox>
                            <CardText>No hay resturantes disponibles </CardText>
                        </CardBox>
                    )}
                </BoxCard>
            </SectionCard>
        </MainCard>
    );
}

export default CardPost;
