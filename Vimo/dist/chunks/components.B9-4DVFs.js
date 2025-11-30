import{j as e,T as n,a as i,L as r,r as a,u as o,b as s,c as t,d,R as l}from"./react-vendor._lM2dQl4.js";import{c,a as p,d as h}from"./vendor.wNhI6uk6.js";const x={},u=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(null==i?void 0:i.nonce)||(null==i?void 0:i.getAttribute("nonce"));r=e(n.map(e=>{if((e=function(e){return"/"+e}(e))in x)return;x[e]=!0;const n=e.endsWith(".css");if(document.querySelector(`link[href="${e}"]${n?'[rel="stylesheet"]':""}`))return;const i=document.createElement("link");return i.rel=n?"stylesheet":"modulepreload",n||(i.as="script"),i.crossOrigin="",i.href=e,a&&i.setAttribute("nonce",a),document.head.appendChild(i),n?new Promise((n,r)=>{i.addEventListener("load",n),i.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function a(e){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e}return r.then(n=>{for(const e of n||[])"rejected"===e.status&&a(e.reason);return e().catch(a)})},m=async({api_url:e,api_path:n,method:i="GET",body:r,headers:a={},token:o,authHeadersGenerator:s})=>{let t={};if(s&&"GET"!==i&&"OPTIONS"!==i)try{t=await s(i,n,r)}catch(l){return{data:null,error:l instanceof Error?l.message:"Error desconocido al generar encabezados de seguridad."}}const d={"Content-Type":"application/json",...o?{Authorization:`Bearer ${o}`}:{},...a,...t};try{const n=await fetch(e,{method:i,headers:d,body:"GET"!==i&&r?JSON.stringify(r):void 0});if(!n.ok){const e=await n.text();let i=`Error ${n.status}: ${n.statusText}`;try{i=JSON.parse(e).message||i}catch{}throw new Error(i)}return{data:await n.json(),error:null}}catch(c){return c instanceof Error?{data:null,error:c.message||"Error de red o desconocido"}:{data:null,error:"Error de red o desconocido"}}},f=c("auth/fetchAuth",async(e,{rejectWithValue:n})=>{const{method:i="GET",...r}=e,a={method:i,...r};try{const{data:e,error:i}=await m(a);return i?n(i):e}catch(o){return n(o instanceof Error?o.message:"Error desconocido al contactar la API.")}}),g=c("restaurant/fetchRestaurant",async(e,{rejectWithValue:n})=>{const{method:i="GET",...r}=e,a={method:i,...r};try{const{data:e,error:i}=await m(a);return i?n(i):e}catch(o){return n(o instanceof Error?o.message:"Error desconocido al contactar la API.")}}),j=c("api/fetchTokenAndRestaurant",async(e,{dispatch:n,rejectWithValue:i})=>{var r;const{api_url:a,api_path:o}=e;try{const e=null==(r=(await n(f({api_url:"http://localhost:3000/api/v1/anonymous/token",api_path:"/anonymous/token",method:"POST",headers:{"x-api-key":"199?kamO1OSws´s`sññaQS23*¿+S.XZ,123POszMCV"}})).unwrap()).data.user)?void 0:r.token;return e&&"string"==typeof e&&null!==e?await n(g({api_url:a,api_path:o,method:"GET",headers:{Authorization:`Bearer ${e}`}})).unwrap():i("Token no válido o ausente en la respuesta de autenticación.")}catch(s){let e;return e="string"==typeof s?s:"object"==typeof s&&null!==s&&"message"in s&&"string"==typeof s.message||s instanceof Error?s.message:"Error desconocido al encadenar las llamadas a la API.",i(e)}}),y={restaurant:{code:"",count:0,data:[],message:""},status:"idle",loading:!1},b=p({name:"restaurant",initialState:y,reducers:{},extraReducers:e=>{e.addCase(g.pending,e=>{e.status="loading",e.loading=!1}),e.addCase(g.fulfilled,(e,n)=>{e.status="success",e.loading=!0,e.restaurant=n.payload}),e.addCase(g.rejected,e=>{e.status="failed",e.loading=!1})},selectors:{selectRestaurantById:(e,n)=>e.restaurant.data.find(e=>e.id===n)}}),{selectRestaurantById:w}=b.selectors,v=b.reducer,k="(min-width: 577px)",$="(min-width: 769px)",z="(min-width: 992px)",E="(min-width: 1200px)",_=h.div`
    width: 100%;
    padding: 2rem;
    @media only screen and (${k}) {
        padding: 3rem;
    }
`,M=h.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 5vw;
    font-weight: 500;
    color: black;
    padding-bottom: 2rem;
    text-align: center;
    @media only screen and (${k}) {
        text-align: start;
    }
`,P=h.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
`,S=h.figure``,C=h.figcaption`
    color: black;
    font-family: 'fangsong';
`,I=h.img`
    flex-shrink: 0;
    border-radius: 15px;
    height: 250px;
    @media only screen and (${k}) {
        border-radius: 0px;
    }
`;h.h2`
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-items: center;
    text-align: center;
    padding: 1rem;
`;const O=h.p`
    color: black;
    word-wrap: break-word;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    padding: 1rem;
    font-size: 16px;
    @media only screen and (${k}) {
        font-size: 20px;
    }
`,T=h.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 10px;
    color: black;
    @media only screen and (${k}) {
        color: black;
    }
`,L=h.q`
    font-weight: 600;
    font-style: oblique;
`,A=h.ul``,R=h.li``,B=h.span`
    display: inline-flex;
    column-gap: 12px;
    font-family: 'Rokkitt', serif;
    font-size: 25px;
`;function q(){return e.jsx(e.Fragment,{children:e.jsxs(_,{children:[e.jsx(M,{children:"Historia"}),e.jsxs(P,{children:[e.jsxs(S,{children:[e.jsx(I,{src:"/assets/alcazar_madrid.B5a2rc4K.jpg",alt:"Alcazar de Madrid",loading:"lazy"}),e.jsx(C,{children:"Alcazar de Madrid "})]}),e.jsxs(T,{children:[e.jsxs(O,{children:["En las orillas del Manzanares, donde el agua fluía generosa, los árabes erigieron en el año 865 una fortaleza a la que llamaron ","Mayrit",", que significa ","abundancia de ríos de agua",". Este nombre, tan evocador, reflejaba la esencia de aquel lugar, un oasis en la meseta castellana. Su primer escudo, con el lema",e.jsx(L,{cite:"https://caminandopormadrid.com/fui-sobre-agua-edificada-mis-muros-de",children:"Fui sobre agua edificada / Mis muros de fuego son / Esta es mi insignia y mi blasón"}),", era un canto a su origen acuático y a la fortaleza que la protegería a lo largo de los siglos. En 1083, la ciudad cambió de manos con la conquista de Alfonso VI, iniciando un nuevo capítulo en su milenaria historia"]}),e.jsx(O,{children:"En 1561, la historia de Madrid dio un giro trascendental. Felipe II, con su mirada puesta en el futuro, decidió trasladar la corte a esta ciudad, lejos de las antiguas capitales. La centralidad geográfica de Madrid y la menor presencia de poderes establecidos la convirtieron en el lienzo perfecto sobre el que construir una nueva corte. La predilección de su esposa, Isabel de Valois, por este modesto pueblo, fue la pincelada final que completó el cuadro. A partir de ese momento, Madrid se transformó en el epicentro de un imperio, un crisol de culturas y el escenario de grandes acontecimientos históricos"})]})]}),e.jsx(M,{children:"Simbolos"}),e.jsxs(P,{children:[e.jsxs(S,{children:[e.jsx(I,{src:"/assets/bandera_madrid.Beh6rZ3P.png",alt:"Bandera de Comunidad Madrid",loading:"lazy"}),e.jsx(C,{children:"Bandera Comunidad de Madrid "})]}),e.jsxs(T,{children:[e.jsx(O,{children:"La bandera de la Comunidad de Madrid es descrita como un símbolo de identidad regional, caracterizado por su color rojo carmesí y sus siete estrellas plateadas de cinco puntas, dispuestas en dos filas de cuatro y tres. El rojo carmesí hace alusión a la tradición histórica de Madrid como parte de Castilla, mientras que las estrellas representan la constelación de la Osa Mayor, símbolo del cielo nocturno visible en la región. Este diseño, simple pero significativo, busca reflejar tanto el legado cultural como la ubicación geográfica de la Comunidad."}),e.jsx(O,{children:"Las siete estrellas presentes en la bandera de la Comunidad de Madrid han dado lugar a múltiples interpretaciones a lo largo del tiempo. Su significado más aceptado las asocia con la constelación de la Osa Mayor, un referente astronómico muy conocido en el hemisferio norte. Esta constelación, visible claramente desde la Sierra de Guadarrama, no solo simboliza la conexión de Madrid con el cielo estrellado, sino que también evoca el vínculo de la región con su entorno natural y su herencia mitológica."})]})]}),e.jsx(M,{children:"Ubicación"}),e.jsxs(P,{children:[e.jsxs(S,{children:[e.jsx(I,{src:"/assets/mapa_madrid.wP0fYJAT.webp",alt:"Mapa Comunidad Madrid",loading:"lazy"}),e.jsx(C,{children:"Mapa Comunidad de Madrid "})]}),e.jsx(T,{children:e.jsxs(A,{children:[e.jsxs(R,{children:[e.jsxs(B,{children:[e.jsx(n,{})," Ubicación"]}),e.jsxs(O,{children:["Madrid se encuentra casi en el centro geográfico de la Península Ibérica, a una latitud de ","40º 25"," Norte, y una longitud de"," ","3º\n                                    42"," ","Oeste."]})]}),e.jsxs(R,{children:[e.jsxs(B,{children:[e.jsx(i,{})," Tiempo"]}),e.jsx(O,{children:"La temperatura media anual, en la sombra, es de 13 ºC. En las estaciones más frías, las temperaturas mínimas suelen caer por debajo de los 0 ºC, aunque en la ciudad en sí rara vez nieva. Durante los meses de verano la temperatura puede llegar fácilmente a los 40 ºC."})]})]})})]})]})})}const F=h.div`
    height: 250px;
    background-color:${e=>e.theme.colors.blueDeep};
    padding: 2rem;
    @media only screen and (${k}) {
        height: 200px;
    }
`,G=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    row-gap: 2rem;
    column-gap: 2rem;
`,N=h.div`
    display: flex;
    justify-content: space-evenly;
    column-gap: 2rem;
    align-items: center;
`,D=h.h1`
    font-family: 'Poppins', sans-serif;
    font-family: 24px;
    font-weight: 500;
    color: white;
    @media only screen and (${k}) {
        font-family: 35px;
    }
`;h.img`
    width: ${({sizes:e})=>e||"40px"};
    height: ${({sizes:e})=>e||"40px"};
`;const H=h(h.span`
    font-family: 'Material Symbols Outlined';
    font-size: 22px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`)`
    color: white;
`,V=h.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    @media only screen and (${k}) {
    }
`,U=h(r)`
    color: #fff;
    font-size: 12px;
    @media only screen and (${k}) {
        font-size: 16px;
    }
`,W=h.div`
    margin: 2rem;

    @media only screen and (${k}) {
        margin: 3rem;
    }
`,Z=h.div`
    display: grid;
    @media only screen and (${k}) {
        display: grid;
        grid-template-columns: 275px auto;
        gap: 2rem;
        width: 100%;
    }
`,J=h.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`,K=h(r)`
    
`,Q=h.div`

    margin: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 12px; 
    overflow: hidden;
    
    @media only screen and (${E}) {
        flex-direction: row;
        align-items: center;
       
    }
`,X=h.div`
    display: none;
    @media only screen and (${k}) {
        display: block;
    }
`,Y=h.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
       border-radius: 12px;

    @media only screen and (${E}) {
        width: 50%;
    }
`,ee=h(Y)`
    padding:1rem;
`,ne=h.img.attrs(({src:e})=>({src:e,alt:"Imagen card "}))`
    width: fit-content;
  
`,ie=h.div`
    display: flex;
    align-items: baseline;
    padding: 3px;
    @media only screen and (${k}) {
        padding: 0.1rem;
    }
`,re=h(ie)`
    flex-direction: column;
    padding: 10px 0px;
`,ae=h(ie)`
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (${k}) {
        padding: 0.1rem;
    }
`,oe=h.h3`
    font-family:  'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
`,se=h.h3`
    font-family:  'Poppins', sans-serif;
    font-size: 22px;
    font-weight: bold;
    padding: 10px 0px;
`,te=h.h3`
    font-family:  'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    font-weight: bold;
`,de=h.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    padding-bottom: 6px;
    display: flex;
    align-items: baseline;
`,le=h(de)`
    display: flex;
    align-items: end;
    font-size: 16px;
`,ce=h.button`
    padding: 6px 6px;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
`,pe=h.span`
    font-family: 'Material Symbols Outlined';
    font-size: 16px;
    padding-right: 10px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,he=h(r)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 400;
    gap: 0.25rem;
`,xe=h(he)`
    color: white;
    font-size: 16px;
    padding: 0rem;
`,ue=h.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    gap: 0.25rem;
`,me=h.button`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    padding: 12px 6px;
    border: none;
    border-radius: 10px;
    background-color: #ff3d00;
    color: white;
    font-weight: 400;
    cursor: pointer;
`;function fe(){return e.jsx(F,{children:e.jsxs(G,{children:[e.jsx(D,{children:"ZappyMap"}),e.jsxs(N,{children:[e.jsxs(V,{children:[e.jsx(U,{to:"./legales",children:"¿Quienes somos?"}),e.jsx(U,{to:"./legales",children:"Información de contacto"})]}),e.jsxs(V,{children:[e.jsx(U,{to:"./legales",children:"Preguntas frecuentes"}),e.jsx(U,{to:"./legales",children:"Condiciones legales"})]}),e.jsxs(V,{children:[e.jsxs(xe,{to:"https://yandrydev.es/",children:[e.jsx(H,{children:"rss_feed"}),"Redes sociales"]}),e.jsxs(xe,{to:"https://yandrydev.es/",children:[e.jsx(H,{children:"copyright"}),"ZappyMap Inc"]})]}),e.jsx(V,{})]})]})})}const ge="/assets/hands_map.B9zuCnS3.png",je=h.nav`
    background-color: ${e=>e.theme.colors.blueDeep};
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    width: -webkit-fill-available;
`,ye=h.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,be=h(ye)`
    display: none;
    @media only screen and (${k}) {
        display: flex;
    }
`,we=h(ye)`
    display: flex;
`,ve=h.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
    @media only screen and (${k}) {
        font-size: 35px;
    }
`,ke=h.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`,$e=h(r)`
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
`;function ze(){return e.jsx(e.Fragment,{children:e.jsxs(je,{children:[e.jsx(we,{children:e.jsx(ve,{children:"ZappyMap"})}),e.jsx(be,{children:e.jsxs(ke,{children:[e.jsx($e,{to:"/history",children:"Historia"}),e.jsx($e,{to:"/restaurants",children:"Restaurantes"}),e.jsx($e,{to:"/destinations",children:"Discotecas"}),e.jsx($e,{to:"sites",children:"Sitios"}),e.jsx($e,{to:"destinations",children:"Transporte"})]})})]})})}const Ee=h.div`
    width: 100%;
    max-width: 500px;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center; 
    flex-direction: row;
    border-radius: 12px; 
    overflow: hidden; 
    

`,_e=h.input`
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem; 
    border: none;
    outline: none;
    background-color: white;
    flex-grow: 1;
`,Me=h.button`
    cursor: pointer;
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
`,Pe=h.span`
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
   
    @media only screen and (${k}) {
        font-size: 35px;
    }
`;function Se(){const[n,i]=a.useState(""),[r,s]=o();function t(){const e=Object.fromEntries(r.entries());""===n.trim()?(delete e.name,s(e,{replace:!0})):s({...e,name:n.trim()},{replace:!0})}return e.jsx(e.Fragment,{children:e.jsxs(Ee,{children:[e.jsx(Pe,{children:"map"}),e.jsx(_e,{value:n,onKeyDown:function(e){"Enter"===e.key&&t()},onChange:e=>i(e.target.value),name:"valueSearch",type:"text",placeholder:"Restaurante,Sitio,Transporte..",id:"seeker"}),e.jsx(Me,{onClick:t,children:"Buscar"})]})})}const Ce=h.div`
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`,Ie=h.div`
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
    background-image: url(${ge}); 
    background-position: right center; 
    background-repeat: no-repeat; 
    background-size: contain; 

    @media only screen and (${k}) {
        margin: 4rem;
        padding: 2rem;
        border-radius: 12px;
    }
`;h.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 4vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: white;
    flex-direction: column;
    justify-content: center;
    
`;const Oe=h.p`
    font-size: 22px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    line-height: normal;
    word-spacing: 3px;
    padding-bottom:2rem;
    color: white;

     @media only screen and (${k}) {
        font-size: 30px;
    }

`,Te=Object.freeze(Object.defineProperty({__proto__:null,default:function(){return e.jsxs(e.Fragment,{children:[e.jsx(ze,{}),e.jsx(Ce,{children:e.jsxs(Ie,{children:[e.jsx(Oe,{children:"Planea y reserva en cualquiera de nuestras ilimitadas opciones"}),e.jsx(Se,{})]})})]})}},Symbol.toStringTag,{value:"Module"})),Le=h.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    max-height: 900px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,Ae=h.ul`
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
`,Re=h.li`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.open?"#fff":"inherit"};
    transition: background-color 0.3s ease-in-out;
`,Be=h.ul`
    list-style: none;
    max-height: ${e=>e.open?"300px":"0"};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    background-color: #fff;
    padding-left: 10px;
    margin: 0;
`,qe=h.li`
    padding: 10px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        transform: scale(1.05);
    }
`,Fe=h.input`
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
`,Ge=h.span`
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.open?"rotate(180deg)":"rotate(0)"};
`;function Ne({menuOptions:n}){const[i,r]=a.useState(0);return e.jsx(Le,{children:e.jsx(Ae,{children:n.map((n,a)=>e.jsxs("ul",{children:[e.jsxs(Re,{onClick:()=>(e=>{r(i===e?-1:e)})(a),open:i===a,children:[e.jsx(oe,{children:n.label}),e.jsx(Ge,{open:i===a,children:"▼"})]}),e.jsx(Be,{open:i===a,children:n.subOptions.map((n,i)=>e.jsxs(qe,{children:[e.jsx(Fe,{type:"checkbox"}),n]},i))})]},a))})})}const De=t,He=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const[n,i]=a.useState(!1),r=()=>i(!0),t=()=>i(!1),{restaurant:l}=De(e=>e.restaurant),{data:c}=l??{},{id:p}=d(),[h]=o(),x="http://localhost:3000/api/v1/restaurant/",u=s(),m=(({pathId:e,baseURL:n="/api/restaurants",pageSize:i,filters:r={}})=>{const[s]=o(),t=Number(s.get("page"))||1,d=i?(t-1)*i:0;return a.useMemo(()=>{let a=e?`${n}/${e}`:n;const o=new URLSearchParams;Object.keys(r).forEach(e=>{const n=r[e];null!=n&&""!==n&&o.append(e,String(n))}),s.forEach((e,n)=>{"page"===n||"limit"===n||"offset"===n||o.has(n)||o.append(n,e)}),i&&(o.set("limit",String(i)),o.set("offset",String(d)));const t=o.toString();return t&&(a+=`?${t}`),a},[e,n,i,r,s,d])})({pathId:p,baseURL:x,filters:{name:h.get("name"),address:h.get("address")}}),f=m?((e,n)=>{const i=e.replace(n,"");return n.endsWith("/")?"/"+i:i})(m,x):"";return a.useEffect(()=>{a.startTransition(()=>{u(j({api_url:m,api_path:f}))})},[u]),e.jsx(W,{children:e.jsxs(Z,{children:[e.jsx(X,{children:e.jsx(Ne,{menuOptions:[{label:"Tipo de comida ",subOptions:["Mediterranea","Japonesa","Mexicana","China","Turca"]},{label:"Precio",subOptions:["Menos de 15€ por persona.","Entre 15€ y 30€ por persona.","Más de 30€ por persona."]},{label:"Guía Michelin",subOptions:["Guía MICHELIN","3 estrellas MICHELIN","2 estrellas MICHELIN","1 estrella MICHELIN"]}]})}),e.jsx(J,{children:(null==l?void 0:l.count)>0?c.map((i,a)=>{var o,s;return e.jsxs(Q,{children:[e.jsx(Y,{children:e.jsx(K,{to:i.id,children:e.jsx(ne,{alt:i.name,src:null==(o=i.images[a])?void 0:o.url,loading:"lazy"})})}),e.jsxs(ee,{children:[e.jsxs(ie,{children:[e.jsxs(te,{children:["Top 1 ",e.jsx(pe,{children:"editor_choice"})]}),e.jsx(ce,{children:"Michelin"})]}),e.jsx(ie,{children:e.jsx(K,{to:i.id,children:e.jsx(se,{children:i.name})})}),e.jsx(ie,{children:e.jsxs(le,{children:[e.jsx(pe,{children:"kid_star"})," Puntuación (9,6)"]})}),e.jsx(ie,{children:e.jsxs(le,{children:[e.jsx(pe,{children:"location_on"}),null==(s=i.location)?void 0:s.address]})}),e.jsx(ie,{children:e.jsxs(le,{children:[e.jsx(pe,{children:"restaurant"}),i.type_food," . Precio medio: 20€"]})}),e.jsxs(re,{children:[e.jsxs(de,{children:[i.description," ",n&&i.description]}),e.jsx(me,{onClick:n?t:r,children:n?"Ver menos":"Ver más"})]}),e.jsxs(ae,{children:[e.jsxs(he,{to:i.web,children:[e.jsx(pe,{children:"language"})," Web"]}),e.jsxs(he,{to:i.web,children:[e.jsx(pe,{children:"menu_book"})," Menú"]}),e.jsxs(ue,{href:`tel:${i.phone}`,children:[e.jsx(pe,{children:"call_quality"}),i.phone]})]})]})]},i.id)}):e.jsx(ie,{children:e.jsx(de,{children:"No hay restaurantes disponibles"})})})]})})}},Symbol.toStringTag,{value:"Module"})),Ve=h.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-column: 2 / 7;
    grid-row: 1;

    @media only screen and (${$}) {
        grid-column: 2 / 7;
    }
    @media only screen and (${z}) {
        grid-template-columns: auto auto;
    }
`,Ue=h.div`
    display: flex;
    flex-direction: column;
     
     aspect-ratio: 4 / 3; 
`,We=h.div`
    display: none;
    aspect-ratio: 3 / 4; 
    @media only screen and (${z}) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        grid-auto-rows: 210px;
    }
`,Ze=h.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`,Je=h.div`
    padding: 2rem;
    background-color: whitesmoke;
    width: 100%;
`,Ke=h.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,Qe=h.div`
    display: flex;
    justify-content: space-around;
`,Xe=h.div`
    display: flex;
    flex-direction: row;
`,Ye=h.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: bold;
    @media only screen and (${k}) {
        font-size: 35px;
    }
`,en=h.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: bold;
    @media only screen and (${k}) {
        font-size: 22px;
    }
`;h.p`
    font-family: 'Inter', 'sans-serif';
    font-size:16px;
`;const nn=h.div`
    font-family: 'Poppins',sans-serif;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`,rn=h.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`,an=h.button.attrs(e=>({$border:e.$border||"solid 1px black"}))`
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
    @media only screen and (${k}) {
        border: ${e=>e.$border};
    }
`,on=h.span.attrs(e=>({$borderBottom:e.$borderBottom||"solid 1px black"}))`
    font-family: 'Roboto';

    border-bottom: ${e=>e.$borderBottom};
    line-height: 22px;
    display: none;

    @media only screen and (${k}) {
        display: block;
    }
`,sn=h.div`
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    padding: 6px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (${k}) {
        flex-direction: row;
    }
`,tn=h.p`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border-bottom: none;
    padding: 10px 0px;
    @media only screen and (${k}) {
        border-bottom: 1px solid gray;
    }
`,dn=h.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    color: white;
`,ln=h.ul`
    list-style: none;
    display: flex;
`,cn=h(r)`
    font-family: 'Rokkitt', serif;
    font-size: 18px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    line-height: 10px;
    padding: 0.5rem 1rem;
    border-right: solid 2px gray;

    @media only screen and (${k}) {
        font-size: 22px;
    }
`,pn=h.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
`,hn=h.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    grid-gap: 2rem;

    @media only screen and (${k}) {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: minmax(100px, auto);
    }
`,xn=h.div`
    display: grid;
    gap: 16px;
    width: 100%;

    grid-column: 2 / 5;
    grid-row: 2;
    @media only screen and (${k}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${z}) {
        grid-column: 2 / 5;
    }
`,un=h.div`
    display: grid;
    gap: 16px;
    grid-column: 5 / 7;
    grid-row: 2;
    @media only screen and (${k}) {
        grid-column: 3 / 7;
    }
    @media only screen and (${z}) {
        grid-column: 5 / 7;
    }
`,mn=h.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-area: content;
    grid-column: 2 / 5;
    grid-row: 3;
    @media only screen and (${k}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${$}) {
        grid-column: 2 / 5;
    }
`,fn=h(mn)`
    grid-row: 4;
`,gn=h(Qe)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${k}) {
        row-gap: 1rem;
    }
`,jn=h.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    @media only screen and (${k}) {
        row-gap: 3rem;
    }
`,yn=h.p`
    cursor: pointer;
   
    &:hover{
        text-decoration: line-through;
    }
`,bn=h.span`
   font-weight: bold;
   padding-right: 2px;
`,wn=a.lazy(()=>u(()=>Promise.resolve().then(()=>Pn),void 0)),vn=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var n,i,r,o,s,t;const[c,p]=a.useState(!1),{id:h}=d(),{restaurant:x}=De(e=>e.restaurant);if(!x||!x.data||0===x.data.length)return e.jsx(gn,{children:e.jsx(sn,{children:"No hay restaurantes"})});const u=De(e=>h?w(e,h):void 0);return e.jsxs(e.Fragment,{children:[e.jsx(Je,{children:e.jsxs(Qe,{children:[e.jsxs(Xe,{children:[e.jsx(Ye,{children:null==u?void 0:u.name}),e.jsx(Ke,{children:"verified"})]}),e.jsxs(nn,{children:[e.jsxs(rn,{onClick:async()=>{try{const e=window.location.href;await navigator.clipboard.writeText(e),p(!0),setTimeout(()=>p(!1),2e3)}catch(e){}},children:[e.jsx(Ke,{color:"black",children:"ios_share"}),e.jsx(on,c?{children:"Enlace copiado"}:{children:"Compartir"})]}),e.jsxs(an,{$border:"solid 1px black",children:[e.jsx(Ke,{color:"black",children:"favorite"}),e.jsx(on,{$borderBottom:"none",children:"Guardar"})]})]})]})}),e.jsx(hn,{children:e.jsxs(l.Fragment,{children:[e.jsxs(Ve,{children:[e.jsx(Ue,{children:e.jsx(Ze,{src:null==(n=null==u?void 0:u.images[0])?void 0:n.url,alt:(null==(i=null==u?void 0:u.images[0])?void 0:i.id)||"portada"},null==(r=null==u?void 0:u.images[0])?void 0:r.id)}),e.jsx(We,{children:e.jsx(Ze,{src:null==(o=null==u?void 0:u.images[0])?void 0:o.url,alt:(null==(s=null==u?void 0:u.images[0])?void 0:s.id)||"portada"},null==(t=null==u?void 0:u.images[0])?void 0:t.id)}),e.jsxs(sn,{children:[e.jsxs(tn,{children:[e.jsx(Ke,{color:"black",children:"restaurant"}),null==u?void 0:u.type_food]}),e.jsxs(tn,{children:[e.jsx(Ke,{color:"black",children:"map"}),"España , Madrid"]}),e.jsxs(tn,{children:[e.jsx(Ke,{color:"black",children:"euro"}),"Precio medio 20 euros"]})]})]}),e.jsxs(xn,{children:[e.jsx(dn,{children:e.jsxs(ln,{children:[e.jsx(cn,{to:"",children:"Horario"}),e.jsx(cn,{to:"",children:"Descripcion"}),e.jsx(cn,{to:"",children:"Contenido"})]})}),e.jsx(pn,{children:null==u?void 0:u.description})]}),e.jsx(un,{children:e.jsx(wn,{})}),e.jsxs(mn,{children:[e.jsx(en,{children:"Caracteristicas"}),e.jsxs(gn,{children:[e.jsxs(sn,{children:[e.jsx(Ke,{color:"black",children:"credit_card"}),"Aceptan tarjetas de credito"]}),e.jsxs(sn,{children:[e.jsx(Ke,{color:"black",children:"check_circle"}),"Comidas, Cenas, Brunch y Bebidas"]}),e.jsxs(sn,{children:[e.jsx(Ke,{color:"black",children:"chef_hat"}),"Tiene opciones veganas y celiacas"]})]})]}),e.jsxs(fn,{children:[e.jsx(en,{children:"Menu"}),e.jsxs(jn,{children:[e.jsxs(gn,{children:[e.jsx(sn,{children:e.jsxs(yn,{children:["Albondigas ",e.jsx(bn,{children:"22$"})]})}),e.jsx(sn,{children:e.jsxs(yn,{children:["Huevos Rotos",e.jsx(bn,{children:"22$"})]})}),e.jsx(sn,{children:e.jsxs(yn,{children:["Arroz tres delicias",e.jsx(bn,{children:"22$"})]})})]}),e.jsxs(gn,{children:[e.jsx(sn,{children:e.jsxs(yn,{children:["Albondigas ",e.jsx(bn,{children:"22$"})]})}),e.jsx(sn,{children:e.jsxs(yn,{children:["Huevos Rotos ",e.jsx(bn,{children:"22$"})]})}),e.jsx(sn,{children:e.jsxs(yn,{children:["Arroz tres delicias ",e.jsx(bn,{children:"22$"})]})})]}),e.jsxs(gn,{children:[e.jsx(sn,{children:e.jsxs(yn,{children:["Albondigas ",e.jsx(bn,{children:"22$"})]})}),e.jsx(sn,{children:e.jsxs(yn,{children:["Huevos Rotos ",e.jsx(bn,{children:"22$"})]})}),e.jsx(sn,{children:e.jsxs(yn,{children:["Arroz tres delicias",e.jsx(bn,{children:"22$"})]})})]})]})]})]},null==u?void 0:u.id)})]})}},Symbol.toStringTag,{value:"Module"})),kn=h.div`
    width: 100%;
    padding: 12px;
    margin: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    background-color: white;
`,$n=h.h2`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
    @media only screen and (${k}) {
        font-size: 22px;
    }
`,zn=h.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 8px;
    margin-bottom: 8px;
    column-gap: 1rem;

    text-align: center;
    @media only screen and (${k}) {
        flex-direction: row;
        row-gap: 1rem;
    }
`,En=h.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    display: flex;

    flex-direction: row;
    @media only screen and (${k}) {
        flex-direction: column;
    }

    @media only screen and (${z}) {
        flex-direction: row;
    }
`,_n=h.span`
    font-weight: bold;
`,Mn=h.span`
    padding-left: 6px;
`,Pn=Object.freeze(Object.defineProperty({__proto__:null,default:function(){return e.jsxs(kn,{children:[e.jsx($n,{children:"Horario"}),e.jsx(zn,{children:e.jsxs(En,{children:[e.jsx(_n,{children:"Lunes"}),e.jsx(Mn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(zn,{children:e.jsxs(En,{children:[e.jsx(_n,{children:"Lunes"}),e.jsx(Mn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(zn,{children:e.jsxs(En,{children:[e.jsx(_n,{children:"Lunes"}),e.jsx(Mn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(zn,{children:e.jsxs(En,{children:[e.jsx(_n,{children:"Lunes"}),e.jsx(Mn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(zn,{children:e.jsxs(En,{children:[e.jsx(_n,{children:"Lunes"}),e.jsx(Mn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(zn,{children:e.jsxs(En,{children:[e.jsx(_n,{children:"Lunes"}),e.jsx(Mn,{children:"11:00pm - 12:00pm"})]})})]})}},Symbol.toStringTag,{value:"Module"}));export{Te as C,fe as F,ze as N,q as P,u as _,He as a,vn as c,f as g,ge as h,y as i,v as r};
