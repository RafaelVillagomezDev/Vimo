import{j as e,T as n,a as i,L as r,r as a,u as o,b as s,c as d,R as l}from"./react-vendor.DJPDHR9T.js";import{c as t,a as c,d as p}from"./vendor.BtA1AlKs.js";const x={},h=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(null==i?void 0:i.nonce)||(null==i?void 0:i.getAttribute("nonce"));r=e(n.map(e=>{if((e=function(e){return"/"+e}(e))in x)return;x[e]=!0;const n=e.endsWith(".css");if(document.querySelector(`link[href="${e}"]${n?'[rel="stylesheet"]':""}`))return;const i=document.createElement("link");return i.rel=n?"stylesheet":"modulepreload",n||(i.as="script"),i.crossOrigin="",i.href=e,a&&i.setAttribute("nonce",a),document.head.appendChild(i),n?new Promise((n,r)=>{i.addEventListener("load",n),i.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function a(e){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e}return r.then(n=>{for(const e of n||[])"rejected"===e.status&&a(e.reason);return e().catch(a)})},m=t("restaurant/fetchRestaurant",async()=>(async({api_url:e,method:n="GET",body:i,headers:r={},token:a})=>{const o={"Content-Type":"application/json",...a?{Authorization:`Bearer ${a}`}:{},...r};try{const r=await fetch(e,{method:n,headers:o,body:"GET"!==n&&i?JSON.stringify(i):void 0});if(!r.ok)throw new Error(`Error ${r.status}: ${r.statusText}`);return{data:await r.json(),error:null}}catch(s){return s instanceof Error?{data:null,error:s.message||"Error desconocido"}:{data:null,error:"Error desconocido"}}})({api_url:"http://localhost:3000/api/v1/restaurant",method:"GET"})),u={restaurant:{code:"",count:0,data:[],message:""},status:"idle",loading:!1},f=c({name:"restaurant",initialState:u,reducers:{},extraReducers:e=>{e.addCase(m.pending,e=>{e.status="loading",e.loading=!1}),e.addCase(m.fulfilled,(e,n)=>{e.status="success",e.loading=!0,e.restaurant=n.payload.data}),e.addCase(m.rejected,e=>{e.status="failed",e.loading=!1})},selectors:{selectRestaurantById:(e,n)=>e.restaurant.data.find(e=>e.id===n)}}),{selectRestaurantById:g}=f.selectors,j=f.reducer,y="(min-width: 577px)",b="(min-width: 769px)",w="(min-width: 992px)",v="(min-width: 1200px)",k=p.div`
    width: 100%;
    padding: 2rem;
    @media only screen and (${y}) {
        padding: 3rem;
    }
`,$=p.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 5vw;
    font-weight: 500;
    color: black;
    padding-bottom: 2rem;
    text-align: center;
    @media only screen and (${y}) {
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
    @media only screen and (${y}) {
        border-radius: 0px;
    }
`;p.h2`
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-items: center;
    text-align: center;
    padding: 1rem;
`;const P=p.p`
    color: black;
    word-wrap: break-word;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    padding: 1rem;
    font-size: 16px;
    @media only screen and (${y}) {
        font-size: 20px;
    }
`,E=p.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 10px;
    color: black;
    @media only screen and (${y}) {
        color: black;
    }
`,I=p.q`
    font-weight: 600;
    font-style: oblique;
`,S=p.ul``,L=p.li``,T=p.span`
    display: inline-flex;
    column-gap: 12px;
    font-family: 'Rokkitt', serif;
    font-size: 25px;
`;function O(){return e.jsx(e.Fragment,{children:e.jsxs(k,{children:[e.jsx($,{children:"Historia"}),e.jsxs(z,{children:[e.jsxs(M,{children:[e.jsx(C,{src:"/assets/alcazar_madrid.B5a2rc4K.jpg",alt:"Alcazar de Madrid",loading:"lazy"}),e.jsx(_,{children:"Alcazar de Madrid "})]}),e.jsxs(E,{children:[e.jsxs(P,{children:["En las orillas del Manzanares, donde el agua fluía generosa, los árabes erigieron en el año 865 una fortaleza a la que llamaron ","Mayrit",", que significa ","abundancia de ríos de agua",". Este nombre, tan evocador, reflejaba la esencia de aquel lugar, un oasis en la meseta castellana. Su primer escudo, con el lema",e.jsx(I,{cite:"https://caminandopormadrid.com/fui-sobre-agua-edificada-mis-muros-de",children:"Fui sobre agua edificada / Mis muros de fuego son / Esta es mi insignia y mi blasón"}),", era un canto a su origen acuático y a la fortaleza que la protegería a lo largo de los siglos. En 1083, la ciudad cambió de manos con la conquista de Alfonso VI, iniciando un nuevo capítulo en su milenaria historia"]}),e.jsx(P,{children:"En 1561, la historia de Madrid dio un giro trascendental. Felipe II, con su mirada puesta en el futuro, decidió trasladar la corte a esta ciudad, lejos de las antiguas capitales. La centralidad geográfica de Madrid y la menor presencia de poderes establecidos la convirtieron en el lienzo perfecto sobre el que construir una nueva corte. La predilección de su esposa, Isabel de Valois, por este modesto pueblo, fue la pincelada final que completó el cuadro. A partir de ese momento, Madrid se transformó en el epicentro de un imperio, un crisol de culturas y el escenario de grandes acontecimientos históricos"})]})]}),e.jsx($,{children:"Simbolos"}),e.jsxs(z,{children:[e.jsxs(M,{children:[e.jsx(C,{src:"/assets/bandera_madrid.Beh6rZ3P.png",alt:"Bandera de Comunidad Madrid",loading:"lazy"}),e.jsx(_,{children:"Bandera Comunidad de Madrid "})]}),e.jsxs(E,{children:[e.jsx(P,{children:"La bandera de la Comunidad de Madrid es descrita como un símbolo de identidad regional, caracterizado por su color rojo carmesí y sus siete estrellas plateadas de cinco puntas, dispuestas en dos filas de cuatro y tres. El rojo carmesí hace alusión a la tradición histórica de Madrid como parte de Castilla, mientras que las estrellas representan la constelación de la Osa Mayor, símbolo del cielo nocturno visible en la región. Este diseño, simple pero significativo, busca reflejar tanto el legado cultural como la ubicación geográfica de la Comunidad."}),e.jsx(P,{children:"Las siete estrellas presentes en la bandera de la Comunidad de Madrid han dado lugar a múltiples interpretaciones a lo largo del tiempo. Su significado más aceptado las asocia con la constelación de la Osa Mayor, un referente astronómico muy conocido en el hemisferio norte. Esta constelación, visible claramente desde la Sierra de Guadarrama, no solo simboliza la conexión de Madrid con el cielo estrellado, sino que también evoca el vínculo de la región con su entorno natural y su herencia mitológica."})]})]}),e.jsx($,{children:"Ubicación"}),e.jsxs(z,{children:[e.jsxs(M,{children:[e.jsx(C,{src:"/assets/mapa_madrid.wP0fYJAT.webp",alt:"Mapa Comunidad Madrid",loading:"lazy"}),e.jsx(_,{children:"Mapa Comunidad de Madrid "})]}),e.jsx(E,{children:e.jsxs(S,{children:[e.jsxs(L,{children:[e.jsxs(T,{children:[e.jsx(n,{})," Ubicación"]}),e.jsxs(P,{children:["Madrid se encuentra casi en el centro geográfico de la Península Ibérica, a una latitud de ","40º 25"," Norte, y una longitud de"," ","3º\n                                    42"," ","Oeste."]})]}),e.jsxs(L,{children:[e.jsxs(T,{children:[e.jsx(i,{})," Tiempo"]}),e.jsx(P,{children:"La temperatura media anual, en la sombra, es de 13 ºC. En las estaciones más frías, las temperaturas mínimas suelen caer por debajo de los 0 ºC, aunque en la ciudad en sí rara vez nieva. Durante los meses de verano la temperatura puede llegar fácilmente a los 40 ºC."})]})]})})]})]})})}const A=p.div`
    height: 250px;
    background-color: hsl(0, 0%, 0%);
    padding: 2rem;
    @media only screen and (${y}) {
        height: 200px;
    }
`,R=p.div`
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
    font-family: 'Poppins', sans-serif;
    font-family: 24px;
    font-weight: 500;
    color: white;
    @media only screen and (${y}) {
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
`,G=p.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    @media only screen and (${y}) {
    }
`,H=p(r)`
    color: #fff;
    font-size: 12px;
    @media only screen and (${y}) {
        font-size: 16px;
    }
`,N=p.div`
    margin: 2rem;

    @media only screen and (${y}) {
        margin: 3rem;
    }
`,D=p.div`
    display: grid;
    @media only screen and (${y}) {
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
    @media only screen and (${y}) {
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
    @media only screen and (${y}) {
        padding: 0.1rem;
    }
`,Y=p(Q)`
    flex-direction: column;
    padding: 10px 0px;
`,X=p(Q)`
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (${y}) {
        padding: 0.1rem;
    }
`,ee=p.h3`
    font-family:  'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
`,ne=p.h3`
    font-family:  'Poppins', sans-serif;
    font-size: 22px;
    font-weight: bold;
    padding: 10px 0px;
`,ie=p.h3`
    font-family:  'Poppins', sans-serif;
    font-weight: 400;
    font-family: 
    font-size: 20px;
    font-weight: bold;
`,re=p.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    padding-bottom: 6px;
    display: flex;
    align-items: baseline;
`,ae=p(re)`
    display: flex;
    align-items: end;
    font-size: 16px;
`,oe=p.button`
    padding: 6px 6px;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
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
`,le=p(de)`
    color: white;
    font-size: 16px;
    padding: 0rem;
`,te=p.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    gap: 0.25rem;
`,ce=p.button`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    padding: 12px 6px;
    border: none;
    border-radius: 10px;
    background-color: #ff3d00;
    color: white;
    font-weight: 400;
    cursor: pointer;
`;function pe(){return e.jsx(A,{children:e.jsxs(R,{children:[e.jsx(q,{children:"ZappyMap"}),e.jsxs(B,{children:[e.jsxs(G,{children:[e.jsx(H,{to:"./legales",children:"¿Quienes somos?"}),e.jsx(H,{to:"./legales",children:"Información de contacto"})]}),e.jsxs(G,{children:[e.jsx(H,{to:"./legales",children:"Preguntas frecuentes"}),e.jsx(H,{to:"./legales",children:"Condiciones legales"})]}),e.jsxs(G,{children:[e.jsxs(le,{to:"https://yandrydev.es/",children:[e.jsx(F,{children:"rss_feed"}),"Redes sociales"]}),e.jsxs(le,{to:"https://yandrydev.es/",children:[e.jsx(F,{children:"copyright"}),"ZappyMap Inc"]})]}),e.jsx(G,{})]})]})})}const xe="/assets/hands_map.B9zuCnS3.png",he=p.nav`
    background-color: black;
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    width: -webkit-fill-available;
`,me=p.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,ue=p(me)`
    display: none;
    @media only screen and (${y}) {
        display: flex;
    }
`,fe=p(me)`
    display: flex;
`,ge=p.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
    @media only screen and (${y}) {
        font-size: 35px;
    }
`,je=p.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`,ye=p(r)`
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
`;function be(){return e.jsx(e.Fragment,{children:e.jsxs(he,{children:[e.jsx(fe,{children:e.jsx(ge,{children:"ZappyMap"})}),e.jsx(ue,{children:e.jsxs(je,{children:[e.jsx(ye,{to:"/history",children:"Historia"}),e.jsx(ye,{to:"/restaurants",children:"Restaurantes"}),e.jsx(ye,{to:"/destinations",children:"Discotecas"}),e.jsx(ye,{to:"sites",children:"Sitios"}),e.jsx(ye,{to:"destinations",children:"Transporte"})]})})]})})}const we=p.div`
    width: 100%;
    max-width: 500px;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center; 
    flex-direction: row;
    border-radius: 12px; 
    overflow: hidden; 
    

`,ve=p.input`
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem; 
    border: none;
    outline: none;
    background-color: white;
    flex-grow: 1;
`,ke=p.button`
    
    display: flex; 
    align-items: center; 
    justify-content: center; 
    width: 80px; 
    height: 100%; 
    border: none;
    outline: none;
    background-color: black;
    color: white;
    font-family: 'Poppins', sans-serif; 
`,$e=p.span`
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
   
    @media only screen and (${y}) {
        font-size: 35px;
    }
`;function ze(){return e.jsx(e.Fragment,{children:e.jsxs(we,{children:[e.jsx($e,{children:"map"}),e.jsx(ve,{placeholder:"Restaurante,Sitio,Transporte..",id:"seeker"}),e.jsx(ke,{children:"Buscar"})]})})}const Me=p.div`
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`,_e=p.div`
    /* Dimensiones y espacio */
    width: -webkit-fill-available; 
    height: 100%;

    max-height: 600px;
    margin: 4rem;
    padding: 2rem;
    border-radius: 12px;
    object-fit: cover; /* No tiene efecto directo en un <div>, se mantiene por si se usa en otro contexto */

    /* Diseño visual y Flexbox */
    background-color: #ff3d00;
    display: flex;
    justify-content: center;
    flex-direction: column;

    /* Imagen de Fondo */
    background-image: url(${xe}); 
    background-position: right center; 
    background-repeat: no-repeat; 
    background-size: contain; 
`;p.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 4vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: white;
    flex-direction: column;
    justify-content: center;
    
`;const Ce=p.p`
    font-size: 30px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    line-height: normal;
    word-spacing: 3px;
    padding-bottom:2rem;
    color: white;

`,Pe=Object.freeze(Object.defineProperty({__proto__:null,default:function({}){return e.jsxs(e.Fragment,{children:[e.jsx(be,{}),e.jsx(Me,{children:e.jsxs(_e,{children:[e.jsx(Ce,{children:"Planea y reserva en cualquiera de nuestras ilimitadas opciones"}),e.jsx(ze,{})]})})]})}},Symbol.toStringTag,{value:"Module"})),Ee=p.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    max-height: 900px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,Ie=p.ul`
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
`,Se=p.li`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.open?"#fff":"inherit"};
    transition: background-color 0.3s ease-in-out;
`,Le=p.ul`
    list-style: none;
    max-height: ${e=>e.open?"300px":"0"};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    background-color: #fff;
    padding-left: 10px;
    margin: 0;
`,Te=p.li`
    padding: 10px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        transform: scale(1.05);
    }
`,Oe=p.input`
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
`,Ae=p.span`
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.open?"rotate(180deg)":"rotate(0)"};
`;function Re({menuOptions:n}){const[i,r]=a.useState(0);return e.jsx(Ee,{children:e.jsx(Ie,{children:n.map((n,a)=>e.jsxs("ul",{children:[e.jsxs(Se,{onClick:()=>(e=>{r(i===e?-1:e)})(a),open:i===a,children:[e.jsx(ee,{children:n.label}),e.jsx(Ae,{open:i===a,children:"▼"})]}),e.jsx(Le,{open:i===a,children:n.subOptions.map((n,i)=>e.jsxs(Te,{children:[e.jsx(Oe,{type:"checkbox"}),n]},i))})]},a))})})}const Be=s,qe=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const[n,i]=a.useState(!1),r=()=>i(!0),s=()=>i(!1),{restaurant:d}=Be(e=>e.restaurant),{data:l}=d??{},t=o();return a.useEffect(()=>{l&&0!==l.length||a.startTransition(()=>{t(m())})},[l,t]),e.jsx(N,{children:e.jsxs(D,{children:[e.jsx(U,{children:e.jsx(Re,{menuOptions:[{label:"Tipo de comida ",subOptions:["Mediterranea","Japonesa","Mexicana","China","Turca"]},{label:"Precio",subOptions:["Menos de 15€ por persona.","Entre 15€ y 30€ por persona.","Más de 30€ por persona."]},{label:"Guía Michelin",subOptions:["Guía MICHELIN","3 estrellas MICHELIN","2 estrellas MICHELIN","1 estrella MICHELIN"]}]})}),e.jsx(V,{children:(null==d?void 0:d.count)>0?l.map((i,a)=>{var o,d;return e.jsxs(J,{children:[e.jsx(W,{children:e.jsx(Z,{to:i.id,children:e.jsx(K,{alt:i.name,src:null==(o=i.images[a])?void 0:o.url,loading:"lazy"})})}),e.jsxs(W,{children:[e.jsxs(Q,{children:[e.jsxs(ie,{children:["Top 1 ",e.jsx(se,{children:"editor_choice"})]}),e.jsx(oe,{children:"Michelin"})]}),e.jsx(Q,{children:e.jsx(Z,{to:i.id,children:e.jsx(ne,{children:i.name})})}),e.jsx(Q,{children:e.jsxs(ae,{children:[e.jsx(se,{children:"kid_star"})," Puntuación (9,6)"]})}),e.jsx(Q,{children:e.jsxs(ae,{children:[e.jsx(se,{children:"location_on"}),null==(d=i.location)?void 0:d.address]})}),e.jsx(Q,{children:e.jsxs(ae,{children:[e.jsx(se,{children:"restaurant"}),i.type_food," . Precio medio: 20€"]})}),e.jsxs(Y,{children:[e.jsxs(re,{children:[i.description," ",n&&i.description]}),e.jsx(ce,{onClick:n?s:r,children:n?"Ver menos":"Ver más"})]}),e.jsxs(X,{children:[e.jsxs(de,{to:i.web,children:[e.jsx(se,{children:"language"})," Web"]}),e.jsxs(de,{to:i.web,children:[e.jsx(se,{children:"menu_book"})," Menú"]}),e.jsxs(te,{href:`tel:${i.phone}`,children:[e.jsx(se,{children:"call_quality"}),i.phone]})]})]})]},i.id)}):e.jsx(Q,{children:e.jsx(re,{children:"No hay restaurantes disponibles"})})})]})})}},Symbol.toStringTag,{value:"Module"})),Fe=p.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-column: 2 / 7;
    grid-row: 1;

    @media only screen and (${b}) {
        grid-column: 2 / 7;
    }
    @media only screen and (${w}) {
        grid-template-columns: auto auto;
    }
`,Ge=p.div`
    display: flex;
    flex-direction: column;
     
     aspect-ratio: 4 / 3; 
`,He=p.div`
    display: none;
    aspect-ratio: 3 / 4; 
    @media only screen and (${w}) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        grid-auto-rows: 210px;
    }
`,Ne=p.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`,De=p.div`
    padding: 2rem;
    background-color: whitesmoke;
    width: 100%;
`,Ve=p.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,Ze=p.div`
    display: flex;
    justify-content: space-around;
`,Je=p.div`
    display: flex;
    flex-direction: row;
`,Ue=p.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: bold;
    @media only screen and (${y}) {
        font-size: 35px;
    }
`,We=p.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: bold;
    @media only screen and (${y}) {
        font-size: 22px;
    }
`;p.p`
    font-family: 'Inter', 'sans-serif';
    font-size:16px;
`;const Ke=p.div`
    font-family: 'Poppins',sans-serif;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`,Qe=p.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`,Ye=p.button.attrs(e=>({$border:e.$border||"solid 1px black"}))`
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
    @media only screen and (${y}) {
        border: ${e=>e.$border};
    }
`,Xe=p.span.attrs(e=>({$borderBottom:e.$borderBottom||"solid 1px black"}))`
    font-family: 'Roboto';

    border-bottom: ${e=>e.$borderBottom};
    line-height: 22px;
    display: none;

    @media only screen and (${y}) {
        display: block;
    }
`,en=p.div`
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    padding: 6px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (${y}) {
        flex-direction: row;
    }
`,nn=p.p`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border-bottom: none;
    padding: 10px 0px;
    @media only screen and (${y}) {
        border-bottom: 1px solid gray;
    }
`,rn=p.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    color: white;
`,an=p.ul`
    list-style: none;
    display: flex;
`,on=p(r)`
    font-family: 'Rokkitt', serif;
    font-size: 18px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    line-height: 10px;
    padding: 0.5rem 1rem;
    border-right: solid 2px gray;

    @media only screen and (${y}) {
        font-size: 22px;
    }
`,sn=p.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
`,dn=p.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    grid-gap: 2rem;

    @media only screen and (${y}) {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: minmax(100px, auto);
    }
`,ln=p.div`
    display: grid;
    gap: 16px;
    width: 100%;

    grid-column: 2 / 5;
    grid-row: 2;
    @media only screen and (${y}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${w}) {
        grid-column: 2 / 5;
    }
`,tn=p.div`
    display: grid;
    gap: 16px;
    grid-column: 5 / 7;
    grid-row: 2;
    @media only screen and (${y}) {
        grid-column: 3 / 7;
    }
    @media only screen and (${w}) {
        grid-column: 5 / 7;
    }
`,cn=p.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-area: content;
    grid-column: 2 / 5;
    grid-row: 3;
    @media only screen and (${y}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${b}) {
        grid-column: 2 / 5;
    }
`,pn=p(cn)`
    grid-row: 4;
`,xn=p(Ze)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${y}) {
        row-gap: 1rem;
    }
`,hn=p.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    @media only screen and (${y}) {
        row-gap: 3rem;
    }
`,mn=p.p`
    cursor: pointer;
   
    &:hover{
        text-decoration: line-through;
    }
`,un=p.span`
   font-weight: bold;
   padding-right: 2px;
`,fn=a.lazy(()=>h(()=>Promise.resolve().then(()=>$n),void 0)),gn=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var n,i,r,o,s,t;const[c,p]=a.useState(!1),{id:x}=d(),{restaurant:h}=Be(e=>e.restaurant);if(!h||!h.data||0===h.data.length)return e.jsx(xn,{children:e.jsx(en,{children:"No hay restaurantes"})});const m=Be(e=>x?g(e,x):void 0);return e.jsxs(e.Fragment,{children:[e.jsx(De,{children:e.jsxs(Ze,{children:[e.jsxs(Je,{children:[e.jsx(Ue,{children:null==m?void 0:m.name}),e.jsx(Ve,{children:"verified"})]}),e.jsxs(Ke,{children:[e.jsxs(Qe,{onClick:async()=>{try{const e=window.location.href;await navigator.clipboard.writeText(e),p(!0),setTimeout(()=>p(!1),2e3)}catch(e){}},children:[e.jsx(Ve,{color:"black",children:"ios_share"}),e.jsx(Xe,c?{children:"Enlace copiado"}:{children:"Compartir"})]}),e.jsxs(Ye,{$border:"solid 1px black",children:[e.jsx(Ve,{color:"black",children:"favorite"}),e.jsx(Xe,{$borderBottom:"none",children:"Guardar"})]})]})]})}),e.jsx(dn,{children:e.jsxs(l.Fragment,{children:[e.jsxs(Fe,{children:[e.jsx(Ge,{children:e.jsx(Ne,{src:null==(n=null==m?void 0:m.images[0])?void 0:n.url,alt:(null==(i=null==m?void 0:m.images[0])?void 0:i.id)||"portada"},null==(r=null==m?void 0:m.images[0])?void 0:r.id)}),e.jsx(He,{children:e.jsx(Ne,{src:null==(o=null==m?void 0:m.images[0])?void 0:o.url,alt:(null==(s=null==m?void 0:m.images[0])?void 0:s.id)||"portada"},null==(t=null==m?void 0:m.images[0])?void 0:t.id)}),e.jsxs(en,{children:[e.jsxs(nn,{children:[e.jsx(Ve,{color:"black",children:"restaurant"}),null==m?void 0:m.type_food]}),e.jsxs(nn,{children:[e.jsx(Ve,{color:"black",children:"map"}),"España , Madrid"]}),e.jsxs(nn,{children:[e.jsx(Ve,{color:"black",children:"euro"}),"Precio medio 20 euros"]})]})]}),e.jsxs(ln,{children:[e.jsx(rn,{children:e.jsxs(an,{children:[e.jsx(on,{to:"",children:"Horario"}),e.jsx(on,{to:"",children:"Descripcion"}),e.jsx(on,{to:"",children:"Contenido"})]})}),e.jsx(sn,{children:null==m?void 0:m.description})]}),e.jsx(tn,{children:e.jsx(fn,{})}),e.jsxs(cn,{children:[e.jsx(We,{children:"Caracteristicas"}),e.jsxs(xn,{children:[e.jsxs(en,{children:[e.jsx(Ve,{color:"black",children:"credit_card"}),"Aceptan tarjetas de credito"]}),e.jsxs(en,{children:[e.jsx(Ve,{color:"black",children:"check_circle"}),"Comidas, Cenas, Brunch y Bebidas"]}),e.jsxs(en,{children:[e.jsx(Ve,{color:"black",children:"chef_hat"}),"Tiene opciones veganas y celiacas"]})]})]}),e.jsxs(pn,{children:[e.jsx(We,{children:"Menu"}),e.jsxs(hn,{children:[e.jsxs(xn,{children:[e.jsx(en,{children:e.jsxs(mn,{children:["Albondigas ",e.jsx(un,{children:"22$"})]})}),e.jsx(en,{children:e.jsxs(mn,{children:["Huevos Rotos",e.jsx(un,{children:"22$"})]})}),e.jsx(en,{children:e.jsxs(mn,{children:["Arroz tres delicias",e.jsx(un,{children:"22$"})]})})]}),e.jsxs(xn,{children:[e.jsx(en,{children:e.jsxs(mn,{children:["Albondigas ",e.jsx(un,{children:"22$"})]})}),e.jsx(en,{children:e.jsxs(mn,{children:["Huevos Rotos ",e.jsx(un,{children:"22$"})]})}),e.jsx(en,{children:e.jsxs(mn,{children:["Arroz tres delicias ",e.jsx(un,{children:"22$"})]})})]}),e.jsxs(xn,{children:[e.jsx(en,{children:e.jsxs(mn,{children:["Albondigas ",e.jsx(un,{children:"22$"})]})}),e.jsx(en,{children:e.jsxs(mn,{children:["Huevos Rotos ",e.jsx(un,{children:"22$"})]})}),e.jsx(en,{children:e.jsxs(mn,{children:["Arroz tres delicias",e.jsx(un,{children:"22$"})]})})]})]})]})]},null==m?void 0:m.id)})]})}},Symbol.toStringTag,{value:"Module"})),jn=p.div`
    width: 100%;
    padding: 12px;
    margin: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    background-color: white;
`,yn=p.h2`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
    @media only screen and (${y}) {
        font-size: 22px;
    }
`,bn=p.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 8px;
    margin-bottom: 8px;
    column-gap: 1rem;

    text-align: center;
    @media only screen and (${y}) {
        flex-direction: row;
        row-gap: 1rem;
    }
`,wn=p.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    display: flex;

    flex-direction: row;
    @media only screen and (${y}) {
        flex-direction: column;
    }

    @media only screen and (${w}) {
        flex-direction: row;
    }
`,vn=p.span`
    font-weight: bold;
`,kn=p.span`
    padding-left: 6px;
`,$n=Object.freeze(Object.defineProperty({__proto__:null,default:function(){return e.jsxs(jn,{children:[e.jsx(yn,{children:"Horario"}),e.jsx(bn,{children:e.jsxs(wn,{children:[e.jsx(vn,{children:"Lunes"}),e.jsx(kn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(bn,{children:e.jsxs(wn,{children:[e.jsx(vn,{children:"Lunes"}),e.jsx(kn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(bn,{children:e.jsxs(wn,{children:[e.jsx(vn,{children:"Lunes"}),e.jsx(kn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(bn,{children:e.jsxs(wn,{children:[e.jsx(vn,{children:"Lunes"}),e.jsx(kn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(bn,{children:e.jsxs(wn,{children:[e.jsx(vn,{children:"Lunes"}),e.jsx(kn,{children:"11:00pm - 12:00pm"})]})}),e.jsx(bn,{children:e.jsxs(wn,{children:[e.jsx(vn,{children:"Lunes"}),e.jsx(kn,{children:"11:00pm - 12:00pm"})]})})]})}},Symbol.toStringTag,{value:"Module"}));export{Pe as C,pe as F,be as N,O as P,h as _,qe as a,gn as c,xe as h,u as i,j as r};
