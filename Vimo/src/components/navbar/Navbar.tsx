import {
    IconText,
    Nav,
    NavContact,
    NavContainerRight,
    NavLinker,
    NavLinks,
    NavList,
    NavLogoLink,
} from './styles/NavbarStyle';

function Navbar() {
    return (
        <>
            <NavContainerRight>
                <NavList>
                    <NavLinker to={'/register'} activeColor="#ff5722"
                        color="black"
                        fontSize="14px"
                    >REGISTRAR NUEVA OPCION</NavLinker>
                </NavList>
            </NavContainerRight>
            <Nav>

                <NavContact>
                    <NavLogoLink to={'/'}>
                        <IconText>ZappyMap</IconText>
                    </NavLogoLink>
                </NavContact>
                <NavLinks>
                    <NavList>
                        <NavLinker to={'/'}>Inicio</NavLinker>
                        <NavLinker to={'/restaurants'}>Restaurantes</NavLinker>
                        <NavLinker to={'/destinations'}>Discotecas</NavLinker>
                        <NavLinker to={'sites'}>Sitios</NavLinker>
                        <NavLinker to={'destinations'}>Transporte</NavLinker>
                    </NavList>
                </NavLinks>
            </Nav>
        </>
    );
}

export default Navbar;
