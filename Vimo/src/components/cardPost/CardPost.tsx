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

    const dispatch = useAppDispatch()
    useEffect(() => {
      startTransition(() => {
         dispatch(getRestaurant())
      });
    }, [dispatch]);

    const {loading,restaurant,status}=useAppSelector((state) => state.restaurant)
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
               <>
        {console.log(restaurant)}</>
            <SectionCard>
                <CardOption>
                    <Configurator menuOptions={menuOptions} />
                </CardOption>

                <BoxCard>
                    
                    <Card>
                        <CardSection>
                            <CardImage src={Portada_restaurante} />
                        </CardSection>
                        <CardSection>
                            <CardBox>
                                <CardSubtitle>
                                    Top 1 <Icon>editor_choice</Icon>
                                </CardSubtitle>
                                <ButtonOption>Michelin</ButtonOption>
                            </CardBox>
                            <CardBox>
                                <CardTitleText>1. Restaurante Carmen</CardTitleText>
                            </CardBox>
                            <CardBox>
                                <CardtTextFlex>
                                    <Icon>kid_star</Icon> Puntuación (9,6)
                                </CardtTextFlex>
                            </CardBox>
                            <CardBox>
                                <CardtTextFlex>
                                    <Icon>location_on</Icon>C. Santa Barbara, 6, 28609, Madrid
                                </CardtTextFlex>
                            </CardBox>
                            <CardBox>
                                <CardtTextFlex>
                                    <Icon>restaurant</Icon>Mediterráneo . Precio medio: 20€
                                </CardtTextFlex>
                            </CardBox>
                            <CardBoxFlex>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                                    {verMas &&
                                        'Consequuntur ipsa corrupti quisquam aperiam amet adipisci, impedit similique maiores nam numquam, commodi ab, odit rem eum saepe ut sed. Deserunt, minus. '}
                                </CardText>
                                <ButtonVerMas onClick={verMas ? handleVerMenos : handleVerMas}>
                                    {verMas ? 'Ver menos' : 'Ver más'}
                                </ButtonVerMas>
                            </CardBoxFlex>
                            <CardIcons>
                                <LinkIcon to={'https://losmontesdegalicia.es/menu-select/'}>
                                    <Icon>language</Icon>Web
                                </LinkIcon>
                                <LinkIcon to={'https://losmontesdegalicia.es/menu-select/'}>
                                    <Icon>menu_book</Icon>Menu
                                </LinkIcon>
                                <TelLink href={`tel:${'618152241'}`}>
                                    <Icon>call_quality</Icon>618152241
                                </TelLink>
                            </CardIcons>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <CardImage src={Portada_restaurante} />
                        </CardSection>
                        <CardSection>
                            <CardBox>
                                <CardSubtitle>
                                    Top 1 <Icon>editor_choice</Icon>
                                </CardSubtitle>
                                <ButtonOption>Michelin</ButtonOption>
                            </CardBox>
                            <CardBox>
                                <CardTitleText>1. Restaurante Carmen</CardTitleText>
                            </CardBox>
                            <CardBox>
                                <CardtTextFlex>
                                    <Icon>kid_star</Icon> Puntuación (9,6)
                                </CardtTextFlex>
                            </CardBox>
                            <CardBox>
                                <CardtTextFlex>
                                    <Icon>location_on</Icon>C. Santa Barbara, 6, 28609, Madrid
                                </CardtTextFlex>
                            </CardBox>
                            <CardBox>
                                <CardtTextFlex>
                                    <Icon>restaurant</Icon>Mediterráneo . Precio medio: 20€
                                </CardtTextFlex>
                            </CardBox>
                            <CardBoxFlex>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                                    {verMas &&
                                        'Consequuntur ipsa corrupti quisquam aperiam amet adipisci, impedit similique maiores nam numquam, commodi ab, odit rem eum saepe ut sed. Deserunt, minus. '}
                                </CardText>
                                <ButtonVerMas onClick={verMas ? handleVerMenos : handleVerMas}>
                                    {verMas ? 'Ver menos' : 'Ver más'}
                                </ButtonVerMas>
                            </CardBoxFlex>
                            <CardIcons>
                                <LinkIcon to={'https://losmontesdegalicia.es/menu-select/'}>
                                    <Icon>language</Icon>Web
                                </LinkIcon>
                                <LinkIcon to={'https://losmontesdegalicia.es/menu-select/'}>
                                    <Icon>menu_book</Icon>Menu
                                </LinkIcon>
                                <TelLink href={`tel:${'618152241'}`}>
                                    <Icon>call_quality</Icon>618152241
                                </TelLink>
                            </CardIcons>
                        </CardSection>
                    </Card>
                </BoxCard>
            </SectionCard>
        </MainCard>
    );
}

export default CardPost;
