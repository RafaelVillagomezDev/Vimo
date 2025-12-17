import {
    AboutContent,
    Box,
    BoxInfo,
    BoxShare,
    BoxText,
    ButtonInfo,
    ButtonLike,
    ButtonText,
    GridCarrousell,
    GridContent,
    IconInfo,
    ImageItem,
    InfoContainer,
    LeftColumn,
    RightColumn,
    Text,
    TitleInfo,
} from './styles/cardGalleryStyles';
import { useState } from 'react';

// 💡 Definición de tipos de datos esperados para hacer el componente robusto
interface ImageType {
    id: string;
    url: string;
}

interface RestaurantDataType {
    id: string;
    name: string;
    images: ImageType[];
    // Puedes añadir más campos genéricos aquí si los usas
}

// 💡 Props que el componente aceptará
interface CardGalleryProps {
    data: RestaurantDataType | null | undefined; // La entidad a mostrar
    onShare: (url: string) => void; // Función de compartir (se pasa desde el padre)
    isVerified?: boolean; // Booleano para el icono de verificación
}


// El componente ahora acepta las props definidas
function CardGallery({ data, onShare, isVerified = true }: CardGalleryProps) {
    const [copied, setCopied] = useState(false);

    // Si los datos no se han pasado, renderizamos el estado de carga/error
    if (!data) {
        return (
            <Box>
                <Text>Cargando datos o no se encontró la entidad.</Text>
            </Box>
        );
    }

    // --- Lógica de Manejo de Datos ---
    const allImages = data.images || [];
    const mainImage = allImages[0]; // La primera imagen para LeftColumn
    const otherImages = allImages.slice(1); // El resto de las imágenes para RightColumn

    const handleShare = async () => {
        try {
            const url = window.location.href;
            await navigator.clipboard.writeText(url);
            setCopied(true);
            
            // 💡 Llamamos a la función onShare del padre
            onShare(url); 

            setTimeout(() => setCopied(false), 2000); 
        } catch (error) {
            console.error('Error al copiar la URL:', error);
        }
    };


    return (
        <GridCarrousell key={data.id}>

            {/* 1. INFO CONTAINER */}
            <InfoContainer>
                <BoxInfo>
                    <BoxText>
                        {/* Usamos data.name en lugar de selectedRestaurant.name */}
                        <TitleInfo>{data.name}</TitleInfo>
                        {isVerified && <IconInfo>verified</IconInfo>} 
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
                        {/* El botón de 'Guardar' (Favorito) también debería manejar una prop/función */}
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

                <AboutContent>
                  <h1>pais</h1>
                </AboutContent>
            </GridContent>

        </GridCarrousell>
    );
}

export default CardGallery;