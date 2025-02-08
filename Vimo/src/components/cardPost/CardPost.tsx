import {
    BoxCard,
    Card,
    CardBox,
    CardImage,
    CardSection,
    CardText,
    CardTitle,
    Icon,
    MainCard,
    SectionCard,
} from './styles/CardPostStyle';
import Portada_restaurante from '../../assets/pictures/restaurant/Portada_restaurant _1200.jpg';

function CardPost() {
    return (
        <MainCard>
            <SectionCard>
                <BoxCard>
                    <h1>lista</h1>
                </BoxCard>
                <BoxCard>
                    <Card>
                        <CardSection>
                            <CardImage src={Portada_restaurante} />
                        </CardSection>
                        <CardSection>
                            <CardBox>
                                <CardText>Top 1 <Icon>editor_choice</Icon></CardText>
                                <CardText>
                                    <CardTitle>
                                        1. Restaurante Carmen
                                        
                                    </CardTitle>
                                </CardText>
                            </CardBox>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <CardImage src={Portada_restaurante} />
                        </CardSection>
                    </Card>
                </BoxCard>
            </SectionCard>
        </MainCard>
    );
}

export default CardPost;
