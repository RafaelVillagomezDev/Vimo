import{j as e,r as n}from"./react-core.Y2jSZEnw.js";import{N as i}from"./Navbar.dy4uQqbn.js";import{d as r,u as o}from"./useAppSelector.DxXDhr7t.js";import{L as s,s as a}from"../index.BzdKx_IP.js";import{d as t}from"./styles-vendor.B8BWolMe.js";import{d}from"./router-vendor.B-vwFvdr.js";import"./vendor.C1hs9ypl.js";import"./redux-vendor.DrAjmWdk.js";const l=t.div`
    display: grid;
    gap: 16px;
    /* Límite de ancho para controlar el número máximo de columnas visibles */
    max-width: 1400px; 
    width: 100%; 
    
    /* MANTENER: Posicionamiento dentro del Grid MÁS EXTERNO */
    grid-column: 2 / 7;
    grid-row: 3;

    justify-self: center; 
    
    grid-auto-rows: minmax(min-content, max-content); 
    
    /* Define 7 columnas explícitas para posicionar a los hijos */
    grid-template-columns: repeat(7, 1fr); 

    @media only screen and (${r.md}) {
        grid-column: 2 / 7;
    }
`,c=t.div`
    display: grid;
    gap: 16px;
    width: 100%;
    
 
    grid-column: 2 / 7; 
    grid-row: 2;
   
   
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); 
    
    grid-auto-rows: auto;

    @media only screen and (${r.md}) {
        grid-column: 2 / 7;
    }
    
`,p=t.div`
    display: flex;
    flex-direction: column;
    /* Relación de aspecto para la imagen principal */
    aspect-ratio: 4 / 3; 
    
    /* Ocupa 1 columna del grid interno por defecto */
    grid-column: span 1; 

    @media only screen and (${r.md}) {
        /* En pantallas medianas y grandes, ocupa 2 columnas */
        grid-column: span 2; 
    }
`,m=t.div`
    display: none;
    /* Relación de aspecto para el collage */
    aspect-ratio: 3 / 4; 

     @media only screen and (${r.sm}) {
        display: grid;
        /* Ocupa el espacio restante del GridContent (span 1) */
        grid-column: span 1; 
        
        /* Define su propia cuadrícula interna (2 columnas para las imágenes) */
        grid-template-columns: repeat(2, 1fr); 
        gap: 1rem;
        grid-auto-rows: 200px;
    }
    @media only screen and (${r.lg}) {
        grid-auto-rows: 242px;
    }
`,u=t.img`
    width: 100%;
    height: fit-content;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`,x=t.div`
    padding: 2rem;
    background-color: whitesmoke;
    width: 100%;
    grid-column: 1 / -1; 
    grid-row: 1;
`,f=t.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,g=t.div`
    display: flex;
    justify-content: space-around;
`,h=t.div`
    display: flex;
    flex-direction: row;
`,j=t.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: bold;
`;t.p`
    font-family: 'Inter', 'sans-serif';
    font-size:16px;
`;const b=t.div`
    font-family: 'Poppins',sans-serif;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`,y=t.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`,v=t.button`
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
    
    @media only screen and (${r.sm}) {
        display: block;
    }
`;const w=t.div`
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    padding: 6px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (${r.sm}) {
        flex-direction: row;
    }
    grid-row: 3;
`;t.p`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border-bottom: none;
    padding: 10px 0px;
    @media only screen and (${r.sm}) {
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

    @media only screen and (${r.sm}) {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: minmax(100px, auto);
    }
`;const $=t(g)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${r.sm}) {
        row-gap: 1rem;
    }
`;t.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    @media only screen and (${r.sm}) {
        row-gap: 3rem;
    }
`,t.p`
    cursor: pointer;
   
    &:hover{
        text-decoration: line-through;
    }
`,t.span`
   font-weight: bold;
   padding-right: 2px;
`;const k=t.div`
    width: 100%;
    grid-column: 2/4;
    grid-row: 3;
`,T=t.p`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    color: gray;
    padding-bottom: 0.5rem;
`,P=n.createContext(null);function z(){const e=n.useContext(P);if(!e)throw new Error("CardGallery sub-components  deben tener como padre  <CardGallery />");return e}function C({data:n,children:i}){return n?e.jsx(P.Provider,{value:n,children:e.jsx(l,{children:i},n.id)}):e.jsx($,{children:e.jsx(w,{children:"Cargando datos..."})})}C.Header=function({onShare:i,isVerified:r=!0}){const o=z(),[s,a]=n.useState(!1);return e.jsx(x,{children:e.jsxs(g,{children:[e.jsxs(h,{children:[e.jsx(j,{children:o.name}),r&&e.jsx(f,{children:"verified"})]}),e.jsxs(b,{children:[e.jsx(y,{onClick:async()=>{const e=window.location.href;await navigator.clipboard.writeText(e),a(!0),i(e),setTimeout(()=>a(!1),2e3)},children:e.jsx(f,{color:"black",children:s?"content_paste":"ios_share"})}),e.jsx(v,{children:e.jsx(f,{color:"black",children:"favorite"})})]})]})})},C.Visuals=function(){const{images:n}=z(),i=null==n?void 0:n[0],r=(null==n?void 0:n.slice(1))||[];return e.jsxs(c,{children:[i&&e.jsx(p,{children:e.jsx(u,{src:i.url,alt:"portada",loading:"eager"})}),r.length>0&&e.jsx(m,{children:r.map(n=>e.jsx(u,{src:n.url,alt:"secundaria",loading:"eager"},n.id))})]})},C.Footer=function({price:n="12$",rating:i="9/10"}){const{address:r}=z();return e.jsxs(k,{children:[e.jsxs(T,{children:[e.jsx(f,{color:"gray",children:"location_on"}),r]}),e.jsxs(T,{children:[e.jsx(f,{color:"gray",children:"paid"}),"Precio Medio: ",n]}),e.jsxs(T,{children:[e.jsx(f,{color:"gray",children:"kid_star"}),i," Puntuación de usuarios"]})]})};const E=t.section`
    display: grid;

    grid-template-columns: repeat(12, 1fr); 
    grid-auto-rows: min-content;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 1rem;
    background-color: #f5f5f5;

    @media only screen and (${r.md}) {
        padding: 2rem;
    }
`,M=t.div`
    grid-column: 1 / -1; 
    
    @media only screen and (${r.md}) {
        grid-column: 2 / 12;
    }
`,A=t.ul`
    list-style: none;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e0e0e0;
    overflow-x: auto; 
    &::-webkit-scrollbar { display: none; }
`,S=t.li`
    cursor: pointer;
    font-family: inherit; /* Mejor que forzar Arial */
    font-size: 1rem;
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

    @media only screen and (${r.md}) {
       font-size: 1.25rem;
    }
`,q=t.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`,R=n.createContext(null);function N({children:i,defaultTab:r="desc"}){const[o,s]=n.useState(r),[a,t]=n.useTransition(),d=n.useMemo(()=>({activeTab:o,setActiveTab:s,isPending:a,startTransition:t}),[o,a]);return e.jsx(R.Provider,{value:d,children:e.jsx(E,{children:e.jsx(M,{children:e.jsx(q,{children:i})})})})}function D(){return e.jsxs("div",{children:[e.jsx("h2",{children:"Descripción"}),e.jsx("p",{children:"Esta es la sección de descripción. Aquí puedes agregar detalles sobre el contenido que estás mostrando."})]})}function G(){return e.jsxs("div",{children:[e.jsx("h2",{children:"MENU"}),e.jsx("p",{children:"Esta es la sección de descripción. Aquí puedes agregar detalles sobre el contenido que estás mostrando."})]})}function O(){return e.jsxs("div",{children:[e.jsx("h2",{children:"Review"}),e.jsx("p",{children:"Esta es la sección de descripción. Aquí puedes agregar detalles sobre el contenido que estás mostrando."})]})}N.Tabs=function({tabs:i}){const{activeTab:r,setActiveTab:o,startTransition:s}=n.useContext(R);return e.jsx(A,{children:i.map(n=>e.jsx(S,{$active:r===n.id,onClick:()=>s(()=>o(n.id)),children:n.label},n.id))})},N.Panel=function({sections:i}){const{activeTab:r,isPending:o}=n.useContext(R),a=n.useMemo(()=>i[r],[r,i]);return e.jsx(n.Suspense,{fallback:e.jsx(s,{}),children:e.jsx("div",{style:{opacity:o?.6:1,transition:"0.3s"},children:a})})};const F=[{id:"desc",label:"Descripción"},{id:"menu",label:"Menú"},{id:"reviews",label:"Opiniones"}];function I(){const{id:r}=d(),t=o(e=>r?a(e,r):null),l=n.useMemo(()=>({desc:e.jsx(D,{}),menu:e.jsx(G,{}),reviews:e.jsx(O,{})}),[]);return t?e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsxs("main",{children:[e.jsxs(C,{data:t,children:[e.jsx(C.Header,{onShare:e=>{},isVerified:!0}),e.jsx(C.Visuals,{}),e.jsx(C.Footer,{price:"15$",rating:"9.5/10"})]}),e.jsx(n.Suspense,{fallback:e.jsx(s,{}),children:e.jsxs(N,{defaultTab:"desc",children:[e.jsx(N.Tabs,{tabs:F}),e.jsx(N.Panel,{sections:l})]})})]})]}):e.jsx(s,{})}export{I as default};
