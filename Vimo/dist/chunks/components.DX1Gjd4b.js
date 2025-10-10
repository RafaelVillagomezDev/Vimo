import{j as e,T as n,a as i,L as r,r as o,u as a,b as s,c as d,R as t}from"./react-vendor.DJPDHR9T.js";import{c as l,a as c,d as p}from"./vendor.BtA1AlKs.js";const x={},h=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(null==i?void 0:i.nonce)||(null==i?void 0:i.getAttribute("nonce"));r=e(n.map(e=>{if((e=function(e){return"/"+e}(e))in x)return;x[e]=!0;const n=e.endsWith(".css");if(document.querySelector(`link[href="${e}"]${n?'[rel="stylesheet"]':""}`))return;const i=document.createElement("link");return i.rel=n?"stylesheet":"modulepreload",n||(i.as="script"),i.crossOrigin="",i.href=e,o&&i.setAttribute("nonce",o),document.head.appendChild(i),n?new Promise((n,r)=>{i.addEventListener("load",n),i.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function o(e){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e}return r.then(n=>{for(const e of n||[])"rejected"===e.status&&o(e.reason);return e().catch(o)})},m=l("restaurant/fetchRestaurant",async()=>(async({api_url:e,method:n="GET",body:i,headers:r={},token:o})=>{const a={"Content-Type":"application/json",...o?{Authorization:`Bearer ${o}`}:{},...r};try{const r=await fetch(e,{method:n,headers:a,body:"GET"!==n&&i?JSON.stringify(i):void 0});if(!r.ok)throw new Error(`Error ${r.status}: ${r.statusText}`);return{data:await r.json(),error:null}}catch(s){return s instanceof Error?{data:null,error:s.message||"Error desconocido"}:{data:null,error:"Error desconocido"}}})({api_url:"http://localhost:3000/api/v1/restaurant",method:"GET"})),u={restaurant:{code:"",count:0,data:[],message:""},status:"idle",loading:!1},f=c({name:"restaurant",initialState:u,reducers:{},extraReducers:e=>{e.addCase(m.pending,e=>{e.status="loading",e.loading=!1}),e.addCase(m.fulfilled,(e,n)=>{e.status="success",e.loading=!0,e.restaurant=n.payload.data}),e.addCase(m.rejected,e=>{e.status="failed",e.loading=!1})},selectors:{selectRestaurantById:(e,n)=>e.restaurant.data.find(e=>e.id===n)}}),{selectRestaurantById:g}=f.selectors,j=f.reducer,b="(min-width: 577px)",y="(min-width: 769px)",w="(min-width: 992px)",v="(min-width: 1200px)",k=p.div`
    width: 100%;
    padding: 2rem;
    @media only screen and (${b}) {
        padding: 3rem;
    }
`,$=p.h2`
    font-family: 'Rokkitt', serif;
    font-size: 5vw;
    font-weight: 500;
    color: black;
    padding-bottom: 2rem;
    text-align: center;
    @media only screen and (${b}) {
        text-align: start;
    }
`,z=p.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
`,M=p.figure``,_=p.figcaption`
    color: black;
    font-family: 'fangsong';
`,C=p.img`
    flex-shrink: 0;
    border-radius: 15px;
    height: 250px;
    @media only screen and (${b}) {
        border-radius: 0px;
    }
`;p.h2`
    color: black;
    font-family: 'Roboto';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-items: center;
    text-align: center;
    padding: 1rem;
`;const R=p.p`
    color: black;
    word-wrap: break-word;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    padding: 1rem;
    font-size: 16px;
    @media only screen and (${b}) {
        font-size: 20px;
    }
`,E=p.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 10px;
    color: black;
    @media only screen and (${b}) {
        color: black;
    }
`,S=p.q`
    font-weight: 600;
    font-style: oblique;
`,T=p.ul``,L=p.li``,I=p.span`
    display: inline-flex;
    column-gap: 12px;
    font-family: 'Rokkitt', serif;
    font-size: 25px;
`;function O(){return e.jsx(e.Fragment,{children:e.jsxs(k,{children:[e.jsx($,{children:"Historia"}),e.jsxs(z,{children:[e.jsxs(M,{children:[e.jsx(C,{src:"/assets/alcazar_madrid.B5a2rc4K.jpg",alt:"Alcazar de Madrid",loading:"lazy"}),e.jsx(_,{children:"Alcazar de Madrid "})]}),e.jsxs(E,{children:[e.jsxs(R,{children:["En las orillas del Manzanares, donde el agua fluía generosa, los árabes erigieron en el año 865 una fortaleza a la que llamaron ","Mayrit",", que significa ","abundancia de ríos de agua",". Este nombre, tan evocador, reflejaba la esencia de aquel lugar, un oasis en la meseta castellana. Su primer escudo, con el lema",e.jsx(S,{cite:"https://caminandopormadrid.com/fui-sobre-agua-edificada-mis-muros-de",children:"Fui sobre agua edificada / Mis muros de fuego son / Esta es mi insignia y mi blasón"}),", era un canto a su origen acuático y a la fortaleza que la protegería a lo largo de los siglos. En 1083, la ciudad cambió de manos con la conquista de Alfonso VI, iniciando un nuevo capítulo en su milenaria historia"]}),e.jsx(R,{children:"En 1561, la historia de Madrid dio un giro trascendental. Felipe II, con su mirada puesta en el futuro, decidió trasladar la corte a esta ciudad, lejos de las antiguas capitales. La centralidad geográfica de Madrid y la menor presencia de poderes establecidos la convirtieron en el lienzo perfecto sobre el que construir una nueva corte. La predilección de su esposa, Isabel de Valois, por este modesto pueblo, fue la pincelada final que completó el cuadro. A partir de ese momento, Madrid se transformó en el epicentro de un imperio, un crisol de culturas y el escenario de grandes acontecimientos históricos"})]})]}),e.jsx($,{children:"Simbolos"}),e.jsxs(z,{children:[e.jsxs(M,{children:[e.jsx(C,{src:"/assets/bandera_madrid.Beh6rZ3P.png",alt:"Bandera de Comunidad Madrid",loading:"lazy"}),e.jsx(_,{children:"Bandera Comunidad de Madrid "})]}),e.jsxs(E,{children:[e.jsx(R,{children:"La bandera de la Comunidad de Madrid es descrita como un símbolo de identidad regional, caracterizado por su color rojo carmesí y sus siete estrellas plateadas de cinco puntas, dispuestas en dos filas de cuatro y tres. El rojo carmesí hace alusión a la tradición histórica de Madrid como parte de Castilla, mientras que las estrellas representan la constelación de la Osa Mayor, símbolo del cielo nocturno visible en la región. Este diseño, simple pero significativo, busca reflejar tanto el legado cultural como la ubicación geográfica de la Comunidad."}),e.jsx(R,{children:"Las siete estrellas presentes en la bandera de la Comunidad de Madrid han dado lugar a múltiples interpretaciones a lo largo del tiempo. Su significado más aceptado las asocia con la constelación de la Osa Mayor, un referente astronómico muy conocido en el hemisferio norte. Esta constelación, visible claramente desde la Sierra de Guadarrama, no solo simboliza la conexión de Madrid con el cielo estrellado, sino que también evoca el vínculo de la región con su entorno natural y su herencia mitológica."})]})]}),e.jsx($,{children:"Ubicación"}),e.jsxs(z,{children:[e.jsxs(M,{children:[e.jsx(C,{src:"/assets/mapa_madrid.wP0fYJAT.webp",alt:"Mapa Comunidad Madrid",loading:"lazy"}),e.jsx(_,{children:"Mapa Comunidad de Madrid "})]}),e.jsx(E,{children:e.jsxs(T,{children:[e.jsxs(L,{children:[e.jsxs(I,{children:[e.jsx(n,{})," Ubicación"]}),e.jsxs(R,{children:["Madrid se encuentra casi en el centro geográfico de la Península Ibérica, a una latitud de ","40º 25"," Norte, y una longitud de"," ","3º\n                                    42"," ","Oeste."]})]}),e.jsxs(L,{children:[e.jsxs(I,{children:[e.jsx(i,{})," Tiempo"]}),e.jsx(R,{children:"La temperatura media anual, en la sombra, es de 13 ºC. En las estaciones más frías, las temperaturas mínimas suelen caer por debajo de los 0 ºC, aunque en la ciudad en sí rara vez nieva. Durante los meses de verano la temperatura puede llegar fácilmente a los 40 ºC."})]})]})})]})]})})}const A=p.div`
    height: 250px;
    background-color: hsl(0, 0%, 0%);
    padding: 2rem;
    @media only screen and (${b}) {
        height: 200px;
    }
`,P=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    row-gap: 2rem;
    column-gap: 2rem;
`,B=p.div`
    display: flex;
    justify-content: space-evenly;
    column-gap: 2rem;
    align-items: center;
`,q=p.h1`
    font-family: 'Rokkitt', serif;
    font-family: 24px;
    font-weight: 500;
    color: white;
    @media only screen and (${b}) {
        font-family: 35px;
    }
`;p.img`
    width: ${({sizes:e})=>e||"40px"};
    height: ${({sizes:e})=>e||"40px"};
`;const F=p(p.span`
    font-family: 'Material Symbols Outlined';
    font-size: 22px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`)`
    color: white;
`,H=p.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    @media only screen and (${b}) {
    }
`,G=p(r)`
    color: #fff;
    font-size: 12px;
    @media only screen and (${b}) {
        font-size: 16px;
    }
`,N=p.div`
    margin: 2rem;

    @media only screen and (${b}) {
        margin: 3rem;
    }
`,D=p.div`
    display: grid;
    @media only screen and (${b}) {
        display: grid;
        grid-template-columns: 275px auto;
        gap: 2rem;
        width: 100%;
    }
`,V=p.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`,Z=p(r)`
    
`,J=p.div`
    border-radius: 20px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media only screen and (${v}) {
        flex-direction: row;
        box-shadow: none;
        align-items: center;
    }
`,U=p.div`
    display: none;
    @media only screen and (${b}) {
        display: block;
    }
`,W=p.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    @media only screen and (${v}) {
        width: 50%;
    }
`,K=p.img.attrs(({src:e})=>({src:e,alt:"Imagen card "}))`
    width: fit-content;
    border-radius: 15px;
`,Q=p.div`
    display: flex;
    align-items: baseline;
    padding: 3px;
    @media only screen and (${b}) {
        padding: 0.1rem;
    }
`,Y=p(Q)`
    flex-direction: column;
    padding: 10px 0px;
`,X=p(Q)`
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (${b}) {
        padding: 0.1rem;
    }
`,ee=p.h3`
    font-family: 'Roboto', serif;
    font-size: 16px;
    font-weight: bold;
`,ne=p.h3`
    font-family: 'Roboto', serif;
    font-size: 22px;
    font-weight: bold;
    padding: 10px 0px;
`,ie=p.h3`
    font-weight: 400;
    font-family: 'Roboto', serif;
    font-size: 20px;
    font-weight: bold;
`,re=p.p`
    font-family: 'Roboto', serif;
    font-size: 16px;
    padding-bottom: 6px;
    display: flex;
    align-items: baseline;
`,oe=p(re)`
    display: flex;
    align-items: end;
    font-size: 16px;
`,ae=p.button`
    padding: 6px 6px;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    font-family: 'Roboto', serif;
    font-size: 18px;
`,se=p.span`
    font-family: 'Material Symbols Outlined';
    font-size: 16px;
    padding-right: 10px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,de=p(r)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 400;
    gap: 0.25rem;
`,te=p(de)`
    color: white;
    font-size: 16px;
    padding: 0rem;
`,le=p.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    gap: 0.25rem;
`,ce=p.button`
    font-family: 'Roboto', serif;
    font-size: 12px;
    padding: 12px 6px;
    border: none;
    border-radius: 10px;
    background-color: #ff3d00;
    color: white;
    font-weight: 400;
    cursor: pointer;
`;function pe(){return e.jsx(A,{children:e.jsxs(P,{children:[e.jsx(q,{children:"ZappyMap"}),e.jsxs(B,{children:[e.jsxs(H,{children:[e.jsx(G,{to:"./legales",children:"¿Quienes somos?"}),e.jsx(G,{to:"./legales",children:"Información de contacto"})]}),e.jsxs(H,{children:[e.jsx(G,{to:"./legales",children:"Preguntas frecuentes"}),e.jsx(G,{to:"./legales",children:"Condiciones legales"})]}),e.jsxs(H,{children:[e.jsxs(te,{to:"https://yandrydev.es/",children:[e.jsx(F,{children:"rss_feed"}),"Redes sociales"]}),e.jsxs(te,{to:"https://yandrydev.es/",children:[e.jsx(F,{children:"copyright"}),"ZappyMap Inc"]})]}),e.jsx(H,{})]})]})})}const xe=p.nav`
    background-color: black;
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    width: -webkit-fill-available;
`,he=p.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,me=p(he)`
    display: none;
    @media only screen and (${b}) {
        display: flex;
    }
`,ue=p(he)`
    display: flex;
`,fe=p.h1`
    font-family: 'Rokkitt', serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
    @media only screen and (${b}) {
        font-size: 35px;
    }
`,ge=p.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`,je=p(r)`
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
`;function be(){return e.jsx(e.Fragment,{children:e.jsxs(xe,{children:[e.jsx(ue,{children:e.jsx(fe,{children:"ZappyMap"})}),e.jsx(me,{children:e.jsxs(ge,{children:[e.jsx(je,{to:"/history",children:"Historia"}),e.jsx(je,{to:"/restaurants",children:"Restaurantes"}),e.jsx(je,{to:"/destinations",children:"Discotecas"}),e.jsx(je,{to:"sites",children:"Sitios"}),e.jsx(je,{to:"destinations",children:"Transporte"})]})})]})})}const ye=p.div`
    width: 100%;
    height: 450px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media only screen and (${b}) {
        height: 750px;
    }
`,we=p.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,ve=p.h1`
    font-family: 'Rokkitt', serif;
    font-size: 15vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    color: white;
    top: 12rem;
    flex-direction: column;
    justify-content: center;
`,ke=p.h1`
    font-family: 'Rokkitt', serif;
    font-size: 5vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    color: white;
    top: 16rem;
    flex-direction: column;
    justify-content: center;
    @media only screen and (${b}) {
        top: 26rem;
    }
`,$e=Object.freeze(Object.defineProperty({__proto__:null,default:function({image576:n,image768:i,image1200:r,altText:o,subtitle:a}){return e.jsxs(e.Fragment,{children:[e.jsx(be,{}),e.jsxs(ye,{children:[e.jsx(we,{srcSet:`\n                        ${n} 576w,\n                        ${i} 768w,\n                        ${r} 1200w,\n                    `,sizes:"\n                        (max-width: 576px) 100vw,\n                        (max-width: 768px) 80vw,\n                        (max-width: 1200px) 60vw,\n                    ",alt:o,loading:"eager"}),e.jsx(ve,{children:"MADRID"}),e.jsx(ke,{children:a})]})]})}},Symbol.toStringTag,{value:"Module"})),ze=p.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    max-height: 900px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,Me=p.ul`
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
`,_e=p.li`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.open?"#fff":"inherit"};
    transition: background-color 0.3s ease-in-out;
`,Ce=p.ul`
    list-style: none;
    max-height: ${e=>e.open?"300px":"0"};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    background-color: #fff;
    padding-left: 10px;
    margin: 0;
`,Re=p.li`
    padding: 10px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        transform: scale(1.05);
    }
`,Ee=p.input`
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
`,Se=p.span`
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.open?"rotate(180deg)":"rotate(0)"};
`;function Te({menuOptions:n}){const[i,r]=o.useState(0);return e.jsx(ze,{children:e.jsx(Me,{children:n.map((n,o)=>e.jsxs("ul",{children:[e.jsxs(_e,{onClick:()=>(e=>{r(i===e?-1:e)})(o),open:i===o,children:[e.jsx(ee,{children:n.label}),e.jsx(Se,{open:i===o,children:"▼"})]}),e.jsx(Ce,{open:i===o,children:n.subOptions.map((n,i)=>e.jsxs(Re,{children:[e.jsx(Ee,{type:"checkbox"}),n]},i))})]},o))})})}const Le=s,Ie=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const[n,i]=o.useState(!1),r=()=>i(!0),s=()=>i(!1),{restaurant:d}=Le(e=>e.restaurant),{data:t}=d??{},l=a();return o.useEffect(()=>{t&&0!==t.length||o.startTransition(()=>{l(m())})},[t,l]),e.jsx(N,{children:e.jsxs(D,{children:[e.jsx(U,{children:e.jsx(Te,{menuOptions:[{label:"Tipo de comida ",subOptions:["Mediterranea","Japonesa","Mexicana","China","Turca"]},{label:"Precio",subOptions:["Menos de 15€ por persona.","Entre 15€ y 30€ por persona.","Más de 30€ por persona."]},{label:"Guía Michelin",subOptions:["Guía MICHELIN","3 estrellas MICHELIN","2 estrellas MICHELIN","1 estrella MICHELIN"]}]})}),e.jsx(V,{children:(null==d?void 0:d.count)>0?t.map((i,o)=>{var a,d;return e.jsxs(J,{children:[e.jsx(W,{children:e.jsx(Z,{to:i.id,children:e.jsx(K,{alt:i.name,src:null==(a=i.images[o])?void 0:a.url,loading:"lazy"})})}),e.jsxs(W,{children:[e.jsxs(Q,{children:[e.jsxs(ie,{children:["Top 1 ",e.jsx(se,{children:"editor_choice"})]}),e.jsx(ae,{children:"Michelin"})]}),e.jsx(Q,{children:e.jsx(Z,{to:i.id,children:e.jsx(ne,{children:i.name})})}),e.jsx(Q,{children:e.jsxs(oe,{children:[e.jsx(se,{children:"kid_star"})," Puntuación (9,6)"]})}),e.jsx(Q,{children:e.jsxs(oe,{children:[e.jsx(se,{children:"location_on"}),null==(d=i.location)?void 0:d.address]})}),e.jsx(Q,{children:e.jsxs(oe,{children:[e.jsx(se,{children:"restaurant"}),i.type_food," . Precio medio: 20€"]})}),e.jsxs(Y,{children:[e.jsxs(re,{children:[i.description," ",n&&i.description]}),e.jsx(ce,{onClick:n?s:r,children:n?"Ver menos":"Ver más"})]}),e.jsxs(X,{children:[e.jsxs(de,{to:i.web,children:[e.jsx(se,{children:"language"})," Web"]}),e.jsxs(de,{to:i.web,children:[e.jsx(se,{children:"menu_book"})," Menú"]}),e.jsxs(le,{href:`tel:${i.phone}`,children:[e.jsx(se,{children:"call_quality"}),i.phone]})]})]})]},i.id)}):e.jsx(Q,{children:e.jsx(re,{children:"No hay restaurantes disponibles"})})})]})})}},Symbol.toStringTag,{value:"Module"})),Oe=p.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-column: 2 / 7;
    grid-row: 1;

    @media only screen and (${y}) {
        grid-column: 2 / 7;
    }
    @media only screen and (${w}) {
        grid-template-columns: auto auto;
    }
`,Ae=p.div`
    display: flex;
    flex-direction: column;
     
     aspect-ratio: 4 / 3; 
`,Pe=p.div`
    display: none;
    aspect-ratio: 3 / 4; 
    @media only screen and (${w}) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        grid-auto-rows: 210px;
    }
`,Be=p.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`,qe=p.div`
    padding: 2rem;
    background-color: whitesmoke;
    width: 100%;
`,Fe=p.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,He=p.div`
    display: flex;
    justify-content: space-around;
`,Ge=p.div`
    display: flex;
    flex-direction: row;
`,Ne=p.h3`
    font-family: 'Rokkitt', serif;
    font-size: 25px;
    font-weight: bold;
    @media only screen and (${b}) {
        font-size: 35px;
    }
`,De=p.h3`
    font-family: 'Rokkitt', serif;
    font-size: 18px;
    font-weight: bold;
    @media only screen and (${b}) {
        font-size: 22px;
    }
`;p.p`
    font-family: 'Roboto';
    font-size: 16px;
`;const Ve=p.div`
    font-family: 'Rokkitt', serif;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`,Ze=p.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`,Je=p.button.attrs(e=>({$border:e.$border||"solid 1px black"}))`
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
`,Ue=p.span.attrs(e=>({$borderBottom:e.$borderBottom||"solid 1px black"}))`
    font-family: 'Roboto';

    border-bottom: ${e=>e.$borderBottom};
    line-height: 22px;
    display: none;

    @media only screen and (${b}) {
        display: block;
    }
`,We=p.div`
    font-family: 'Roboto', serif;
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
`,Ke=p.p`
    display: flex;
    align-items: center;

    column-gap: 1rem;
    border-bottom: none;
    padding: 10px 0px;
    @media only screen and (${b}) {
        border-bottom: 1px solid gray;
    }
`,Qe=p.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    color: white;
`,Ye=p.ul`
    list-style: none;
    display: flex;
`,Xe=p(r)`
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
`,en=p.p`
    font-family: 'Roboto';
    font-size: 16px;
`,nn=p.div`
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
`,rn=p.div`
    display: grid;
    gap: 16px;
    width: 100%;

    grid-column: 2 / 5;
    grid-row: 2;
    @media only screen and (${b}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${w}) {
        grid-column: 2 / 5;
    }
`,on=p.div`
    display: grid;
    gap: 16px;
    grid-column: 5 / 7;
    grid-row: 2;
    @media only screen and (${b}) {
        grid-column: 3 / 7;
    }
    @media only screen and (${w}) {
        grid-column: 5 / 7;
    }
`,an=p.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-area: content;
    grid-column: 2 / 5;
    grid-row: 3;
    @media only screen and (${b}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${y}) {
        grid-column: 2 / 5;
    }
`,sn=p(an)`
    grid-row: 4;
`,dn=p(He)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${b}) {
        row-gap: 1rem;
    }
`,tn=p.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    @media only screen and (${b}) {
        row-gap: 3rem;
    }
`,ln=p.p`
    cursor: pointer;
   
    &:hover{
        text-decoration: line-through;
    }
`,cn=p.span`
   font-weight: bold;
   padding-right: 2px;
`,pn=o.lazy(()=>h(()=>Promise.resolve().then(()=>bn),void 0)),xn=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var n,i,r,a,s,l;const[c,p]=o.useState(!1),{id:x}=d(),{restaurant:h}=Le(e=>e.restaurant);if(!h||!h.data||0===h.data.length)return e.jsx(dn,{children:e.jsx(We,{children:"No hay restaurantes"})});const m=Le(e=>x?g(e,x):void 0);return e.jsxs(e.Fragment,{children:[e.jsx(qe,{children:e.jsxs(He,{children:[e.jsxs(Ge,{children:[e.jsx(Ne,{children:null==m?void 0:m.name}),e.jsx(Fe,{children:"verified"})]}),e.jsxs(Ve,{children:[e.jsxs(Ze,{onClick:async()=>{try{const e=window.location.href;await navigator.clipboard.writeText(e),p(!0),setTimeout(()=>p(!1),2e3)}catch(e){}},children:[e.jsx(Fe,{color:"black",children:"ios_share"}),e.jsx(Ue,c?{children:"Enlace copiado"}:{children:"Compartir"})]}),e.jsxs(Je,{$border:"solid 1px black",children:[e.jsx(Fe,{color:"black",children:"favorite"}),e.jsx(Ue,{$borderBottom:"none",children:"Guardar"})]})]})]})}),e.jsx(nn,{children:e.jsxs(t.Fragment,{children:[e.jsxs(Oe,{children:[e.jsx(Ae,{children:e.jsx(Be,{src:null==(n=null==m?void 0:m.images[0])?void 0:n.url,alt:(null==(i=null==m?void 0:m.images[0])?void 0:i.id)||"portada"},null==(r=null==m?void 0:m.images[0])?void 0:r.id)}),e.jsx(Pe,{children:e.jsx(Be,{src:null==(a=null==m?void 0:m.images[0])?void 0:a.url,alt:(null==(s=null==m?void 0:m.images[0])?void 0:s.id)||"portada dos"},null==(l=null==m?void 0:m.images[0])?void 0:l.id)}),e.jsxs(We,{children:[e.jsxs(Ke,{children:[e.jsx(Fe,{color:"black",children:"restaurant"}),null==m?void 0:m.type_food]}),e.jsxs(Ke,{children:[e.jsx(Fe,{color:"black",children:"map"}),"España , Madrid"]}),e.jsxs(Ke,{children:[e.jsx(Fe,{color:"black",children:"euro"}),"Precio medio 20 euros"]})]})]}),e.jsxs(rn,{children:[e.jsx(Qe,{children:e.jsxs(Ye,{children:[e.jsx(Xe,{to:"",children:"Horario"}),e.jsx(Xe,{to:"",children:"Descripcion"}),e.jsx(Xe,{to:"",children:"Contenido"})]})}),e.jsx(en,{children:null==m?void 0:m.description})]}),e.jsx(on,{children:e.jsx(pn,{})}),e.jsxs(an,{children:[e.jsx(De,{children:"Caracteristicas"}),e.jsxs(dn,{children:[e.jsxs(We,{children:[e.jsx(Fe,{color:"black",children:"credit_card"}),"Aceptan tarjetas de credito"]}),e.jsxs(We,{children:[e.jsx(Fe,{color:"black",children:"check_circle"}),"Comidas, Cenas, Brunch y Bebidas"]}),e.jsxs(We,{children:[e.jsx(Fe,{color:"black",children:"chef_hat"}),"Tiene opciones veganas y celiacas"]})]})]}),e.jsxs(sn,{children:[e.jsx(De,{children:"Menu"}),e.jsxs(tn,{children:[e.jsxs(dn,{children:[e.jsx(We,{children:e.jsxs(ln,{children:["Albondigas ",e.jsx(cn,{children:"22$"})]})}),e.jsx(We,{children:e.jsxs(ln,{children:["Huevos Rotos",e.jsx(cn,{children:"22$"})]})}),e.jsx(We,{children:e.jsxs(ln,{children:["Arroz tres delicias",e.jsx(cn,{children:"22$"})]})})]}),e.jsxs(dn,{children:[e.jsx(We,{children:e.jsxs(ln,{children:["Albondigas ",e.jsx(cn,{children:"22$"})]})}),e.jsx(We,{children:e.jsxs(ln,{children:["Huevos Rotos ",e.jsx(cn,{children:"22$"})]})}),e.jsx(We,{children:e.jsxs(ln,{children:["Arroz tres delicias ",e.jsx(cn,{children:"22$"})]})})]}),e.jsxs(dn,{children:[e.jsx(We,{children:e.jsxs(ln,{children:["Albondigas ",e.jsx(cn,{children:"22$"})]})}),e.jsx(We,{children:e.jsxs(ln,{children:["Huevos Rotos ",e.jsx(cn,{children:"22$"})]})}),e.jsx(We,{children:e.jsxs(ln,{children:["Arroz tres delicias",e.jsx(cn,{children:"22$"})]})})]})]})]})]},null==m?void 0:m.id)})]})}},Symbol.toStringTag,{value:"Module"})),hn=p.div`
    width: 100%;
    padding: 12px;
    margin: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    background-color: white;
`,mn=p.h2`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
    @media only screen and (${b}) {
        font-size: 22px;
    }
`,un=p.div`
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
`,fn=p.p`
    font-family: 'Roboto', serif;
    font-size: 16px;
    display: flex;

    flex-direction: row;
    @media only screen and (${b}) {
        flex-direction: column;
    }

    @media only screen and (${w}) {
        flex-direction: row;
    }
`,gn=p.span`
    font-weight: bold;
`,jn=p.span`
    padding-left: 6px;
`,bn=Object.freeze(Object.defineProperty({__proto__:null,default:function(){return e.jsxs(hn,{children:[e.jsx(mn,{children:"Horario"}),e.jsx(un,{children:e.jsxs(fn,{children:[e.jsx(gn,{children:"Lunes"}),e.jsx(jn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(un,{children:e.jsxs(fn,{children:[e.jsx(gn,{children:"Lunes"}),e.jsx(jn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(un,{children:e.jsxs(fn,{children:[e.jsx(gn,{children:"Lunes"}),e.jsx(jn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(un,{children:e.jsxs(fn,{children:[e.jsx(gn,{children:"Lunes"}),e.jsx(jn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(un,{children:e.jsxs(fn,{children:[e.jsx(gn,{children:"Lunes"}),e.jsx(jn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(un,{children:e.jsxs(fn,{children:[e.jsx(gn,{children:"Lunes"}),e.jsx(jn,{children:"11:00pm - 12:00pm"})]})})]})}},Symbol.toStringTag,{value:"Module"}));export{$e as C,pe as F,be as N,O as P,h as _,Ie as a,xn as c,u as i,j as r};
