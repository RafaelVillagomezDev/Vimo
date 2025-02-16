import Portada_restaurante from '../../assets/pictures/restaurant/Portada_restaurant _1200.jpg';
import { GridContainer, ImageItem, LeftColumn, RightColumn } from './styles/cardGalleryStyles';

function CardGallery() {
    const imagesLeft = [Portada_restaurante];

    const imagesRight = [
        Portada_restaurante,
        Portada_restaurante,
        Portada_restaurante,
        
    ];

    return (
        <>
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
            </GridContainer>
        </>
    );
}

export default CardGallery;
