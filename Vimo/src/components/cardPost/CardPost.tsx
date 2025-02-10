import {
    BoxCard,
    ButtonOption,
    ButtonVerMas,
    Card,
    CardBox,
    CardBoxFlex,
    CardImage,
    CardOption,
    CardSection,
    CardSubtitle,
    CardText,
    CardTitle,
    CardtTextFlex,
    Icon,
    MainCard,
    SectionCard,
} from './styles/CardPostStyle';
import Portada_restaurante from '../../assets/pictures/restaurant/Portada_restaurant _1200.jpg';
import { useState } from 'react';

function CardPost() {
    const [verMas, setVerMas] = useState(false);

    const handleVerMas = () => setVerMas(true);
    const handleVerMenos = () => setVerMas(false);

    return (
        <MainCard>
            <SectionCard>
                <CardOption>
                    <h1>lista</h1>
                </CardOption>

                <BoxCard>
                    <Card>
                        <CardSection>
                            <CardImage src={Portada_restaurante} />
                        </CardSection>
                        <CardSection>
                            <CardBox>
                                <CardSubtitle>
                                    Top 1 <Icon>editor_choice</Icon>
                                </CardSubtitle>
                                <ButtonOption>Michelin</ButtonOption>
                            </CardBox>
                            <CardBox>
                                <CardTitle>1. Restaurante Carmen</CardTitle>
                            </CardBox>
                            <CardBox>
                                <CardtTextFlex>
                                    <Icon>kid_star</Icon> Puntuación (9,6)
                                </CardtTextFlex>
                            </CardBox>
                            <CardBox>
                                <CardtTextFlex>
                                    <Icon>location_on</Icon>C. Santa Barbara, 6, 28609, Madrid
                                </CardtTextFlex>
                            </CardBox>
                            <CardBox>
                                <CardtTextFlex>
                                    <Icon>restaurant</Icon>Mediterráneo . Precio medio: 20€
                                </CardtTextFlex>
                            </CardBox>
                            <CardBoxFlex>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                                    {verMas &&
                                        'Consequuntur ipsa corrupti quisquam aperiam amet adipisci, impedit similique maiores nam numquam, commodi ab, odit rem eum saepe ut sed. Deserunt, minus. '}
                                </CardText>
                                <ButtonVerMas onClick={verMas ? handleVerMenos : handleVerMas}>
                                    {verMas ? 'Ver menos' : 'Ver más'}
                                </ButtonVerMas>
                            </CardBoxFlex>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <CardImage src={Portada_restaurante} />
                        </CardSection>
                        <CardSection>
                            <CardBox>
                                <CardSubtitle>
                                    Top 1 <Icon>editor_choice</Icon>
                                </CardSubtitle>
                                <ButtonOption>Michelin</ButtonOption>
                            </CardBox>
                            <CardBox>
                                <CardTitle>1. Restaurante Carmen</CardTitle>
                            </CardBox>
                            <CardBox>
                                <CardtTextFlex>
                                    <Icon>kid_star</Icon> Puntuación (9,6)
                                </CardtTextFlex>
                            </CardBox>
                            <CardBox>
                                <CardtTextFlex>
                                    <Icon>location_on</Icon>C. Santa Barbara, 6, 28609, Madrid
                                </CardtTextFlex>
                            </CardBox>
                            <CardBox>
                                <CardtTextFlex>
                                    <Icon>restaurant</Icon>Mediterráneo . Precio medio: 20€
                                </CardtTextFlex>
                            </CardBox>
                            <CardBoxFlex>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                                    {verMas &&
                                        'Consequuntur ipsa corrupti quisquam aperiam amet adipisci, impedit similique maiores nam numquam, commodi ab, odit rem eum saepe ut sed. Deserunt, minus. '}
                                </CardText>
                                <ButtonVerMas onClick={verMas ? handleVerMenos : handleVerMas}>
                                    {verMas ? 'Ver menos' : 'Ver más'}
                                </ButtonVerMas>
                            </CardBoxFlex>
                        </CardSection>
                    </Card>
                </BoxCard>
            </SectionCard>
        </MainCard>
    );
}

export default CardPost;
