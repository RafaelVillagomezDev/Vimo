import{c as e,d as n,j as i,T as r,a as o,L as a,r as s,u as d,b as t,R as l}from"./vendor.BTRNq9w8.js";const c={},p=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let e=function(e){return Promise.all(e.map((e=>Promise.resolve(e).then((e=>({status:"fulfilled",value:e})),(e=>({status:"rejected",reason:e}))))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(null==i?void 0:i.nonce)||(null==i?void 0:i.getAttribute("nonce"));r=e(n.map((e=>{if((e=function(e){return"/"+e}(e))in c)return;c[e]=!0;const n=e.endsWith(".css");if(document.querySelector(`link[href="${e}"]${n?'[rel="stylesheet"]':""}`))return;const i=document.createElement("link");return i.rel=n?"stylesheet":"modulepreload",n||(i.as="script"),i.crossOrigin="",i.href=e,o&&i.setAttribute("nonce",o),document.head.appendChild(i),n?new Promise(((n,r)=>{i.addEventListener("load",n),i.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function o(e){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e}return r.then((n=>{for(const e of n||[])"rejected"===e.status&&o(e.reason);return e().catch(o)}))},x=e("restaurant/fetchRestaurant",(async()=>(async({api_url:e,method:n="GET",body:i,headers:r={},token:o})=>{const a={"Content-Type":"application/json",...o?{Authorization:`Bearer ${o}`}:{},...r};try{const r=await fetch(e,{method:n,headers:a,body:"GET"!==n&&i?JSON.stringify(i):void 0});if(!r.ok)throw new Error(`Error ${r.status}: ${r.statusText}`);return{data:await r.json(),error:null}}catch(s){return s instanceof Error?{data:null,error:s.message||"Error desconocido"}:{data:null,error:"Error desconocido"}}})({api_url:"http://localhost:3000/api/v1/restaurant",method:"GET"}))),h="(min-width: 577px)",m="(min-width: 769px)",u="(min-width: 992px)",f="(min-width: 1200px)",g=n.div`
    width: 100%;
    padding: 2rem;
    @media only screen and (${h}) {
        padding: 3rem;
    }
`,j=n.h2`
    font-family: 'Rokkitt', serif;
    font-size: 5vw;
    font-weight: 500;
    color: black;
    padding-bottom: 2rem;
    text-align: center;
    @media only screen and (${h}) {
        text-align: start;
    }
`,b=n.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
`,y=n.figure``,w=n.figcaption`
    color: black;
    font-family: 'fangsong';
`,v=n.img`
    flex-shrink: 0;
    border-radius: 15px;
    height: 250px;
    @media only screen and (${h}) {
        border-radius: 0px;
    }
`;n.h2`
    color: black;
    font-family: 'Roboto';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-items: center;
    text-align: center;
    padding: 1rem;
`;const k=n.p`
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
`,$=n.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 10px;
    color: black;
    @media only screen and (${h}) {
        color: black;
    }
`,z=n.q`
    font-weight: 600;
    font-style: oblique;
`,M=n.ul``,_=n.li``,C=n.span`
    display: inline-flex;
    column-gap: 12px;
    font-family: 'Rokkitt', serif;
    font-size: 25px;
`;function E(){return i.jsx(i.Fragment,{children:i.jsxs(g,{children:[i.jsx(j,{children:"Historia"}),i.jsxs(b,{children:[i.jsxs(y,{children:[i.jsx(v,{src:"/assets/alcazar_madrid.B5a2rc4K.jpg",alt:"Alcazar de Madrid",loading:"lazy"}),i.jsx(w,{children:"Alcazar de Madrid "})]}),i.jsxs($,{children:[i.jsxs(k,{children:["En las orillas del Manzanares, donde el agua fluía generosa, los árabes erigieron en el año 865 una fortaleza a la que llamaron ","Mayrit",", que significa ","abundancia de ríos de agua",". Este nombre, tan evocador, reflejaba la esencia de aquel lugar, un oasis en la meseta castellana. Su primer escudo, con el lema",i.jsx(z,{cite:"https://caminandopormadrid.com/fui-sobre-agua-edificada-mis-muros-de",children:"Fui sobre agua edificada / Mis muros de fuego son / Esta es mi insignia y mi blasón"}),", era un canto a su origen acuático y a la fortaleza que la protegería a lo largo de los siglos. En 1083, la ciudad cambió de manos con la conquista de Alfonso VI, iniciando un nuevo capítulo en su milenaria historia"]}),i.jsx(k,{children:"En 1561, la historia de Madrid dio un giro trascendental. Felipe II, con su mirada puesta en el futuro, decidió trasladar la corte a esta ciudad, lejos de las antiguas capitales. La centralidad geográfica de Madrid y la menor presencia de poderes establecidos la convirtieron en el lienzo perfecto sobre el que construir una nueva corte. La predilección de su esposa, Isabel de Valois, por este modesto pueblo, fue la pincelada final que completó el cuadro. A partir de ese momento, Madrid se transformó en el epicentro de un imperio, un crisol de culturas y el escenario de grandes acontecimientos históricos"})]})]}),i.jsx(j,{children:"Simbolos"}),i.jsxs(b,{children:[i.jsxs(y,{children:[i.jsx(v,{src:"/assets/bandera_madrid.Beh6rZ3P.png",alt:"Bandera de Comunidad Madrid",loading:"lazy"}),i.jsx(w,{children:"Bandera Comunidad de Madrid "})]}),i.jsxs($,{children:[i.jsx(k,{children:"La bandera de la Comunidad de Madrid es descrita como un símbolo de identidad regional, caracterizado por su color rojo carmesí y sus siete estrellas plateadas de cinco puntas, dispuestas en dos filas de cuatro y tres. El rojo carmesí hace alusión a la tradición histórica de Madrid como parte de Castilla, mientras que las estrellas representan la constelación de la Osa Mayor, símbolo del cielo nocturno visible en la región. Este diseño, simple pero significativo, busca reflejar tanto el legado cultural como la ubicación geográfica de la Comunidad."}),i.jsx(k,{children:"Las siete estrellas presentes en la bandera de la Comunidad de Madrid han dado lugar a múltiples interpretaciones a lo largo del tiempo. Su significado más aceptado las asocia con la constelación de la Osa Mayor, un referente astronómico muy conocido en el hemisferio norte. Esta constelación, visible claramente desde la Sierra de Guadarrama, no solo simboliza la conexión de Madrid con el cielo estrellado, sino que también evoca el vínculo de la región con su entorno natural y su herencia mitológica."})]})]}),i.jsx(j,{children:"Ubicación"}),i.jsxs(b,{children:[i.jsxs(y,{children:[i.jsx(v,{src:"/assets/mapa_madrid.wP0fYJAT.webp",alt:"Mapa Comunidad Madrid",loading:"lazy"}),i.jsx(w,{children:"Mapa Comunidad de Madrid "})]}),i.jsx($,{children:i.jsxs(M,{children:[i.jsxs(_,{children:[i.jsxs(C,{children:[i.jsx(r,{})," Ubicación"]}),i.jsxs(k,{children:["Madrid se encuentra casi en el centro geográfico de la Península Ibérica, a una latitud de ","40º 25"," Norte, y una longitud de"," ","3º\n                                    42"," ","Oeste."]})]}),i.jsxs(_,{children:[i.jsxs(C,{children:[i.jsx(o,{})," Tiempo"]}),i.jsx(k,{children:"La temperatura media anual, en la sombra, es de 13 ºC. En las estaciones más frías, las temperaturas mínimas suelen caer por debajo de los 0 ºC, aunque en la ciudad en sí rara vez nieva. Durante los meses de verano la temperatura puede llegar fácilmente a los 40 ºC."})]})]})})]})]})})}const R=n.div`
    height: 250px;
    background-color: hsl(0, 0%, 0%);
    padding: 2rem;
    @media only screen and (${h}) {
        height: 200px;
    }
`,S=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    row-gap: 2rem;
    column-gap: 2rem;
`,T=n.div`
    display: flex;
    justify-content: space-evenly;
    column-gap: 2rem;
    align-items: center;
`,L=n.h1`
    font-family: 'Rokkitt', serif;
    font-family: 24px;
    font-weight: 500;
    color: white;
    @media only screen and (${h}) {
        font-family: 35px;
    }
`;n.img`
    width: ${({sizes:e})=>e||"40px"};
    height: ${({sizes:e})=>e||"40px"};
`;const O=n(n.span`
    font-family: 'Material Symbols Outlined';
    font-size: 22px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`)`
    color: white;
`,I=n.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    @media only screen and (${h}) {
    }
`,A=n(a)`
    color: #fff;
    font-size: 12px;
    @media only screen and (${h}) {
        font-size: 16px;
    }
`,P=n.div`
    margin: 2rem;

    @media only screen and (${h}) {
        margin: 3rem;
    }
`,q=n.div`
    display: grid;
    @media only screen and (${h}) {
        display: grid;
        grid-template-columns: 275px auto;
        gap: 2rem;
        width: 100%;
    }
`,B=n.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`,F=n(a)`
    
`,H=n.div`
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
`,N=n.div`
    display: none;
    @media only screen and (${h}) {
        display: block;
    }
`,G=n.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    @media only screen and (${f}) {
        width: 50%;
    }
`,D=n.img.attrs((({src:e})=>({src:e,alt:"Imagen card "})))`
    width: fit-content;
    border-radius: 15px;
`,V=n.div`
    display: flex;
    align-items: baseline;
    padding: 3px;
    @media only screen and (${h}) {
        padding: 0.1rem;
    }
`,Z=n(V)`
    flex-direction: column;
    padding: 10px 0px;
`,J=n(V)`
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (${h}) {
        padding: 0.1rem;
    }
`,U=n.h3`
    font-family: 'Roboto', serif;
    font-size: 16px;
    font-weight: bold;
`,W=n.h3`
    font-family: 'Roboto', serif;
    font-size: 22px;
    font-weight: bold;
    padding: 10px 0px;
`,K=n.h3`
    font-weight: 400;
    font-family: 'Roboto', serif;
    font-size: 20px;
    font-weight: bold;
`,Q=n.p`
    font-family: 'Roboto', serif;
    font-size: 16px;
    padding-bottom: 6px;
    display: flex;
    align-items: baseline;
`,Y=n(Q)`
    display: flex;
    align-items: end;
    font-size: 16px;
`,X=n.button`
    padding: 6px 6px;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    font-family: 'Roboto', serif;
    font-size: 18px;
`,ee=n.span`
    font-family: 'Material Symbols Outlined';
    font-size: 16px;
    padding-right: 10px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,ne=n(a)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 400;
    gap: 0.25rem;
`,ie=n(ne)`
    color: white;
    font-size: 16px;
    padding: 0rem;
`,re=n.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    gap: 0.25rem;
`,oe=n.button`
    font-family: 'Roboto', serif;
    font-size: 12px;
    padding: 12px 6px;
    border: none;
    border-radius: 10px;
    background-color: #ff3d00;
    color: white;
    font-weight: 400;
    cursor: pointer;
`;function ae(){return i.jsx(R,{children:i.jsxs(S,{children:[i.jsx(L,{children:"ZappyMap"}),i.jsxs(T,{children:[i.jsxs(I,{children:[i.jsx(A,{to:"./legales",children:"¿Quienes somos?"}),i.jsx(A,{to:"./legales",children:"Información de contacto"})]}),i.jsxs(I,{children:[i.jsx(A,{to:"./legales",children:"Preguntas frecuentes"}),i.jsx(A,{to:"./legales",children:"Condiciones legales"})]}),i.jsxs(I,{children:[i.jsxs(ie,{to:"https://yandrydev.es/",children:[i.jsx(O,{children:"rss_feed"}),"Redes sociales"]}),i.jsxs(ie,{to:"https://yandrydev.es/",children:[i.jsx(O,{children:"copyright"}),"ZappyMap Inc"]})]}),i.jsx(I,{})]})]})})}const se=n.nav`
    background-color: black;
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    width: -webkit-fill-available;
`,de=n.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,te=n(de)`
    display: none;
    @media only screen and (${h}) {
        display: flex;
    }
`,le=n(de)`
    display: flex;
`,ce=n.h1`
    font-family: 'Rokkitt', serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
    @media only screen and (${h}) {
        font-size: 35px;
    }
`,pe=n.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`,xe=n(a)`
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
`;function he(){return i.jsx(i.Fragment,{children:i.jsxs(se,{children:[i.jsx(le,{children:i.jsx(ce,{children:"ZappyMap"})}),i.jsx(te,{children:i.jsxs(pe,{children:[i.jsx(xe,{to:"/history",children:"Historia"}),i.jsx(xe,{to:"/restaurants",children:"Restaurantes"}),i.jsx(xe,{to:"/destinations",children:"Discotecas"}),i.jsx(xe,{to:"sites",children:"Sitios"}),i.jsx(xe,{to:"destinations",children:"Transporte"})]})})]})})}const me=n.div`
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
`,ue=n.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,fe=n.h1`
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
`,ge=n.h1`
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
`,je=Object.freeze(Object.defineProperty({__proto__:null,default:function({image576:e,image768:n,image1200:r,altText:o,subtitle:a}){return i.jsxs(i.Fragment,{children:[i.jsx(he,{}),i.jsxs(me,{children:[i.jsx(ue,{srcSet:`\n                        ${e} 576w,\n                        ${n} 768w,\n                        ${r} 1200w,\n                    `,sizes:"\n                        (max-width: 576px) 100vw,\n                        (max-width: 768px) 80vw,\n                        (max-width: 1200px) 60vw,\n                    ",alt:o,loading:"lazy"}),i.jsx(fe,{children:"MADRID"}),i.jsx(ge,{children:a})]})]})}},Symbol.toStringTag,{value:"Module"})),be=n.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    max-height: 900px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,ye=n.ul`
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
`,we=n.li`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.open?"#fff":"inherit"};
    transition: background-color 0.3s ease-in-out;
`,ve=n.ul`
    list-style: none;
    max-height: ${e=>e.open?"300px":"0"};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    background-color: #fff;
    padding-left: 10px;
    margin: 0;
`,ke=n.li`
    padding: 10px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        transform: scale(1.05);
    }
`,$e=n.input`
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
`,ze=n.span`
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.open?"rotate(180deg)":"rotate(0)"};
`;function Me({menuOptions:e}){const[n,r]=s.useState(0);return i.jsx(be,{children:i.jsx(ye,{children:e.map(((e,o)=>i.jsxs("ul",{children:[i.jsxs(we,{onClick:()=>(e=>{r(n===e?-1:e)})(o),open:n===o,children:[i.jsx(U,{children:e.label}),i.jsx(ze,{open:n===o,children:"▼"})]}),i.jsx(ve,{open:n===o,children:e.subOptions.map(((e,n)=>i.jsxs(ke,{children:[i.jsx($e,{type:"checkbox"}),e]},n)))})]},o)))})})}const _e=t,Ce=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const[e,n]=s.useState(!1),r=()=>n(!0),o=()=>n(!1),{restaurant:a}=_e((e=>e.restaurant)),{data:t}=a??{},l=d();return s.useEffect((()=>{t&&0!==t.length||s.startTransition((()=>{l(x())}))}),[t,l]),i.jsx(P,{children:i.jsxs(q,{children:[i.jsx(N,{children:i.jsx(Me,{menuOptions:[{label:"Tipo de comida ",subOptions:["Mediterranea","Japonesa","Mexicana","China","Turca"]},{label:"Precio",subOptions:["Menos de 15€ por persona.","Entre 15€ y 30€ por persona.","Más de 30€ por persona."]},{label:"Guía Michelin",subOptions:["Guía MICHELIN","3 estrellas MICHELIN","2 estrellas MICHELIN","1 estrella MICHELIN"]}]})}),i.jsx(B,{children:(null==a?void 0:a.count)>0?t.map(((n,a)=>{var s,d;return i.jsxs(H,{children:[i.jsx(G,{children:i.jsx(F,{to:n.id,children:i.jsx(D,{alt:n.name,src:null==(s=n.images[a])?void 0:s.url,loading:"lazy"})})}),i.jsxs(G,{children:[i.jsxs(V,{children:[i.jsxs(K,{children:["Top 1 ",i.jsx(ee,{children:"editor_choice"})]}),i.jsx(X,{children:"Michelin"})]}),i.jsx(V,{children:i.jsx(F,{to:n.id,children:i.jsx(W,{children:n.name})})}),i.jsx(V,{children:i.jsxs(Y,{children:[i.jsx(ee,{children:"kid_star"})," Puntuación (9,6)"]})}),i.jsx(V,{children:i.jsxs(Y,{children:[i.jsx(ee,{children:"location_on"}),null==(d=n.location)?void 0:d.address]})}),i.jsx(V,{children:i.jsxs(Y,{children:[i.jsx(ee,{children:"restaurant"}),n.type_food," . Precio medio: 20€"]})}),i.jsxs(Z,{children:[i.jsxs(Q,{children:[n.description," ",e&&n.description]}),i.jsx(oe,{onClick:e?o:r,children:e?"Ver menos":"Ver más"})]}),i.jsxs(J,{children:[i.jsxs(ne,{to:n.web,children:[i.jsx(ee,{children:"language"})," Web"]}),i.jsxs(ne,{to:n.web,children:[i.jsx(ee,{children:"menu_book"})," Menú"]}),i.jsxs(re,{href:`tel:${n.phone}`,children:[i.jsx(ee,{children:"call_quality"}),n.phone]})]})]})]},n.id)})):i.jsx(V,{children:i.jsx(Q,{children:"No hay restaurantes disponibles"})})})]})})}},Symbol.toStringTag,{value:"Module"})),Ee=n.div`
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
`,Re=n.div`
    display: flex;
    flex-direction: column;
`,Se=n.div`
    display: none;

    @media only screen and (${u}) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        grid-auto-rows: 210px;
    }
`,Te=n.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`,Le=n.div`
    padding: 2rem;
    background-color: whitesmoke;
    width: 100%;
`,Oe=n.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,Ie=n.div`
    display: flex;
    justify-content: space-around;
`,Ae=n.div`
    display: flex;
    flex-direction: row;
`,Pe=n.h3`
    font-family: 'Rokkitt', serif;
    font-size: 25px;
    font-weight: bold;
    @media only screen and (${h}) {
        font-size: 35px;
    }
`,qe=n.h3`
    font-family: 'Rokkitt', serif;
    font-size: 18px;
    font-weight: bold;
    @media only screen and (${h}) {
        font-size: 22px;
    }
`;n.p`
    font-family: 'Roboto';
    font-size: 16px;
`;const Be=n.div`
    font-family: 'Rokkitt', serif;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`,Fe=n.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`,He=n.button.attrs((e=>({$border:e.$border||"solid 1px black"})))`
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
`,Ne=n.span.attrs((e=>({$borderBottom:e.$borderBottom||"solid 1px black"})))`
    font-family: 'Roboto';

    border-bottom: ${e=>e.$borderBottom};
    line-height: 22px;
    display: none;

    @media only screen and (${h}) {
        display: block;
    }
`,Ge=n.div`
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
`,De=n.p`
    display: flex;
    align-items: center;

    column-gap: 1rem;
    border-bottom: none;
    padding: 10px 0px;
    @media only screen and (${h}) {
        border-bottom: 1px solid gray;
    }
`,Ve=n.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    color: white;
`,Ze=n.ul`
    list-style: none;
    display: flex;
`,Je=n(a)`
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
`,Ue=n.p`
    font-family: 'Roboto';
    font-size: 16px;
`,We=n.div`
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
`,Ke=n.div`
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
`,Qe=n.div`
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
`,Ye=n.div`
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
`,Xe=n(Ye)`
    grid-row: 4;
`,en=n(Ie)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${h}) {
        row-gap: 1rem;
    }
`,nn=n.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    @media only screen and (${h}) {
        row-gap: 3rem;
    }
`,rn=n.p`
    cursor: pointer;
   
    &:hover{
        text-decoration: line-through;
    }
`,on=n.span`
   font-weight: bold;
   padding-right: 2px;
`,an=s.lazy((()=>p((()=>Promise.resolve().then((()=>hn))),void 0))),sn=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const[e,n]=s.useState(!1),{restaurant:r}=_e((e=>e.restaurant));return r&&r.data&&0!==r.data.length?i.jsxs(i.Fragment,{children:[i.jsx(Le,{children:i.jsxs(Ie,{children:[i.jsxs(Ae,{children:[i.jsx(Pe,{children:"Casa Carmen"}),i.jsx(Oe,{children:"verified"})]}),i.jsxs(Be,{children:[i.jsxs(Fe,{onClick:async()=>{try{const e=window.location.href;await navigator.clipboard.writeText(e),n(!0),setTimeout((()=>n(!1)),2e3)}catch(e){}},children:[i.jsx(Oe,{color:"black",children:"ios_share"}),i.jsx(Ne,e?{children:"Enlace copiado"}:{children:"Compartir"})]}),i.jsxs(He,{$border:"solid 1px black",children:[i.jsx(Oe,{color:"black",children:"favorite"}),i.jsx(Ne,{$borderBottom:"none",children:"Guardar"})]})]})]})}),i.jsx(We,{children:r.count>0?r.data.map(((e,n)=>i.jsxs(l.Fragment,{children:[i.jsxs(Ee,{children:[i.jsx(Re,{children:i.jsx(Te,{src:e.images[0].url,alt:e.images[0].id},e.images[0].id)}),i.jsx(Se,{children:e.images.map((e=>i.jsx(Te,{src:e.url,alt:e.id},e.id)))}),i.jsxs(Ge,{children:[i.jsxs(De,{children:[i.jsx(Oe,{color:"black",children:"restaurant"}),e.type_food]}),i.jsxs(De,{children:[i.jsx(Oe,{color:"black",children:"map"}),"España , Madrid"]}),i.jsxs(De,{children:[i.jsx(Oe,{color:"black",children:"euro"}),"Precio medio 20 euros"]})]})]}),i.jsxs(Ke,{children:[i.jsx(Ve,{children:i.jsxs(Ze,{children:[i.jsx(Je,{to:"",children:"Horario"}),i.jsx(Je,{to:"",children:"Descripcion"}),i.jsx(Je,{to:"",children:"Contenido"})]})}),i.jsx(Ue,{children:e.description})]}),i.jsx(Qe,{children:i.jsx(an,{})}),i.jsxs(Ye,{children:[i.jsx(qe,{children:"Caracteristicas"}),i.jsxs(en,{children:[i.jsxs(Ge,{children:[i.jsx(Oe,{color:"black",children:"credit_card"}),"Aceptan tarjetas de credito"]}),i.jsxs(Ge,{children:[i.jsx(Oe,{color:"black",children:"check_circle"}),"Comidas, Cenas, Brunch y Bebidas"]}),i.jsxs(Ge,{children:[i.jsx(Oe,{color:"black",children:"chef_hat"}),"Tiene opciones veganas y celiacas"]})]})]}),i.jsxs(Xe,{children:[i.jsx(qe,{children:"Menu"}),i.jsxs(nn,{children:[i.jsxs(en,{children:[i.jsx(Ge,{children:i.jsxs(rn,{children:["Albondigas ",i.jsx(on,{children:"22$"})]})}),i.jsx(Ge,{children:i.jsxs(rn,{children:["Huevos Rotos",i.jsx(on,{children:"22$"})]})}),i.jsx(Ge,{children:i.jsxs(rn,{children:["Arroz tres delicias",i.jsx(on,{children:"22$"})]})})]}),i.jsxs(en,{children:[i.jsx(Ge,{children:i.jsxs(rn,{children:["Albondigas ",i.jsx(on,{children:"22$"})]})}),i.jsx(Ge,{children:i.jsxs(rn,{children:["Huevos Rotos ",i.jsx(on,{children:"22$"})]})}),i.jsx(Ge,{children:i.jsxs(rn,{children:["Arroz tres delicias ",i.jsx(on,{children:"22$"})]})})]}),i.jsxs(en,{children:[i.jsx(Ge,{children:i.jsxs(rn,{children:["Albondigas ",i.jsx(on,{children:"22$"})]})}),i.jsx(Ge,{children:i.jsxs(rn,{children:["Huevos Rotos ",i.jsx(on,{children:"22$"})]})}),i.jsx(Ge,{children:i.jsxs(rn,{children:["Arroz tres delicias",i.jsx(on,{children:"22$"})]})})]})]})]})]},n))):i.jsx(en,{children:i.jsx(Ge,{children:"No hay restaurantes"})})})]}):i.jsx(en,{children:i.jsx(Ge,{children:"No hay restaurantes"})})}},Symbol.toStringTag,{value:"Module"})),dn=n.div`
    width: 100%;
    padding: 12px;
    margin: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    background-color: white;
`,tn=n.h2`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
    @media only screen and (${h}) {
        font-size: 22px;
    }
`,ln=n.div`
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
`,cn=n.p`
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
`,pn=n.span`
    font-weight: bold;
`,xn=n.span`
    padding-left: 6px;
`,hn=Object.freeze(Object.defineProperty({__proto__:null,default:function(){return i.jsxs(dn,{children:[i.jsx(tn,{children:"Horario"}),i.jsx(ln,{children:i.jsxs(cn,{children:[i.jsx(pn,{children:"Lunes"}),i.jsx(xn,{children:"11:00pm - 12:00pm"})]})}),i.jsx(ln,{children:i.jsxs(cn,{children:[i.jsx(pn,{children:"Lunes"}),i.jsx(xn,{children:"11:00pm - 12:00pm"})]})}),i.jsx(ln,{children:i.jsxs(cn,{children:[i.jsx(pn,{children:"Lunes"}),i.jsx(xn,{children:"11:00pm - 12:00pm"})]})}),i.jsx(ln,{children:i.jsxs(cn,{children:[i.jsx(pn,{children:"Lunes"}),i.jsx(xn,{children:"11:00pm - 12:00pm"})]})}),i.jsx(ln,{children:i.jsxs(cn,{children:[i.jsx(pn,{children:"Lunes"}),i.jsx(xn,{children:"11:00pm - 12:00pm"})]})}),i.jsx(ln,{children:i.jsxs(cn,{children:[i.jsx(pn,{children:"Lunes"}),i.jsx(xn,{children:"11:00pm - 12:00pm"})]})})]})}},Symbol.toStringTag,{value:"Module"}));export{je as C,ae as F,he as N,E as P,p as _,Ce as a,sn as c,x as g};
