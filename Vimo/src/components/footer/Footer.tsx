import {
    BoxFooter,
    BoxLink,
    BoxList,
    ContainerFooter,
    IconMaterialWhite,
    IconText,
    MainFooter,
} from './styles/FooterStyle';

import { LinkIconWhite } from '../cardPost/styles/CardPostStyle';

function Footer() {
    return (
        <ContainerFooter>
            <MainFooter>
                <IconText>ZappyMap</IconText>
                <BoxFooter>
                    <BoxList>
                        <BoxLink to="./legales">¿Quienes somos?</BoxLink>
                        <BoxLink to="./legales">Información de contacto</BoxLink>
                    </BoxList>
                    <BoxList>
                        <BoxLink to="./legales">Preguntas frecuentes</BoxLink>
                        <BoxLink to="./legales">Condiciones legales</BoxLink>
                    </BoxList>

                    <BoxList>
                        <LinkIconWhite to="https://yandrydev.es/">
                            <IconMaterialWhite>rss_feed</IconMaterialWhite>
                            Redes sociales
                        </LinkIconWhite>
                        <LinkIconWhite to="https://yandrydev.es/">
                            <IconMaterialWhite>copyright</IconMaterialWhite>
                            ZappyMap Inc
                        </LinkIconWhite>
                    </BoxList>
                    <BoxList></BoxList>
                </BoxFooter>
            </MainFooter>
        </ContainerFooter>
    );
}

export default Footer;
