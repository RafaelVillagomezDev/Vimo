import{r as e,j as t}from"./react-core.hIu8Leyl.js";import{S as n,Q as o}from"./vendor.Dqz0mnuI.js";import{h as r,a as i}from"../index.vfuDfqJv.js";import{d as s}from"./styles-vendor.BBhjEPUr.js";import{d as a}from"./Footer.B68oxbZL.js";import{u as c,g as d,e as l}from"./router-vendor.DJhrlxSV.js";import{N as m}from"./Navbar.DOuCXdC6.js";import"./redux-vendor.CF7IZYAF.js";const f=s.div`
    width: 100%;
    max-width: 500px;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 12px;
    overflow: hidden;
`,u=s.input`
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    background-color: white;
    flex-grow: 1;
`,p=s.button`
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
`,h=s.span`
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

    @media only screen and (${a.sm}) {
        font-size: 35px;
    }
`;function g(){const s=n(),a=c(),m=d(),[g,x]=l(),y=o(r),[w,j]=e.useState(y),b=e.useRef(!1);e.useEffect(()=>{b.current||j(y)},[y]),e.useEffect(()=>{if(!b.current)return;const e=setTimeout(()=>{s(i(w))},300);return()=>clearTimeout(e)},[w,s]);const v=()=>{b.current=!1;const e=w.trim().toLowerCase();if("/restaurants"!==m.pathname)a(`/restaurants?name=${encodeURIComponent(e)}&offset=0&limit=5`);else{const t=new URLSearchParams;e&&t.set("name",e);const n=g.get("type_food"),o=g.get("address");n&&t.set("type_food",n.toLowerCase()),o&&t.set("address",o.toLowerCase()),t.set("offset","0"),t.set("limit",g.get("limit")||"5"),x(t,{replace:!0})}s(i(e))};return t.jsxs(f,{children:[t.jsx(h,{children:"search"}),t.jsx(u,{value:w,onChange:e=>{b.current=!0,j(e.target.value)},onKeyDown:e=>"Enter"===e.key&&v(),placeholder:"Busca en 1200 restaurantes..."}),t.jsx(p,{onClick:v,children:"Buscar"})]})}const x=s.div`
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,y=s.div`
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

    @media only screen and (${a.sm}) {
        margin: 4rem;
        padding: 2rem;
        border-radius: 12px;
    }
`;s.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 4vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: white;
    flex-direction: column;
    justify-content: center;
`;const w=s.p`
    font-size: 22px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    line-height: normal;
    word-spacing: 3px;
    padding-bottom: 2rem;
    color: white;

    @media only screen and (${a.sm}) {
        font-size: 30px;
    }
`;function j(){return t.jsxs(t.Fragment,{children:[t.jsx(m,{}),t.jsx(x,{children:t.jsxs(y,{children:[t.jsx(w,{children:"Planea y reserva en cualquiera de nuestras ilimitadas opciones"}),t.jsx(g,{})]})})]})}export{j as default};
