import {
    IconText,
    Nav,
    NavContact,
    NavLinker,
    NavLinks,
    NavList,
    NavLogoLink,
} from './styles/NavbarStyle';

function Navbar() {
    return (
        <>
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
