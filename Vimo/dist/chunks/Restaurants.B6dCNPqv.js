const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/Carrousell.CGXf5dTi.js","chunks/react-core.DzcB_2w7.js","chunks/vendor.hSDL9w0M.js","assets/vendor.ytJtD8ZQ.css","chunks/styles-vendor.DBgNySS0.js","chunks/useAppSelector.D6_7lV5f.js","chunks/router-vendor.DNrqJuUa.js","chunks/Navbar.DrWqh0ix.js"])))=>i.map(i=>d[i]);
import{f as e,L as n,_ as i}from"../index.DScpaeU5.js";import{r as s,j as o}from"./react-core.DzcB_2w7.js";import{u as r}from"./useAppDispatch.DlsLhMYc.js";import{u as t,L as a,d}from"./router-vendor.DNrqJuUa.js";import{d as l}from"./styles-vendor.DBgNySS0.js";import{d as c,u as p}from"./useAppSelector.D6_7lV5f.js";import"./vendor.hSDL9w0M.js";import"./redux-vendor.CyEodbzn.js";const x=l.div`
    background-color: ${e=>e.theme.colors.blueDeep};
    padding: 2rem;
    position: -webkit-sticky;
    width: 100%;
    bottom: 0px;
    @media only screen and (${c.sm}) {
        height: 200px;
    }
`,m=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    row-gap: 2rem;
    column-gap: 2rem;
`,f=l.div`
    display: flex;
    justify-content: space-evenly;
    column-gap: 2rem;
    align-items: center;
`,h=l.h1`
    font-family: 'Poppins', sans-serif;
    font-family: 24px;
    font-weight: 500;
    color: white;
    @media only screen and (${c.sm}) {
        font-family: 35px;
    }
`;l.img`
    width: ${({sizes:e})=>e||"40px"};
    height: ${({sizes:e})=>e||"40px"};
`;const u=l(l.span`
    font-family: 'Material Symbols Outlined';
    font-size: 22px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`)`
    color: white;
`,g=l.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    @media only screen and (${c.sm}) {
    }
`,j=l(a)`
    color: #fff;
    font-size: 12px;
    @media only screen and (${c.sm}) {
        font-size: 16px;
    }
`,b=l.div`
    display: grid;
    /* Definimos 12 columnas fijas para que las coordenadas 3/7 existan */
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    gap: 1rem;
`,y=l.div`
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    @media only screen and (${c.sm}) {
        grid-column: 6/ 12;
    }
    @media only screen and (${c.md}) {
        grid-column: 5 / 12;
    }
    @media only screen and (${c.lg}) {
        grid-column: 4 / 12;
    }
`;l.div`
    display: grid;
    @media only screen and (${c.sm}) {
        display: grid;
        grid-template-columns: 275px auto;
        gap: 2rem;
        width: 100%;
    }
`,l.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;const w=l(a)``,v=l.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 12px;
    overflow: hidden;

    @media only screen and (${c.xl}) {
        flex-direction: row;
        align-items: center;
    }
`;l.div`
    display: none;
    @media only screen and (${c.sm}) {
        display: block;
    }
`;const k=l.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
`,$=l(k)`
    padding: 1rem;
`,z=l.img.attrs(({src:e})=>({src:e,alt:"Imagen card "}))`
    width: fit-content;
`,C=l.div`
    display: flex;
    align-items: baseline;
    padding: 3px;
    @media only screen and (${c.sm}) {
        padding: 0.1rem;
    }
`,I=l(C)`
    flex-direction: column;
    padding: 10px 0px;
`,S=l(C)`
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (${c.sm}) {
        padding: 0.1rem;
    }
`,_=l.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
`,P=l.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: bold;
    padding: 10px 0px;
`,L=l.h3`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    font-weight: bold;
`,M=l.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    padding-bottom: 6px;
    display: flex;
    align-items: baseline;
`,O=l(M)`
    display: flex;
    align-items: end;
    font-size: 16px;
`,D=l.button`
    padding: 6px 6px;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
`,E=l.span`
    font-family: 'Material Symbols Outlined';
    font-size: 16px;
    padding-right: 10px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,T=l(a)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 400;
    gap: 0.25rem;
`,A=l(T)`
    color: white;
    font-size: 16px;
    padding: 0rem;
`,R=l.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    gap: 0.25rem;
`,F=l.button`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    padding: 12px 6px;
    border: none;
    border-radius: 10px;
    background-color: #ff3d00;
    color: white;
    font-weight: 400;
    cursor: pointer;
`;function G(){return o.jsx(x,{children:o.jsxs(m,{children:[o.jsx(h,{children:"ZappyMap"}),o.jsxs(f,{children:[o.jsxs(g,{children:[o.jsx(j,{to:"./legales",children:"¿Quienes somos?"}),o.jsx(j,{to:"./legales",children:"Información de contacto"})]}),o.jsxs(g,{children:[o.jsx(j,{to:"./legales",children:"Preguntas frecuentes"}),o.jsx(j,{to:"./legales",children:"Condiciones legales"})]}),o.jsxs(g,{children:[o.jsxs(A,{to:"https://yandrydev.es/",children:[o.jsx(u,{children:"rss_feed"}),"Redes sociales"]}),o.jsxs(A,{to:"https://yandrydev.es/",children:[o.jsx(u,{children:"copyright"}),"ZappyMap Inc"]})]}),o.jsx(g,{})]})]})})}const H=s.createContext(null);function U({data:e,children:n}){return o.jsx(H.Provider,{value:e,children:o.jsx(v,{children:n})})}U.Image=function(){var e;const n=s.useContext(H),i=null==(e=n.images)?void 0:e[0];return i?o.jsx(k,{children:o.jsx(w,{to:n.id,children:o.jsx(z,{alt:n.name,src:i.url,loading:"lazy"})})}):null},U.Content=function({children:e}){return o.jsx($,{children:e})},U.Header=function(){const e=s.useContext(H);return o.jsxs(o.Fragment,{children:[o.jsxs(C,{children:[o.jsxs(L,{children:["Top 1 ",o.jsx(E,{children:"editor_choice"})]}),o.jsx(D,{children:"Michelin"})]}),o.jsx(C,{children:o.jsx(w,{to:e.id,children:o.jsx(P,{children:e.name})})}),o.jsx(C,{children:o.jsxs(O,{children:[o.jsx(E,{children:"kid_star"})," Puntuación (9,6)"]})})]})},U.Description=function(){const e=s.useContext(H),[n,i]=s.useState(!1);return o.jsxs(I,{children:[o.jsxs(M,{children:[e.description," ",n&&e.description]}),o.jsx(F,{onClick:()=>i(!n),children:n?"Ver menos":"Ver más"})]})},U.Actions=function(){const e=s.useContext(H);return o.jsxs(S,{children:[o.jsxs(T,{to:e.web,children:[o.jsx(E,{children:"language"})," Web"]}),o.jsxs(T,{to:e.web,children:[o.jsx(E,{children:"menu_book"})," Menú"]}),o.jsxs(R,{href:`tel:${e.phone}`,children:[o.jsx(E,{children:"call_quality"}),e.phone]})]})};const V=l.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    max-height: 900px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: none;

    @media only screen and (${c.sm}) {
        grid-row: 1;
        grid-column: 2/6;
        display: block;
    }
    @media only screen and (${c.md}) {
        grid-column: 2/ 5;
    }
    @media only screen and (${c.lg}) {
        grid-column: 2/ 4;
    }
`,q=l.ul`
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
`,B=l.li`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.open?"#fff":"inherit"};
    transition: background-color 0.3s ease-in-out;
`,N=l.ul`
    list-style: none;
    max-height: ${e=>e.open?"1000px":"0"};
    overflow: hidden;
    opacity: ${({open:e})=>e?"1":"0"};
    transition:
        max-height 0.5s ease-in-out,
        opacity 0.5s ease-in-out;
    background-color: #fff;
    padding-left: 10px;
    margin: 0;
`,W=l.li`
    padding: 10px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        transform: scale(1.05);
    }
`,Z=l.input`
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
`,J=l.span`
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.open?"rotate(180deg)":"rotate(0)"};
`;function Q({menuOptions:e}){const[n,i]=s.useState(()=>{const n={};return e.forEach((e,i)=>{n[i]=!0}),n});return o.jsx(V,{children:o.jsx(q,{children:e.map((e,s)=>o.jsxs("ul",{children:[o.jsxs(B,{onClick:()=>(e=>{i(n=>({...n,[e]:!n[e]}))})(s),open:n[s],children:[o.jsx(_,{children:e.label}),o.jsx(J,{open:n[s],children:"▼"})]}),o.jsx(N,{open:n[s],children:e.subOptions.map((e,n)=>o.jsxs(W,{children:[o.jsx(Z,{type:"checkbox"}),e]},n))})]},e.label||s))})})}const K=s.lazy(()=>i(()=>import("./Carrousell.CGXf5dTi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),X=[{label:"Tipo de comida",subOptions:["Mediterranea","Japonesa","Mexicana","China","Turca"]},{label:"Precio",subOptions:["< 15€","15€-30€","> 30€"]},{label:"Guía Michelin",subOptions:["Guía MICHELIN","3 estrellas","2 estrellas","1 estrella"]}],Y="http://localhost:3000/api/v1/restaurant/";function ee(){var i;const a=r(),{id:l}=d(),[c]=t(),{restaurant:x}=p(e=>e.restaurant),m=(({pathId:e,baseURL:n="/api/restaurants",pageSize:i,filters:o={}})=>{const[r]=t(),a=Number(r.get("page"))||1,d=i?(a-1)*i:0;return s.useMemo(()=>{let s=e?`${n}/${e}`:n;const t=new URLSearchParams;Object.keys(o).forEach(e=>{const n=o[e];null!=n&&""!==n&&t.append(e,String(n))}),r.forEach((e,n)=>{"page"===n||"limit"===n||"offset"===n||t.has(n)||t.append(n,e)}),i&&(t.set("limit",String(i)),t.set("offset",String(d)));const a=t.toString();return a&&(s+=`?${a}`),s},[e,n,i,o,r,d])})({pathId:l,baseURL:Y,filters:{name:c.get("name"),address:c.get("address")}});return s.useEffect(()=>{if(!m)return;const n=m.replace(Y,"").startsWith("/")?m.replace(Y,""):"/"+m.replace(Y,"");s.startTransition(()=>{a(e({api_url:m,api_path:n}))})},[l,m,a]),o.jsxs(s.Suspense,{fallback:o.jsx(n,{}),children:[o.jsx(K,{}),o.jsxs(b,{children:[o.jsx(Q,{menuOptions:X}),o.jsx(y,{children:null==(i=null==x?void 0:x.data)?void 0:i.map(e=>o.jsxs(U,{data:e,children:[o.jsx(U.Image,{}),o.jsxs(U.Content,{children:[o.jsx(U.Header,{}),o.jsx(U.Description,{}),o.jsx(U.Actions,{})]})]},e.id))})]}),o.jsx(G,{})]})}export{ee as default};
