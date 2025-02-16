import {
    BoxFooter,
    BoxLink,
    BoxList,
    ContainerFooter,
    Icon,
    IconMaterialWhite,
    MainFooter,
} from './styles/FooterStyle';
import icon from '../../assets/icons/icon_page.png';
import { LinkIconWhite } from '../cardPost/styles/CardPostStyle';

function Footer() {
    return (
        <ContainerFooter>
            <MainFooter>
                <Icon src={icon} sizes="60px" />
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
                            MADRIDVIBES TODOS LOS DERECHOS RESERVADOS
                        </LinkIconWhite>
                    </BoxList>
                </BoxFooter>
            </MainFooter>
        </ContainerFooter>
    );
}

export default Footer;
