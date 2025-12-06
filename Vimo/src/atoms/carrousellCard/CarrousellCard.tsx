import CardSlide from "../../components/cardSlide/CardSlide"
import { BtnNextSlide, BtnPrevSlide, CarrouselContainer } from "./styles/carrousellCard";
import React, { useRef, useState } from 'react';

function CarrousellCard() {

    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const scrollSpeedMultiplier = 3;

    // --- Lógica de Manejo de Scroll por Arrastre (Drag) ---

    // 1. Mouse Down (Inicio del Arrastre)
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (carouselRef.current) {
            setIsDragging(true);
            setStartX(e.pageX - carouselRef.current.offsetLeft);
            setScrollLeft(carouselRef.current.scrollLeft);
            carouselRef.current.style.cursor = 'grabbing';
            e.preventDefault();
        }
    };

    // 2. Mouse Move (Movimiento del Arrastre)
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !carouselRef.current) return;

        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * scrollSpeedMultiplier;

        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    // 3. Mouse Up / Mouse Leave (Fin del Arrastre)
    const handleMouseUpOrLeave = () => {
        if (carouselRef.current) {
            setIsDragging(false);
            carouselRef.current.style.cursor = 'grab';
        }
    };

    // 4. Touch Start (Inicio Táctil)
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (carouselRef.current) {
            setIsDragging(true);
            setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
            setScrollLeft(carouselRef.current.scrollLeft);
        }
    };

    // 5. Touch Move (Movimiento Táctil)
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging || !carouselRef.current) return;
        const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * scrollSpeedMultiplier;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    // 6. Touch End (Fin Táctil)
    const handleTouchEnd = () => {
        setIsDragging(false);
    };
    return (
        <>  
        <BtnPrevSlide>+</BtnPrevSlide>ƒ
            <CarrouselContainer
                ref={carouselRef} // Aplicamos la referencia para manipular el scroll
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >

                <CardSlide />
                <CardSlide />
                <CardSlide />
                <CardSlide />
                
            </CarrouselContainer>
            <BtnNextSlide>p</BtnNextSlide>
        </>
    );
}

export default CarrousellCard;
