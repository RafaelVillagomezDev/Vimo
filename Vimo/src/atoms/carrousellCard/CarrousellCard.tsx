import { Key, startTransition, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';


import {
    BtnNextSlide,
    BtnPrevSlide,
    CarrouselContainer,
    CarrousellSection,
    EmblaContainerInner
} from "./styles/carrousellCard";

import CardSlide from "@components/cardSlide/CardSlide";
import { useAppSelector } from '../../custom/hooks/call/useAppSelector';
import { RestaurantDTO } from '../../slices/restaurant/restaurant-slice';
import { useAppDispatch } from '../../custom/hooks/call/useAppDispatch';
import { fetchTokenAndRestaurant } from '../../slices/restaurant/restaurant-api';

function CarrousellCard() {

    const { restaurant } = useAppSelector((state) => state.restaurant);
    const { data } = restaurant ?? {};
    const dispatch = useAppDispatch();

    // 1. Inicializa Embla Carousel
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false, // Desactiva loop para controlar mejor los botones de inicio/fin
        align: 'start',
        dragFree: false,
    });



    // 2. Estado para el control de botones
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    // 3. Funciones de Navegación
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    // 4. Función de Actualización (Desactivar/Activar botones)
    const onSelect = useCallback((emblaApi: { canScrollPrev: () => any; canScrollNext: () => any; }) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);


    // 5. Conecta las funciones de actualización al ciclo de vida de Embla
    useEffect(() => {



        if (!emblaApi) return;

        // Ejecutar al inicio y cada vez que cambia la selección o se reinicia
        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);


        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);


    useEffect(() => {
        startTransition(() => {
            dispatch(fetchTokenAndRestaurant({
                api_url: "http://localhost:3000/api/v1/restaurant/",
                api_path: "",
            }));
        });
    }, [])



    return (
        <CarrousellSection>


            <BtnPrevSlide onClick={scrollPrev} disabled={prevBtnDisabled}>
                {'<'}
            </BtnPrevSlide>

            <CarrouselContainer ref={emblaRef}>

                <EmblaContainerInner>
                    {restaurant.count > 0 ? data.map((data: RestaurantDTO, index: Key | null | undefined) => (
                        <CardSlide key={data.id + "-" + index} data={data} />
                    )) : "No hay restaurantes"}
                </EmblaContainerInner>

            </CarrouselContainer>


            <BtnNextSlide onClick={scrollNext} disabled={nextBtnDisabled}>
                {'>'}
            </BtnNextSlide>
        </CarrousellSection>
    );
}

export default CarrousellCard;