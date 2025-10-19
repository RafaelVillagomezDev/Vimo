import{j as e,T as n,a as i,L as r,r as a,u as o,b as s,c as d,d as t,R as l}from"./react-vendor.BoNHxbLD.js";import{c,a as p,d as x}from"./vendor.C_WcaFnF.js";const h={},m=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(null==i?void 0:i.nonce)||(null==i?void 0:i.getAttribute("nonce"));r=e(n.map(e=>{if((e=function(e){return"/"+e}(e))in h)return;h[e]=!0;const n=e.endsWith(".css");if(document.querySelector(`link[href="${e}"]${n?'[rel="stylesheet"]':""}`))return;const i=document.createElement("link");return i.rel=n?"stylesheet":"modulepreload",n||(i.as="script"),i.crossOrigin="",i.href=e,a&&i.setAttribute("nonce",a),document.head.appendChild(i),n?new Promise((n,r)=>{i.addEventListener("load",n),i.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function a(e){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e}return r.then(n=>{for(const e of n||[])"rejected"===e.status&&a(e.reason);return e().catch(a)})},u=c("restaurant/fetchRestaurant",async(e,{rejectWithValue:n})=>{const{method:i="GET",...r}=e,a={method:i,...r};try{const{data:e,error:i}=await(async({api_url:e,method:n="GET",body:r,headers:a={},token:o})=>{const s={"Content-Type":"application/json",...o?{Authorization:`Bearer ${o}`}:{},...a};try{const i=await fetch(e,{method:n,headers:s,body:"GET"!==n&&r?JSON.stringify(r):void 0});if(!i.ok)throw new Error(`Error ${i.status}: ${i.statusText}`);return{data:await i.json(),error:null}}catch(i){return i instanceof Error?{data:null,error:i.message||"Error desconocido"}:{data:null,error:"Error desconocido"}}})(a);return i?n(i):e}catch(o){return n(o instanceof Error?o.message:"Error desconocido al contactar la API.")}}),f={restaurant:{code:"",count:0,data:[],message:""},status:"idle",loading:!1},g=p({name:"restaurant",initialState:f,reducers:{},extraReducers:e=>{e.addCase(u.pending,e=>{e.status="loading",e.loading=!1}),e.addCase(u.fulfilled,(e,n)=>{e.status="success",e.loading=!0,e.restaurant=n.payload}),e.addCase(u.rejected,e=>{e.status="failed",e.loading=!1})},selectors:{selectRestaurantById:(e,n)=>e.restaurant.data.find(e=>e.id===n)}}),{selectRestaurantById:j}=g.selectors,y=g.reducer,b="(min-width: 577px)",w="(min-width: 769px)",v="(min-width: 992px)",$="(min-width: 1200px)",k=x.div`
    width: 100%;
    padding: 2rem;
    @media only screen and (${b}) {
        padding: 3rem;
    }
`,z=x.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 5vw;
    font-weight: 500;
    color: black;
    padding-bottom: 2rem;
    text-align: center;
    @media only screen and (${b}) {
        text-align: start;
    }
`,M=x.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
`,E=x.figure``,_=x.figcaption`
    color: black;
    font-family: 'fangsong';
`,C=x.img`
    flex-shrink: 0;
    border-radius: 15px;
    height: 250px;
    @media only screen and (${b}) {
        border-radius: 0px;
    }
`;x.h2`
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-items: center;
    text-align: center;
    padding: 1rem;
`;const P=x.p`
    color: black;
    word-wrap: break-word;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    padding: 1rem;
    font-size: 16px;
    @media only screen and (${b}) {
        font-size: 20px;
    }
`,S=x.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 10px;
    color: black;
    @media only screen and (${b}) {
        color: black;
    }
`,I=x.q`
    font-weight: 600;
    font-style: oblique;
`,L=x.ul``,T=x.li``,O=x.span`
    display: inline-flex;
    column-gap: 12px;
    font-family: 'Rokkitt', serif;
    font-size: 25px;
`;function A(){return e.jsx(e.Fragment,{children:e.jsxs(k,{children:[e.jsx(z,{children:"Historia"}),e.jsxs(M,{children:[e.jsxs(E,{children:[e.jsx(C,{src:"/assets/alcazar_madrid.B5a2rc4K.jpg",alt:"Alcazar de Madrid",loading:"lazy"}),e.jsx(_,{children:"Alcazar de Madrid "})]}),e.jsxs(S,{children:[e.jsxs(P,{children:["En las orillas del Manzanares, donde el agua fluía generosa, los árabes erigieron en el año 865 una fortaleza a la que llamaron ","Mayrit",", que significa ","abundancia de ríos de agua",". Este nombre, tan evocador, reflejaba la esencia de aquel lugar, un oasis en la meseta castellana. Su primer escudo, con el lema",e.jsx(I,{cite:"https://caminandopormadrid.com/fui-sobre-agua-edificada-mis-muros-de",children:"Fui sobre agua edificada / Mis muros de fuego son / Esta es mi insignia y mi blasón"}),", era un canto a su origen acuático y a la fortaleza que la protegería a lo largo de los siglos. En 1083, la ciudad cambió de manos con la conquista de Alfonso VI, iniciando un nuevo capítulo en su milenaria historia"]}),e.jsx(P,{children:"En 1561, la historia de Madrid dio un giro trascendental. Felipe II, con su mirada puesta en el futuro, decidió trasladar la corte a esta ciudad, lejos de las antiguas capitales. La centralidad geográfica de Madrid y la menor presencia de poderes establecidos la convirtieron en el lienzo perfecto sobre el que construir una nueva corte. La predilección de su esposa, Isabel de Valois, por este modesto pueblo, fue la pincelada final que completó el cuadro. A partir de ese momento, Madrid se transformó en el epicentro de un imperio, un crisol de culturas y el escenario de grandes acontecimientos históricos"})]})]}),e.jsx(z,{children:"Simbolos"}),e.jsxs(M,{children:[e.jsxs(E,{children:[e.jsx(C,{src:"/assets/bandera_madrid.Beh6rZ3P.png",alt:"Bandera de Comunidad Madrid",loading:"lazy"}),e.jsx(_,{children:"Bandera Comunidad de Madrid "})]}),e.jsxs(S,{children:[e.jsx(P,{children:"La bandera de la Comunidad de Madrid es descrita como un símbolo de identidad regional, caracterizado por su color rojo carmesí y sus siete estrellas plateadas de cinco puntas, dispuestas en dos filas de cuatro y tres. El rojo carmesí hace alusión a la tradición histórica de Madrid como parte de Castilla, mientras que las estrellas representan la constelación de la Osa Mayor, símbolo del cielo nocturno visible en la región. Este diseño, simple pero significativo, busca reflejar tanto el legado cultural como la ubicación geográfica de la Comunidad."}),e.jsx(P,{children:"Las siete estrellas presentes en la bandera de la Comunidad de Madrid han dado lugar a múltiples interpretaciones a lo largo del tiempo. Su significado más aceptado las asocia con la constelación de la Osa Mayor, un referente astronómico muy conocido en el hemisferio norte. Esta constelación, visible claramente desde la Sierra de Guadarrama, no solo simboliza la conexión de Madrid con el cielo estrellado, sino que también evoca el vínculo de la región con su entorno natural y su herencia mitológica."})]})]}),e.jsx(z,{children:"Ubicación"}),e.jsxs(M,{children:[e.jsxs(E,{children:[e.jsx(C,{src:"/assets/mapa_madrid.wP0fYJAT.webp",alt:"Mapa Comunidad Madrid",loading:"lazy"}),e.jsx(_,{children:"Mapa Comunidad de Madrid "})]}),e.jsx(S,{children:e.jsxs(L,{children:[e.jsxs(T,{children:[e.jsxs(O,{children:[e.jsx(n,{})," Ubicación"]}),e.jsxs(P,{children:["Madrid se encuentra casi en el centro geográfico de la Península Ibérica, a una latitud de ","40º 25"," Norte, y una longitud de"," ","3º\n                                    42"," ","Oeste."]})]}),e.jsxs(T,{children:[e.jsxs(O,{children:[e.jsx(i,{})," Tiempo"]}),e.jsx(P,{children:"La temperatura media anual, en la sombra, es de 13 ºC. En las estaciones más frías, las temperaturas mínimas suelen caer por debajo de los 0 ºC, aunque en la ciudad en sí rara vez nieva. Durante los meses de verano la temperatura puede llegar fácilmente a los 40 ºC."})]})]})})]})]})})}const R=x.div`
    height: 250px;
    background-color:${e=>e.theme.colors.blueDeep};
    padding: 2rem;
    @media only screen and (${b}) {
        height: 200px;
    }
`,B=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    row-gap: 2rem;
    column-gap: 2rem;
`,q=x.div`
    display: flex;
    justify-content: space-evenly;
    column-gap: 2rem;
    align-items: center;
`,F=x.h1`
    font-family: 'Poppins', sans-serif;
    font-family: 24px;
    font-weight: 500;
    color: white;
    @media only screen and (${b}) {
        font-family: 35px;
    }
`;x.img`
    width: ${({sizes:e})=>e||"40px"};
    height: ${({sizes:e})=>e||"40px"};
`;const G=x(x.span`
    font-family: 'Material Symbols Outlined';
    font-size: 22px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`)`
    color: white;
`,D=x.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    @media only screen and (${b}) {
    }
`,N=x(r)`
    color: #fff;
    font-size: 12px;
    @media only screen and (${b}) {
        font-size: 16px;
    }
`,H=x.div`
    margin: 2rem;

    @media only screen and (${b}) {
        margin: 3rem;
    }
`,U=x.div`
    display: grid;
    @media only screen and (${b}) {
        display: grid;
        grid-template-columns: 275px auto;
        gap: 2rem;
        width: 100%;
    }
`,V=x.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`,Z=x(r)`
    
`,J=x.div`

    margin: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 12px; 
    overflow: hidden;
    
    @media only screen and (${$}) {
        flex-direction: row;
        align-items: center;
       
    }
`,W=x.div`
    display: none;
    @media only screen and (${b}) {
        display: block;
    }
`,K=x.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
       border-radius: 12px;

    @media only screen and (${$}) {
        width: 50%;
    }
`,Q=x(K)`
    padding:1rem;
`,Y=x.img.attrs(({src:e})=>({src:e,alt:"Imagen card "}))`
    width: fit-content;
  
`,X=x.div`
    display: flex;
    align-items: baseline;
    padding: 3px;
    @media only screen and (${b}) {
        padding: 0.1rem;
    }
`,ee=x(X)`
    flex-direction: column;
    padding: 10px 0px;
`,ne=x(X)`
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (${b}) {
        padding: 0.1rem;
    }
`,ie=x.h3`
    font-family:  'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
`,re=x.h3`
    font-family:  'Poppins', sans-serif;
    font-size: 22px;
    font-weight: bold;
    padding: 10px 0px;
`,ae=x.h3`
    font-family:  'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    font-weight: bold;
`,oe=x.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    padding-bottom: 6px;
    display: flex;
    align-items: baseline;
`,se=x(oe)`
    display: flex;
    align-items: end;
    font-size: 16px;
`,de=x.button`
    padding: 6px 6px;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
`,te=x.span`
    font-family: 'Material Symbols Outlined';
    font-size: 16px;
    padding-right: 10px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,le=x(r)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 400;
    gap: 0.25rem;
`,ce=x(le)`
    color: white;
    font-size: 16px;
    padding: 0rem;
`,pe=x.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    gap: 0.25rem;
`,xe=x.button`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    padding: 12px 6px;
    border: none;
    border-radius: 10px;
    background-color: #ff3d00;
    color: white;
    font-weight: 400;
    cursor: pointer;
`;function he(){return e.jsx(R,{children:e.jsxs(B,{children:[e.jsx(F,{children:"ZappyMap"}),e.jsxs(q,{children:[e.jsxs(D,{children:[e.jsx(N,{to:"./legales",children:"¿Quienes somos?"}),e.jsx(N,{to:"./legales",children:"Información de contacto"})]}),e.jsxs(D,{children:[e.jsx(N,{to:"./legales",children:"Preguntas frecuentes"}),e.jsx(N,{to:"./legales",children:"Condiciones legales"})]}),e.jsxs(D,{children:[e.jsxs(ce,{to:"https://yandrydev.es/",children:[e.jsx(G,{children:"rss_feed"}),"Redes sociales"]}),e.jsxs(ce,{to:"https://yandrydev.es/",children:[e.jsx(G,{children:"copyright"}),"ZappyMap Inc"]})]}),e.jsx(D,{})]})]})})}const me="/assets/hands_map.B9zuCnS3.png",ue=x.nav`
    background-color: ${e=>e.theme.colors.blueDeep};
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    width: -webkit-fill-available;
`,fe=x.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,ge=x(fe)`
    display: none;
    @media only screen and (${b}) {
        display: flex;
    }
`,je=x(fe)`
    display: flex;
`,ye=x.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
    @media only screen and (${b}) {
        font-size: 35px;
    }
`,be=x.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`,we=x(r)`
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    font-weight: bold;
    &.active {
        background-color: #6200ea; /* Color de fondo para el enlace activo */
        color: #fff;
    }
`;function ve(){return e.jsx(e.Fragment,{children:e.jsxs(ue,{children:[e.jsx(je,{children:e.jsx(ye,{children:"ZappyMap"})}),e.jsx(ge,{children:e.jsxs(be,{children:[e.jsx(we,{to:"/history",children:"Historia"}),e.jsx(we,{to:"/restaurants",children:"Restaurantes"}),e.jsx(we,{to:"/destinations",children:"Discotecas"}),e.jsx(we,{to:"sites",children:"Sitios"}),e.jsx(we,{to:"destinations",children:"Transporte"})]})})]})})}const $e=x.div`
    width: 100%;
    max-width: 500px;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center; 
    flex-direction: row;
    border-radius: 12px; 
    overflow: hidden; 
    

`,ke=x.input`
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem; 
    border: none;
    outline: none;
    background-color: white;
    flex-grow: 1;
`,ze=x.button`
    
    display: flex; 
    align-items: center; 
    justify-content: center; 
    width: 80px; 
    height: 100%; 
    border: none;
    outline: none;
    background-color: ${e=>e.theme.colors.redAlert};
    color: white;
    font-family: 'Poppins', sans-serif; 
`,Me=x.span`
    display: flex; 
    align-items: center; 
    justify-content: center; 
    width: 50px; 
    height: 100%; 
    font-family: 'Material Symbols Outlined';
    font-size: 22px;    
    color: #333;
    font-variation-settings:
        'FILL' 1,
        'wght' 800,
        'GRAD' 0,
        'opsz' 24;
   
    @media only screen and (${b}) {
        font-size: 35px;
    }
`;function Ee(){return e.jsx(e.Fragment,{children:e.jsxs($e,{children:[e.jsx(Me,{children:"map"}),e.jsx(ke,{placeholder:"Restaurante,Sitio,Transporte..",id:"seeker"}),e.jsx(ze,{children:"Buscar"})]})})}const _e=x.div`
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`,Ce=x.div`
    /* Dimensiones y espacio */
    width: -webkit-fill-available; 
    height: 100%;
    max-height: 600px;
    padding: 2rem;
    object-fit: cover; /* No tiene efecto directo en un <div>, se mantiene por si se usa en otro contexto */

    /* Diseño visual y Flexbox */
    background-color: ${e=>e.theme.colors.blueGray};
    display: flex;
    justify-content: center;
    flex-direction: column;

    /* Imagen de Fondo */
    background-image: url(${me}); 
    background-position: right center; 
    background-repeat: no-repeat; 
    background-size: contain; 

    @media only screen and (${b}) {
        margin: 4rem;
        padding: 2rem;
        border-radius: 12px;
    }
`;x.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 4vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: white;
    flex-direction: column;
    justify-content: center;
    
`;const Pe=x.p`
    font-size: 22px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    line-height: normal;
    word-spacing: 3px;
    padding-bottom:2rem;
    color: white;

     @media only screen and (${b}) {
        font-size: 30px;
    }

`,Se=Object.freeze(Object.defineProperty({__proto__:null,default:function({}){return e.jsxs(e.Fragment,{children:[e.jsx(ve,{}),e.jsx(_e,{children:e.jsxs(Ce,{children:[e.jsx(Pe,{children:"Planea y reserva en cualquiera de nuestras ilimitadas opciones"}),e.jsx(Ee,{})]})})]})}},Symbol.toStringTag,{value:"Module"})),Ie=x.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    max-height: 900px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,Le=x.ul`
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
`,Te=x.li`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.open?"#fff":"inherit"};
    transition: background-color 0.3s ease-in-out;
`,Oe=x.ul`
    list-style: none;
    max-height: ${e=>e.open?"300px":"0"};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    background-color: #fff;
    padding-left: 10px;
    margin: 0;
`,Ae=x.li`
    padding: 10px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        transform: scale(1.05);
    }
`,Re=x.input`
    width: 15px; /* Tamaño más grande */
    height: 15px; /* Tamaño más grande */
    margin-right: 5px;
    cursor: pointer;
    appearance: none; /* Elimina el estilo por defecto del checkbox */
    border-radius: 4px; /* Borde redondeado */
    border: 2px solid #2c3e50; /* Borde de color */
    background-color: #fff; /* Fondo blanco */
    position: relative;

    &:checked {
        background-color: black; /* Color de fondo cuando está marcado */
        border-color: gray; /* Cambio de color del borde cuando está marcado */
    }

    &:checked::after {
        content: '✔'; /* Símbolo del visto */
        position: absolute;
        top: 50%;
        left: 50%;
        color: white; /* Color del check */
        font-size: 16px; /* Tamaño del check */
        transform: translate(-50%, -50%); /* Centra el check dentro del checkbox */
    }

    &:hover {
        border-color: black; /* Color de borde al pasar el mouse */
    }
`,Be=x.span`
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.open?"rotate(180deg)":"rotate(0)"};
`;function qe({menuOptions:n}){const[i,r]=a.useState(0);return e.jsx(Ie,{children:e.jsx(Le,{children:n.map((n,a)=>e.jsxs("ul",{children:[e.jsxs(Te,{onClick:()=>(e=>{r(i===e?-1:e)})(a),open:i===a,children:[e.jsx(ie,{children:n.label}),e.jsx(Be,{open:i===a,children:"▼"})]}),e.jsx(Oe,{open:i===a,children:n.subOptions.map((n,i)=>e.jsxs(Ae,{children:[e.jsx(Re,{type:"checkbox"}),n]},i))})]},a))})})}const Fe=s,Ge=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const[n,i]=a.useState(!1),r=()=>i(!0),s=()=>i(!1),{restaurant:l}=Fe(e=>e.restaurant),{data:c}=l??{},{id:p}=t(),[x]=d(),h=o(),m={name:x.get("name"),address:x.get("address")},f=(({pathId:e,baseURL:n="/api/restaurants",pageSize:i,filters:r={}})=>{const[o]=d(),s=Number(o.get("page"))||1,t=i?(s-1)*i:0;return a.useMemo(()=>{let a=e?`${n}/${e}`:n;const s=new URLSearchParams;Object.keys(r).forEach(e=>{const n=r[e];null!=n&&""!==n&&s.append(e,String(n))}),o.forEach((e,n)=>{"page"===n||"limit"===n||"offset"===n||s.has(n)||s.append(n,e)}),i&&(s.set("limit",String(i)),s.set("offset",String(t)));const d=s.toString();return d&&(a+=`?${d}`),a},[e,n,i,r,o,t])})({pathId:p,baseURL:"http://localhost:3000/api/v1/restaurant/",filters:m});return a.useEffect(()=>{c&&0!==c.length||a.startTransition(()=>{h(u({api_url:f,method:"GET",body:{id:p}}))})},[c,h]),e.jsx(H,{children:e.jsxs(U,{children:[e.jsx(W,{children:e.jsx(qe,{menuOptions:[{label:"Tipo de comida ",subOptions:["Mediterranea","Japonesa","Mexicana","China","Turca"]},{label:"Precio",subOptions:["Menos de 15€ por persona.","Entre 15€ y 30€ por persona.","Más de 30€ por persona."]},{label:"Guía Michelin",subOptions:["Guía MICHELIN","3 estrellas MICHELIN","2 estrellas MICHELIN","1 estrella MICHELIN"]}]})}),e.jsx(V,{children:(null==l?void 0:l.count)>0?c.map((i,a)=>{var o,d;return e.jsxs(J,{children:[e.jsx(K,{children:e.jsx(Z,{to:i.id,children:e.jsx(Y,{alt:i.name,src:null==(o=i.images[a])?void 0:o.url,loading:"lazy"})})}),e.jsxs(Q,{children:[e.jsxs(X,{children:[e.jsxs(ae,{children:["Top 1 ",e.jsx(te,{children:"editor_choice"})]}),e.jsx(de,{children:"Michelin"})]}),e.jsx(X,{children:e.jsx(Z,{to:i.id,children:e.jsx(re,{children:i.name})})}),e.jsx(X,{children:e.jsxs(se,{children:[e.jsx(te,{children:"kid_star"})," Puntuación (9,6)"]})}),e.jsx(X,{children:e.jsxs(se,{children:[e.jsx(te,{children:"location_on"}),null==(d=i.location)?void 0:d.address]})}),e.jsx(X,{children:e.jsxs(se,{children:[e.jsx(te,{children:"restaurant"}),i.type_food," . Precio medio: 20€"]})}),e.jsxs(ee,{children:[e.jsxs(oe,{children:[i.description," ",n&&i.description]}),e.jsx(xe,{onClick:n?s:r,children:n?"Ver menos":"Ver más"})]}),e.jsxs(ne,{children:[e.jsxs(le,{to:i.web,children:[e.jsx(te,{children:"language"})," Web"]}),e.jsxs(le,{to:i.web,children:[e.jsx(te,{children:"menu_book"})," Menú"]}),e.jsxs(pe,{href:`tel:${i.phone}`,children:[e.jsx(te,{children:"call_quality"}),i.phone]})]})]})]},i.id)}):e.jsx(X,{children:e.jsx(oe,{children:"No hay restaurantes disponibles"})})})]})})}},Symbol.toStringTag,{value:"Module"})),De=x.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-column: 2 / 7;
    grid-row: 1;

    @media only screen and (${w}) {
        grid-column: 2 / 7;
    }
    @media only screen and (${v}) {
        grid-template-columns: auto auto;
    }
`,Ne=x.div`
    display: flex;
    flex-direction: column;
     
     aspect-ratio: 4 / 3; 
`,He=x.div`
    display: none;
    aspect-ratio: 3 / 4; 
    @media only screen and (${v}) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        grid-auto-rows: 210px;
    }
`,Ue=x.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`,Ve=x.div`
    padding: 2rem;
    background-color: whitesmoke;
    width: 100%;
`,Ze=x.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,Je=x.div`
    display: flex;
    justify-content: space-around;
`,We=x.div`
    display: flex;
    flex-direction: row;
`,Ke=x.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: bold;
    @media only screen and (${b}) {
        font-size: 35px;
    }
`,Qe=x.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: bold;
    @media only screen and (${b}) {
        font-size: 22px;
    }
`;x.p`
    font-family: 'Inter', 'sans-serif';
    font-size:16px;
`;const Ye=x.div`
    font-family: 'Poppins',sans-serif;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`,Xe=x.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`,en=x.button.attrs(e=>({$border:e.$border||"solid 1px black"}))`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 6px;
    border-radius: 10px;
    &:hover {
        background-color: orangered;
    }
    @media only screen and (${b}) {
        border: ${e=>e.$border};
    }
`,nn=x.span.attrs(e=>({$borderBottom:e.$borderBottom||"solid 1px black"}))`
    font-family: 'Roboto';

    border-bottom: ${e=>e.$borderBottom};
    line-height: 22px;
    display: none;

    @media only screen and (${b}) {
        display: block;
    }
`,rn=x.div`
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    padding: 6px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (${b}) {
        flex-direction: row;
    }
`,an=x.p`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border-bottom: none;
    padding: 10px 0px;
    @media only screen and (${b}) {
        border-bottom: 1px solid gray;
    }
`,on=x.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    color: white;
`,sn=x.ul`
    list-style: none;
    display: flex;
`,dn=x(r)`
    font-family: 'Rokkitt', serif;
    font-size: 18px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    line-height: 10px;
    padding: 0.5rem 1rem;
    border-right: solid 2px gray;

    @media only screen and (${b}) {
        font-size: 22px;
    }
`,tn=x.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
`,ln=x.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    grid-gap: 2rem;

    @media only screen and (${b}) {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: minmax(100px, auto);
    }
`,cn=x.div`
    display: grid;
    gap: 16px;
    width: 100%;

    grid-column: 2 / 5;
    grid-row: 2;
    @media only screen and (${b}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${v}) {
        grid-column: 2 / 5;
    }
`,pn=x.div`
    display: grid;
    gap: 16px;
    grid-column: 5 / 7;
    grid-row: 2;
    @media only screen and (${b}) {
        grid-column: 3 / 7;
    }
    @media only screen and (${v}) {
        grid-column: 5 / 7;
    }
`,xn=x.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-area: content;
    grid-column: 2 / 5;
    grid-row: 3;
    @media only screen and (${b}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${w}) {
        grid-column: 2 / 5;
    }
`,hn=x(xn)`
    grid-row: 4;
`,mn=x(Je)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${b}) {
        row-gap: 1rem;
    }
`,un=x.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    @media only screen and (${b}) {
        row-gap: 3rem;
    }
`,fn=x.p`
    cursor: pointer;
   
    &:hover{
        text-decoration: line-through;
    }
`,gn=x.span`
   font-weight: bold;
   padding-right: 2px;
`,jn=a.lazy(()=>m(()=>Promise.resolve().then(()=>Mn),void 0)),yn=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var n,i,r,o,s,d;const[c,p]=a.useState(!1),{id:x}=t(),{restaurant:h}=Fe(e=>e.restaurant);if(!h||!h.data||0===h.data.length)return e.jsx(mn,{children:e.jsx(rn,{children:"No hay restaurantes"})});const m=Fe(e=>x?j(e,x):void 0);return e.jsxs(e.Fragment,{children:[e.jsx(Ve,{children:e.jsxs(Je,{children:[e.jsxs(We,{children:[e.jsx(Ke,{children:null==m?void 0:m.name}),e.jsx(Ze,{children:"verified"})]}),e.jsxs(Ye,{children:[e.jsxs(Xe,{onClick:async()=>{try{const e=window.location.href;await navigator.clipboard.writeText(e),p(!0),setTimeout(()=>p(!1),2e3)}catch(e){}},children:[e.jsx(Ze,{color:"black",children:"ios_share"}),e.jsx(nn,c?{children:"Enlace copiado"}:{children:"Compartir"})]}),e.jsxs(en,{$border:"solid 1px black",children:[e.jsx(Ze,{color:"black",children:"favorite"}),e.jsx(nn,{$borderBottom:"none",children:"Guardar"})]})]})]})}),e.jsx(ln,{children:e.jsxs(l.Fragment,{children:[e.jsxs(De,{children:[e.jsx(Ne,{children:e.jsx(Ue,{src:null==(n=null==m?void 0:m.images[0])?void 0:n.url,alt:(null==(i=null==m?void 0:m.images[0])?void 0:i.id)||"portada"},null==(r=null==m?void 0:m.images[0])?void 0:r.id)}),e.jsx(He,{children:e.jsx(Ue,{src:null==(o=null==m?void 0:m.images[0])?void 0:o.url,alt:(null==(s=null==m?void 0:m.images[0])?void 0:s.id)||"portada"},null==(d=null==m?void 0:m.images[0])?void 0:d.id)}),e.jsxs(rn,{children:[e.jsxs(an,{children:[e.jsx(Ze,{color:"black",children:"restaurant"}),null==m?void 0:m.type_food]}),e.jsxs(an,{children:[e.jsx(Ze,{color:"black",children:"map"}),"España , Madrid"]}),e.jsxs(an,{children:[e.jsx(Ze,{color:"black",children:"euro"}),"Precio medio 20 euros"]})]})]}),e.jsxs(cn,{children:[e.jsx(on,{children:e.jsxs(sn,{children:[e.jsx(dn,{to:"",children:"Horario"}),e.jsx(dn,{to:"",children:"Descripcion"}),e.jsx(dn,{to:"",children:"Contenido"})]})}),e.jsx(tn,{children:null==m?void 0:m.description})]}),e.jsx(pn,{children:e.jsx(jn,{})}),e.jsxs(xn,{children:[e.jsx(Qe,{children:"Caracteristicas"}),e.jsxs(mn,{children:[e.jsxs(rn,{children:[e.jsx(Ze,{color:"black",children:"credit_card"}),"Aceptan tarjetas de credito"]}),e.jsxs(rn,{children:[e.jsx(Ze,{color:"black",children:"check_circle"}),"Comidas, Cenas, Brunch y Bebidas"]}),e.jsxs(rn,{children:[e.jsx(Ze,{color:"black",children:"chef_hat"}),"Tiene opciones veganas y celiacas"]})]})]}),e.jsxs(hn,{children:[e.jsx(Qe,{children:"Menu"}),e.jsxs(un,{children:[e.jsxs(mn,{children:[e.jsx(rn,{children:e.jsxs(fn,{children:["Albondigas ",e.jsx(gn,{children:"22$"})]})}),e.jsx(rn,{children:e.jsxs(fn,{children:["Huevos Rotos",e.jsx(gn,{children:"22$"})]})}),e.jsx(rn,{children:e.jsxs(fn,{children:["Arroz tres delicias",e.jsx(gn,{children:"22$"})]})})]}),e.jsxs(mn,{children:[e.jsx(rn,{children:e.jsxs(fn,{children:["Albondigas ",e.jsx(gn,{children:"22$"})]})}),e.jsx(rn,{children:e.jsxs(fn,{children:["Huevos Rotos ",e.jsx(gn,{children:"22$"})]})}),e.jsx(rn,{children:e.jsxs(fn,{children:["Arroz tres delicias ",e.jsx(gn,{children:"22$"})]})})]}),e.jsxs(mn,{children:[e.jsx(rn,{children:e.jsxs(fn,{children:["Albondigas ",e.jsx(gn,{children:"22$"})]})}),e.jsx(rn,{children:e.jsxs(fn,{children:["Huevos Rotos ",e.jsx(gn,{children:"22$"})]})}),e.jsx(rn,{children:e.jsxs(fn,{children:["Arroz tres delicias",e.jsx(gn,{children:"22$"})]})})]})]})]})]},null==m?void 0:m.id)})]})}},Symbol.toStringTag,{value:"Module"})),bn=x.div`
    width: 100%;
    padding: 12px;
    margin: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    background-color: white;
`,wn=x.h2`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
    @media only screen and (${b}) {
        font-size: 22px;
    }
`,vn=x.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 8px;
    margin-bottom: 8px;
    column-gap: 1rem;

    text-align: center;
    @media only screen and (${b}) {
        flex-direction: row;
        row-gap: 1rem;
    }
`,$n=x.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    display: flex;

    flex-direction: row;
    @media only screen and (${b}) {
        flex-direction: column;
    }

    @media only screen and (${v}) {
        flex-direction: row;
    }
`,kn=x.span`
    font-weight: bold;
`,zn=x.span`
    padding-left: 6px;
`,Mn=Object.freeze(Object.defineProperty({__proto__:null,default:function(){return e.jsxs(bn,{children:[e.jsx(wn,{children:"Horario"}),e.jsx(vn,{children:e.jsxs($n,{children:[e.jsx(kn,{children:"Lunes"}),e.jsx(zn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(vn,{children:e.jsxs($n,{children:[e.jsx(kn,{children:"Lunes"}),e.jsx(zn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(vn,{children:e.jsxs($n,{children:[e.jsx(kn,{children:"Lunes"}),e.jsx(zn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(vn,{children:e.jsxs($n,{children:[e.jsx(kn,{children:"Lunes"}),e.jsx(zn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(vn,{children:e.jsxs($n,{children:[e.jsx(kn,{children:"Lunes"}),e.jsx(zn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(vn,{children:e.jsxs($n,{children:[e.jsx(kn,{children:"Lunes"}),e.jsx(zn,{children:"11:00pm - 12:00pm"})]})})]})}},Symbol.toStringTag,{value:"Module"}));export{Se as C,he as F,ve as N,A as P,m as _,Ge as a,yn as c,me as h,f as i,y as r};
