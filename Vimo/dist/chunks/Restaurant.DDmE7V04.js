import{j as e,r as n}from"./react-core.hIu8Leyl.js";import{N as i}from"./Navbar.DOuCXdC6.js";import{u as o}from"./useAppSelector.BUBff-Wi.js";import{L as r,d as s,s as a,f as t}from"../index.vfuDfqJv.js";import{d}from"./styles-vendor.BBhjEPUr.js";import{d as l,u as c,F as p}from"./Footer.B68oxbZL.js";import{L as m,f as u}from"./router-vendor.DJhrlxSV.js";import{L as x,J as f,K as g,M as h,T as j,N as b,O as y}from"./vendor.Dqz0mnuI.js";import"./redux-vendor.CF7IZYAF.js";const v=d.div`
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

    @media only screen and (${l.md}) {
        grid-column: 2 / 7;
    }
`,w=d.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-column: 2 / 7;
    grid-row: 2;

    /* Móvil siempre 1 columna */
    grid-template-columns: 1fr;

    @media only screen and (${l.sm}) {
        /* Si es única: 1 col, si hay varias: 3 cols */
        grid-template-columns: ${({$isSingleImage:e})=>e?"1fr":"repeat(3, 1fr)"};
    }
`,$=d.div`
    display: flex;
    aspect-ratio: ${({$isSingleImage:e})=>e?"21 / 9":"4 / 3"};
    grid-column: span 1;

    @media only screen and (${l.sm}) {
        /* Si es única ocupa las 3 columnas del grid, si no, solo 2 */
        grid-column: ${({$isSingleImage:e})=>e?"span 3":"span 2"};
    }
`,k=d.div`
    display: none;

    @media only screen and (${l.sm}) {
        display: grid;
        grid-column: span 1;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        /* Esto asegura que las fotos del collage sean cuadradas o proporcionales */
        grid-auto-rows: 1fr;
    }
`,z=d.img`
    width: 100%;
    height: 100%; /* Cambiado de fit-content a 100% para llenar el grid */
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02); /* Escala más sutil para no tapar bordes */
    }
`,S=d.div`
    padding: 2rem;
    background-color: whitesmoke;
    width: 100%;
    grid-column: 1 / -1;
    grid-row: 1;
`,P=d.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,T=d.div`
    display: flex;
    justify-content: space-around;
`,C=d.div`
    display: flex;
    flex-direction: row;
`,_=d.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding-right: 0.2rem;
    @media only screen and (${l.sm}) {
        font-size: 25px;
    }
`;d.p`
    font-family: 'Inter', 'sans-serif';
    font-size: 16px;
`;const M=d.div`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`,A=d.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`,I=d.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 6px;
    border-radius: 10px;
`;d.span.attrs(e=>({$borderBottom:e.$borderBottom||"solid 1px black"}))`
    font-family: 'Roboto';

    border-bottom: ${e=>e.$borderBottom};
    display: none;
    font-size: 1;

    @media only screen and (${l.sm}) {
        display: block;
    }
`;const L=d.div`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    padding: 6px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (${l.sm}) {
        flex-direction: row;
    }
    grid-row: 3;
`;d.p`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border-bottom: none;
    padding: 10px 0px;
    @media only screen and (${l.sm}) {
        border-bottom: 1px solid gray;
    }
`,d.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
`,d.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem;
    grid-gap: 2rem;

    @media only screen and (${l.sm}) {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: minmax(100px, auto);
    }
`;const E=d(T)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${l.sm}) {
        row-gap: 1rem;
    }
`;d.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    @media only screen and (${l.sm}) {
        row-gap: 3rem;
    }
`,d.p`
    cursor: pointer;

    &:hover {
        text-decoration: line-through;
    }
`,d.span`
    font-weight: bold;
    padding-right: 2px;
`;const q=d.div`
    width: 100%;
    grid-column: 2/7;
    grid-row: 3;
    @media only screen and (${l.md}) {
        grid-column: 2 / 4;
    }
`,F=d.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: black;
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    @media only screen and (${l.md}) {
        font-size: 18px;
    }
`,O=n.createContext(null);function N(){const e=n.useContext(O);if(!e)throw new Error("CardGallery sub-components  deben tener como padre  <CardGallery />");return e}function R({data:n,children:i}){return n?e.jsx(O.Provider,{value:n,children:e.jsx(v,{children:i},n.id)}):e.jsx(E,{children:e.jsx(L,{children:"Cargando datos..."})})}R.Header=function({onShare:i,isVerified:o=!0}){const r=N(),[s,a]=n.useState(!1);return e.jsx(S,{children:e.jsxs(T,{children:[e.jsxs(C,{children:[e.jsx(_,{children:r.name}),o&&e.jsx(P,{children:"verified"})]}),e.jsxs(M,{children:[e.jsx(A,{onClick:async()=>{const e=window.location.href;await navigator.clipboard.writeText(e),a(!0),i(e),setTimeout(()=>a(!1),2e3)},children:e.jsx(P,{color:"black",children:s?"content_paste":"ios_share"})}),e.jsx(I,{children:e.jsx(P,{color:"black",children:"favorite"})})]})]})})},R.Visuals=function(){const{images:n}=N();if(!n||0===n.length)return null;const i=1===n.length,o=n[0],r=n.slice(1,5);return e.jsxs(w,{$isSingleImage:i,children:[e.jsx($,{$isSingleImage:i,children:e.jsx(z,{src:o.url,alt:"portada",loading:"eager"})}),!i&&r.length>0&&e.jsx(k,{children:r.map(n=>e.jsx(z,{src:n.url,alt:"secundaria",loading:"eager"},n.id))})]})},R.Footer=function({price:n="12$",rating:i="9/10"}){const{address:o}=N();return e.jsxs(q,{children:[e.jsxs(F,{children:[e.jsx(P,{color:"orange",children:"location_on"}),o]}),e.jsxs(F,{children:[e.jsx(P,{color:"orange",children:"paid"}),"Precio Medio: ",n]}),e.jsxs(F,{children:[e.jsx(P,{color:"orange",children:"kid_star"}),i," Puntuación de usuarios"]})]})};const D=d.section`
    display: grid;

    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: min-content;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 1rem;
    background-color: #f5f5f5;

    @media only screen and (${l.md}) {
        padding: 2rem;
    }
`,G=d.div`
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
   

    @media only screen and (${l.md}) {
        grid-column: 2 / 8;
    }
`,U=d.div`
    grid-column: 1 / -1;

    @media only screen and (${l.md}) {
        grid-column: 2 / 8;
    }
`,V=d.ul`
    list-style: none;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e0e0e0;
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`,B=d.li`
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

    @media only screen and (${l.md}) {
        font-size: 18px;
    }
`,H=d.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`,J=d.div`
    grid-column: 2;

    @media only screen and (${l.md}) {
        grid-column: 2 / 8;
    }
`,K=d.div`
    display: flex;
    justify-content: space-around;
`;d.div`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    padding: 6px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (${l.sm}) {
        flex-direction: row;
    }
    grid-row: 3;
`,d(K)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${l.sm}) {
        row-gap: 1rem;
    }
`;const W=d.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    margin-bottom: 0.5rem;
    color: #333;
    @media only screen and (${l.md}) {
        font-size: 25px;
    }
`,Z=d.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: gray;
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    @media only screen and (${l.md}) {
        font-size: 18px;
    }
`,Q=d.div`
    width: 100%;
    padding-top: 12px;
    overflow: hidden;
`,X=d(m)`
    font-family: 'Poppins', sans-serif;
    color: gray;
    padding-bottom: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    column-gap: 1rem;
`,Y=d.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,ee=x.icon({iconUrl:g,shadowUrl:f,iconSize:[25,41],iconAnchor:[12,41]});function ne({centro:n=[40.4167,-3.7033],zoom:i=13,mensaje:o="¡Ubicación encontrada!",altura:r="500px"}){return e.jsx("div",{style:{height:r,width:"100%",borderRadius:"12px",overflow:"hidden"},children:e.jsxs(h,{center:n,zoom:i,scrollWheelZoom:!1,style:{height:"100%",width:"100%"},children:[e.jsx(j,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsx(b,{position:n,icon:ee,children:e.jsx(y,{children:o})})]})})}const ie=n.createContext(null);function oe(){const e=n.useContext(ie);if(!e)throw new Error("Los subcomponentes deben estar dentro de <PageSection />");return e}function re({children:i,data:o,defaultTab:s="desc"}){const[a,t]=n.useState(s),[d,l]=n.useTransition(),c=n.useMemo(()=>({activeTab:a,setActiveTab:t,isPending:d,startTransition:l,data:o}),[a,d,o]);return e.jsx(ie.Provider,{value:c,children:o?e.jsx(D,{children:e.jsx(U,{children:e.jsx(H,{children:i})})},o.id):e.jsx(r,{})})}function se(){return e.jsx("div",{children:e.jsx("p",{children:"Esta es la sección de descripción. Aquí puedes agregar detalles sobre el contenido que estás mostrando."})})}function ae(){return e.jsx("div",{children:e.jsx("p",{children:"Esta es la sección de descripción. Aquí puedes agregar detalles sobre el contenido que estás mostrando."})})}function te(){return e.jsx("div",{children:e.jsx("p",{children:"Esta es la sección de descripción. Aquí puedes agregar detalles sobre el contenido que estás mostrando."})})}re.Tabs=function({tabs:n}){const{activeTab:i,setActiveTab:o,startTransition:r}=oe();return e.jsx(V,{children:n.map(n=>e.jsx(B,{$active:i===n.id,onClick:()=>r(()=>o(n.id)),children:n.label},n.id))})},re.Panel=function({sections:i}){const o=oe();if(!o)return null;const{activeTab:s,isPending:a}=o,t=n.useMemo(()=>i[s],[s,i]);return e.jsx(n.Suspense,{fallback:e.jsx(r,{}),children:e.jsx("div",{style:{opacity:a?.6:1,transition:"0.3s ease-in-out",pointerEvents:a?"none":"auto"},children:t})})},re.Contact=function(){const n=oe();if(!n||!n.data)return null;const{address:i,email:o,phone:r,web:s}=n.data;return e.jsx(G,{children:e.jsxs(J,{children:[e.jsx(W,{children:"Contacto"}),e.jsxs(Z,{children:[e.jsx(Y,{color:"black",children:"location_on"}),i]}),o&&e.jsxs(Z,{children:[e.jsx(Y,{color:"black",children:"alternate_email"}),o]}),r&&e.jsxs(Z,{children:[e.jsx(Y,{color:"black",children:"perm_phone_msg"}),r]}),s&&e.jsx(Z,{children:e.jsxs(X,{to:s,target:"_blank",children:[e.jsx(Y,{color:"black",children:"web"}),s]})})]})})},re.Location=function(){const n=oe();if(!n||!n.data)return null;const{address:i,location:o}=n.data,r=!(!(null==o?void 0:o.latitude)||!(null==o?void 0:o.longitude));if(!r&&!i&&!(null==o?void 0:o.address))return null;const s=r?[Number(o.latitude),Number(o.longitude)]:[40.4169473,-3.7035285],a=(null==o?void 0:o.address)||i||"Dirección no disponible";return e.jsx(G,{children:e.jsxs(J,{children:[e.jsx(W,{children:"Ubicación"}),e.jsx(ne,{altura:"300px",centro:s,mensaje:a}),e.jsx(Q,{children:e.jsxs(Z,{children:[e.jsx(Y,{color:"black",children:"location_on"}),a]})})]})})};const de=[{id:"desc",label:"Descripción"},{id:"menu",label:"Menú"},{id:"reviews",label:"Opiniones"}];function le(){const{id:d}=u(),l=c(),m=o(e=>d?s(e,d):null),x=o(a);if("failed"===x||"success"===x&&!m&&d)throw new Response("Not Found",{status:404});const f=n.useMemo(()=>({desc:e.jsx(se,{}),menu:e.jsx(ae,{}),reviews:e.jsx(te,{})}),[]);return n.useEffect(()=>{m||"loading"===x||n.startTransition(()=>{l(t({api_url:"http://localhost:3000/api/v1/restaurant/",api_path:d?`${d}`:""}))})},[m,l,d,x]),"loading"!==x&&m?e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsxs("main",{children:[e.jsxs(R,{data:m,children:[e.jsx(R.Header,{onShare:e=>{},isVerified:!0}),e.jsx(R.Visuals,{}),e.jsx(R.Footer,{price:"15$",rating:"9.5/10"})]}),e.jsx(n.Suspense,{fallback:e.jsx(r,{isOverlay:!0}),children:e.jsxs(re,{data:m,defaultTab:"desc",children:[e.jsx(re.Tabs,{tabs:de}),e.jsx(n.Suspense,{fallback:e.jsx(r,{isOverlay:!0}),children:e.jsx(re.Panel,{sections:f})}),e.jsx(re.Contact,{}),e.jsx(re.Location,{})]})})]}),e.jsx(p,{})]}):e.jsx(r,{})}export{le as default};
