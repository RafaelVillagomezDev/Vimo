{data  ? (
    data.map((restaurant: any, index: number) => {
        return (
            <Card key={index}>
                <> {console.log(restaurant)}</>
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
                        <CardTitleText>1. Restaurante Carmen</CardTitleText>
                    </CardBox>
                    <CardBox>
                        <CardtTextFlex>
                            <Icon>kid_star</Icon> Puntuación (9,6)
                        </CardtTextFlex>
                    </CardBox>
                    <CardBox>
                        <CardtTextFlex>
                            <Icon>location_on</Icon>C. Santa Barbara, 6, 28609,
                            Madrid
                        </CardtTextFlex>
                    </CardBox>
                    <CardBox>
                        <CardtTextFlex>
                            <Icon>restaurant</Icon>Mediterráneo . Precio medio:
                            20€
                        </CardtTextFlex>
                    </CardBox>
                    <CardBoxFlex>
                        <CardText>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.{' '}
                            {verMas &&
                                'Consequuntur ipsa corrupti quisquam aperiam amet adipisci, impedit similique maiores nam numquam, commodi ab, odit rem eum saepe ut sed. Deserunt, minus. '}
                        </CardText>
                        <ButtonVerMas
                            onClick={verMas ? handleVerMenos : handleVerMas}>
                            {verMas ? 'Ver menos' : 'Ver más'}
                        </ButtonVerMas>
                    </CardBoxFlex>
                    <CardIcons>
                        <LinkIcon
                            to={'https://losmontesdegalicia.es/menu-select/'}>
                            <Icon>language</Icon>Web
                        </LinkIcon>
                        <LinkIcon
                            to={'https://losmontesdegalicia.es/menu-select/'}>
                            <Icon>menu_book</Icon>Menu
                        </LinkIcon>
                        <TelLink href={`tel:${'618152241'}`}>
                            <Icon>call_quality</Icon>618152241
                        </TelLink>
                    </CardIcons>
                </CardSection>
            </Card>
        );
    })
) : (
    <CardBox>
        <CardText>No hay resturantes disponibles </CardText>
    </CardBox>
)}