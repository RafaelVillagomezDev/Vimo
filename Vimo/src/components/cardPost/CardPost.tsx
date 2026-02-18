import { useState, createContext, useContext, ReactNode } from 'react';
import * as S from './styles/CardPostStyle';

interface CardPostProps {
    data: any; // O mejor: RestaurantDTO
    children: ReactNode;
    count?: number; // Añadido
    menuOptions?: any[]; // Añadido
    isLoading?: boolean; // Añadido
}

const CardPostContext = createContext<any>(null);

export default function CardPost({ data, children, count, menuOptions, isLoading }: CardPostProps) {
    return (
        <CardPostContext.Provider value={data}>
            <S.Card>{children}</S.Card>
        </CardPostContext.Provider>
    );
}

// Sub-componente para la imagen
CardPost.Image = function CardImage() {
    const data = useContext(CardPostContext);
    const mainImage = data.images?.[0];
    if (!mainImage) return null;

    return (
        <S.CardSection>
            <S.LinkCard to={data.id}>
                <S.CardImage alt={data.name} src={mainImage.url} loading="lazy" />
            </S.LinkCard>
        </S.CardSection>
    );
};

// Contenedor del texto
CardPost.Content = function CardContent({ children }: { children: ReactNode }) {
    return <S.CardSectionText>{children}</S.CardSectionText>;
};

// Info principal (Nombre, Rating, Tags)
CardPost.Header = function CardHeader({id}:any) {
    const data = useContext(CardPostContext);
    return (
        <>
            <S.CardBox>
                <S.CardSubtitle>
                    Top {id} <S.Icon>editor_choice</S.Icon>
                </S.CardSubtitle>
                <S.ButtonOption>Michelin</S.ButtonOption>
            </S.CardBox>
            <S.CardBox>
                <S.LinkCard to={data.id}>
                    <S.CardTitleText>{data.name}</S.CardTitleText>
                </S.LinkCard>
            </S.CardBox>
            <S.CardBox>
                <S.CardtTextFlex>
                    <S.Icon>kid_star</S.Icon> Puntuación (9,6)
                </S.CardtTextFlex>
            </S.CardBox>
            <S.CardBox>
                <S.CardtTextFlex>
                    <S.Icon>fork_spoon</S.Icon> {data.type_food}
                </S.CardtTextFlex>
            </S.CardBox>
        </>
    );
};

// Descripción con lógica de "Ver más" independiente
CardPost.Description = function CardDescription() {
    const data = useContext(CardPostContext);
    const [verMas, setVerMas] = useState(false);

    return (
        <S.CardBoxFlex>
            <S.CardText>
                {data.description} {verMas && data.description}
            </S.CardText>
            <S.ButtonVerMas onClick={() => setVerMas(!verMas)}>
                {verMas ? 'Ver menos' : 'Ver más'}
            </S.ButtonVerMas>
        </S.CardBoxFlex>
    );
};

// Enlaces de acción (Web, Tel, etc)
CardPost.Actions = function CardActions() {
    const data = useContext(CardPostContext);
    return (
        <S.CardIcons>
            <S.LinkIcon to={data.web}>
                <S.Icon>language</S.Icon> Web
            </S.LinkIcon>
            <S.LinkIcon to={data.web}>
                <S.Icon>menu_book</S.Icon> Menú
            </S.LinkIcon>
            <S.TelLink href={`tel:${data.phone}`}>
                <S.Icon>call_quality</S.Icon>
                {data.phone}
            </S.TelLink>
        </S.CardIcons>
    );
};
