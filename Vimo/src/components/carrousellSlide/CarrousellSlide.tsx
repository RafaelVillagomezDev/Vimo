import React, { useState, useRef } from 'react';
import {
    CarrouselSlideCardText,
    CarrousellSlideCard,
    CarrousellSlideContainer,
    CarrousellSlideItem,
    CarrousellSlideText,
    CarrousellSlideTitle,
} from './styles/CarrousellSlide';

import icon_kyoto from '../../assets/pictures/japan/icons/icon_kyoto.png';
import icon_nara from '../../assets/pictures/japan/icons/icon_nara.png';
import icon_osaka from '../../assets/pictures/japan/icons/icon_osaka.png';
import icon_tokio from '../../assets/pictures/japan/icons/icon_tokio.png';

const CarrousellSlide: React.FC = () => {
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
        <CarrousellSlideContainer
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            <CarrousellSlideItem>
                <CarrousellSlideCard src={icon_kyoto} />
                <CarrouselSlideCardText to="">
                    <CarrousellSlideText>Disfura de los templos</CarrousellSlideText>
                    <CarrousellSlideTitle>kYOTO</CarrousellSlideTitle>
                </CarrouselSlideCardText>
            </CarrousellSlideItem>
            <CarrousellSlideItem>
                <CarrousellSlideCard src={icon_tokio} />
                <CarrouselSlideCardText to="">
                    <CarrousellSlideText>La ciudad del futuro</CarrousellSlideText>
                    <CarrousellSlideTitle>TOKIO</CarrousellSlideTitle>
                </CarrouselSlideCardText>
            </CarrousellSlideItem>
            <CarrousellSlideItem>
                <CarrousellSlideCard src={icon_nara} />
                <CarrouselSlideCardText to="">
                    <CarrousellSlideText>Un paraiso escondido</CarrousellSlideText>
                    <CarrousellSlideTitle>NARA</CarrousellSlideTitle>
                </CarrouselSlideCardText>
            </CarrousellSlideItem>
            <CarrousellSlideItem>
                <CarrousellSlideCard src={icon_osaka} />
                <CarrouselSlideCardText to="">
                    <CarrousellSlideText>Una gastronomia unica</CarrousellSlideText>
                    <CarrousellSlideTitle>OSAKA</CarrousellSlideTitle>
                </CarrouselSlideCardText>
            </CarrousellSlideItem>
        </CarrousellSlideContainer>
    );
};

export default CarrousellSlide;
