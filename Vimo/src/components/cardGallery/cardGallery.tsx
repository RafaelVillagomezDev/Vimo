import { useAppSelector } from '../../custom/hooks/call/useAppSelector';
import React from 'react';
import {
    Box,
    BoxInfo,
    BoxShare,
    BoxText,
    ButtonInfo,
    ButtonLike,
    ButtonText,
    ContainerRow,
    GridCarrousell,
    GridContent,
    GridInfo,
    GridMenu,
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
    TextMenu,
    TextSpan,
    TitleInfo,
} from './styles/cardGalleryStyles';
import { useState, lazy } from 'react';

const Schedule = lazy(() => import('../schedule/Schedule'));

function CardGallery() {
    const [copied, setCopied] = useState(false);

    const { restaurant } = useAppSelector((state) => state.restaurant);
   

    if (!restaurant || !restaurant.data || restaurant.data.length === 0) {
        return (
            <Box>
                <Text>No hay restaurantes</Text>
            </Box>
        );
    }

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
                {restaurant.count >0 ? (
                    restaurant.data.map((rest, index) => {
                        return (
                            <React.Fragment  key={index}>
                                <GridCarrousell >
                                    <LeftColumn>
                                        <ImageItem
                                            src={rest.images[0]?.url}
                                            alt={rest.images[0]?.id || "portada"}
                                            key={rest.images[0]?.id}
                                        />
                                    </LeftColumn>
                                    <RightColumn>
                                        {rest.images.map((image) => (
                                            <ImageItem src={image?.url} alt={image?.id}   key={image?.id}/>
                                        ))}
                                    </RightColumn>
                                    <Text>
                                        <TextLine>
                                            <IconInfo color="black">restaurant</IconInfo>
                                            {rest.type_food}
                                        </TextLine>
                                        <TextLine>
                                            <IconInfo color="black">map</IconInfo>España , Madrid
                                        </TextLine>
                                        <TextLine>
                                            <IconInfo color="black">euro</IconInfo>Precio medio 20
                                            euros
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
                                      {rest.description}
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
                                <GridMenu>
                                    <SubtitleInfo>Menu</SubtitleInfo>
                                    <ContainerRow>
                                        <Box>
                                            <Text>
                                                <TextMenu>
                                                    Albondigas <TextSpan>22$</TextSpan>
                                                </TextMenu>
                                            </Text>
                                            <Text>
                                                <TextMenu>
                                                    Huevos Rotos<TextSpan>22$</TextSpan>
                                                </TextMenu>
                                            </Text>
                                            <Text>
                                                <TextMenu>
                                                    Arroz tres delicias<TextSpan>22$</TextSpan>
                                                </TextMenu>
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Text>
                                                <TextMenu>
                                                    Albondigas <TextSpan>22$</TextSpan>
                                                </TextMenu>
                                            </Text>
                                            <Text>
                                                <TextMenu>
                                                    Huevos Rotos <TextSpan>22$</TextSpan>
                                                </TextMenu>
                                            </Text>
                                            <Text>
                                                <TextMenu>
                                                    Arroz tres delicias <TextSpan>22$</TextSpan>
                                                </TextMenu>
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Text>
                                                <TextMenu>
                                                    Albondigas <TextSpan>22$</TextSpan>
                                                </TextMenu>
                                            </Text>
                                            <Text>
                                                <TextMenu>
                                                    Huevos Rotos <TextSpan>22$</TextSpan>
                                                </TextMenu>
                                            </Text>
                                            <Text>
                                                <TextMenu>
                                                    Arroz tres delicias<TextSpan>22$</TextSpan>
                                                </TextMenu>
                                            </Text>
                                        </Box>
                                    </ContainerRow>
                                </GridMenu>
                                </React.Fragment >
                        );
                    })
                ) : (
                    <Box>
                        <Text>No hay restaurantes</Text>
                    </Box>
                )}
            </GridRestaurant>
        </>
    );
}

export default CardGallery;
/*


 */
