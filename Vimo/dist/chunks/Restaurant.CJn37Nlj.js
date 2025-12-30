const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/PageSection.CVX-rHNy.js","chunks/react-core.Y2jSZEnw.js","chunks/vendor.C1hs9ypl.js","chunks/styles-vendor.B8BWolMe.js","chunks/mixin_styledComponent.DHb0f0Lx.js"])))=>i.map(i=>d[i]);
import{s as e,L as i,_ as r}from"../index.1WEvsWGG.js";import{r as o,j as n}from"./react-core.Y2jSZEnw.js";import{N as a}from"./Navbar.DdWfcdo9.js";import{u as s}from"./useAppSelector.C5JIY7tC.js";import{d as t}from"./styles-vendor.B8BWolMe.js";import{d}from"./mixin_styledComponent.DHb0f0Lx.js";import{u as l}from"./router-vendor.BDvUuwyP.js";import"./vendor.C1hs9ypl.js";import"./redux-vendor.DrAjmWdk.js";const c=t.div`
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

    @media only screen and (${d.md}) {
        grid-column: 2 / 7;
    }
`,p=t.div`
    display: grid;
    gap: 16px;
    width: 100%;
    
 
    grid-column: 2 / 7; 
    grid-row: 2;
   
   
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); 
    
    grid-auto-rows: auto;

    @media only screen and (${d.md}) {
        grid-column: 2 / 7;
    }
    
`,m=t.div`
    display: flex;
    flex-direction: column;
    /* Relación de aspecto para la imagen principal */
    aspect-ratio: 4 / 3; 
    
    /* Ocupa 1 columna del grid interno por defecto */
    grid-column: span 1; 

    @media only screen and (${d.md}) {
        /* En pantallas medianas y grandes, ocupa 2 columnas */
        grid-column: span 2; 
    }
`,f=t.div`
    display: none;
    /* Relación de aspecto para el collage */
    aspect-ratio: 3 / 4; 

     @media only screen and (${d.sm}) {
        display: grid;
        /* Ocupa el espacio restante del GridContent (span 1) */
        grid-column: span 1; 
        
        /* Define su propia cuadrícula interna (2 columnas para las imágenes) */
        grid-template-columns: repeat(2, 1fr); 
        gap: 1rem;
        grid-auto-rows: 200px;
    }
    @media only screen and (${d.lg}) {
        grid-auto-rows: 242px;
    }
`,x=t.img`
    width: 100%;
    height: fit-content;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`,g=t.div`
    padding: 2rem;
    background-color: whitesmoke;
    width: 100%;
    grid-column: 1 / -1; 
    grid-row: 1;
`,u=t.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,h=t.div`
    display: flex;
    justify-content: space-around;
`,y=t.div`
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
`,w=t.button`
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
    
    @media only screen and (${d.sm}) {
        display: block;
    }
`;const $=t.div`
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    padding: 6px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (${d.sm}) {
        flex-direction: row;
    }
    grid-row: 3;
`;t.p`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border-bottom: none;
    padding: 10px 0px;
    @media only screen and (${d.sm}) {
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

    @media only screen and (${d.sm}) {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: minmax(100px, auto);
    }
`;const k=t(h)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${d.sm}) {
        row-gap: 1rem;
    }
`;t.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    @media only screen and (${d.sm}) {
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
`;const P=t.div`
    width: 100%;
    grid-column: 1/7;
    grid-row: 3;
`,_=t.p`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    color: gray;
    padding-bottom: 0.5rem;
`,z=t.h5`
    column-gap: 0.5rem;
    display: flex;
`;function S({data:e,onShare:i,isVerified:r=!0}){const[a,s]=o.useState(!1);if(!e)return n.jsx(k,{children:n.jsx($,{children:"Cargando datos o no se encontró la entidad."})});const t=e.images||[],d=t[0],l=t.slice(1);return n.jsx(n.Fragment,{children:n.jsxs(c,{children:[n.jsx(g,{children:n.jsxs(h,{children:[n.jsxs(y,{children:[n.jsx(j,{children:e.name}),r&&n.jsx(u,{children:"verified"})]}),n.jsxs(b,{children:[n.jsx(w,{onClick:async()=>{try{const e=window.location.href;await navigator.clipboard.writeText(e),s(!0),i(e),setTimeout(()=>s(!1),2e3)}catch(e){}},children:n.jsx(u,a?{color:"black",children:"content_paste"}:{color:"black",children:"ios_share"})}),n.jsx(v,{children:n.jsx(u,{color:"black",children:"favorite"})})]})]})}),n.jsxs(p,{children:[d&&n.jsx(m,{children:n.jsx(x,{src:d.url,alt:d.id||"portada",rel:"preload",fetchPriority:"high",loading:"eager"},d.id)}),l.length>0&&n.jsx(f,{children:l.map(e=>n.jsx(x,{rel:"preload",fetchPriority:"high",loading:"eager",src:e.url,alt:e.id||"imagen secundaria"},e.id))}),n.jsxs(P,{children:[n.jsx(_,{children:n.jsxs(z,{children:[n.jsx(u,{color:"gray",children:"location_on"}),e.address]})}),n.jsx(_,{children:n.jsxs(z,{children:[n.jsx(u,{color:"gray",children:"paid"}),"Precio Medio: 12$"]})}),n.jsx(_,{children:n.jsxs(z,{children:[n.jsx(u,{color:"gray",children:"kid_star"}),"9/10 Puntuación de usuarios"]})})]})]})]},e.id)})}const E=o.lazy(()=>r(()=>import("./PageSection.CVX-rHNy.js"),__vite__mapDeps([0,1,2,3,4])));function R(){const{id:r}=l(),t=s(i=>r?e(i,r):null);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),n.jsx(S,{data:t,onShare:e=>e,isVerified:!0}),n.jsx(o.Suspense,{fallback:n.jsx(i,{}),children:n.jsx(E,{})})]})}export{R as default};
