


import { SeekerMain ,InputSeeker, IconMaterial, BtnSearch  } from "./styles/seekerStyles";


function Seeker() {
    return (
        <>

            <SeekerMain>
               <IconMaterial>map</IconMaterial>
              <InputSeeker placeholder="Restaurante,Sitio,Transporte.." id="seeker"/>
              <BtnSearch>Buscar</BtnSearch>
            </SeekerMain>
        </>
    )
}

export default Seeker;