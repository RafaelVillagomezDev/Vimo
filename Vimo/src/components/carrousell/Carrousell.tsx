import Navbar from '../navbar/Navbar';
import {
    CarrousellContainer,
    CarrousellPicture,
    CarrousellSubtitle,
    CarrousellTitle,
} from './styles/CarrousellStyle';

interface CarrousellProps {
    image576: string;
    image768: string;
    image1200: string;
    altText: string;
    subtitle: string;
}

function Carrousell({ image576, image768, image1200, altText, subtitle }: CarrousellProps) {
    return (
        <>
            <Navbar />
            <CarrousellContainer>
                <CarrousellPicture
                    srcSet={`
                        ${image576} 576w,
                        ${image768} 768w,
                        ${image1200} 1200w,
                    `}
                    sizes={`
                        (max-width: 576px) 100vw,
                        (max-width: 768px) 80vw,
                        (max-width: 1200px) 60vw,
                    `}
                    alt={altText}
                    loading="eager"
                    fetchPriority='high'
                />

                <CarrousellTitle>MADRID</CarrousellTitle>
                <CarrousellSubtitle>{subtitle}</CarrousellSubtitle>
            </CarrousellContainer>
        </>
    );
}

export default Carrousell;
