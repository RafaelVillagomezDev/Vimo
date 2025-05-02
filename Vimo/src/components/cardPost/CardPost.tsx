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
    LinkIcon,
    MainCard,
    SectionCard,
    TelLink,
} from './styles/CardPostStyle';
import Portada_restaurante from '../../assets/pictures/restaurant/Portada_restaurant _1200.jpg';
import { startTransition, useEffect, useState } from 'react';
import Configurator from '../configurator/Configurator';
import { useAppDispatch } from '../../custom/hooks/call/useAppDispatch';
import { getRestaurant } from '../../slices/restaurant/restaurant-api';
import { useAppSelector } from '../../custom/hooks/call/useAppSelector';

function CardPost() {
    const [verMas, setVerMas] = useState(false);

    const handleVerMas = () => setVerMas(true);
    const handleVerMenos = () => setVerMas(false);

    // APi Get

    const dispatch = useAppDispatch();
    useEffect(() => {
        startTransition(() => {
            dispatch(getRestaurant());
        });
    }, [dispatch]);

    const { loading, restaurant} = useAppSelector((state) => state.restaurant);
    const {data}=restaurant
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
                    
                    { restaurant.count>0 && loading ? (
                        data.map((restaurant: any, index: number) => {
                            const urls_images=JSON.parse(restaurant.image_url)
                            return (
                                <Card key={index}>
                                    
                                    <CardSection>
                                        <CardImage  alt={restaurant.restaurant_name} src={urls_images}  loading="lazy" />
                                    </CardSection>
                                    <CardSection>
                                        <CardBox>
                                            <CardSubtitle>
                                                Top 1 <Icon>editor_choice</Icon>
                                            </CardSubtitle>
                                            <ButtonOption>Michelin</ButtonOption>
                                        </CardBox>
                                        <CardBox>
                                            <CardTitleText>{index}. {restaurant.restaurant_name}</CardTitleText>
                                        </CardBox>
                                        <CardBox>
                                            <CardtTextFlex>
                                                <Icon>kid_star</Icon> Puntuación (9,6)
                                            </CardtTextFlex>
                                        </CardBox>
                                        <CardBox>
                                            <CardtTextFlex>
                                                <Icon>location_on</Icon>{restaurant.location_address}
                                            </CardtTextFlex>
                                        </CardBox>
                                        <CardBox>
                                            <CardtTextFlex>
                                                <Icon>restaurant</Icon>Mediterráneo . Precio medio:
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
                                            <LinkIcon
                                                to={'https://losmontesdegalicia.es/menu-select/'}>
                                                <Icon>language</Icon>Web
                                            </LinkIcon>
                                            <LinkIcon
                                                to={'https://losmontesdegalicia.es/menu-select/'}>
                                                <Icon>menu_book</Icon>Menu
                                            </LinkIcon>
                                            <TelLink href={`tel:${'618152241'}`}>
                                                <Icon>call_quality</Icon>618152241
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
