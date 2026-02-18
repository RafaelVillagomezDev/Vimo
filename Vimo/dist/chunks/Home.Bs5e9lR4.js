const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/Carrousell.4ytHsItf.js","chunks/react-core.hIu8Leyl.js","chunks/vendor.Dqz0mnuI.js","assets/vendor.ytJtD8ZQ.css","index.vfuDfqJv.js","chunks/router-vendor.DJhrlxSV.js","chunks/redux-vendor.CF7IZYAF.js","chunks/styles-vendor.BBhjEPUr.js","assets/index.Cr8nHPJu.css","chunks/Footer.B68oxbZL.js","chunks/Navbar.DOuCXdC6.js","chunks/CarrousellSlide.DCKJ9cnZ.js"])))=>i.map(i=>d[i]);
import{s as e,f as r,_ as o}from"../index.vfuDfqJv.js";import{j as a,u as s,r as t}from"./react-core.hIu8Leyl.js";import{d as n,m as i}from"./styles-vendor.BBhjEPUr.js";import{d,u as l,F as c}from"./Footer.B68oxbZL.js";import{L as p}from"./router-vendor.DJhrlxSV.js";import{u as f}from"./useAppSelector.BUBff-Wi.js";import"./vendor.Dqz0mnuI.js";import"./redux-vendor.CF7IZYAF.js";const x=n.section`
    position: relative;
    padding: 3rem;
    margin: 0 auto;
    max-width: 1200px;

    @media only screen and (${d.sm}) {
        padding: 3rem;
    }
`,u=n.div`
    overflow: hidden;
    width: 100%;
    padding: 2rem;
    @media only screen and (${d.sm}) {
        padding: 0rem;
    }
`,m=n.div`
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

        @media only screen and (${d.sm}) {
            flex: 0 0 calc(25% - 3.75px);
        }
    }
`,g=n.button`
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
`,h=n(g)`
    left: 0px;
`,b=n(g)`
    right: 0px;
`,j=n.div`
    width: 100%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 2rem;
    background-color: #fff5f5; 
    border: 1px dashed #feb2b2;
    border-radius: 12px;
    color: #c53030; 
    font-family: 'Inter', sans-serif;
    text-align: center;

    &::before {
        content: '⚠️'; /* Icono rápido sin importar librerías */
        font-size: 1.5rem;
    }

    span {
        font-weight: 600;
        font-size: 1.1rem;
    }

    button {
        margin-top: 10px;
        background: none;
        border: 1px solid #c53030;
        color: #c53030;
        padding: 5px 15px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.8rem;
        transition: all 0.2s;

        &:hover {
            background: #c53030;
            color: white;
        }
    }
`,w=n(j)`
    background-color: #f7fafc;
    border-color: #e2e8f0;
    color: #4a5568;

    &::before {
        content: '📍';
    }
`,y=i`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`,k=n.div`
  /* Ajusta estas medidas a las de tu CardSlide real */
  min-width: 300px; 
  height: 250px;
  margin-right: 20px;
  border-radius: 12px;
  flex: 0 0 auto; 


  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 100%;
  
  /* Aplicación de la animación */
  animation: ${y} 1.5s linear infinite forwards;

  /* Opcional: Puedes añadir formas internas si quieres que sea más detallado */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;

  &::after {
    content: '';
    height: 20px;
    width: 60%;
    background: #e2e8f0;
    border-radius: 4px;
    opacity: 0.6;
  }
`,v=n.div`
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
`,z=n.div`
    width: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`,_=n.div`
    width: 100%;
    flex: 1;
    flex-grow: 1;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 1rem;
`,S=n.h3`
    font-size: 20px;
    color: black;

    @media only screen and (${d.sm}) {
        font-size: 16px;
    }
`,E=n.p`
    font-size: 16px;
    padding-top: 12px;
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
    @media only screen and (${d.sm}) {
        font-size: 16px;
    }
`,C=n.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,$=n.img.attrs(({src:e})=>({src:e,alt:"Imagen card "}))`
    overflow: hidden;
    width: fit-content;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
`,I=n(p)`
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
`,A=n(p)`
    display: flex;
    align-items: center;
`;function P({data:e}){const{name:r,address:o,type_food:s,web:t}=e;return a.jsx(a.Fragment,{children:e.images.map((n,i)=>a.jsxs(v,{children:[a.jsx(A,{to:"restaurants/"+e.id,children:a.jsx(z,{children:a.jsx($,{src:n.url,loading:"lazy"})})},i),a.jsxs(_,{children:[a.jsxs(S,{children:[r,a.jsx(C,{color:"orange",children:"workspace_premium"})]}),a.jsxs(E,{children:[a.jsx(C,{color:"black",children:"map"}),o]}),a.jsxs(E,{children:[a.jsx(C,{color:"black",children:"flatware"}),s]}),a.jsx(E,{children:a.jsxs(A,{to:t,children:[a.jsx(C,{color:"black",children:"web_traffic"}),t]})}),a.jsx(E,{children:a.jsx(I,{to:"restaurants/"+e.id,children:"Ver más"})})]})]},i+"**"+e.id))})}function D(){const{restaurant:o}=f(e=>e.restaurant),{data:n}=o??{},i=f(e),d=l(),[c,p]=s({loop:!1,align:"start",dragFree:!1}),[g,y]=t.useState(!0),[v,z]=t.useState(!0),_=t.useCallback(()=>{p&&p.scrollPrev()},[p]),S=t.useCallback(()=>{p&&p.scrollNext()},[p]),E=t.useCallback(e=>{y(!e.canScrollPrev()),z(!e.canScrollNext())},[]);return t.useEffect(()=>{if(p)return E(p),p.on("reInit",E),p.on("select",E),()=>{p.off("select",E)}},[p,E]),t.useEffect(()=>{t.startTransition(()=>{d(r({api_url:"http://localhost:3000/api/v1/restaurant/",api_path:""}))})},[d]),a.jsxs(x,{children:["success"===i&&o.count>0&&a.jsx(h,{onClick:_,disabled:g,children:"<"}),a.jsx(u,{ref:c,children:a.jsxs(m,{children:["loading"===i&&Array.from({length:4}).map((e,r)=>a.jsx(k,{},`skeleton-${r}`)),"success"===i&&o.count>0&&n.map((e,r)=>a.jsx(P,{data:e},`${e.id}-${r}`)),"success"===i&&0===o.count&&a.jsx(w,{children:"No se encontraron sitios registrados."}),"failed"===i&&a.jsx(j,{children:"Ocurrió un error al cargar los datos."})]})}),"success"===i&&o.count>0&&a.jsx(b,{onClick:S,disabled:v,children:">"})]})}const F=n.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: bold;
    padding: 1rem 2rem;

    @media only screen and (${d.sm}) {
        padding: 2rem 3.8rem;
        font-size: 25px;
    }
`,L=t.lazy(()=>o(()=>import("./Carrousell.4ytHsItf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),R=t.lazy(()=>o(()=>import("./CarrousellSlide.DCKJ9cnZ.js"),__vite__mapDeps([11,1,2,3,7,9,5]))),V=[{to:"/restaurants",iconSrc:"/assets/restaurant_icon.QKzCzeK5.webp",text:"Restaurantes"},{to:"/restaurants",iconSrc:"/assets/disco_icon.k9euaPoH.webp",text:"Pubs"},{to:"/restaurants",iconSrc:"/assets/place_icon.BdsVUGyY.webp",text:"Rurales"},{to:"/restaurants",iconSrc:"/assets/lugar_icon.C0nxsh81.webp",text:"Vanguardistas"}];function O(){return a.jsxs(a.Fragment,{children:[a.jsx(L,{}),a.jsx(F,{children:"Categorias"}),a.jsx(R,{slidesData:V}),a.jsx(F,{children:"Nuestras mejores ofertas"}),a.jsx(D,{}),a.jsx(c,{})]})}export{O as default};
