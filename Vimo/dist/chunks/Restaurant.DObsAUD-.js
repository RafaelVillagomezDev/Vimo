import{j as e,r as n}from"./react-core.DzcB_2w7.js";import{N as i}from"./Navbar.DrWqh0ix.js";import{d as o,u as r}from"./useAppSelector.D6_7lV5f.js";import{L as s,s as a}from"../index.DScpaeU5.js";import{d as t}from"./styles-vendor.DBgNySS0.js";import{L as d,d as l}from"./router-vendor.DNrqJuUa.js";import{L as c,K as m,M as p,N as x,T as u,O as f,Q as g}from"./vendor.hSDL9w0M.js";import"./redux-vendor.CyEodbzn.js";const h=t.div`
    display: grid;
    gap: 16px;
    /* Límite de ancho para controlar el número máximo de columnas visibles */
    max-width: 1400px;
    width: 100%;
    grid-column: 2 / 7;
    grid-row: 3;
    justify-self: center;
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-columns: repeat(7, 1fr);

    @media only screen and (${o.md}) {
        grid-column: 2 / 7;
    }
`,j=t.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-column: 2 / 7;
    grid-row: 2;

    /* Móvil siempre 1 columna */
    grid-template-columns: 1fr;

    @media only screen and (${o.sm}) {
        /* Si es única: 1 col, si hay varias: 3 cols */
        grid-template-columns: ${({$isSingleImage:e})=>e?"1fr":"repeat(3, 1fr)"};
    }
`,b=t.div`
    display: flex;
    aspect-ratio: ${({$isSingleImage:e})=>e?"21 / 9":"4 / 3"};
    grid-column: span 1;

    @media only screen and (${o.sm}) {
        /* Si es única ocupa las 3 columnas del grid, si no, solo 2 */
        grid-column: ${({$isSingleImage:e})=>e?"span 3":"span 2"};
    }
`,y=t.div`
    display: none;

    @media only screen and (${o.sm}) {
        display: grid;
        grid-column: span 1;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        /* Esto asegura que las fotos del collage sean cuadradas o proporcionales */
        grid-auto-rows: 1fr;
    }
`,v=t.img`
    width: 100%;
    height: 100%; /* Cambiado de fit-content a 100% para llenar el grid */
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02); /* Escala más sutil para no tapar bordes */
    }
`,w=t.div`
    padding: 2rem;
    background-color: whitesmoke;
    width: 100%;
    grid-column: 1 / -1;
    grid-row: 1;
`,$=t.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,k=t.div`
    display: flex;
    justify-content: space-around;
`,z=t.div`
    display: flex;
    flex-direction: row;
`,S=t.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding-right: 0.2rem;
    @media only screen and (${o.sm}) {
        font-size: 25px;
    }
`;t.p`
    font-family: 'Inter', 'sans-serif';
    font-size: 16px;
`;const P=t.div`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`,T=t.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`,C=t.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 6px;
    border-radius: 10px;
`;t.span.attrs(e=>({$borderBottom:e.$borderBottom||"solid 1px black"}))`
    font-family: 'Roboto';

    border-bottom: ${e=>e.$borderBottom};
    display: none;
    font-size: 1;

    @media only screen and (${o.sm}) {
        display: block;
    }
`;const M=t.div`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    padding: 6px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (${o.sm}) {
        flex-direction: row;
    }
    grid-row: 3;
`;t.p`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border-bottom: none;
    padding: 10px 0px;
    @media only screen and (${o.sm}) {
        border-bottom: 1px solid gray;
    }
`,t.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
`,t.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem;
    grid-gap: 2rem;

    @media only screen and (${o.sm}) {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: minmax(100px, auto);
    }
`;const A=t(k)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${o.sm}) {
        row-gap: 1rem;
    }
`;t.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    @media only screen and (${o.sm}) {
        row-gap: 3rem;
    }
`,t.p`
    cursor: pointer;

    &:hover {
        text-decoration: line-through;
    }
`,t.span`
    font-weight: bold;
    padding-right: 2px;
`;const I=t.div`
    width: 100%;
    grid-column: 2/7;
    grid-row: 3;
    @media only screen and (${o.md}) {
        grid-column: 2 / 4;
    }
`,L=t.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: black;
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    @media only screen and (${o.md}) {
        font-size: 18px;
    }
`,_=n.createContext(null);function q(){const e=n.useContext(_);if(!e)throw new Error("CardGallery sub-components  deben tener como padre  <CardGallery />");return e}function E({data:n,children:i}){return n?e.jsx(_.Provider,{value:n,children:e.jsx(h,{children:i},n.id)}):e.jsx(A,{children:e.jsx(M,{children:"Cargando datos..."})})}E.Header=function({onShare:i,isVerified:o=!0}){const r=q(),[s,a]=n.useState(!1);return e.jsx(w,{children:e.jsxs(k,{children:[e.jsxs(z,{children:[e.jsx(S,{children:r.name}),o&&e.jsx($,{children:"verified"})]}),e.jsxs(P,{children:[e.jsx(T,{onClick:async()=>{const e=window.location.href;await navigator.clipboard.writeText(e),a(!0),i(e),setTimeout(()=>a(!1),2e3)},children:e.jsx($,{color:"black",children:s?"content_paste":"ios_share"})}),e.jsx(C,{children:e.jsx($,{color:"black",children:"favorite"})})]})]})})},E.Visuals=function(){const{images:n}=q();if(!n||0===n.length)return null;const i=1===n.length,o=n[0],r=n.slice(1,5);return e.jsxs(j,{$isSingleImage:i,children:[e.jsx(b,{$isSingleImage:i,children:e.jsx(v,{src:o.url,alt:"portada",loading:"eager"})}),!i&&r.length>0&&e.jsx(y,{children:r.map(n=>e.jsx(v,{src:n.url,alt:"secundaria",loading:"eager"},n.id))})]})},E.Footer=function({price:n="12$",rating:i="9/10"}){const{address:o}=q();return e.jsxs(I,{children:[e.jsxs(L,{children:[e.jsx($,{color:"orange",children:"location_on"}),o]}),e.jsxs(L,{children:[e.jsx($,{color:"orange",children:"paid"}),"Precio Medio: ",n]}),e.jsxs(L,{children:[e.jsx($,{color:"orange",children:"kid_star"}),i," Puntuación de usuarios"]})]})};const F=t.section`
    display: grid;

    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: min-content;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 1rem;
    background-color: #f5f5f5;

    @media only screen and (${o.md}) {
        padding: 2rem;
    }
`,O=t.div`
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
   

    @media only screen and (${o.md}) {
        grid-column: 2 / 8;
    }
`,G=t.div`
    grid-column: 1 / -1;

    @media only screen and (${o.md}) {
        grid-column: 2 / 8;
    }
`,R=t.ul`
    list-style: none;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e0e0e0;
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`,U=t.li`
    cursor: pointer;
    font-family: inherit; /* Mejor que forzar Arial */
    font-size: 16px;
    padding: 10px 5px;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    color: ${e=>e.$active?"#000":"#666"};
    font-weight: ${e=>e.$active?"700":"500"};
    position: relative;

    /* Indicador visual de activo permanente, no solo hover */
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${e=>e.$active?"black":"transparent"};
        transition: background-color 0.3s;
    }

    &:hover {
        color: #000;
    }

    @media only screen and (${o.md}) {
        font-size: 18px;
    }
`,V=t.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`,B=t.div`
    grid-column: 2;

    @media only screen and (${o.md}) {
        grid-column: 2 / 8;
    }
`,D=t.div`
    display: flex;
    justify-content: space-around;
`;t.div`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    padding: 6px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (${o.sm}) {
        flex-direction: row;
    }
    grid-row: 3;
`,t(D)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${o.sm}) {
        row-gap: 1rem;
    }
`;const N=t.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    margin-bottom: 0.5rem;
    color: #333;
    @media only screen and (${o.md}) {
        font-size: 25px;
    }
`,H=t.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: gray;
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    @media only screen and (${o.md}) {
        font-size: 18px;
    }
`,K=t.div`
    width: 100%;
    padding-top: 12px;
    overflow: hidden;
`,Q=t(d)`
    font-family: 'Poppins', sans-serif;
    color: gray;
    padding-bottom: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    column-gap: 1rem;
`,W=t.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,Z=c.icon({iconUrl:p,shadowUrl:m,iconSize:[25,41],iconAnchor:[12,41]}),J=({centro:n=[40.4167,-3.7033],zoom:i=13,mensaje:o="¡Ubicación encontrada!",altura:r="500px"})=>e.jsx("div",{style:{height:r,width:"100%",borderRadius:"12px",overflow:"hidden"},children:e.jsxs(x,{center:n,zoom:i,scrollWheelZoom:!1,style:{height:"100%",width:"100%"},children:[e.jsx(u,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsx(f,{position:n,icon:Z,children:e.jsx(g,{children:o})})]})}),X=n.createContext(null);function Y(){const e=n.useContext(X);if(!e)throw new Error("Los subcomponentes deben estar dentro de <PageSection />");return e}function ee({children:i,data:o,defaultTab:r="desc"}){const[a,t]=n.useState(r),[d,l]=n.useTransition(),c=n.useMemo(()=>({activeTab:a,setActiveTab:t,isPending:d,startTransition:l,data:o}),[a,d,o]);return e.jsx(X.Provider,{value:c,children:o?e.jsx(F,{children:e.jsx(G,{children:e.jsx(V,{children:i})})},o.id):e.jsx(s,{})})}function ne(){return e.jsx("div",{children:e.jsx("p",{children:"Esta es la sección de descripción. Aquí puedes agregar detalles sobre el contenido que estás mostrando."})})}function ie(){return e.jsx("div",{children:e.jsx("p",{children:"Esta es la sección de descripción. Aquí puedes agregar detalles sobre el contenido que estás mostrando."})})}function oe(){return e.jsx("div",{children:e.jsx("p",{children:"Esta es la sección de descripción. Aquí puedes agregar detalles sobre el contenido que estás mostrando."})})}ee.Tabs=function({tabs:n}){const{activeTab:i,setActiveTab:o,startTransition:r}=Y();return e.jsx(R,{children:n.map(n=>e.jsx(U,{$active:i===n.id,onClick:()=>r(()=>o(n.id)),children:n.label},n.id))})},ee.Panel=function({sections:i}){const o=Y();if(!o)return null;const{activeTab:r,isPending:a}=o,t=n.useMemo(()=>i[r],[r,i]);return e.jsx(n.Suspense,{fallback:e.jsx(s,{}),children:e.jsx("div",{style:{opacity:a?.6:1,transition:"0.3s ease-in-out",pointerEvents:a?"none":"auto"},children:t})})},ee.Contact=function(){const n=Y();if(!n||!n.data)return null;const{address:i,email:o,phone:r,web:s}=n.data;return e.jsx(O,{children:e.jsxs(B,{children:[e.jsx(N,{children:"Contacto"}),e.jsxs(H,{children:[e.jsx(W,{color:"black",children:"location_on"}),i]}),o&&e.jsxs(H,{children:[e.jsx(W,{color:"black",children:"alternate_email"}),o]}),r&&e.jsxs(H,{children:[e.jsx(W,{color:"black",children:"perm_phone_msg"}),r]}),s&&e.jsx(H,{children:e.jsxs(Q,{to:s,target:"_blank",children:[e.jsx(W,{color:"black",children:"web"}),s]})})]})})},ee.Location=function(){const n=Y();if(!n||!n.data)return null;const{address:i}=n.data;return e.jsx(O,{children:e.jsxs(B,{children:[e.jsx(N,{children:"Ubicación"}),e.jsx(J,{altura:"300px",mensaje:i}),e.jsx(K,{children:e.jsxs(H,{children:[e.jsx(W,{color:"black",children:"location_on"}),i]})})]})})};const re=[{id:"desc",label:"Descripción"},{id:"menu",label:"Menú"},{id:"reviews",label:"Opiniones"}];function se(){const{id:o}=l(),t=r(e=>o?a(e,o):null),d=n.useMemo(()=>({desc:e.jsx(ne,{}),menu:e.jsx(ie,{}),reviews:e.jsx(oe,{})}),[]);return t?e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsxs("main",{children:[e.jsxs(E,{data:t,children:[e.jsx(E.Header,{onShare:e=>{},isVerified:!0}),e.jsx(E.Visuals,{}),e.jsx(E.Footer,{price:"15$",rating:"9.5/10"})]}),e.jsx(n.Suspense,{fallback:e.jsx(s,{}),children:e.jsxs(ee,{data:t,defaultTab:"desc",children:[e.jsx(ee.Tabs,{tabs:re}),e.jsx(n.Suspense,{fallback:e.jsx(s,{}),children:e.jsx(ee.Panel,{sections:d})}),e.jsx(ee.Contact,{}),e.jsx(ee.Location,{})]})})]})]}):e.jsx(s,{})}export{se as default};
