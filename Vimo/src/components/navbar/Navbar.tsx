import {
    Nav,
    NavButton,
    NavContact,
    NavLinker,
    NavLinks,
    NavList,
    NavText,
} from './styles/NavbarStyle';

function Navbar() {
    return (
        <>
            <Nav>
                <NavContact>
                    <NavButton>
                        <NavText>Contacto</NavText>
                    </NavButton>
                </NavContact>
                <NavLinks>
                    <NavList>
                        <NavLinker to={'/history'}>Historia</NavLinker>
                        <NavLinker to={'experiences'}>Restaurantes</NavLinker>
                        <NavLinker to={'destinations'}>Discotecas</NavLinker>
                        <NavLinker to={'destinations'}>Sitios</NavLinker>
                        <NavLinker to={'destinations'}>Transporte</NavLinker>
                    </NavList>
                </NavLinks>
           
            </Nav>
        </>
    );
}

export default Navbar;
