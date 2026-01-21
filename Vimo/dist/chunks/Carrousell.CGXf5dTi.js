import{r as e,j as n}from"./react-core.DzcB_2w7.js";import{d as t}from"./styles-vendor.DBgNySS0.js";import{d as r}from"./useAppSelector.D6_7lV5f.js";import{u as o,e as i,f as s}from"./router-vendor.DNrqJuUa.js";import{N as a}from"./Navbar.DrWqh0ix.js";import"./vendor.hSDL9w0M.js";const c=t.div`
    width: 100%;
    max-width: 500px;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 12px;
    overflow: hidden;
`,l=t.input`
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    background-color: white;
    flex-grow: 1;
`,d=t.button`
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
`,m=t.span`
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

    @media only screen and (${r.sm}) {
        font-size: 35px;
    }
`;function u(){const[t,r]=o(),a=i(),u=s(),p=e.useRef(!1),[f,h]=e.useState(t.get("name")||""),g=e.useCallback((e,n=!1)=>{const o=e.trim();if("/restaurants"!==u.pathname)return void(""!==o&&a(`/restaurants?name=${encodeURIComponent(o)}`));const i=new URLSearchParams(t);o?i.set("name",o):i.delete("name"),r(i,{replace:!n}),p.current=!1},[u.pathname,a,t,r]);e.useEffect(()=>{const e=t.get("name")||"";p.current||h(e)},[t]),e.useEffect(()=>{if(!p.current)return;const e=t.get("name")||"";if(f.trim()===e.trim())return;const n=setTimeout(()=>{g(f,!1)},500);return()=>clearTimeout(n)},[f,g,t]);const x=()=>{p.current=!1,g(f,!0)};return n.jsxs(c,{children:[n.jsx(m,{children:"map"}),n.jsx(l,{value:f,onKeyDown:e=>{"Enter"===e.key&&x()},onChange:e=>{p.current=!0,h(e.target.value)},placeholder:"Restaurante, Sitio...",id:"seeker"}),n.jsx(d,{onClick:x,children:"Buscar"})]})}const p=t.div`
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,f=t.div`
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

    @media only screen and (${r.sm}) {
        margin: 4rem;
        padding: 2rem;
        border-radius: 12px;
    }
`;t.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 4vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: white;
    flex-direction: column;
    justify-content: center;
`;const h=t.p`
    font-size: 22px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    line-height: normal;
    word-spacing: 3px;
    padding-bottom: 2rem;
    color: white;

    @media only screen and (${r.sm}) {
        font-size: 30px;
    }
`;function g(){return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),n.jsx(p,{children:n.jsxs(f,{children:[n.jsx(h,{children:"Planea y reserva en cualquiera de nuestras ilimitadas opciones"}),n.jsx(u,{})]})})]})}export{g as default};
