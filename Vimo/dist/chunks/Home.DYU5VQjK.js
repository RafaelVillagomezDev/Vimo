const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/components.bB_8xhs_.js","chunks/react-vendor.C1IQY_Lk.js","chunks/vendor.CfDX7zRh.js"])))=>i.map(i=>d[i]);
import{d as e,u as t,a as s,f as a,C as r,b as o,_ as n}from"./components.bB_8xhs_.js";import{r as i,j as c}from"./react-vendor.C1IQY_Lk.js";import{d as l,u as d}from"./vendor.CfDX7zRh.js";const p=l.section`
    position: relative;
    padding: 3rem;
    margin: 0 auto;
    max-width: 1200px;
    padding: 1rem;
    @media only screen and (${e.sm}){
            padding: 3rem;
    }
`,u=l.div`
    overflow: hidden; 
    width: 100%;
    padding: 0 10px; 
   
`,x=l.div`
    display: flex; /* LAYOUT HORIZONTAL */
    flex-direction: row;
    
    /* Configuración de Touch/Arrastre */
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    
    /* Margen para contrarrestar el padding-left de los slides */
    margin-left: -15px; 
       
    /* Estilos para CADA SLIDE dentro del contenedor (& > *) */
    & > * {
        min-width: 0;
        padding-left: 15px; /* Espaciado entre slides (gutter) */
        position: relative;
  
          flex: 0 0 100%;
      

        @media only screen and (${e.sm}){
            flex: 0 0 25.0%; 
        }

        
    }
`,f=l.button`
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
`,h=l(f)`
    left: 0px;
`,m=l(f)`
    right: 0px;
`;function g(){const{restaurant:e}=t(e=>e.restaurant),{data:o}=e??{},n=s(),[l,f]=d({loop:!1,align:"start",dragFree:!1}),[g,b]=i.useState(!0),[j,_]=i.useState(!0),w=i.useCallback(()=>{f&&f.scrollPrev()},[f]),v=i.useCallback(()=>{f&&f.scrollNext()},[f]),C=i.useCallback(e=>{b(!e.canScrollPrev()),_(!e.canScrollNext())},[]);return i.useEffect(()=>{if(f)return C(f),f.on("reInit",C),f.on("select",C),()=>{f.off("select",C)}},[f,C]),i.useEffect(()=>{i.startTransition(()=>{n(a({api_url:"http://localhost:3000/api/v1/restaurant/",api_path:""}))})},[]),c.jsxs(p,{children:[c.jsx(h,{onClick:w,disabled:g,children:"<"}),c.jsx(u,{ref:l,children:c.jsx(x,{children:e.count>0?o.map((e,t)=>c.jsx(r,{data:e},e.id+"-"+t)):"No hay restaurantes"})}),c.jsx(m,{onClick:v,disabled:j,children:">"})]})}const b=i.lazy(()=>n(()=>import("./components.bB_8xhs_.js").then(e=>e.c),__vite__mapDeps([0,1,2]))),j=i.lazy(()=>n(()=>import("./components.bB_8xhs_.js").then(e=>e.e),__vite__mapDeps([0,1,2]))),_=[{to:"/restaurants",iconSrc:"/assets/restaurant_icon.QKzCzeK5.webp",text:"Restaurantes"},{to:"/discos",iconSrc:"/assets/disco_icon.k9euaPoH.webp",text:"Discotecas"},{to:"/transport",iconSrc:"/assets/transport_icon.kh2dLW2Z.webp",text:"Transporte"},{to:"/places",iconSrc:"/assets/place_icon.BdsVUGyY.webp",text:"Sitios"},{to:"/lugares",iconSrc:"/assets/lugar_icon.C0nxsh81.webp",text:"Lugares"}];function w(){return c.jsxs(c.Fragment,{children:[c.jsx(b,{}),c.jsx(o,{children:"Categorias"}),c.jsx(j,{slidesData:_}),c.jsx(o,{children:"Nuestras mejores ofertas"}),c.jsx(g,{})]})}export{w as default};
