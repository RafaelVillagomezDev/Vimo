import React, { useState, useRef } from 'react';
import {
    CarrousellSlideCard,
    CarrousellSlideContainer,
    CarrousellSlideItem,
    CarrousellSlideText,
    NavLinker,
} from './styles/CarrousellSlide';
import { CarrousellTitle } from '../../styles/commonStyles';


interface SlideData {
    to: string; // Ruta a la que enlaza
    iconSrc: string; // Fuente del ícono
    text: string; // Texto descriptivo
}

// Define la interfaz para las props del componente
interface CarrousellSlideProps {
    slidesData: SlideData[];
}

const CarrousellSlide: React.FC<CarrousellSlideProps> = ({ slidesData }) => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);

    // Función para manejar el inicio del arrastre
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (carouselRef.current) {
            setIsMouseDown(true);
            setStartX(e.pageX - carouselRef.current.offsetLeft); // Posición inicial
            setScrollLeft(carouselRef.current.scrollLeft); // Desplazamiento inicial
            carouselRef.current.style.cursor = 'grabbing';
        }
    };

    // Función para manejar el movimiento del mouse
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isMouseDown || !carouselRef.current) return;
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 3; // Aumentamos la velocidad del desplazamiento
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    // Función para manejar cuando se suelta el mouse
    const handleMouseUp = () => {
        if (carouselRef.current) {
            setIsMouseDown(false);
            carouselRef.current.style.cursor = 'grab';
        }
    };

    // Función para manejar cuando el mouse sale del área del carrusel
    const handleMouseLeave = () => {
        if (carouselRef.current) {
            setIsMouseDown(false);
            carouselRef.current.style.cursor = 'grab';
        }
    };

    // Función para manejar el inicio del toque en dispositivos móviles
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (carouselRef.current) {
            setIsMouseDown(true);
            setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
            setScrollLeft(carouselRef.current.scrollLeft);
            carouselRef.current.style.cursor = 'grabbing';
        }
    };

    // Función para manejar el movimiento del toque
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isMouseDown || !carouselRef.current) return;
        const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    // Función para manejar el fin del toque
    const handleTouchEnd = () => {
        if (carouselRef.current) {
            setIsMouseDown(false);
            carouselRef.current.style.cursor = 'grab';
        }
    };

    return (
       <>
        <CarrousellTitle></CarrousellTitle>
        <CarrousellSlideContainer
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            {slidesData.map((slide, index) => (

                <CarrousellSlideItem key={index}>
                    <NavLinker to={slide.to}>
                        <CarrousellSlideCard src={slide.iconSrc} />

                        <CarrousellSlideText>{slide.text}</CarrousellSlideText>


                    </NavLinker>

                </CarrousellSlideItem>


            ))}

        </CarrousellSlideContainer>
        </>
    );
};

export default CarrousellSlide;
