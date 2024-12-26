import {
    PostBox,
    PostContainer,
    PostContainerRight,
    PostImg,
    PostMain,
    PostSubtitle,
    PostText,
    PostTitle,
} from './styles/PostStyle';
import templo_toji from '../../assets/pictures/japan/templo_toji.jpg';
import tokio_future from '../../assets/pictures/japan/tokio_future.jpg';
function Post() {
    return (
        <>
            <PostMain>
                <PostSubtitle>Sitios Turisticos</PostSubtitle>
                <PostContainer>
                    <PostImg src={templo_toji} />
                    <PostBox>
                        <PostTitle>Templo de Toji</PostTitle>
                        <PostText>
                            El Templo Tōji es uno de los templos más emblemáticos de Kioto, Japón,
                            reconocido especialmente por su pagoda de cinco pisos, la más alta de
                            Japón con 55 metros de altura. Fundado en el año 796 durante el periodo
                            Heian, el templo originalmente formaba parte de un par de templos
                            guardianes a la entrada sur de la ciudad, aunque su compañero, el
                            Sai-ji, ya no existe.
                        </PostText>
                        <PostText>
                            El Tōji pertenece a la escuela Shingon del budismo esotérico y tiene una
                            rica historia espiritual y arquitectónica. Su pagoda es un símbolo de
                            Kioto y un tesoro nacional. Está rodeada de bellos jardines y estanques,
                            que ofrecen un ambiente sereno durante todo el año, con paisajes
                            particularmente impresionantes durante la primavera con los cerezos en
                            flor y el otoño con los colores cálidos de las hojas.
                        </PostText>
                        <PostText>
                            En su interior, el templo alberga estatuas y mandalas intrincadamente
                            tallados, que representan la cosmología budista. Además, cada 21 de mes
                            se celebra el mercado Kobo-san, una vibrante feria al aire libre que
                            combina puestos de antigüedades, ropa, artesanías y comida tradicional.
                            El Templo Tōji es una joya histórica y cultural que combina
                            majestuosidad arquitectónica con un profundo significado espiritual.
                        </PostText>
                    </PostBox>
                </PostContainer>
                <PostContainerRight>
                    <PostImg src={tokio_future} />
                    <PostBox>
                        <PostTitle>Shibuya</PostTitle>
                        <PostText>
                            Shibuya es uno de los barrios más icónicos de Tokio, conocido por su
                            energía vibrante, cultura juvenil y moda. Su principal atractivo es el
                            Cruce de Shibuya, el paso peatonal más transitado del mundo, donde miles
                            de personas cruzan simultáneamente, reflejando el ritmo frenético de la
                            ciudad.
                        </PostText>
                        <PostText>
                            La Estatua de Hachiko, símbolo de lealtad, es un popular punto de
                            encuentro cercano. Shibuya también es un epicentro de tendencias, con
                            lugares como Shibuya 109, un centro comercial repleto de moda juvenil, y
                            calles llenas de boutiques, tiendas vintage y cafés modernos.
                        </PostText>
                        <PostText>
                            Por las noches, el barrio se transforma en un centro de vida nocturna,
                            con bares, discotecas y karaokes. Además, su arquitectura combina
                            tradición y modernidad con edificios como Shibuya Scramble Square y
                            Shibuya Stream.
                        </PostText>
                        <PostText>
                            A pesar de su dinamismo, Shibuya ofrece espacios tranquilos como el
                            Parque Yoyogi, ideal para un respiro en medio del bullicio. Este barrio
                            es la esencia de Tokio: moderno, vibrante y lleno de cultura, un destino
                            imprescindible para cualquier visitante.
                        </PostText>
                    </PostBox>
                </PostContainerRight>
            </PostMain>
        </>
    );
}

export default Post;
