import {
    PostBoardBox,
    PostContainer,
    PostFigcaption,
    PostFigure,
    PostImg,
    PostList,
    PostListItem,
    PostMain,
    PostQuote,
    PostSpan,
    PostSubtitle,
    PostText,
} from './styles/PostStyle';
import { TfiMapAlt } from 'react-icons/tfi';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import alcazar from '../../assets/pictures/spain/alcazar_madrid.jpg';
import bandera from '../../assets/pictures/spain/bandera_madrid.png';
import mapa_madrid from '../../assets/pictures/spain/mapa_madrid.webp';
function Post() {
    return (
        <>
            <PostMain>
                <PostSubtitle>Historia</PostSubtitle>
                <PostContainer>
                    <PostFigure>
                        <PostImg src={alcazar} alt="Alcazar de Madrid" loading='lazy' />
                        <PostFigcaption>Alcazar de Madrid </PostFigcaption>
                    </PostFigure>

                    <PostBoardBox>
                        
                        <PostText>
                            En las orillas del Manzanares, donde el agua fluía generosa, los árabes
                            erigieron en el año 865 una fortaleza a la que llamaron 'Mayrit', que
                            significa 'abundancia de ríos de agua'. Este nombre, tan evocador,
                            reflejaba la esencia de aquel lugar, un oasis en la meseta castellana.
                            Su primer escudo, con el lema <PostQuote cite='https://caminandopormadrid.com/fui-sobre-agua-edificada-mis-muros-de'>Fui sobre agua edificada / Mis muros de
                            fuego son / Esta es mi insignia y mi blasón</PostQuote>, era un canto a su origen
                            acuático y a la fortaleza que la protegería a lo largo de los siglos. En
                            1083, la ciudad cambió de manos con la conquista de Alfonso VI,
                            iniciando un nuevo capítulo en su milenaria historia
                        </PostText>
                        <PostText>
                            En 1561, la historia de Madrid dio un giro trascendental. Felipe II, con
                            su mirada puesta en el futuro, decidió trasladar la corte a esta ciudad,
                            lejos de las antiguas capitales. La centralidad geográfica de Madrid y
                            la menor presencia de poderes establecidos la convirtieron en el lienzo
                            perfecto sobre el que construir una nueva corte. La predilección de su
                            esposa, Isabel de Valois, por este modesto pueblo, fue la pincelada
                            final que completó el cuadro. A partir de ese momento, Madrid se
                            transformó en el epicentro de un imperio, un crisol de culturas y el
                            escenario de grandes acontecimientos históricos
                        </PostText>
                    </PostBoardBox>
                </PostContainer>
                <PostSubtitle>Simbolos</PostSubtitle>
                <PostContainer>
                    <PostFigure>
                        <PostImg src={bandera} alt="Bandera de Comunidad Madrid"  loading='lazy'  />
                        <PostFigcaption>Bandera Comunidad de Madrid </PostFigcaption>
                    </PostFigure>

                    <PostBoardBox>
                        <PostText>
                            La bandera de la Comunidad de Madrid es descrita como un símbolo de
                            identidad regional, caracterizado por su color rojo carmesí y sus siete
                            estrellas plateadas de cinco puntas, dispuestas en dos filas de cuatro y
                            tres. El rojo carmesí hace alusión a la tradición histórica de Madrid
                            como parte de Castilla, mientras que las estrellas representan la
                            constelación de la Osa Mayor, símbolo del cielo nocturno visible en la
                            región. Este diseño, simple pero significativo, busca reflejar tanto el
                            legado cultural como la ubicación geográfica de la Comunidad.
                        </PostText>
                        <PostText>
                            Las siete estrellas presentes en la bandera de la Comunidad de Madrid
                            han dado lugar a múltiples interpretaciones a lo largo del tiempo. Su
                            significado más aceptado las asocia con la constelación de la Osa Mayor,
                            un referente astronómico muy conocido en el hemisferio norte. Esta
                            constelación, visible claramente desde la Sierra de Guadarrama, no solo
                            simboliza la conexión de Madrid con el cielo estrellado, sino que
                            también evoca el vínculo de la región con su entorno natural y su
                            herencia mitológica.
                        </PostText>
                    </PostBoardBox>
                </PostContainer>
                <PostSubtitle>Ubicación</PostSubtitle>
                <PostContainer>
                    <PostFigure>
                        <PostImg src={mapa_madrid} alt="Mapa Comunidad Madrid"  loading='lazy'  />
                        <PostFigcaption>Mapa Comunidad de Madrid </PostFigcaption>
                    </PostFigure>

                    <PostBoardBox>
                        <PostList>
                            <PostListItem>
                                <PostSpan>
                                    {' '}
                                    <TfiMapAlt /> Ubicación
                                </PostSpan>
                                <PostText>
                                    Madrid se encuentra casi en el centro geográfico de la Península
                                    Ibérica, a una latitud de 40º 25' Norte, y una longitud de 3º
                                    42' Oeste.
                                </PostText>
                            </PostListItem>
                            <PostListItem>
                                <PostSpan>
                                    {' '}
                                    <TiWeatherPartlySunny /> Tiempo
                                </PostSpan>
                                <PostText>
                                    La temperatura media anual, en la sombra, es de 13 ºC. En las
                                    estaciones más frías, las temperaturas mínimas suelen caer por
                                    debajo de los 0 ºC, aunque en la ciudad en sí rara vez nieva.
                                    Durante los meses de verano la temperatura puede llegar
                                    fácilmente a los 40 ºC.
                                </PostText>
                            </PostListItem>
                        </PostList>
                    </PostBoardBox>
                </PostContainer>
            </PostMain>
        </>
    );
}

export default Post;
