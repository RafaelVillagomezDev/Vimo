import { createContext, useContext, useState, ReactNode } from 'react';
import * as S from './styles/cardGalleryStyles';

// --- Tipos ---
interface ImageType {
    id: string;
    url: string;
}
interface RestaurantDataType {
    address: string;
    id: string;
    name: string;
    images: ImageType[];
}

const CardContext = createContext<RestaurantDataType | null>(null);

function useCardContext() {
    const context = useContext(CardContext);
    if (!context)
        throw new Error('CardGallery sub-components  deben tener como padre  <CardGallery />');
    return context;
}

interface CardGalleryProps {
    data: RestaurantDataType | null | undefined;
    children: ReactNode;
}

export function CardGallery({ data, children }: CardGalleryProps) {
    if (!data)
        return (
            <S.Box>
                <S.Text>Cargando datos...</S.Text>
            </S.Box>
        );

    return (
        <CardContext.Provider value={data}>
            <S.GridCarrousell key={data.id}>{children}</S.GridCarrousell>
        </CardContext.Provider>
    );
}

CardGallery.Header = function CardHeader({
    onShare,
    isVerified = true,
}: {
    onShare: (url: string) => void;
    isVerified?: boolean;
}) {
    const data = useCardContext();
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const url = window.location.href;
        await navigator.clipboard.writeText(url);
        setCopied(true);
        onShare(url);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <S.InfoContainer>
            <S.BoxInfo>
                <S.BoxText>
                    <S.TitleInfo>{data.name}</S.TitleInfo>
                    {isVerified && <S.IconInfo>verified</S.IconInfo>}
                </S.BoxText>
                <S.BoxShare>
                    <S.ButtonInfo onClick={handleShare}>
                        <S.IconInfo color="black">
                            {!copied ? 'ios_share' : 'content_paste'}
                        </S.IconInfo>
                    </S.ButtonInfo>
                    <S.ButtonLike>
                        <S.IconInfo color="black">favorite</S.IconInfo>
                    </S.ButtonLike>
                </S.BoxShare>
            </S.BoxInfo>
        </S.InfoContainer>
    );
};

// Visuals: La grilla de imágenes

CardGallery.Visuals = function CardVisuals() {
    const { images } = useCardContext();

    // Validaciones de seguridad
    if (!images || images.length === 0) return null;

    const isSingle = images.length === 1;
    const mainImage = images[0];
    // Limitamos a 4 imágenes para la columna derecha (collage 2x2)
    const otherImages = images.slice(1, 5);

    return (
        <S.GridContent $isSingleImage={isSingle}>
            <S.LeftColumn $isSingleImage={isSingle}>
                <S.ImageItem src={mainImage.url} alt="portada" loading="eager" />
            </S.LeftColumn>

            {!isSingle && otherImages.length > 0 && (
                <S.RightColumn>
                    {otherImages.map((img) => (
                        <S.ImageItem key={img.id} src={img.url} alt="secundaria" loading="eager" />
                    ))}
                </S.RightColumn>
            )}
        </S.GridContent>
    );
};

CardGallery.Footer = function CardFooter({ price = '12$', rating = '9/10' }) {
    const { address } = useCardContext();
    return (
        <S.AboutContent>
            <S.AboutText>
                <S.IconInfo color="orange">location_on</S.IconInfo>
                {address}
            </S.AboutText>
            <S.AboutText>
                <S.IconInfo color="orange">paid</S.IconInfo>Precio Medio: {price}
            </S.AboutText>
            <S.AboutText>
                <S.IconInfo color="orange">kid_star</S.IconInfo>
                {rating} Puntuación de usuarios
            </S.AboutText>
        </S.AboutContent>
    );
};
