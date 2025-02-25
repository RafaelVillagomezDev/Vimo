import Portada_restaurante from '../../assets/pictures/restaurant/Portada_restaurant _1200.jpg';
import {
    BoxInfo,
    BoxShare,
    BoxText,
    ButtonInfo,
    ButtonLike,
    ButtonText,
    GridContainer,
    IconInfo,
    ImageItem,
    InfoContainer,
    LeftColumn,
    RightColumn,
    Text,
    TextLine,
    TitleInfo,
} from './styles/cardGalleryStyles';
import { useState } from 'react';

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

            <GridContainer>
                <LeftColumn>
                    {imagesLeft.map((src, index) => (
                        <ImageItem key={index} src={src} alt={`Imagen izquierda ${index + 1}`} />
                    ))}
                </LeftColumn>
                <RightColumn>
                    {imagesRight.map((src, index) => (
                        <ImageItem key={index} src={src} alt={`Imagen derecha ${index + 1}`} />
                    ))}
                </RightColumn>
                <Text>
                    <TextLine>
                        <IconInfo color="black">restaurant</IconInfo>Internacional , Mediterranea
                    </TextLine>
                    <TextLine>
                        <IconInfo color="black">map</IconInfo>España , Madrid
                    </TextLine>
                    <TextLine>
                        <IconInfo color="black">euro</IconInfo>Precio medio 20 euros
                    </TextLine>
                </Text>
            </GridContainer>
        </>
    );
}

export default CardGallery;
