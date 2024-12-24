import {
    Nav,
    NavButton,
    NavContact,
    NavLinker,
    NavLinks,
    NavList,
    NavSearch,
    NavSearching,
    NavText,
} from './styles/NavbarStyle';

function Navbar() {
    return (
        <>
            <Nav>
                <NavLinks>
                    <NavList>
                        <NavLinker to={'/'}>Pais</NavLinker>
                        <NavLinker to={'experiences'}>Experiences</NavLinker>
                        <NavLinker to={'destinations'}>Destinations</NavLinker>
                    </NavList>
                </NavLinks>
                <NavSearching>
                    <NavSearch
                        aria-label="Busca un lugar"
                        placeholder="Busca un lugar"
                        type="search"
                    />
                </NavSearching>
                <NavContact>
                    <NavButton>
                        <NavText>Contacto</NavText>
                    </NavButton>
                </NavContact>
            </Nav>
        </>
    );
}

export default Navbar;
