import{L as e,j as n,u as r,a as i,b as o,c as t,r as s,d as a,R as d}from"./react-vendor.C1IQY_Lk.js";import{c as l,a as c,d as p}from"./vendor.CfDX7zRh.js";const h={},x=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=(null==r?void 0:r.nonce)||(null==r?void 0:r.getAttribute("nonce"));i=e(n.map(e=>{if((e=function(e){return"/"+e}(e))in h)return;h[e]=!0;const n=e.endsWith(".css");if(document.querySelector(`link[href="${e}"]${n?'[rel="stylesheet"]':""}`))return;const r=document.createElement("link");return r.rel=n?"stylesheet":"modulepreload",n||(r.as="script"),r.crossOrigin="",r.href=e,o&&r.setAttribute("nonce",o),document.head.appendChild(r),n?new Promise((n,i)=>{r.addEventListener("load",n),r.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function o(e){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e}return i.then(n=>{for(const e of n||[])"rejected"===e.status&&o(e.reason);return e().catch(o)})},m=async({api_url:e,api_path:n,method:r="GET",body:i,headers:o={},token:t,authHeadersGenerator:s})=>{let a={};if(s&&"GET"!==r&&"OPTIONS"!==r)try{a=await s(r,n,i)}catch(l){return{data:null,error:l instanceof Error?l.message:"Error desconocido al generar encabezados de seguridad."}}const d={"Content-Type":"application/json",...t?{Authorization:`Bearer ${t}`}:{},...o,...a};try{const n=await fetch(e,{method:r,headers:d,body:"GET"!==r&&i?JSON.stringify(i):void 0});if(!n.ok){const e=await n.text();let r=`Error ${n.status}: ${n.statusText}`;try{r=JSON.parse(e).message||r}catch{}throw new Error(r)}return{data:await n.json(),error:null}}catch(c){return c instanceof Error?{data:null,error:c.message||"Error de red o desconocido"}:{data:null,error:"Error de red o desconocido"}}},u=l("auth/fetchAuth",async(e,{rejectWithValue:n})=>{const{method:r="GET",...i}=e,o={method:r,...i};try{const{data:e,error:r}=await m(o);return r?n(r):e}catch(t){return n(t instanceof Error?t.message:"Error desconocido al contactar la API.")}}),f=l("restaurant/fetchRestaurant",async(e,{rejectWithValue:n})=>{const{method:r="GET",...i}=e,o={method:r,...i};try{const{data:e,error:r}=await m(o);return r?n(r):e}catch(t){return n(t instanceof Error?t.message:"Error desconocido al contactar la API.")}}),g=l("api/fetchTokenAndRestaurant",async(e,{dispatch:n,rejectWithValue:r})=>{var i;const{api_url:o,api_path:t}=e;try{const e=null==(i=(await n(u({api_url:"http://localhost:3000/api/v1/anonymous/token",api_path:"/anonymous/token",method:"POST",headers:{"x-api-key":"199?kamO1OSws´s`sññaQS23*¿+S.XZ,123POszMCV"}})).unwrap()).data.user)?void 0:i.token;return e&&"string"==typeof e&&null!==e?await n(f({api_url:o,api_path:t,method:"GET",headers:{Authorization:`Bearer ${e}`}})).unwrap():r("Token no válido o ausente en la respuesta de autenticación.")}catch(s){let e;return e="string"==typeof s?s:"object"==typeof s&&null!==s&&"message"in s&&"string"==typeof s.message||s instanceof Error?s.message:"Error desconocido al encadenar las llamadas a la API.",r(e)}}),j={restaurant:{code:"",count:0,data:[],message:""},status:"idle",loading:!1},y=c({name:"restaurant",initialState:j,reducers:{},extraReducers:e=>{e.addCase(f.pending,e=>{e.status="loading",e.loading=!1}),e.addCase(f.fulfilled,(e,n)=>{e.status="success",e.loading=!0,e.restaurant=n.payload}),e.addCase(f.rejected,e=>{e.status="failed",e.loading=!1})},selectors:{selectRestaurantById:(e,n)=>e.restaurant.data.find(e=>e.id===n)}}),{selectRestaurantById:b}=y.selectors,w=y.reducer,v={sm:"(min-width: 577px)",md:"(min-width: 769px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"},$=p.div`
    width: 258px;
    height: 550px; 
    display: flex;
    flex-direction: column;
    overflow: hidden; 
    flex-shrink: 0;
    margin-right: 15px;
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
   @media only screen and (${v.sm}) {
      
      height: 350px;
    }
    
`,k=p.div`
    width: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    height: 250px;
     @media only screen and (${v.sm}) {
        height: 170px; 
    }
`,z=p.div`
    width: 100%;
    flex: 1; 
    flex-grow: 1; 
    background-color: orangered;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 1rem;
    
`,_=p.h3`
    font-size: 20px;
    color: aliceblue;
    
    @media only screen and (${v.sm}) {
       font-size: 16px;
    }
`,E=p.p`
     font-size: 16px;
     padding-top: 12px;
     @media only screen and (${v.sm}) {
       font-size: 16px;
    }
`,S=p.h5`
    font-weight: bold;
`,P=p.img.attrs(({src:e})=>({src:e,alt:"Imagen card "}))`
 overflow: hidden;  
    width: fit-content;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  
`,T=p(e)`
    
`;function L({data:e}){const{name:r,address:i,type_food:o}=e;return n.jsx(n.Fragment,{children:e.images.map((t,s)=>n.jsx(T,{to:"restaurants/"+e.id,children:n.jsxs($,{children:[n.jsx(k,{children:n.jsx(P,{src:t.url,loading:"lazy"})}),n.jsxs(z,{children:[n.jsx(_,{children:r}),n.jsx(E,{children:n.jsx(S,{children:i})}),n.jsx(E,{children:n.jsx(S,{children:o})})]})]},s)}))})}const M=r,O=()=>i(),C=p.h2`
    font-family: 'Poppins',sans-serif;
    font-size: 22px;
    font-weight: bold;
    padding: 1rem 2rem ;

    @media only screen and (${v.sm}) {
       padding: 2rem 3.8rem ;
       font-size: 25px;
    }
`,I=p.div`
    height: 250px;
    background-color:${e=>e.theme.colors.blueDeep};
    padding: 2rem;
    @media only screen and (${v.sm}) {
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
`,A=p.div`
    display: flex;
    justify-content: space-evenly;
    column-gap: 2rem;
    align-items: center;
`,B=p.h1`
    font-family: 'Poppins', sans-serif;
    font-family: 24px;
    font-weight: 500;
    color: white;
    @media only screen and (${v.sm}) {
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
    @media only screen and (${v.sm}) {
    }
`,D=p(e)`
    color: #fff;
    font-size: 12px;
    @media only screen and (${v.sm}) {
        font-size: 16px;
    }
`,N=p.div`
    margin: 2rem;

    @media only screen and (${v.sm}) {
        margin: 3rem;
    }
`,H=p.div`
    display: grid;
    @media only screen and (${v.sm}) {
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
`,W=p(e)`
    
`,U=p.div`

    margin: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 12px; 
    overflow: hidden;
    
    @media only screen and (${v.xl}) {
        flex-direction: row;
        align-items: center;
       
    }
`,X=p.div`
    display: none;
    @media only screen and (${v.sm}) {
        display: block;
    }
`,q=p.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
       border-radius: 12px;

    @media only screen and (${v.xl}) {
        width: 50%;
    }
`,Z=p(q)`
    padding:1rem;
`,J=p.img.attrs(({src:e})=>({src:e,alt:"Imagen card "}))`
    width: fit-content;
  
`,Q=p.div`
    display: flex;
    align-items: baseline;
    padding: 3px;
    @media only screen and (${v.sm}) {
        padding: 0.1rem;
    }
`,K=p(Q)`
    flex-direction: column;
    padding: 10px 0px;
`,Y=p(Q)`
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (${v.sm}) {
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
`,re=p.h3`
    font-family:  'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    font-weight: bold;
`,ie=p.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    padding-bottom: 6px;
    display: flex;
    align-items: baseline;
`,oe=p(ie)`
    display: flex;
    align-items: end;
    font-size: 16px;
`,te=p.button`
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
`,ae=p(e)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 400;
    gap: 0.25rem;
`,de=p(ae)`
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
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    padding: 12px 6px;
    border: none;
    border-radius: 10px;
    background-color: #ff3d00;
    color: white;
    font-weight: 400;
    cursor: pointer;
`;function pe(){return n.jsx(I,{children:n.jsxs(R,{children:[n.jsx(B,{children:"ZappyMap"}),n.jsxs(A,{children:[n.jsxs(G,{children:[n.jsx(D,{to:"./legales",children:"¿Quienes somos?"}),n.jsx(D,{to:"./legales",children:"Información de contacto"})]}),n.jsxs(G,{children:[n.jsx(D,{to:"./legales",children:"Preguntas frecuentes"}),n.jsx(D,{to:"./legales",children:"Condiciones legales"})]}),n.jsxs(G,{children:[n.jsxs(de,{to:"https://yandrydev.es/",children:[n.jsx(F,{children:"rss_feed"}),"Redes sociales"]}),n.jsxs(de,{to:"https://yandrydev.es/",children:[n.jsx(F,{children:"copyright"}),"ZappyMap Inc"]})]}),n.jsx(G,{})]})]})})}const he=p.nav`
    background-color: ${e=>e.theme.colors.blueDeep};
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    width: -webkit-fill-available;
`,xe=p.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,me=p(xe)`
    display: none;
    @media only screen and (${v.sm}) {
        display: flex;
    }
`,ue=p(xe)`
    display: flex;
`,fe=p.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
    @media only screen and (${v.sm}) {
        font-size: 35px;
    }
`,ge=p.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`,je=p(e)`
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
`;function ye(){return n.jsx(n.Fragment,{children:n.jsxs(he,{children:[n.jsx(ue,{children:n.jsx(fe,{children:"ZappyMap"})}),n.jsx(me,{children:n.jsxs(ge,{children:[n.jsx(je,{to:"/restaurants",children:"Restaurantes"}),n.jsx(je,{to:"/destinations",children:"Discotecas"}),n.jsx(je,{to:"sites",children:"Sitios"}),n.jsx(je,{to:"destinations",children:"Transporte"})]})})]})})}const be=p.div`
    width: 100%;
    max-width: 500px;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center; 
    flex-direction: row;
    border-radius: 12px; 
    overflow: hidden; 
    

`,we=p.input`
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem; 
    border: none;
    outline: none;
    background-color: white;
    flex-grow: 1;
`,ve=p.button`
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
   
    @media only screen and (${v.sm}) {
        font-size: 35px;
    }
`;function ke(){const[e,r]=o(),i=t(),a=e.get("name")||"",[d,l]=s.useState(a),{restaurant:c}=M(e=>e.restaurant),{data:p}=c??{};function h(){const n=Object.fromEntries(e.entries());""===d.trim()?(delete n.name,r(n,{replace:!0})):r({...n,name:d.trim()},{replace:!0})}function x(){h()}return s.useEffect(()=>{const n=e.get("name")||"";d!==n&&l(n)},[e]),s.useEffect(()=>{const n=e.get("name")||"";if(d.trim()!==n.trim()){const e=setTimeout(()=>{h()},500);return()=>clearTimeout(e)}},[d]),s.useEffect(()=>{p&&1===p.length&&""!==d.trim()&&i(`/restaurants/${p[0].id}`)},[p,i,d]),n.jsx(n.Fragment,{children:n.jsxs(be,{children:[n.jsx($e,{children:"map"}),n.jsx(we,{value:d,onKeyDown:function(e){"Enter"===e.key&&x()},onChange:e=>l(e.target.value),name:"valueSearch",type:"text",placeholder:"Restaurante,Sitio,Transporte..",id:"seeker"}),n.jsx(ve,{onClick:x,children:"Buscar"})]})})}const ze=p.div`
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
    padding: 2rem;
    object-fit: cover; /* No tiene efecto directo en un <div>, se mantiene por si se usa en otro contexto */

    /* Diseño visual y Flexbox */
    background-color: ${e=>e.theme.colors.blueGray};
    display: flex;
    justify-content: center;
    flex-direction: column;

    /* Imagen de Fondo */
    background-image: url(${"/assets/hands_map.B9zuCnS3.png"}); 
    background-position: right center; 
    background-repeat: no-repeat; 
    background-size: contain; 

    @media only screen and (${v.sm}) {
        margin: 4rem;
        padding: 2rem;
        border-radius: 12px;
    }
`;p.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 4vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: white;
    flex-direction: column;
    justify-content: center;
    
`;const Ee=p.p`
    font-size: 22px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    line-height: normal;
    word-spacing: 3px;
    padding-bottom:2rem;
    color: white;

     @media only screen and (${v.sm}) {
        font-size: 30px;
    }

`,Se=Object.freeze(Object.defineProperty({__proto__:null,default:function(){return n.jsxs(n.Fragment,{children:[n.jsx(ye,{}),n.jsx(ze,{children:n.jsxs(_e,{children:[n.jsx(Ee,{children:"Planea y reserva en cualquiera de nuestras ilimitadas opciones"}),n.jsx(ke,{})]})})]})}},Symbol.toStringTag,{value:"Module"})),Pe=p.div`
    display: flex;
   overflow-x: scroll; 
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    &::-webkit-scrollbar {
        display: none;
    }
    width: 100%;
    bottom: 3rem;
    cursor: grab;
`,Te=p.div`
    min-width: 30%;
    width: 30%;
    height: 100%;
    transition: transform 0.5s ease;
    text-align: center;
    background-color: transparent;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (${v.sm}) {
        min-width: 20%;
        width: 20%;
    }
`,Le=p.img`
    height: 75px;
    width: 75px;
    border-radius: 120px;
    object-fit: cover;
    object-position: center;
`,Me=p.p`
    color: black;
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
     display: none;
     @media only screen and (${v.sm}) {
           font-size: 18px;
           display: block;
    }
`;p(Me)`
    font-weight: bold;
    line-height: 30px;
    word-spacing: 5px;
    &:hover {
        border-bottom: solid 3px blue;
    }
`;const Oe=p(e)`
   display: flex;
  flex-direction: column;
   justify-content: center;
   align-items: center;
   row-gap: 1rem;   
`,Ce=Object.freeze(Object.defineProperty({__proto__:null,default:({slidesData:e})=>{const r=s.useRef(null),[i,o]=s.useState(!1),[t,a]=s.useState(0),[d,l]=s.useState(0);return n.jsxs(n.Fragment,{children:[n.jsx(C,{}),n.jsx(Pe,{ref:r,onMouseDown:e=>{r.current&&(o(!0),a(e.pageX-r.current.offsetLeft),l(r.current.scrollLeft),r.current.style.cursor="grabbing")},onMouseMove:e=>{i&&r.current&&(r.current.scrollLeft=d-3*(e.pageX-r.current.offsetLeft-t))},onMouseUp:()=>{r.current&&(o(!1),r.current.style.cursor="grab")},onMouseLeave:()=>{r.current&&(o(!1),r.current.style.cursor="grab")},onTouchStart:e=>{r.current&&(o(!0),a(e.touches[0].pageX-r.current.offsetLeft),l(r.current.scrollLeft),r.current.style.cursor="grabbing")},onTouchMove:e=>{i&&r.current&&(r.current.scrollLeft=d-3*(e.touches[0].pageX-r.current.offsetLeft-t))},onTouchEnd:()=>{r.current&&(o(!1),r.current.style.cursor="grab")},children:e.map((e,r)=>n.jsx(Te,{children:n.jsxs(Oe,{to:e.to,children:[n.jsx(Le,{src:e.iconSrc}),n.jsx(Me,{children:e.text})]})},r))})]})}},Symbol.toStringTag,{value:"Module"})),Ie=p.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    max-height: 900px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,Re=p.ul`
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
`,Ae=p.li`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.open?"#fff":"inherit"};
    transition: background-color 0.3s ease-in-out;
`,Be=p.ul`
    list-style: none;
    max-height: ${e=>e.open?"1000px":"0"}; 
    overflow: hidden;
    opacity: ${({open:e})=>e?"1":"0"};
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out; 
    background-color: #fff;
    padding-left: 10px;
    margin: 0;
`,Fe=p.li`
    padding: 10px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        transform: scale(1.05);
    }
`,Ge=p.input`
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
`,De=p.span`
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.open?"rotate(180deg)":"rotate(0)"};
`;function Ne({menuOptions:e}){const[r,i]=s.useState(()=>{const n={};return e.forEach((e,r)=>{n[r]=!0}),n});return n.jsx(Ie,{children:n.jsx(Re,{children:e.map((e,o)=>n.jsxs("ul",{children:[n.jsxs(Ae,{onClick:()=>(e=>{i(n=>({...n,[e]:!n[e]}))})(o),open:r[o],children:[n.jsx(ee,{children:e.label}),n.jsx(De,{open:r[o],children:"▼"})]}),n.jsx(Be,{open:r[o],children:e.subOptions.map((e,r)=>n.jsxs(Fe,{children:[n.jsx(Ge,{type:"checkbox"}),e]},r))})]},e.label||o))})})}const He=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const[e,r]=s.useState(!1),i=()=>r(!0),t=()=>r(!1),{restaurant:d}=M(e=>e.restaurant),{data:l}=d??{},{id:c}=a(),[p]=o(),h="http://localhost:3000/api/v1/restaurant/",x=O(),m=(({pathId:e,baseURL:n="/api/restaurants",pageSize:r,filters:i={}})=>{const[t]=o(),a=Number(t.get("page"))||1,d=r?(a-1)*r:0;return s.useMemo(()=>{let o=e?`${n}/${e}`:n;const s=new URLSearchParams;Object.keys(i).forEach(e=>{const n=i[e];null!=n&&""!==n&&s.append(e,String(n))}),t.forEach((e,n)=>{"page"===n||"limit"===n||"offset"===n||s.has(n)||s.append(n,e)}),r&&(s.set("limit",String(r)),s.set("offset",String(d)));const a=s.toString();return a&&(o+=`?${a}`),o},[e,n,r,i,t,d])})({pathId:c,baseURL:h,filters:{name:p.get("name"),address:p.get("address")}}),u=m?((e,n)=>{const r=e.replace(n,"");return n.endsWith("/")?"/"+r:r})(m,h):"";return s.useEffect(()=>{s.startTransition(()=>{x(g({api_url:m,api_path:u}))})},[c,m,u,x]),n.jsx(N,{children:n.jsxs(H,{children:[n.jsx(X,{children:n.jsx(Ne,{menuOptions:[{label:"Tipo de comida ",subOptions:["Mediterranea","Japonesa","Mexicana","China","Turca"]},{label:"Precio",subOptions:["Menos de 15€ por persona.","Entre 15€ y 30€ por persona.","Más de 30€ por persona."]},{label:"Guía Michelin",subOptions:["Guía MICHELIN","3 estrellas MICHELIN","2 estrellas MICHELIN","1 estrella MICHELIN"]}]})}),n.jsx(V,{children:(null==d?void 0:d.count)>0?l.map(r=>{var o;return n.jsxs(U,{children:[r.images.map((e,i)=>n.jsx(q,{children:n.jsx(W,{to:r.id,children:n.jsx(J,{alt:`${r.name} - Imagen ${i+1}`,src:e.url,loading:"lazy"})})},e.url||i)),n.jsxs(Z,{children:[n.jsxs(Q,{children:[n.jsxs(re,{children:["Top 1 ",n.jsx(se,{children:"editor_choice"})]}),n.jsx(te,{children:"Michelin"})]}),n.jsx(Q,{children:n.jsx(W,{to:r.id,children:n.jsx(ne,{children:r.name})})}),n.jsx(Q,{children:n.jsxs(oe,{children:[n.jsx(se,{children:"kid_star"})," Puntuación (9,6)"]})}),n.jsx(Q,{children:n.jsxs(oe,{children:[n.jsx(se,{children:"location_on"}),null==(o=r.location)?void 0:o.address]})}),n.jsx(Q,{children:n.jsxs(oe,{children:[n.jsx(se,{children:"restaurant"}),r.type_food," . Precio medio: 20€"]})}),n.jsxs(K,{children:[n.jsxs(ie,{children:[r.description," ",e&&r.description]}),n.jsx(ce,{onClick:e?t:i,children:e?"Ver menos":"Ver más"})]}),n.jsxs(Y,{children:[n.jsxs(ae,{to:r.web,children:[n.jsx(se,{children:"language"})," Web"]}),n.jsxs(ae,{to:r.web,children:[n.jsx(se,{children:"menu_book"})," Menú"]}),n.jsxs(le,{href:`tel:${r.phone}`,children:[n.jsx(se,{children:"call_quality"}),r.phone]})]})]})]},r.id)}):n.jsx(Q,{children:n.jsx(ie,{children:"No hay restaurantes disponibles"})})})]})})}},Symbol.toStringTag,{value:"Module"})),Ve=p.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-column: 2 / 7;
    grid-row: 1;

    @media only screen and (${v.md}) {
        grid-column: 2 / 7;
    }
    @media only screen and (${v.lg}) {
        grid-template-columns: auto auto;
    }
`,We=p.div`
    display: flex;
    flex-direction: column;
     
     aspect-ratio: 4 / 3; 
`,Ue=p.div`
    display: none;
    aspect-ratio: 3 / 4; 
    @media only screen and (${v.lg}) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        grid-auto-rows: 210px;
    }
`,Xe=p.img`
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
`,Ze=p.span`
    font-family: 'Material Symbols Outlined';
    color: ${({color:e})=>e||"orange"};
    font-weight: 400;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,Je=p.div`
    display: flex;
    justify-content: space-around;
`,Qe=p.div`
    display: flex;
    flex-direction: row;
`,Ke=p.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: bold;
    @media only screen and (${v.sm}) {
        font-size: 35px;
    }
`,Ye=p.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: bold;
    @media only screen and (${v.sm}) {
        font-size: 22px;
    }
`;p.p`
    font-family: 'Inter', 'sans-serif';
    font-size:16px;
`;const en=p.div`
    font-family: 'Poppins',sans-serif;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`,nn=p.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`,rn=p.button.attrs(e=>({$border:e.$border||"solid 1px black"}))`
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
    @media only screen and (${v.sm}) {
        border: ${e=>e.$border};
    }
`,on=p.span.attrs(e=>({$borderBottom:e.$borderBottom||"solid 1px black"}))`
    font-family: 'Roboto';

    border-bottom: ${e=>e.$borderBottom};
    line-height: 22px;
    display: none;

    @media only screen and (${v.sm}) {
        display: block;
    }
`,tn=p.div`
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    padding: 6px 0px;
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (${v.sm}) {
        flex-direction: row;
    }
`,sn=p.p`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border-bottom: none;
    padding: 10px 0px;
    @media only screen and (${v.sm}) {
        border-bottom: 1px solid gray;
    }
`,an=p.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    color: white;
`,dn=p.ul`
    list-style: none;
    display: flex;
`,ln=p(e)`
    font-family: 'Rokkitt', serif;
    font-size: 18px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    line-height: 10px;
    padding: 0.5rem 1rem;
    border-right: solid 2px gray;

    @media only screen and (${v.sm}) {
        font-size: 22px;
    }
`,cn=p.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
`,pn=p.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    grid-gap: 2rem;

    @media only screen and (${v.sm}) {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: minmax(100px, auto);
    }
`,hn=p.div`
    display: grid;
    gap: 16px;
    width: 100%;

    grid-column: 2 / 5;
    grid-row: 2;
    @media only screen and (${v.sm}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${v.lg}) {
        grid-column: 2 / 5;
    }
`,xn=p.div`
    display: grid;
    gap: 16px;
    grid-column: 5 / 7;
    grid-row: 2;
    @media only screen and (${v.sm}) {
        grid-column: 3 / 7;
    }
    @media only screen and (${v.lg}) {
        grid-column: 5 / 7;
    }
`,mn=p.div`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-area: content;
    grid-column: 2 / 5;
    grid-row: 3;
    @media only screen and (${v.sm}) {
        grid-column: 2 / 3;
    }

    @media only screen and (${v.md}) {
        grid-column: 2 / 5;
    }
`,un=p(mn)`
    grid-row: 4;
`,fn=p(Je)`
    flex-direction: column;
    justify-content: start;
    @media only screen and (${v.sm}) {
        row-gap: 1rem;
    }
`,gn=p.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    @media only screen and (${v.sm}) {
        row-gap: 3rem;
    }
`,jn=p.p`
    cursor: pointer;
   
    &:hover{
        text-decoration: line-through;
    }
`,yn=p.span`
   font-weight: bold;
   padding-right: 2px;
`,bn=s.lazy(()=>x(()=>Promise.resolve().then(()=>Sn),void 0)),wn=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var e,r,i,o,t,l;const[c,p]=s.useState(!1),{id:h}=a(),{restaurant:x}=M(e=>e.restaurant);if(!x||!x.data||0===x.data.length)return n.jsx(fn,{children:n.jsx(tn,{children:"No hay restaurantes"})});const m=M(e=>h?b(e,h):void 0);return n.jsxs(n.Fragment,{children:[n.jsx(qe,{children:n.jsxs(Je,{children:[n.jsxs(Qe,{children:[n.jsx(Ke,{children:null==m?void 0:m.name}),n.jsx(Ze,{children:"verified"})]}),n.jsxs(en,{children:[n.jsxs(nn,{onClick:async()=>{try{const e=window.location.href;await navigator.clipboard.writeText(e),p(!0),setTimeout(()=>p(!1),2e3)}catch(e){}},children:[n.jsx(Ze,{color:"black",children:"ios_share"}),n.jsx(on,c?{children:"Enlace copiado"}:{children:"Compartir"})]}),n.jsxs(rn,{$border:"solid 1px black",children:[n.jsx(Ze,{color:"black",children:"favorite"}),n.jsx(on,{$borderBottom:"none",children:"Guardar"})]})]})]})}),n.jsx(pn,{children:n.jsxs(d.Fragment,{children:[n.jsxs(Ve,{children:[n.jsx(We,{children:n.jsx(Xe,{src:null==(e=null==m?void 0:m.images[0])?void 0:e.url,alt:(null==(r=null==m?void 0:m.images[0])?void 0:r.id)||"portada"},null==(i=null==m?void 0:m.images[0])?void 0:i.id)}),n.jsx(Ue,{children:n.jsx(Xe,{src:null==(o=null==m?void 0:m.images[0])?void 0:o.url,alt:(null==(t=null==m?void 0:m.images[0])?void 0:t.id)||"portada"},null==(l=null==m?void 0:m.images[0])?void 0:l.id)}),n.jsxs(tn,{children:[n.jsxs(sn,{children:[n.jsx(Ze,{color:"black",children:"restaurant"}),null==m?void 0:m.type_food]}),n.jsxs(sn,{children:[n.jsx(Ze,{color:"black",children:"map"}),"España , Madrid"]}),n.jsxs(sn,{children:[n.jsx(Ze,{color:"black",children:"euro"}),"Precio medio 20 euros"]})]})]}),n.jsxs(hn,{children:[n.jsx(an,{children:n.jsxs(dn,{children:[n.jsx(ln,{to:"",children:"Horario"}),n.jsx(ln,{to:"",children:"Descripcion"}),n.jsx(ln,{to:"",children:"Contenido"})]})}),n.jsx(cn,{children:null==m?void 0:m.description})]}),n.jsx(xn,{children:n.jsx(bn,{})}),n.jsxs(mn,{children:[n.jsx(Ye,{children:"Caracteristicas"}),n.jsxs(fn,{children:[n.jsxs(tn,{children:[n.jsx(Ze,{color:"black",children:"credit_card"}),"Aceptan tarjetas de credito"]}),n.jsxs(tn,{children:[n.jsx(Ze,{color:"black",children:"check_circle"}),"Comidas, Cenas, Brunch y Bebidas"]}),n.jsxs(tn,{children:[n.jsx(Ze,{color:"black",children:"chef_hat"}),"Tiene opciones veganas y celiacas"]})]})]}),n.jsxs(un,{children:[n.jsx(Ye,{children:"Menu"}),n.jsxs(gn,{children:[n.jsxs(fn,{children:[n.jsx(tn,{children:n.jsxs(jn,{children:["Albondigas ",n.jsx(yn,{children:"22$"})]})}),n.jsx(tn,{children:n.jsxs(jn,{children:["Huevos Rotos",n.jsx(yn,{children:"22$"})]})}),n.jsx(tn,{children:n.jsxs(jn,{children:["Arroz tres delicias",n.jsx(yn,{children:"22$"})]})})]}),n.jsxs(fn,{children:[n.jsx(tn,{children:n.jsxs(jn,{children:["Albondigas ",n.jsx(yn,{children:"22$"})]})}),n.jsx(tn,{children:n.jsxs(jn,{children:["Huevos Rotos ",n.jsx(yn,{children:"22$"})]})}),n.jsx(tn,{children:n.jsxs(jn,{children:["Arroz tres delicias ",n.jsx(yn,{children:"22$"})]})})]}),n.jsxs(fn,{children:[n.jsx(tn,{children:n.jsxs(jn,{children:["Albondigas ",n.jsx(yn,{children:"22$"})]})}),n.jsx(tn,{children:n.jsxs(jn,{children:["Huevos Rotos ",n.jsx(yn,{children:"22$"})]})}),n.jsx(tn,{children:n.jsxs(jn,{children:["Arroz tres delicias",n.jsx(yn,{children:"22$"})]})})]})]})]})]},null==m?void 0:m.id)})]})}},Symbol.toStringTag,{value:"Module"})),vn=p.div`
    width: 100%;
    padding: 12px;
    margin: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    background-color: white;
`,$n=p.h2`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
    @media only screen and (${v.sm}) {
        font-size: 22px;
    }
`,kn=p.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 8px;
    margin-bottom: 8px;
    column-gap: 1rem;

    text-align: center;
    @media only screen and (${v.sm}) {
        flex-direction: row;
        row-gap: 1rem;
    }
`,zn=p.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    display: flex;

    flex-direction: row;
    @media only screen and (${v.sm}) {
        flex-direction: column;
    }

    @media only screen and (${v.lg}) {
        flex-direction: row;
    }
`,_n=p.span`
    font-weight: bold;
`,En=p.span`
    padding-left: 6px;
`,Sn=Object.freeze(Object.defineProperty({__proto__:null,default:function(){return n.jsxs(vn,{children:[n.jsx($n,{children:"Horario"}),n.jsx(kn,{children:n.jsxs(zn,{children:[n.jsx(_n,{children:"Lunes"}),n.jsx(En,{children:"11:00pm - 12:00pm"})]})}),n.jsx(kn,{children:n.jsxs(zn,{children:[n.jsx(_n,{children:"Lunes"}),n.jsx(En,{children:"11:00pm - 12:00pm"})]})}),n.jsx(kn,{children:n.jsxs(zn,{children:[n.jsx(_n,{children:"Lunes"}),n.jsx(En,{children:"11:00pm - 12:00pm"})]})}),n.jsx(kn,{children:n.jsxs(zn,{children:[n.jsx(_n,{children:"Lunes"}),n.jsx(En,{children:"11:00pm - 12:00pm"})]})}),n.jsx(kn,{children:n.jsxs(zn,{children:[n.jsx(_n,{children:"Lunes"}),n.jsx(En,{children:"11:00pm - 12:00pm"})]})}),n.jsx(kn,{children:n.jsxs(zn,{children:[n.jsx(_n,{children:"Lunes"}),n.jsx(En,{children:"11:00pm - 12:00pm"})]})})]})}},Symbol.toStringTag,{value:"Module"}));export{L as C,pe as F,ye as N,x as _,O as a,C as b,Se as c,v as d,Ce as e,g as f,u as g,He as h,j as i,wn as j,w as r,M as u};
