import { IconText, Nav, NavContact, NavLinker, NavLinks, NavList } from './styles/NavbarStyle';

function Navbar() {
    return (
        <>
            <Nav>
                <NavContact>
                    <IconText>ZappyMap</IconText>
                </NavContact>
                <NavLinks>
                    <NavList>
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
