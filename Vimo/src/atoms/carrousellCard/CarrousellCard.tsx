import { startTransition, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import * as S from './styles/carrousellCard';

import CardSlide from '@components/cardSlide/CardSlide';
import { useAppSelector } from '../../custom/hooks/call/useAppSelector';
import { RestaurantDTO, selectRestaurantStatus } from '../../slices/restaurant/restaurant-slice';
import { useAppDispatch } from '../../custom/hooks/call/useAppDispatch';
import { fetchTokenAndRestaurant } from '../../slices/restaurant/restaurant-api';

function CarrousellCard() {
    const { restaurant } = useAppSelector((state) => state.restaurant);
    const { data } = restaurant ?? {};
    const status = useAppSelector(selectRestaurantStatus);
    const dispatch = useAppDispatch();

    // Inicializa Embla Carousel
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false, // Desactiva loop para controlar mejor los botones de inicio/fin
        align: 'start',
        dragFree: false,
    });

    //  Estado para el control de botones
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    // Funciones de Navegación
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    // Función de Actualización (Desactivar/Activar botones)
    const onSelect = useCallback(
        (emblaApi: { canScrollPrev: () => any; canScrollNext: () => any }) => {
            setPrevBtnDisabled(!emblaApi.canScrollPrev());
            setNextBtnDisabled(!emblaApi.canScrollNext());
        },
        []
    );

    // Conecta las funciones de actualización al ciclo de vida de Embla
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
            dispatch(
                fetchTokenAndRestaurant({
                    api_url: 'http://localhost:3000/api/v1/restaurant/',
                    api_path: '',
                })
            );
        });
    }, [dispatch]);

    return (
        <S.CarrousellSection>
            {/* Los botones solo se habilitan si hay éxito y contenido */}
            {status === "success" && restaurant.count > 0 && (
                <S.BtnPrevSlide onClick={scrollPrev} disabled={prevBtnDisabled}>
                    {'<'}
                </S.BtnPrevSlide>
            )}

            <S.CarrouselContainer ref={emblaRef}>
                <S.EmblaContainerInner>
                    {/* ESTADO 1: CARGANDO (Skeletons) */}
                    {status === "loading" && (
                        Array.from({ length: 4 }).map((_, i) => (
                            <S.SkeletonCard key={`skeleton-${i}`} />
                        ))
                    )}

                    {/* ESTADO 2: ÉXITO (Datos reales) */}
                    {status === "success" && restaurant.count > 0 && (
                        data.map((item: RestaurantDTO, index: number) => (
                            <CardSlide key={`${item.id}-${index}`} data={item} />
                        ))
                    )}

                    {/* ESTADO 3: VACÍO O ERROR */}
                    {status === "success" && restaurant.count === 0 && (
                        <S.EmptyStateMessage>
                            No se encontraron sitios registrados.
                        </S.EmptyStateMessage>
                    )}

                    {status === "failed" && (
                        <S.ErrorMessage>
                            Ocurrió un error al cargar los datos.
                        </S.ErrorMessage>
                    )}
                </S.EmblaContainerInner>
            </S.CarrouselContainer>

            {status === "success" && restaurant.count > 0 && (
                <S.BtnNextSlide onClick={scrollNext} disabled={nextBtnDisabled}>
                    {'>'}
                </S.BtnNextSlide>
            )}
        </S.CarrousellSection>
    );
}

export default CarrousellCard;
