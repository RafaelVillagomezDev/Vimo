import Portada_restaurante from '../../assets/pictures/restaurant/Portada_restaurant _1200.jpg';
import {
    Box,
    BoxInfo,
    BoxShare,
    BoxText,
    ButtonInfo,
    ButtonLike,
    ButtonText,
    GridCarrousell,
    GridContent,
    GridInfo,
    GridRestaurant,
    GridShedule,
    IconInfo,
    ImageItem,
    InfoContainer,
    LeftColumn,
    NavLink,
    NavLinks,
    NavbarRestaurant,
    RightColumn,
    SubtitleInfo,
    Text,
    TextCard,
    TextLine,
    TitleInfo,
} from './styles/cardGalleryStyles';
import { useState, lazy } from 'react';
const Schedule = lazy(() => import('../schedule/Schedule'));

function CardGallery() {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        try {
            const url = window.location.href;
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Oculta el mensaje después de 2s
        } catch (error) {
            console.error('Error al copiar la URL:', error);
        }
    };

    const imagesLeft = [Portada_restaurante];

    const imagesRight = [Portada_restaurante, Portada_restaurante, Portada_restaurante];

    return (
        <>
            <InfoContainer>
                <BoxInfo>
                    <BoxText>
                        <TitleInfo>Casa Carmen</TitleInfo>
                        <IconInfo>verified</IconInfo>
                    </BoxText>
                    <BoxShare>
                        <ButtonInfo onClick={handleShare}>
                            <IconInfo color="black">ios_share</IconInfo>
                            {!copied ? (
                                <ButtonText>Compartir</ButtonText>
                            ) : (
                                <ButtonText>Enlace copiado</ButtonText>
                            )}
                        </ButtonInfo>
                        <ButtonLike $border="solid 1px black">
                            <IconInfo color="black">favorite</IconInfo>
                            <ButtonText $borderBottom="none">Guardar</ButtonText>
                        </ButtonLike>
                    </BoxShare>
                </BoxInfo>
            </InfoContainer>
            <GridRestaurant>
                <GridCarrousell>
                    <LeftColumn>
                        {imagesLeft.map((src, index) => (
                            <ImageItem
                                key={index}
                                src={src}
                                alt={`Imagen izquierda ${index + 1}`}
                            />
                        ))}
                    </LeftColumn>
                    <RightColumn>
                        {imagesRight.map((src, index) => (
                            <ImageItem key={index} src={src} alt={`Imagen derecha ${index + 1}`} />
                        ))}
                    </RightColumn>
                    <Text>
                        <TextLine>
                            <IconInfo color="black">restaurant</IconInfo>Internacional ,
                            Mediterranea
                        </TextLine>
                        <TextLine>
                            <IconInfo color="black">map</IconInfo>España , Madrid
                        </TextLine>
                        <TextLine>
                            <IconInfo color="black">euro</IconInfo>Precio medio 20 euros
                        </TextLine>
                    </Text>
                </GridCarrousell>
                <GridContent>
                    <NavbarRestaurant>
                        <NavLinks>
                            <NavLink to="">Horario</NavLink>
                            <NavLink to="">Descripcion</NavLink>
                            <NavLink to="">Contenido</NavLink>
                        </NavLinks>
                    </NavbarRestaurant>
                    <TextCard>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores corrupti
                        omnis, cupiditate officiis vitae autem culpa praesentium incidunt eligendi
                        nostrum doloribus, tenetur at ad. Expedita error repudiandae hic iste
                        laudantium.
                    </TextCard>
                    <TextCard>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores corrupti
                        omnis, cupiditate officiis vitae autem culpa praesentium incidunt eligendi
                        nostrum doloribus, tenetur at ad. Expedita error repudiandae hic iste
                        laudantium.
                    </TextCard>
                    <TextCard>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores corrupti
                        omnis, cupiditate officiis vitae autem culpa praesentium incidunt eligendi
                        nostrum doloribus, tenetur at ad. Expedita error repudiandae hic iste
                        laudantium.
                    </TextCard>
                </GridContent>
                <GridShedule>
                    <Schedule />
                </GridShedule>
                <GridInfo>
                    <SubtitleInfo>Caracteristicas</SubtitleInfo>
                    <Box>
                        <Text>
                            <IconInfo color="black">credit_card</IconInfo>
                            Aceptan tarjetas de credito
                        </Text>
                        <Text>
                            <IconInfo color="black">check_circle</IconInfo>
                            Comidas, Cenas, Brunch y Bebidas
                        </Text>
                        <Text>
                            <IconInfo color="black">chef_hat</IconInfo>
                            Tiene opciones veganas y celiacas
                        </Text>
                    </Box>
                </GridInfo>
            </GridRestaurant>
        </>
    );
}

export default CardGallery;
/*


 */
