const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/Carrousell.Bj92lSfh.js","chunks/react-core.Y2jSZEnw.js","chunks/vendor.C1hs9ypl.js","chunks/styles-vendor.B8BWolMe.js","chunks/useAppSelector.DxXDhr7t.js","chunks/router-vendor.B-vwFvdr.js","chunks/Navbar.dy4uQqbn.js","chunks/CarrousellSlide.B7qzvHTS.js"])))=>i.map(i=>d[i]);
import{f as e,_ as r}from"../index.BzdKx_IP.js";import{j as t,u as s,r as o}from"./react-core.Y2jSZEnw.js";import{d as i}from"./styles-vendor.B8BWolMe.js";import{d as a,u as n}from"./useAppSelector.DxXDhr7t.js";import{L as d}from"./router-vendor.B-vwFvdr.js";import{u as l}from"./useAppDispatch.VU3wg90-.js";import"./vendor.C1hs9ypl.js";import"./redux-vendor.DrAjmWdk.js";const c=i.section`
    position: relative;
    padding: 3rem;
    margin: 0 auto;
    max-width: 1200px;
    padding: 1rem;
    @media only screen and (${a.sm}){
      padding: 3rem;
    }
`,p=i.div`
    overflow: hidden; 
    width: 100%;
    padding: 2rem;
    @media only screen and (${a.sm}){
         
            padding: 0rem;
    }
`,x=i.div`
    display: flex; 
    flex-direction: row;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    

    margin-left: -15px; 
       
    /* Estilos para CADA SLIDE dentro del contenedor (& > *) */
    & > * {
        //min-width: 0; Soluciona el flex en @media SM 
        padding-left: 15px; 
        position: relative;
        flex: 0 0 100%;
      

        @media only screen and (${a.sm}){
         
            flex: 0 0 calc(25% - 3.75px); 
        }

    }
`,m=i.button`
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
`,u=i(m)`
    left: 0px;
`,h=i(m)`
    right: 0px;
`,f=i.div`
   
    width: 100%;
    height: 450px; 
    display: flex;
    flex-direction: column;
    overflow: hidden; 
    flex-shrink: 0;
    margin-right: 15px;
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
    
   @media only screen and (${a.sm}) {
      width: 250px;
      height: 350px;
    }
    
`,g=i.div`
    width: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
   
     @media only screen and (${a.sm}) {
        height: 166px; 
    }
`,b=i.div`
    width: 100%;
    flex: 1; 
    flex-grow: 1; 
    background-color: orangered;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 1rem;
    
`,j=i.h3`
    font-size: 20px;
    color: aliceblue;
    
    @media only screen and (${a.sm}) {
       font-size: 16px;
    }
`,w=i.p`
     font-size: 16px;
     padding-top: 12px;
     @media only screen and (${a.sm}) {
       font-size: 16px;
    }
`,v=i.img.attrs(({src:e})=>({src:e,alt:"Imagen card "}))`
 overflow: hidden;  
    width: fit-content;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  
`,y=i(d)`
    
`;function _({data:e}){const{name:r,address:s,type_food:o}=e;return t.jsx(t.Fragment,{children:e.images.map((i,a)=>t.jsx(y,{to:"restaurants/"+e.id,children:t.jsxs(f,{children:[t.jsx(g,{children:t.jsx(v,{src:i.url,loading:"lazy"})}),t.jsxs(b,{children:[t.jsx(j,{children:r}),t.jsx(w,{children:s}),t.jsx(w,{children:o})]})]},a+"**"+e.id)},a))})}function S(){const{restaurant:r}=n(e=>e.restaurant),{data:i}=r??{},a=l(),[d,m]=s({loop:!1,align:"start",dragFree:!1}),[f,g]=o.useState(!0),[b,j]=o.useState(!0),w=o.useCallback(()=>{m&&m.scrollPrev()},[m]),v=o.useCallback(()=>{m&&m.scrollNext()},[m]),y=o.useCallback(e=>{g(!e.canScrollPrev()),j(!e.canScrollNext())},[]);return o.useEffect(()=>{if(m)return y(m),m.on("reInit",y),m.on("select",y),()=>{m.off("select",y)}},[m,y]),o.useEffect(()=>{o.startTransition(()=>{a(e({api_url:"http://localhost:3000/api/v1/restaurant/",api_path:""}))})},[]),t.jsxs(c,{children:[t.jsx(u,{onClick:w,disabled:f,children:"<"}),t.jsx(p,{ref:d,children:t.jsx(x,{children:r.count>0?i.map((e,r)=>t.jsx(_,{data:e},e.id+"-"+r)):"No hay restaurantes"})}),t.jsx(h,{onClick:v,disabled:b,children:">"})]})}const z=i.h2`
    font-family: 'Poppins',sans-serif;
    font-size: 22px;
    font-weight: bold;
    padding: 1rem 2rem ;

    @media only screen and (${a.sm}) {
       padding: 2rem 3.8rem ;
       font-size: 25px;
    }
`,k=o.lazy(()=>r(()=>import("./Carrousell.Bj92lSfh.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),C=o.lazy(()=>r(()=>import("./CarrousellSlide.B7qzvHTS.js"),__vite__mapDeps([7,1,2,3,4,5]))),D=[{to:"/restaurants",iconSrc:"/assets/restaurant_icon.QKzCzeK5.webp",text:"Restaurantes"},{to:"/discos",iconSrc:"/assets/disco_icon.k9euaPoH.webp",text:"Discotecas"},{to:"/transport",iconSrc:"/assets/transport_icon.kh2dLW2Z.webp",text:"Transporte"},{to:"/places",iconSrc:"/assets/place_icon.BdsVUGyY.webp",text:"Sitios"},{to:"/lugares",iconSrc:"/assets/lugar_icon.C0nxsh81.webp",text:"Lugares"}];function E(){return t.jsxs(t.Fragment,{children:[t.jsx(k,{}),t.jsx(z,{children:"Categorias"}),t.jsx(C,{slidesData:D}),t.jsx(z,{children:"Nuestras mejores ofertas"}),t.jsx(S,{})]})}export{E as default};
