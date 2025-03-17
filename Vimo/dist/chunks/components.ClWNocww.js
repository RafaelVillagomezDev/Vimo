import{d as e,j as i,T as n,a as r,L as o,r as a}from"./vendor.uuDm3zIX.js";const s={},t=function(e,i,n){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));r=Promise.allSettled(i.map((e=>{if((e=function(e){return"/"+e}(e))in s)return;s[e]=!0;const i=e.endsWith(".css");if(document.querySelector(`link[href="${e}"]${i?'[rel="stylesheet"]':""}`))return;const r=document.createElement("link");return r.rel=i?"stylesheet":"modulepreload",i||(r.as="script"),r.crossOrigin="",r.href=e,n&&r.setAttribute("nonce",n),document.head.appendChild(r),i?new Promise(((i,n)=>{r.addEventListener("load",i),r.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function o(e){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=e,window.dispatchEvent(i),!i.defaultPrevented)throw e}return r.then((i=>{for(const e of i||[])"rejected"===e.status&&o(e.reason);return e().catch(o)}))},d="(min-width: 577px)",l="(min-width: 769px)",c="(min-width: 992px)",p="(min-width: 1200px)",m=e.div`
    width: 100%;
    padding: 2rem;
    @media only screen and (${d}) {
        padding: 3rem;
    }
`,x=e.h2`
    font-family: 'Rokkitt', serif;
    font-size: 5vw;
    font-weight: 500;
    color: black;
    padding-bottom: 2rem;
    text-align: center;
    @media only screen and (${d}) {
        text-align: start;
    }
`,u=e.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
`,h=e.figure``,f=e.figcaption`
    color: black;
    font-family: 'fangsong';
`,g=e.img`
    flex-shrink: 0;
    border-radius: 15px;
    height: 250px;
    @media only screen and (${d}) {
        border-radius: 0px;
    }
`;e.h2`
    color: black;
    font-family: 'Roboto';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-items: center;
    text-align: center;
    padding: 1rem;
`;const j=e.p`
    color: black;
    word-wrap: break-word;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    padding: 1rem;
    font-size: 16px;
    @media only screen and (${d}) {
        font-size: 20px;
    }
`,b=e.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 10px;
    color: black;
    @media only screen and (${d}) {
        color: black;
    }
`,y=e.q`
    font-weight: 600;
    font-style: oblique;
`,w=e.ul``,v=e.li``,k=e.span`
    display: inline-flex;
    column-gap: 12px;
    font-family: 'Rokkitt', serif;
    font-size: 25px;
`;function $(){return i.jsx(i.Fragment,{children:i.jsxs(m,{children:[i.jsx(x,{children:"Historia"}),i.jsxs(u,{children:[i.jsxs(h,{children:[i.jsx(g,{src:"/assets/alcazar_madrid.B5a2rc4K.jpg",alt:"Alcazar de Madrid",loading:"lazy"}),i.jsx(f,{children:"Alcazar de Madrid "})]}),i.jsxs(b,{children:[i.jsxs(j,{children:["En las orillas del Manzanares, donde el agua fluía generosa, los árabes erigieron en el año 865 una fortaleza a la que llamaron ","Mayrit",", que significa ","abundancia de ríos de agua",". Este nombre, tan evocador, reflejaba la esencia de aquel lugar, un oasis en la meseta castellana. Su primer escudo, con el lema",i.jsx(y,{cite:"https://caminandopormadrid.com/fui-sobre-agua-edificada-mis-muros-de",children:"Fui sobre agua edificada / Mis muros de fuego son / Esta es mi insignia y mi blasón"}),", era un canto a su origen acuático y a la fortaleza que la protegería a lo largo de los siglos. En 1083, la ciudad cambió de manos con la conquista de Alfonso VI, iniciando un nuevo capítulo en su milenaria historia"]}),i.jsx(j,{children:"En 1561, la historia de Madrid dio un giro trascendental. Felipe II, con su mirada puesta en el futuro, decidió trasladar la corte a esta ciudad, lejos de las antiguas capitales. La centralidad geográfica de Madrid y la menor presencia de poderes establecidos la convirtieron en el lienzo perfecto sobre el que construir una nueva corte. La predilección de su esposa, Isabel de Valois, por este modesto pueblo, fue la pincelada final que completó el cuadro. A partir de ese momento, Madrid se transformó en el epicentro de un imperio, un crisol de culturas y el escenario de grandes acontecimientos históricos"})]})]}),i.jsx(x,{children:"Simbolos"}),i.jsxs(u,{children:[i.jsxs(h,{children:[i.jsx(g,{src:"/assets/bandera_madrid.Beh6rZ3P.png",alt:"Bandera de Comunidad Madrid",loading:"lazy"}),i.jsx(f,{children:"Bandera Comunidad de Madrid "})]}),i.jsxs(b,{children:[i.jsx(j,{children:"La bandera de la Comunidad de Madrid es descrita como un símbolo de identidad regional, caracterizado por su color rojo carmesí y sus siete estrellas plateadas de cinco puntas, dispuestas en dos filas de cuatro y tres. El rojo carmesí hace alusión a la tradición histórica de Madrid como parte de Castilla, mientras que las estrellas representan la constelación de la Osa Mayor, símbolo del cielo nocturno visible en la región. Este diseño, simple pero significativo, busca reflejar tanto el legado cultural como la ubicación geográfica de la Comunidad."}),i.jsx(j,{children:"Las siete estrellas presentes en la bandera de la Comunidad de Madrid han dado lugar a múltiples interpretaciones a lo largo del tiempo. Su significado más aceptado las asocia con la constelación de la Osa Mayor, un referente astronómico muy conocido en el hemisferio norte. Esta constelación, visible claramente desde la Sierra de Guadarrama, no solo simboliza la conexión de Madrid con el cielo estrellado, sino que también evoca el vínculo de la región con su entorno natural y su herencia mitológica."})]})]}),i.jsx(x,{children:"Ubicación"}),i.jsxs(u,{children:[i.jsxs(h,{children:[i.jsx(g,{src:"/assets/mapa_madrid.wP0fYJAT.webp",alt:"Mapa Comunidad Madrid",loading:"lazy"}),i.jsx(f,{children:"Mapa Comunidad de Madrid "})]}),i.jsx(b,{children:i.jsxs(w,{children:[i.jsxs(v,{children:[i.jsxs(k,{children:[i.jsx(n,{})," Ubicación"]}),i.jsxs(j,{children:["Madrid se encuentra casi en el centro geográfico de la Península Ibérica, a una latitud de ","40º 25"," Norte, y una longitud de"," ","3º\n                                    42"," ","Oeste."]})]}),i.jsxs(v,{children:[i.jsxs(k,{children:[i.jsx(r,{})," Tiempo"]}),i.jsx(j,{children:"La temperatura media anual, en la sombra, es de 13 ºC. En las estaciones más frías, las temperaturas mínimas suelen caer por debajo de los 0 ºC, aunque en la ciudad en sí rara vez nieva. Durante los meses de verano la temperatura puede llegar fácilmente a los 40 ºC."})]})]})})]})]})})}const z=e.div`
    height: 250px;
    background-color: hsl(0, 0%, 0%);
    padding: 2rem;
    @media only screen and (${d}) {
        height: 200px;
    }
`,M=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    row-gap: 2rem;
    column-gap: 2rem;
`,C=e.div`
    display: flex;
    justify-content: space-evenly;
    column-gap: 2rem;
    align-items: center;
`,_=e.h1`
    font-family: 'Rokkitt', serif;
    font-family: 24px;
    font-weight: 500;
    color: white;
    @media only screen and (${d}) {
        font-family: 35px;
    }
`;e.img`
    width: ${({sizes:e})=>e||"40px"};
    height: ${({sizes:e})=>e||"40px"};
`;const R=e(e.span`
    font-family: 'Material Symbols Outlined';
    font-size: 22px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`)`
    color: white;
`,E=e.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    @media only screen and (${d}) {
    }
`,L=e(o)`
    color: #fff;
    font-size: 12px;
    @media only screen and (${d}) {
        font-size: 16px;
    }
`,S=e.div`
    margin: 2rem;

    @media only screen and (${d}) {
        margin: 3rem;
    }
`,q=e.div`
    display: grid;
    @media only screen and (${d}) {
        display: grid;
        grid-template-columns: 275px auto;
        gap: 2rem;
        width: 100%;
    }
`,I=e.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`,P=e.div`
    border-radius: 20px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media only screen and (${p}) {
        flex-direction: row;
        box-shadow: none;
    }
`,O=e.div`
    display: none;
    @media only screen and (${d}) {
        display: block;
    }
`,T=e.div`
    width: 100%;
    padding: 10px;
    display: flex;
    align-self: self-start;
    flex-direction: column;
    gap: 0.25rem;
    @media only screen and (${p}) {
        width: 50%;
    }
`,B=e.img.attrs((({src:e})=>({src:e,alt:"Imagen card "})))`
    width: fit-content;
    border-radius: 15px;
`,A=e.div`
    display: flex;
    align-items: baseline;
    padding: 3px;
    @media only screen and (${d}) {
        padding: 0.1rem;
    }
`,D=e(A)`
    flex-direction: column;
    padding: 10px 0px;
`,F=e(A)`
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (${d}) {
        padding: 0.1rem;
    }
`,G=e.h3`
    font-family: 'Roboto', serif;
    font-size: 16px;
    font-weight: bold;
`,H=e.h3`
    font-family: 'Roboto', serif;
    font-size: 22px;
    font-weight: bold;
    padding: 10px 0px;
`,V=e.h3`
    font-weight: 400;
    font-family: 'Roboto', serif;
    font-size: 20px;
    font-weight: bold;
`,N=e.p`
    font-family: 'Roboto', serif;
    font-size: 16px;
    padding-bottom: 6px;
    display: flex;
    align-items: baseline;
`,Z=e(N)`
    display: flex;
    align-items: end;
    font-size: 16px;
`,U=e.button`
    padding: 6px 6px;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    font-family: 'Roboto', serif;
    font-size: 18px;
`,W=e.span`
    font-family: 'Material Symbols Outlined';
    font-size: 16px;
    padding-right: 10px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,J=e(o)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 400;
    gap: 0.25rem;
`,K=e(J)`
    color: white;
    font-size: 16px;
    padding: 0rem;
`,Q=e.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    gap: 0.25rem;
`,X=e.button`
    font-family: 'Roboto', serif;
    font-size: 12px;
    padding: 12px 6px;
    border: none;
    border-radius: 10px;
    background-color: #ff3d00;
    color: white;
    font-weight: 400;
    cursor: pointer;
`;function Y(){return i.jsx(z,{children:i.jsxs(M,{children:[i.jsx(_,{children:"ZappyMap"}),i.jsxs(C,{children:[i.jsxs(E,{children:[i.jsx(L,{to:"./legales",children:"¿Quienes somos?"}),i.jsx(L,{to:"./legales",children:"Información de contacto"})]}),i.jsxs(E,{children:[i.jsx(L,{to:"./legales",children:"Preguntas frecuentes"}),i.jsx(L,{to:"./legales",children:"Condiciones legales"})]}),i.jsxs(E,{children:[i.jsxs(K,{to:"https://yandrydev.es/",children:[i.jsx(R,{children:"rss_feed"}),"Redes sociales"]}),i.jsxs(K,{to:"https://yandrydev.es/",children:[i.jsx(R,{children:"copyright"}),"ZappyMap Inc"]})]}),i.jsx(E,{})]})]})})}const ee="/assets/Portada_restaurant%20_1200.DiXV_9PG.jpg",ie=e.nav`
    background-color: black;
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    width: -webkit-fill-available;
`,ne=e.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,re=e(ne)`
    display: none;
    @media only screen and (${d}) {
        display: flex;
    }
`,oe=e(ne)`
    display: flex;
`,ae=e.h1`
    font-family: 'Rokkitt', serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
    @media only screen and (${d}) {
        font-size: 35px;
    }
`,se=e.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`,te=e(o)`
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    font-weight: bold;
    &:hover {
        border-bottom: 5px solid black;
        font-size: 25px;
    }

    &.active {
        background-color: #6200ea; /* Color de fondo para el enlace activo */
        color: #fff;
    }
`;function de(){return i.jsx(i.Fragment,{children:i.jsxs(ie,{children:[i.jsx(oe,{children:i.jsx(ae,{children:"ZappyMap"})}),i.jsx(re,{children:i.jsxs(se,{children:[i.jsx(te,{to:"/history",children:"Historia"}),i.jsx(te,{to:"/restaurants",children:"Restaurantes"}),i.jsx(te,{to:"/destinations",children:"Discotecas"}),i.jsx(te,{to:"sites",children:"Sitios"}),i.jsx(te,{to:"destinations",children:"Transporte"})]})})]})})}const le=e.div`
    width: 100%;
    height: 450px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media only screen and (${d}) {
        height: 750px;
    }
`,ce=e.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,pe=e.h1`
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
`,me=e.h1`
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
    @media only screen and (${d}) {
        top: 26rem;
    }
`,xe=Object.freeze(Object.defineProperty({__proto__:null,default:function({image576:e,image768:n,image1200:r,altText:o,subtitle:a}){return i.jsxs(i.Fragment,{children:[i.jsx(de,{}),i.jsxs(le,{children:[i.jsx(ce,{srcSet:`\n                        ${e} 576w,\n                        ${n} 768w,\n                        ${r} 1200w,\n                    `,sizes:"\n                        (max-width: 576px) 100vw,\n                        (max-width: 768px) 80vw,\n                        (max-width: 1200px) 60vw,\n                    ",alt:o,loading:"lazy"}),i.jsx(pe,{children:"MADRID"}),i.jsx(me,{children:a})]})]})}},Symbol.toStringTag,{value:"Module"})),ue=e.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    max-height: 900px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,he=e.ul`
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
`,fe=e.li`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.open?"#fff":"inherit"};
    transition: background-color 0.3s ease-in-out;
`,ge=e.ul`
    list-style: none;
    max-height: ${e=>e.open?"300px":"0"};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    background-color: #fff;
    padding-left: 10px;
    margin: 0;
`,je=e.li`
    padding: 10px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        transform: scale(1.05);
    }
`,be=e.input`
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
`,ye=e.span`
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.open?"rotate(180deg)":"rotate(0)"};
`;function we({menuOptions:e}){const[n,r]=a.useState(0);return i.jsx(ue,{children:i.jsx(he,{children:e.map(((e,o)=>i.jsxs("ul",{children:[i.jsxs(fe,{onClick:()=>(e=>{r(n===e?-1:e)})(o),open:n===o,children:[i.jsx(G,{children:e.label}),i.jsx(ye,{open:n===o,children:"▼"})]}),i.jsx(ge,{open:n===o,children:e.subOptions.map(((e,n)=>i.jsxs(je,{children:[i.jsx(be,{type:"checkbox"}),e]},n)))})]},o)))})})}const ve=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const[e,n]=a.useState(!1),r=()=>n(!0),o=()=>n(!1);return i.jsx(S,{children:i.jsxs(q,{children:[i.jsx(O,{children:i.jsx(we,{menuOptions:[{label:"Tipo de comida ",subOptions:["Mediterranea","Japonesa","Mexicana","China","Turca"]},{label:"Precio",subOptions:["Menos de 15€ por persona.","Entre 15€ y 30€ por persona.","Más de 30€ por persona."]},{label:"Guía Michelin",subOptions:["Guía MICHELIN","3 estrellas MICHELIN","2 estrellas MICHELIN","1 estrella MICHELIN"]}]})}),i.jsxs(I,{children:[i.jsxs(P,{children:[i.jsx(T,{children:i.jsx(B,{src:ee})}),i.jsxs(T,{children:[i.jsxs(A,{children:[i.jsxs(V,{children:["Top 1 ",i.jsx(W,{children:"editor_choice"})]}),i.jsx(U,{children:"Michelin"})]}),i.jsx(A,{children:i.jsx(H,{children:"1. Restaurante Carmen"})}),i.jsx(A,{children:i.jsxs(Z,{children:[i.jsx(W,{children:"kid_star"})," Puntuación (9,6)"]})}),i.jsx(A,{children:i.jsxs(Z,{children:[i.jsx(W,{children:"location_on"}),"C. Santa Barbara, 6, 28609, Madrid"]})}),i.jsx(A,{children:i.jsxs(Z,{children:[i.jsx(W,{children:"restaurant"}),"Mediterráneo . Precio medio: 20€"]})}),i.jsxs(D,{children:[i.jsxs(N,{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit."," ",e&&"Consequuntur ipsa corrupti quisquam aperiam amet adipisci, impedit similique maiores nam numquam, commodi ab, odit rem eum saepe ut sed. Deserunt, minus. "]}),i.jsx(X,{onClick:e?o:r,children:e?"Ver menos":"Ver más"})]}),i.jsxs(F,{children:[i.jsxs(J,{to:"https://losmontesdegalicia.es/menu-select/",children:[i.jsx(W,{children:"language"}),"Web"]}),i.jsxs(J,{to:"https://losmontesdegalicia.es/menu-select/",children:[i.jsx(W,{children:"menu_book"}),"Menu"]}),i.jsxs(Q,{href:"tel:618152241",children:[i.jsx(W,{children:"call_quality"}),"618152241"]})]})]})]}),i.jsxs(P,{children:[i.jsx(T,{children:i.jsx(B,{src:ee})}),i.jsxs(T,{children:[i.jsxs(A,{children:[i.jsxs(V,{children:["Top 1 ",i.jsx(W,{children:"editor_choice"})]}),i.jsx(U,{children:"Michelin"})]}),i.jsx(A,{children:i.jsx(H,{children:"1. Restaurante Carmen"})}),i.jsx(A,{children:i.jsxs(Z,{children:[i.jsx(W,{children:"kid_star"})," Puntuación (9,6)"]})}),i.jsx(A,{children:i.jsxs(Z,{children:[i.jsx(W,{children:"location_on"}),"C. Santa Barbara, 6, 28609, Madrid"]})}),i.jsx(A,{children:i.jsxs(Z,{children:[i.jsx(W,{children:"restaurant"}),"Mediterráneo . Precio medio: 20€"]})}),i.jsxs(D,{children:[i.jsxs(N,{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit."," ",e&&"Consequuntur ipsa corrupti quisquam aperiam amet adipisci, impedit similique maiores nam numquam, commodi ab, odit rem eum saepe ut sed. Deserunt, minus. "]}),i.jsx(X,{onClick:e?o:r,children:e?"Ver menos":"Ver más"})]}),i.jsxs(F,{children:[i.jsxs(J,{to:"https://losmontesdegalicia.es/menu-select/",children:[i.jsx(W,{children:"language"}),"Web"]}),i.jsxs(J,{to:"https://losmontesdegalicia.es/menu-select/",children:[i.jsx(W,{children:"menu_book"}),"Menu"]}),i.jsxs(Q,{href:"tel:618152241",children:[i.jsx(W,{children:"call_quality"}),"618152241"]})]})]})]})]})]})})}},Symbol.toStringTag,{value:"Module"})),ke=e.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-column: 2 / 7;
    grid-row: 1;

    @media only screen and (${l}) {
        grid-column: 2 / 7;
    }
    @media only screen and (${c}) {
        grid-template-columns: auto auto;
    }
`,$e=e.div`
    display: flex;
    flex-direction: column;
`,ze=e.div`
    display: none;

    @media only screen and (${d}) {
        display: none;
    }
    @media only screen and (${c}) {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 1rem;
        grid-template-rows: repeat(3, 175px);
    }
`,Me=e.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`,Ce=e.div`
    padding: 2rem;
    background-color: whitesmoke;
    width: 100%;
`,_e=e.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,Re=e.div`
    display: flex;
    justify-content: space-around;
`,Ee=e.div`
    display: flex;
    flex-direction: row;
`,Le=e.h3`
    font-family: 'Rokkitt', serif;
    font-size: 25px;
    font-weight: bold;
    @media only screen and (${d}) {
        font-size: 35px;
    }
`,Se=e.h3`
    font-family: 'Rokkitt', serif;
    font-size: 16px;
    font-weight: bold;
    @media only screen and (${d}) {
        font-size: 22px;
    }
`;e.p`
    font-family: 'Roboto';
    font-size: 16px;
`;const qe=e.div`
    font-family: 'Rokkitt', serif;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`,Ie=e.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`,Pe=e.button.attrs((e=>({$border:e.$border||"solid 1px black"})))`
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
    @media only screen and (${d}) {
        border: ${e=>e.$border};
    }
`,Oe=e.span.attrs((e=>({$borderBottom:e.$borderBottom||"solid 1px black"})))`
    font-family: 'Roboto';

    border-bottom: ${e=>e.$borderBottom};
    line-height: 22px;
    display: none;

    @media only screen and (${d}) {
        display: block;
    }
`,Te=e.div`
    font-family: 'Roboto', serif;
    font-size: 16px;
    padding: 6px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (${d}) {
        flex-direction: row;
    }
`,Be=e.p`
    display: flex;
    align-items: center;

    column-gap: 1rem;
    border-bottom: none;
    padding: 10px 0px;
    @media only screen and (${d}) {
        border-bottom: 1px solid gray;
    }
`,Ae=e.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    color: white;
`,De=e.ul`
    list-style: none;
    display: flex;
`,Fe=e(o)`
    font-family: 'Rokkitt', serif;
    font-size: 16px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    line-height: 10px;
    padding: 0.5rem 1rem;
    border-right: solid 2px gray;

    @media only screen and (${d}) {
        font-size: 22px;
    }
`,Ge=e.p`
    font-family: 'Roboto';
    font-size: 16px;
`,He=e.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    grid-gap: 2rem;

    @media only screen and (${d}) {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: minmax(100px, auto);
    }
`,Ve=e.div`
    display: grid;
    gap: 16px;
    width: 100%;

    grid-column: 2 / 5;
    grid-row: 2;
    @media only screen and (${d}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${c}) {
        grid-column: 2 / 5;
    }
`,Ne=e.div`
    display: grid;
    gap: 16px;
    grid-column: 5 / 7;
    grid-row: 2;
    @media only screen and (${d}) {
        grid-column: 3 / 7;
    }
    @media only screen and (${c}) {
        grid-column: 5 / 7;
    }
`,Ze=e.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-area: content;
    grid-column: 2 / 5;
    grid-row: 3;
    @media only screen and (${d}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${l}) {
        grid-column: 2 / 5;
    }
`,Ue=e(Re)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${d}) {
        row-gap: 1rem;
    }
`,We=a.lazy((()=>t((()=>Promise.resolve().then((()=>ni))),void 0))),Je=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const[e,n]=a.useState(!1),r=[ee],o=[ee,ee,ee];return i.jsxs(i.Fragment,{children:[i.jsx(Ce,{children:i.jsxs(Re,{children:[i.jsxs(Ee,{children:[i.jsx(Le,{children:"Casa Carmen"}),i.jsx(_e,{children:"verified"})]}),i.jsxs(qe,{children:[i.jsxs(Ie,{onClick:async()=>{try{const e=window.location.href;await navigator.clipboard.writeText(e),n(!0),setTimeout((()=>n(!1)),2e3)}catch(e){}},children:[i.jsx(_e,{color:"black",children:"ios_share"}),i.jsx(Oe,e?{children:"Enlace copiado"}:{children:"Compartir"})]}),i.jsxs(Pe,{$border:"solid 1px black",children:[i.jsx(_e,{color:"black",children:"favorite"}),i.jsx(Oe,{$borderBottom:"none",children:"Guardar"})]})]})]})}),i.jsxs(He,{children:[i.jsxs(ke,{children:[i.jsx($e,{children:r.map(((e,n)=>i.jsx(Me,{src:e,alt:`Imagen izquierda ${n+1}`},n)))}),i.jsx(ze,{children:o.map(((e,n)=>i.jsx(Me,{src:e,alt:`Imagen derecha ${n+1}`},n)))}),i.jsxs(Te,{children:[i.jsxs(Be,{children:[i.jsx(_e,{color:"black",children:"restaurant"}),"Internacional , Mediterranea"]}),i.jsxs(Be,{children:[i.jsx(_e,{color:"black",children:"map"}),"España , Madrid"]}),i.jsxs(Be,{children:[i.jsx(_e,{color:"black",children:"euro"}),"Precio medio 20 euros"]})]})]}),i.jsxs(Ve,{children:[i.jsx(Ae,{children:i.jsxs(De,{children:[i.jsx(Fe,{to:"",children:"Horario"}),i.jsx(Fe,{to:"",children:"Descripcion"}),i.jsx(Fe,{to:"",children:"Contenido"})]})}),i.jsx(Ge,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores corrupti omnis, cupiditate officiis vitae autem culpa praesentium incidunt eligendi nostrum doloribus, tenetur at ad. Expedita error repudiandae hic iste laudantium."}),i.jsx(Ge,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores corrupti omnis, cupiditate officiis vitae autem culpa praesentium incidunt eligendi nostrum doloribus, tenetur at ad. Expedita error repudiandae hic iste laudantium."}),i.jsx(Ge,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores corrupti omnis, cupiditate officiis vitae autem culpa praesentium incidunt eligendi nostrum doloribus, tenetur at ad. Expedita error repudiandae hic iste laudantium."})]}),i.jsx(Ne,{children:i.jsx(We,{})}),i.jsxs(Ze,{children:[i.jsx(Se,{children:"Caracteristicas"}),i.jsxs(Ue,{children:[i.jsxs(Te,{children:[i.jsx(_e,{color:"black",children:"credit_card"}),"Aceptan tarjetas de credito"]}),i.jsxs(Te,{children:[i.jsx(_e,{color:"black",children:"check_circle"}),"Comidas, Cenas, Brunch y Bebidas"]}),i.jsxs(Te,{children:[i.jsx(_e,{color:"black",children:"chef_hat"}),"Tiene opciones veganas y celiacas"]})]})]})]})]})}},Symbol.toStringTag,{value:"Module"})),Ke=e.div`
    width: 100%;
    padding: 12px;
    margin: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    background-color: white;
`,Qe=e.h2`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
    @media only screen and (${d}) {
        font-size: 22px;
    }
`,Xe=e.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 8px;
    margin-bottom: 8px;
    column-gap: 1rem;

    text-align: center;
    @media only screen and (${d}) {
        flex-direction: row;
        row-gap: 1rem;
    }
`,Ye=e.p`
    font-family: 'Roboto', serif;
    font-size: 16px;
    display: flex;

    flex-direction: row;
    @media only screen and (${d}) {
        flex-direction: column;
    }

    @media only screen and (${c}) {
        flex-direction: row;
    }
`,ei=e.span`
    font-weight: bold;
`,ii=e.span`
    padding-left: 6px;
`,ni=Object.freeze(Object.defineProperty({__proto__:null,default:function(){return i.jsxs(Ke,{children:[i.jsx(Qe,{children:"Horario"}),i.jsx(Xe,{children:i.jsxs(Ye,{children:[i.jsx(ei,{children:"Lunes"}),i.jsx(ii,{children:"11:00pm - 12:00pm"})]})}),i.jsx(Xe,{children:i.jsxs(Ye,{children:[i.jsx(ei,{children:"Lunes"}),i.jsx(ii,{children:"11:00pm - 12:00pm"})]})}),i.jsx(Xe,{children:i.jsxs(Ye,{children:[i.jsx(ei,{children:"Lunes"}),i.jsx(ii,{children:"11:00pm - 12:00pm"})]})}),i.jsx(Xe,{children:i.jsxs(Ye,{children:[i.jsx(ei,{children:"Lunes"}),i.jsx(ii,{children:"11:00pm - 12:00pm"})]})}),i.jsx(Xe,{children:i.jsxs(Ye,{children:[i.jsx(ei,{children:"Lunes"}),i.jsx(ii,{children:"11:00pm - 12:00pm"})]})}),i.jsx(Xe,{children:i.jsxs(Ye,{children:[i.jsx(ei,{children:"Lunes"}),i.jsx(ii,{children:"11:00pm - 12:00pm"})]})})]})}},Symbol.toStringTag,{value:"Module"}));export{xe as C,Y as F,de as N,$ as P,t as _,ee as a,ve as b,Je as c};
