import{j as e,T as n,a as i,L as r,r as o,u as a,b as s,R as d}from"./react-vendor.CbWmKzsr.js";import{c as t,d as l}from"./vendor.Be_Xj_di.js";const c={},p=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(null==i?void 0:i.nonce)||(null==i?void 0:i.getAttribute("nonce"));r=e(n.map(e=>{if((e=function(e){return"/"+e}(e))in c)return;c[e]=!0;const n=e.endsWith(".css");if(document.querySelector(`link[href="${e}"]${n?'[rel="stylesheet"]':""}`))return;const i=document.createElement("link");return i.rel=n?"stylesheet":"modulepreload",n||(i.as="script"),i.crossOrigin="",i.href=e,o&&i.setAttribute("nonce",o),document.head.appendChild(i),n?new Promise((n,r)=>{i.addEventListener("load",n),i.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function o(e){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e}return r.then(n=>{for(const e of n||[])"rejected"===e.status&&o(e.reason);return e().catch(o)})},x=t("restaurant/fetchRestaurant",async()=>(async({api_url:e,method:n="GET",body:i,headers:r={},token:o})=>{const a={"Content-Type":"application/json",...o?{Authorization:`Bearer ${o}`}:{},...r};try{const r=await fetch(e,{method:n,headers:a,body:"GET"!==n&&i?JSON.stringify(i):void 0});if(!r.ok)throw new Error(`Error ${r.status}: ${r.statusText}`);return{data:await r.json(),error:null}}catch(s){return s instanceof Error?{data:null,error:s.message||"Error desconocido"}:{data:null,error:"Error desconocido"}}})({api_url:"http://localhost:3000/api/v1/restaurant",method:"GET"})),h="(min-width: 577px)",m="(min-width: 769px)",u="(min-width: 992px)",f="(min-width: 1200px)",g=l.div`
    width: 100%;
    padding: 2rem;
    @media only screen and (${h}) {
        padding: 3rem;
    }
`,j=l.h2`
    font-family: 'Rokkitt', serif;
    font-size: 5vw;
    font-weight: 500;
    color: black;
    padding-bottom: 2rem;
    text-align: center;
    @media only screen and (${h}) {
        text-align: start;
    }
`,b=l.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
`,y=l.figure``,w=l.figcaption`
    color: black;
    font-family: 'fangsong';
`,v=l.img`
    flex-shrink: 0;
    border-radius: 15px;
    height: 250px;
    @media only screen and (${h}) {
        border-radius: 0px;
    }
`;l.h2`
    color: black;
    font-family: 'Roboto';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-items: center;
    text-align: center;
    padding: 1rem;
`;const k=l.p`
    color: black;
    word-wrap: break-word;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    padding: 1rem;
    font-size: 16px;
    @media only screen and (${h}) {
        font-size: 20px;
    }
`,$=l.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 10px;
    color: black;
    @media only screen and (${h}) {
        color: black;
    }
`,z=l.q`
    font-weight: 600;
    font-style: oblique;
`,M=l.ul``,_=l.li``,C=l.span`
    display: inline-flex;
    column-gap: 12px;
    font-family: 'Rokkitt', serif;
    font-size: 25px;
`;function E(){return e.jsx(e.Fragment,{children:e.jsxs(g,{children:[e.jsx(j,{children:"Historia"}),e.jsxs(b,{children:[e.jsxs(y,{children:[e.jsx(v,{src:"/assets/alcazar_madrid.B5a2rc4K.jpg",alt:"Alcazar de Madrid",loading:"lazy"}),e.jsx(w,{children:"Alcazar de Madrid "})]}),e.jsxs($,{children:[e.jsxs(k,{children:["En las orillas del Manzanares, donde el agua fluía generosa, los árabes erigieron en el año 865 una fortaleza a la que llamaron ","Mayrit",", que significa ","abundancia de ríos de agua",". Este nombre, tan evocador, reflejaba la esencia de aquel lugar, un oasis en la meseta castellana. Su primer escudo, con el lema",e.jsx(z,{cite:"https://caminandopormadrid.com/fui-sobre-agua-edificada-mis-muros-de",children:"Fui sobre agua edificada / Mis muros de fuego son / Esta es mi insignia y mi blasón"}),", era un canto a su origen acuático y a la fortaleza que la protegería a lo largo de los siglos. En 1083, la ciudad cambió de manos con la conquista de Alfonso VI, iniciando un nuevo capítulo en su milenaria historia"]}),e.jsx(k,{children:"En 1561, la historia de Madrid dio un giro trascendental. Felipe II, con su mirada puesta en el futuro, decidió trasladar la corte a esta ciudad, lejos de las antiguas capitales. La centralidad geográfica de Madrid y la menor presencia de poderes establecidos la convirtieron en el lienzo perfecto sobre el que construir una nueva corte. La predilección de su esposa, Isabel de Valois, por este modesto pueblo, fue la pincelada final que completó el cuadro. A partir de ese momento, Madrid se transformó en el epicentro de un imperio, un crisol de culturas y el escenario de grandes acontecimientos históricos"})]})]}),e.jsx(j,{children:"Simbolos"}),e.jsxs(b,{children:[e.jsxs(y,{children:[e.jsx(v,{src:"/assets/bandera_madrid.Beh6rZ3P.png",alt:"Bandera de Comunidad Madrid",loading:"lazy"}),e.jsx(w,{children:"Bandera Comunidad de Madrid "})]}),e.jsxs($,{children:[e.jsx(k,{children:"La bandera de la Comunidad de Madrid es descrita como un símbolo de identidad regional, caracterizado por su color rojo carmesí y sus siete estrellas plateadas de cinco puntas, dispuestas en dos filas de cuatro y tres. El rojo carmesí hace alusión a la tradición histórica de Madrid como parte de Castilla, mientras que las estrellas representan la constelación de la Osa Mayor, símbolo del cielo nocturno visible en la región. Este diseño, simple pero significativo, busca reflejar tanto el legado cultural como la ubicación geográfica de la Comunidad."}),e.jsx(k,{children:"Las siete estrellas presentes en la bandera de la Comunidad de Madrid han dado lugar a múltiples interpretaciones a lo largo del tiempo. Su significado más aceptado las asocia con la constelación de la Osa Mayor, un referente astronómico muy conocido en el hemisferio norte. Esta constelación, visible claramente desde la Sierra de Guadarrama, no solo simboliza la conexión de Madrid con el cielo estrellado, sino que también evoca el vínculo de la región con su entorno natural y su herencia mitológica."})]})]}),e.jsx(j,{children:"Ubicación"}),e.jsxs(b,{children:[e.jsxs(y,{children:[e.jsx(v,{src:"/assets/mapa_madrid.wP0fYJAT.webp",alt:"Mapa Comunidad Madrid",loading:"lazy"}),e.jsx(w,{children:"Mapa Comunidad de Madrid "})]}),e.jsx($,{children:e.jsxs(M,{children:[e.jsxs(_,{children:[e.jsxs(C,{children:[e.jsx(n,{})," Ubicación"]}),e.jsxs(k,{children:["Madrid se encuentra casi en el centro geográfico de la Península Ibérica, a una latitud de ","40º 25"," Norte, y una longitud de"," ","3º\n                                    42"," ","Oeste."]})]}),e.jsxs(_,{children:[e.jsxs(C,{children:[e.jsx(i,{})," Tiempo"]}),e.jsx(k,{children:"La temperatura media anual, en la sombra, es de 13 ºC. En las estaciones más frías, las temperaturas mínimas suelen caer por debajo de los 0 ºC, aunque en la ciudad en sí rara vez nieva. Durante los meses de verano la temperatura puede llegar fácilmente a los 40 ºC."})]})]})})]})]})})}const R=l.div`
    height: 250px;
    background-color: hsl(0, 0%, 0%);
    padding: 2rem;
    @media only screen and (${h}) {
        height: 200px;
    }
`,S=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    row-gap: 2rem;
    column-gap: 2rem;
`,T=l.div`
    display: flex;
    justify-content: space-evenly;
    column-gap: 2rem;
    align-items: center;
`,L=l.h1`
    font-family: 'Rokkitt', serif;
    font-family: 24px;
    font-weight: 500;
    color: white;
    @media only screen and (${h}) {
        font-family: 35px;
    }
`;l.img`
    width: ${({sizes:e})=>e||"40px"};
    height: ${({sizes:e})=>e||"40px"};
`;const O=l(l.span`
    font-family: 'Material Symbols Outlined';
    font-size: 22px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`)`
    color: white;
`,I=l.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    @media only screen and (${h}) {
    }
`,P=l(r)`
    color: #fff;
    font-size: 12px;
    @media only screen and (${h}) {
        font-size: 16px;
    }
`,A=l.div`
    margin: 2rem;

    @media only screen and (${h}) {
        margin: 3rem;
    }
`,q=l.div`
    display: grid;
    @media only screen and (${h}) {
        display: grid;
        grid-template-columns: 275px auto;
        gap: 2rem;
        width: 100%;
    }
`,B=l.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`,F=l(r)`
    
`,H=l.div`
    border-radius: 20px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media only screen and (${f}) {
        flex-direction: row;
        box-shadow: none;
        align-items: center;
    }
`,N=l.div`
    display: none;
    @media only screen and (${h}) {
        display: block;
    }
`,G=l.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    @media only screen and (${f}) {
        width: 50%;
    }
`,D=l.img.attrs(({src:e})=>({src:e,alt:"Imagen card "}))`
    width: fit-content;
    border-radius: 15px;
`,V=l.div`
    display: flex;
    align-items: baseline;
    padding: 3px;
    @media only screen and (${h}) {
        padding: 0.1rem;
    }
`,Z=l(V)`
    flex-direction: column;
    padding: 10px 0px;
`,J=l(V)`
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (${h}) {
        padding: 0.1rem;
    }
`,U=l.h3`
    font-family: 'Roboto', serif;
    font-size: 16px;
    font-weight: bold;
`,W=l.h3`
    font-family: 'Roboto', serif;
    font-size: 22px;
    font-weight: bold;
    padding: 10px 0px;
`,K=l.h3`
    font-weight: 400;
    font-family: 'Roboto', serif;
    font-size: 20px;
    font-weight: bold;
`,Q=l.p`
    font-family: 'Roboto', serif;
    font-size: 16px;
    padding-bottom: 6px;
    display: flex;
    align-items: baseline;
`,Y=l(Q)`
    display: flex;
    align-items: end;
    font-size: 16px;
`,X=l.button`
    padding: 6px 6px;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    font-family: 'Roboto', serif;
    font-size: 18px;
`,ee=l.span`
    font-family: 'Material Symbols Outlined';
    font-size: 16px;
    padding-right: 10px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,ne=l(r)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 400;
    gap: 0.25rem;
`,ie=l(ne)`
    color: white;
    font-size: 16px;
    padding: 0rem;
`,re=l.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    gap: 0.25rem;
`,oe=l.button`
    font-family: 'Roboto', serif;
    font-size: 12px;
    padding: 12px 6px;
    border: none;
    border-radius: 10px;
    background-color: #ff3d00;
    color: white;
    font-weight: 400;
    cursor: pointer;
`;function ae(){return e.jsx(R,{children:e.jsxs(S,{children:[e.jsx(L,{children:"ZappyMap"}),e.jsxs(T,{children:[e.jsxs(I,{children:[e.jsx(P,{to:"./legales",children:"¿Quienes somos?"}),e.jsx(P,{to:"./legales",children:"Información de contacto"})]}),e.jsxs(I,{children:[e.jsx(P,{to:"./legales",children:"Preguntas frecuentes"}),e.jsx(P,{to:"./legales",children:"Condiciones legales"})]}),e.jsxs(I,{children:[e.jsxs(ie,{to:"https://yandrydev.es/",children:[e.jsx(O,{children:"rss_feed"}),"Redes sociales"]}),e.jsxs(ie,{to:"https://yandrydev.es/",children:[e.jsx(O,{children:"copyright"}),"ZappyMap Inc"]})]}),e.jsx(I,{})]})]})})}const se=l.nav`
    background-color: black;
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    width: -webkit-fill-available;
`,de=l.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,te=l(de)`
    display: none;
    @media only screen and (${h}) {
        display: flex;
    }
`,le=l(de)`
    display: flex;
`,ce=l.h1`
    font-family: 'Rokkitt', serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
    @media only screen and (${h}) {
        font-size: 35px;
    }
`,pe=l.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`,xe=l(r)`
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
`;function he(){return e.jsx(e.Fragment,{children:e.jsxs(se,{children:[e.jsx(le,{children:e.jsx(ce,{children:"ZappyMap"})}),e.jsx(te,{children:e.jsxs(pe,{children:[e.jsx(xe,{to:"/history",children:"Historia"}),e.jsx(xe,{to:"/restaurants",children:"Restaurantes"}),e.jsx(xe,{to:"/destinations",children:"Discotecas"}),e.jsx(xe,{to:"sites",children:"Sitios"}),e.jsx(xe,{to:"destinations",children:"Transporte"})]})})]})})}const me=l.div`
    width: 100%;
    height: 450px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media only screen and (${h}) {
        height: 750px;
    }
`,ue=l.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,fe=l.h1`
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
`,ge=l.h1`
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
    @media only screen and (${h}) {
        top: 26rem;
    }
`,je=Object.freeze(Object.defineProperty({__proto__:null,default:function({image576:n,image768:i,image1200:r,altText:o,subtitle:a}){return e.jsxs(e.Fragment,{children:[e.jsx(he,{}),e.jsxs(me,{children:[e.jsx(ue,{srcSet:`\n                        ${n} 576w,\n                        ${i} 768w,\n                        ${r} 1200w,\n                    `,sizes:"\n                        (max-width: 576px) 100vw,\n                        (max-width: 768px) 80vw,\n                        (max-width: 1200px) 60vw,\n                    ",alt:o,loading:"eager",fetchPriority:"high"}),e.jsx(fe,{children:"MADRID"}),e.jsx(ge,{children:a})]})]})}},Symbol.toStringTag,{value:"Module"})),be=l.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    max-height: 900px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,ye=l.ul`
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
`,we=l.li`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.open?"#fff":"inherit"};
    transition: background-color 0.3s ease-in-out;
`,ve=l.ul`
    list-style: none;
    max-height: ${e=>e.open?"300px":"0"};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    background-color: #fff;
    padding-left: 10px;
    margin: 0;
`,ke=l.li`
    padding: 10px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        transform: scale(1.05);
    }
`,$e=l.input`
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
`,ze=l.span`
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.open?"rotate(180deg)":"rotate(0)"};
`;function Me({menuOptions:n}){const[i,r]=o.useState(0);return e.jsx(be,{children:e.jsx(ye,{children:n.map((n,o)=>e.jsxs("ul",{children:[e.jsxs(we,{onClick:()=>(e=>{r(i===e?-1:e)})(o),open:i===o,children:[e.jsx(U,{children:n.label}),e.jsx(ze,{open:i===o,children:"▼"})]}),e.jsx(ve,{open:i===o,children:n.subOptions.map((n,i)=>e.jsxs(ke,{children:[e.jsx($e,{type:"checkbox"}),n]},i))})]},o))})})}const _e=s,Ce=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const[n,i]=o.useState(!1),r=()=>i(!0),s=()=>i(!1),{restaurant:d}=_e(e=>e.restaurant),{data:t}=d??{},l=a();return o.useEffect(()=>{t&&0!==t.length||o.startTransition(()=>{l(x())})},[t,l]),e.jsx(A,{children:e.jsxs(q,{children:[e.jsx(N,{children:e.jsx(Me,{menuOptions:[{label:"Tipo de comida ",subOptions:["Mediterranea","Japonesa","Mexicana","China","Turca"]},{label:"Precio",subOptions:["Menos de 15€ por persona.","Entre 15€ y 30€ por persona.","Más de 30€ por persona."]},{label:"Guía Michelin",subOptions:["Guía MICHELIN","3 estrellas MICHELIN","2 estrellas MICHELIN","1 estrella MICHELIN"]}]})}),e.jsx(B,{children:(null==d?void 0:d.count)>0?t.map((i,o)=>{var a,d;return e.jsxs(H,{children:[e.jsx(G,{children:e.jsx(F,{to:i.id,children:e.jsx(D,{alt:i.name,src:null==(a=i.images[o])?void 0:a.url,loading:"lazy"})})}),e.jsxs(G,{children:[e.jsxs(V,{children:[e.jsxs(K,{children:["Top 1 ",e.jsx(ee,{children:"editor_choice"})]}),e.jsx(X,{children:"Michelin"})]}),e.jsx(V,{children:e.jsx(F,{to:i.id,children:e.jsx(W,{children:i.name})})}),e.jsx(V,{children:e.jsxs(Y,{children:[e.jsx(ee,{children:"kid_star"})," Puntuación (9,6)"]})}),e.jsx(V,{children:e.jsxs(Y,{children:[e.jsx(ee,{children:"location_on"}),null==(d=i.location)?void 0:d.address]})}),e.jsx(V,{children:e.jsxs(Y,{children:[e.jsx(ee,{children:"restaurant"}),i.type_food," . Precio medio: 20€"]})}),e.jsxs(Z,{children:[e.jsxs(Q,{children:[i.description," ",n&&i.description]}),e.jsx(oe,{onClick:n?s:r,children:n?"Ver menos":"Ver más"})]}),e.jsxs(J,{children:[e.jsxs(ne,{to:i.web,children:[e.jsx(ee,{children:"language"})," Web"]}),e.jsxs(ne,{to:i.web,children:[e.jsx(ee,{children:"menu_book"})," Menú"]}),e.jsxs(re,{href:`tel:${i.phone}`,children:[e.jsx(ee,{children:"call_quality"}),i.phone]})]})]})]},i.id)}):e.jsx(V,{children:e.jsx(Q,{children:"No hay restaurantes disponibles"})})})]})})}},Symbol.toStringTag,{value:"Module"})),Ee=l.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-column: 2 / 7;
    grid-row: 1;

    @media only screen and (${m}) {
        grid-column: 2 / 7;
    }
    @media only screen and (${u}) {
        grid-template-columns: auto auto;
    }
`,Re=l.div`
    display: flex;
    flex-direction: column;
     
     aspect-ratio: 4 / 3; 
`,Se=l.div`
    display: none;
   
aspect-ratio: 4 / 3; 
    @media only screen and (${u}) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        grid-auto-rows: 210px;
    }
`,Te=l.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`,Le=l.div`
    padding: 2rem;
    background-color: whitesmoke;
    width: 100%;
`,Oe=l.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,Ie=l.div`
    display: flex;
    justify-content: space-around;
`,Pe=l.div`
    display: flex;
    flex-direction: row;
`,Ae=l.h3`
    font-family: 'Rokkitt', serif;
    font-size: 25px;
    font-weight: bold;
    @media only screen and (${h}) {
        font-size: 35px;
    }
`,qe=l.h3`
    font-family: 'Rokkitt', serif;
    font-size: 18px;
    font-weight: bold;
    @media only screen and (${h}) {
        font-size: 22px;
    }
`;l.p`
    font-family: 'Roboto';
    font-size: 16px;
`;const Be=l.div`
    font-family: 'Rokkitt', serif;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`,Fe=l.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`,He=l.button.attrs(e=>({$border:e.$border||"solid 1px black"}))`
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
    @media only screen and (${h}) {
        border: ${e=>e.$border};
    }
`,Ne=l.span.attrs(e=>({$borderBottom:e.$borderBottom||"solid 1px black"}))`
    font-family: 'Roboto';

    border-bottom: ${e=>e.$borderBottom};
    line-height: 22px;
    display: none;

    @media only screen and (${h}) {
        display: block;
    }
`,Ge=l.div`
    font-family: 'Roboto', serif;
    font-size: 16px;
    padding: 6px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (${h}) {
        flex-direction: row;
    }
`,De=l.p`
    display: flex;
    align-items: center;

    column-gap: 1rem;
    border-bottom: none;
    padding: 10px 0px;
    @media only screen and (${h}) {
        border-bottom: 1px solid gray;
    }
`,Ve=l.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    color: white;
`,Ze=l.ul`
    list-style: none;
    display: flex;
`,Je=l(r)`
    font-family: 'Rokkitt', serif;
    font-size: 18px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    line-height: 10px;
    padding: 0.5rem 1rem;
    border-right: solid 2px gray;

    @media only screen and (${h}) {
        font-size: 22px;
    }
`,Ue=l.p`
    font-family: 'Roboto';
    font-size: 16px;
`,We=l.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    grid-gap: 2rem;

    @media only screen and (${h}) {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: minmax(100px, auto);
    }
`,Ke=l.div`
    display: grid;
    gap: 16px;
    width: 100%;

    grid-column: 2 / 5;
    grid-row: 2;
    @media only screen and (${h}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${u}) {
        grid-column: 2 / 5;
    }
`,Qe=l.div`
    display: grid;
    gap: 16px;
    grid-column: 5 / 7;
    grid-row: 2;
    @media only screen and (${h}) {
        grid-column: 3 / 7;
    }
    @media only screen and (${u}) {
        grid-column: 5 / 7;
    }
`,Ye=l.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-area: content;
    grid-column: 2 / 5;
    grid-row: 3;
    @media only screen and (${h}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${m}) {
        grid-column: 2 / 5;
    }
`,Xe=l(Ye)`
    grid-row: 4;
`,en=l(Ie)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${h}) {
        row-gap: 1rem;
    }
`,nn=l.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    @media only screen and (${h}) {
        row-gap: 3rem;
    }
`,rn=l.p`
    cursor: pointer;
   
    &:hover{
        text-decoration: line-through;
    }
`,on=l.span`
   font-weight: bold;
   padding-right: 2px;
`,an=o.lazy(()=>p(()=>Promise.resolve().then(()=>hn),void 0)),sn=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const[n,i]=o.useState(!1),{restaurant:r}=_e(e=>e.restaurant);return r&&r.data&&0!==r.data.length?e.jsxs(e.Fragment,{children:[e.jsx(Le,{children:e.jsxs(Ie,{children:[e.jsxs(Pe,{children:[e.jsx(Ae,{children:"Casa Carmen"}),e.jsx(Oe,{children:"verified"})]}),e.jsxs(Be,{children:[e.jsxs(Fe,{onClick:async()=>{try{const e=window.location.href;await navigator.clipboard.writeText(e),i(!0),setTimeout(()=>i(!1),2e3)}catch(e){}},children:[e.jsx(Oe,{color:"black",children:"ios_share"}),e.jsx(Ne,n?{children:"Enlace copiado"}:{children:"Compartir"})]}),e.jsxs(He,{$border:"solid 1px black",children:[e.jsx(Oe,{color:"black",children:"favorite"}),e.jsx(Ne,{$borderBottom:"none",children:"Guardar"})]})]})]})}),e.jsx(We,{children:r.count>0?r.data.map((n,i)=>{var r,o,a;return e.jsxs(d.Fragment,{children:[e.jsxs(Ee,{children:[e.jsx(Re,{children:e.jsx(Te,{src:null==(r=n.images[0])?void 0:r.url,alt:(null==(o=n.images[0])?void 0:o.id)||"portada"},null==(a=n.images[0])?void 0:a.id)}),e.jsx(Se,{children:n.images.map(n=>e.jsx(Te,{src:null==n?void 0:n.url,alt:null==n?void 0:n.id},null==n?void 0:n.id))}),e.jsxs(Ge,{children:[e.jsxs(De,{children:[e.jsx(Oe,{color:"black",children:"restaurant"}),n.type_food]}),e.jsxs(De,{children:[e.jsx(Oe,{color:"black",children:"map"}),"España , Madrid"]}),e.jsxs(De,{children:[e.jsx(Oe,{color:"black",children:"euro"}),"Precio medio 20 euros"]})]})]}),e.jsxs(Ke,{children:[e.jsx(Ve,{children:e.jsxs(Ze,{children:[e.jsx(Je,{to:"",children:"Horario"}),e.jsx(Je,{to:"",children:"Descripcion"}),e.jsx(Je,{to:"",children:"Contenido"})]})}),e.jsx(Ue,{children:n.description})]}),e.jsx(Qe,{children:e.jsx(an,{})}),e.jsxs(Ye,{children:[e.jsx(qe,{children:"Caracteristicas"}),e.jsxs(en,{children:[e.jsxs(Ge,{children:[e.jsx(Oe,{color:"black",children:"credit_card"}),"Aceptan tarjetas de credito"]}),e.jsxs(Ge,{children:[e.jsx(Oe,{color:"black",children:"check_circle"}),"Comidas, Cenas, Brunch y Bebidas"]}),e.jsxs(Ge,{children:[e.jsx(Oe,{color:"black",children:"chef_hat"}),"Tiene opciones veganas y celiacas"]})]})]}),e.jsxs(Xe,{children:[e.jsx(qe,{children:"Menu"}),e.jsxs(nn,{children:[e.jsxs(en,{children:[e.jsx(Ge,{children:e.jsxs(rn,{children:["Albondigas ",e.jsx(on,{children:"22$"})]})}),e.jsx(Ge,{children:e.jsxs(rn,{children:["Huevos Rotos",e.jsx(on,{children:"22$"})]})}),e.jsx(Ge,{children:e.jsxs(rn,{children:["Arroz tres delicias",e.jsx(on,{children:"22$"})]})})]}),e.jsxs(en,{children:[e.jsx(Ge,{children:e.jsxs(rn,{children:["Albondigas ",e.jsx(on,{children:"22$"})]})}),e.jsx(Ge,{children:e.jsxs(rn,{children:["Huevos Rotos ",e.jsx(on,{children:"22$"})]})}),e.jsx(Ge,{children:e.jsxs(rn,{children:["Arroz tres delicias ",e.jsx(on,{children:"22$"})]})})]}),e.jsxs(en,{children:[e.jsx(Ge,{children:e.jsxs(rn,{children:["Albondigas ",e.jsx(on,{children:"22$"})]})}),e.jsx(Ge,{children:e.jsxs(rn,{children:["Huevos Rotos ",e.jsx(on,{children:"22$"})]})}),e.jsx(Ge,{children:e.jsxs(rn,{children:["Arroz tres delicias",e.jsx(on,{children:"22$"})]})})]})]})]})]},i)}):e.jsx(en,{children:e.jsx(Ge,{children:"No hay restaurantes"})})})]}):e.jsx(en,{children:e.jsx(Ge,{children:"No hay restaurantes"})})}},Symbol.toStringTag,{value:"Module"})),dn=l.div`
    width: 100%;
    padding: 12px;
    margin: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    background-color: white;
`,tn=l.h2`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
    @media only screen and (${h}) {
        font-size: 22px;
    }
`,ln=l.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 8px;
    margin-bottom: 8px;
    column-gap: 1rem;

    text-align: center;
    @media only screen and (${h}) {
        flex-direction: row;
        row-gap: 1rem;
    }
`,cn=l.p`
    font-family: 'Roboto', serif;
    font-size: 16px;
    display: flex;

    flex-direction: row;
    @media only screen and (${h}) {
        flex-direction: column;
    }

    @media only screen and (${u}) {
        flex-direction: row;
    }
`,pn=l.span`
    font-weight: bold;
`,xn=l.span`
    padding-left: 6px;
`,hn=Object.freeze(Object.defineProperty({__proto__:null,default:function(){return e.jsxs(dn,{children:[e.jsx(tn,{children:"Horario"}),e.jsx(ln,{children:e.jsxs(cn,{children:[e.jsx(pn,{children:"Lunes"}),e.jsx(xn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(ln,{children:e.jsxs(cn,{children:[e.jsx(pn,{children:"Lunes"}),e.jsx(xn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(ln,{children:e.jsxs(cn,{children:[e.jsx(pn,{children:"Lunes"}),e.jsx(xn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(ln,{children:e.jsxs(cn,{children:[e.jsx(pn,{children:"Lunes"}),e.jsx(xn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(ln,{children:e.jsxs(cn,{children:[e.jsx(pn,{children:"Lunes"}),e.jsx(xn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(ln,{children:e.jsxs(cn,{children:[e.jsx(pn,{children:"Lunes"}),e.jsx(xn,{children:"11:00pm - 12:00pm"})]})})]})}},Symbol.toStringTag,{value:"Module"}));export{je as C,ae as F,he as N,E as P,p as _,Ce as a,sn as c,x as g};
