const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/Carrousell.CGXf5dTi.js","chunks/react-core.DzcB_2w7.js","chunks/vendor.hSDL9w0M.js","assets/vendor.ytJtD8ZQ.css","chunks/styles-vendor.DBgNySS0.js","chunks/useAppSelector.D6_7lV5f.js","chunks/router-vendor.DNrqJuUa.js","chunks/Navbar.DrWqh0ix.js","chunks/CarrousellSlide.Chvsis2e.js"])))=>i.map(i=>d[i]);
import{f as e,_ as r}from"../index.DScpaeU5.js";import{j as o,u as s,r as t}from"./react-core.DzcB_2w7.js";import{d as a}from"./styles-vendor.DBgNySS0.js";import{d as n,u as i}from"./useAppSelector.D6_7lV5f.js";import{L as d}from"./router-vendor.DNrqJuUa.js";import{u as l}from"./useAppDispatch.DlsLhMYc.js";import"./vendor.hSDL9w0M.js";import"./redux-vendor.CyEodbzn.js";const c=a.section`
    position: relative;
    padding: 3rem;
    margin: 0 auto;
    max-width: 1200px;

    @media only screen and (${n.sm}) {
        padding: 3rem;
    }
`,p=a.div`
    overflow: hidden;
    width: 100%;
    padding: 2rem;
    @media only screen and (${n.sm}) {
        padding: 0rem;
    }
`,x=a.div`
    display: flex;
    flex-direction: row;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;

    gap: 1rem;

    /* Estilos para CADA SLIDE dentro del contenedor (& > *) */
    & > * {
        position: relative;
        flex: 0 0 100%;
        min-width: 0;

        @media only screen and (${n.sm}) {
            flex: 0 0 calc(25% - 3.75px);
        }
    }
`,f=a.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: opacity 0.3s;

    &:disabled {
        opacity: 0.3; /* Desactivado visualmente */
        cursor: not-allowed;
    }
`,m=a(f)`
    left: 0px;
`,u=a(f)`
    right: 0px;
`,h=a.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex-shrink: 0;
    border-radius: 12px;
    overflow: hidden;
    background-color: #ffffff;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    &:hover {
        transform: translateY(-5px); /* Efecto de elevación */
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }
`,b=a.div`
    width: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`,g=a.div`
    width: 100%;
    flex: 1;
    flex-grow: 1;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 1rem;
`,j=a.h3`
    font-size: 20px;
    color: black;

    @media only screen and (${n.sm}) {
        font-size: 16px;
    }
`,w=a.p`
    font-size: 16px;
    padding-top: 12px;
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
    @media only screen and (${n.sm}) {
        font-size: 16px;
    }
`,v=a.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,y=a.img.attrs(({src:e})=>({src:e,alt:"Imagen card "}))`
    overflow: hidden;
    width: fit-content;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
`,_=a(d)`
    /* Estructura */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    /* Espaciado y Tamaño */
    padding: 10px 20px;
    margin-top: 10px;

    /* Estilo Visual */
    background-color: #e63946; /* Rojo vibrante */
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 8px;
    border: none;

    /* Sombras y Transiciones */
    box-shadow: 0 4px 6px rgba(230, 57, 70, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;

    /* Icono de Google dentro del botón */
    span.material-icons {
        font-size: 18px;
    }

    /* Estados Interactivos */
    &:hover {
        background-color: #b91c1c;
        box-shadow: 0 6px 12px rgba(230, 57, 70, 0.3);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(230, 57, 70, 0.2);
    }
`,k=a(d)`
    display: flex;
    align-items: center;
`;function z({data:e}){const{name:r,address:s,type_food:t,web:a}=e;return o.jsx(o.Fragment,{children:e.images.map((n,i)=>o.jsxs(h,{children:[o.jsx(k,{to:"restaurants/"+e.id,children:o.jsx(b,{children:o.jsx(y,{src:n.url,loading:"lazy"})})},i),o.jsxs(g,{children:[o.jsxs(j,{children:[r,o.jsx(v,{color:"orange",children:"workspace_premium"})]}),o.jsxs(w,{children:[o.jsx(v,{color:"black",children:"map"}),s]}),o.jsxs(w,{children:[o.jsx(v,{color:"black",children:"flatware"}),t]}),o.jsx(w,{children:o.jsxs(k,{to:a,children:[o.jsx(v,{color:"black",children:"web_traffic"}),a]})}),o.jsx(w,{children:o.jsx(_,{to:"restaurants/"+e.id,children:"Ver más"})})]})]},i+"**"+e.id))})}function S(){const{restaurant:r}=i(e=>e.restaurant),{data:a}=r??{},n=l(),[d,f]=s({loop:!1,align:"start",dragFree:!1}),[h,b]=t.useState(!0),[g,j]=t.useState(!0),w=t.useCallback(()=>{f&&f.scrollPrev()},[f]),v=t.useCallback(()=>{f&&f.scrollNext()},[f]),y=t.useCallback(e=>{b(!e.canScrollPrev()),j(!e.canScrollNext())},[]);return t.useEffect(()=>{if(f)return y(f),f.on("reInit",y),f.on("select",y),()=>{f.off("select",y)}},[f,y]),t.useEffect(()=>{t.startTransition(()=>{n(e({api_url:"http://localhost:3000/api/v1/restaurant/",api_path:""}))})},[]),o.jsxs(c,{children:[o.jsx(m,{onClick:w,disabled:h,children:"<"}),o.jsx(p,{ref:d,children:o.jsx(x,{children:r.count>0?a.map((e,r)=>o.jsx(z,{data:e},e.id+"-"+r)):"No hay restaurantes"})}),o.jsx(u,{onClick:v,disabled:g,children:">"})]})}const E=a.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: bold;
    padding: 1rem 2rem;

    @media only screen and (${n.sm}) {
        padding: 2rem 3.8rem;
        font-size: 25px;
    }
`,C=t.lazy(()=>r(()=>import("./Carrousell.CGXf5dTi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),D=t.lazy(()=>r(()=>import("./CarrousellSlide.Chvsis2e.js"),__vite__mapDeps([8,1,2,3,4,5,6]))),I=[{to:"/restaurants",iconSrc:"/assets/restaurant_icon.QKzCzeK5.webp",text:"Restaurantes"},{to:"/discos",iconSrc:"/assets/disco_icon.k9euaPoH.webp",text:"Discotecas"},{to:"/transport",iconSrc:"/assets/transport_icon.kh2dLW2Z.webp",text:"Transporte"},{to:"/places",iconSrc:"/assets/place_icon.BdsVUGyY.webp",text:"Sitios"},{to:"/lugares",iconSrc:"/assets/lugar_icon.C0nxsh81.webp",text:"Lugares"}];function L(){return o.jsxs(o.Fragment,{children:[o.jsx(C,{}),o.jsx(E,{children:"Categorias"}),o.jsx(D,{slidesData:I}),o.jsx(E,{children:"Nuestras mejores ofertas"}),o.jsx(S,{})]})}export{L as default};
