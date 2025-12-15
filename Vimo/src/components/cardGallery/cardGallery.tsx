import { useAppSelector } from '../../custom/hooks/call/useAppSelector';
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
import { useParams } from 'react-router-dom';
import { selectRestaurantById } from '../../slices/restaurant/restaurant-slice';

const Schedule = lazy(() => import('../schedule/Schedule'));

function CardGallery() {
    const [copied, setCopied] = useState(false);
    const { id } = useParams<{ id: string }>();

    // 💡 SOLUCIÓN 1: Acceder al restaurante seleccionado de forma consistente
    const selectedRestaurant = useAppSelector((state) =>
        id ? selectRestaurantById(state, id) : undefined
    );
    
    // Si no hay restaurante (o si la data está vacía), no renderizamos nada
    if (!selectedRestaurant) {
        return (
            <Box>
                <Text>No se encontró el restaurante o el ID no es válido.</Text>
            </Box>
        );
    }
    
    // Separación de imágenes para el layout
    const allImages = selectedRestaurant.images || [];
    const mainImage = allImages[0]; // La primera imagen para LeftColumn
    const otherImages = allImages.slice(1); // El resto de las imágenes para RightColumn


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
        <GridCarrousell key={selectedRestaurant.id}>
            
            {/* 1. INFO CONTAINER */}
            <InfoContainer>
                <BoxInfo>
                    <BoxText>
                        <TitleInfo>{selectedRestaurant.name}</TitleInfo>
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
            
            {/* 2. GRID CONTENT (IMÁGENES) */}
            <GridContent>
                {/* LEFT COLUMN: Imagen principal */}
                {mainImage && (
                    <LeftColumn>
                        <ImageItem
                            src={mainImage.url}
                            alt={mainImage.id || "portada"}
                            key={mainImage.id}
                            loading='lazy'
                        />
                    </LeftColumn>
                )}
                
                {/* RIGHT COLUMN: Collage de imágenes secundarias */}
                {otherImages.length > 0 && (
                    <RightColumn>
               
                        {otherImages.map((image) => (
                            <ImageItem 
                                loading='lazy' 
                                src={image.url} 
                                alt={image.id || "imagen secundaria"} 
                                key={image.id} 
                            />
                        ))}
                    </RightColumn>
                )}
            </GridContent>

      

        </GridCarrousell>
    );
}

export default CardGallery;