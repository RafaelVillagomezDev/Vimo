import Portada_restaurante from '../../assets/pictures/restaurant/Portada_restaurant _1200.jpg';
import {
    BoxInfo,
    BoxShare,
    BoxText,
    ButtonInfo,
    ButtonLike,
    ButtonText,
    GridCarrousell,
    GridContent,
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
    Text,
    TextLine,
    TitleInfo,
} from './styles/cardGalleryStyles';
import { useState,lazy } from 'react';
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur incidunt beatae illo sed a sequi. Laudantium, ipsam? Repellendus autem obcaecati animi at voluptatibus tenetur aperiam esse, rerum dolores molestias?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit amet perferendis expedita commodi similique quibusdam accusantium, sed magni reprehenderit recusandae eum, debitis veritatis dolores laudantium eius dicta praesentium autem ex?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam facere, sapiente debitis maiores placeat rem veritatis ipsum tenetur rerum nulla corrupti asperiores id inventore similique. At libero sed modi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur incidunt beatae illo sed a sequi. Laudantium, ipsam? Repellendus autem obcaecati animi at voluptatibus tenetur aperiam esse, rerum dolores molestias?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit amet perferendis expedita commodi similique quibusdam accusantium, sed magni reprehenderit recusandae eum, debitis veritatis dolores laudantium eius dicta praesentium autem ex?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam facere, sapiente debitis maiores placeat rem veritatis ipsum tenetur rerum nulla corrupti asperiores id inventore similique. At libero sed modi.</p>
                </GridContent>
                <GridShedule>
                    <Schedule/>
                </GridShedule>
            </GridRestaurant>
        </>
    );
}

export default CardGallery;
