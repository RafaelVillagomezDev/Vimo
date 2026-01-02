import{r as e,j as t}from"./react-core.Y2jSZEnw.js";import{d as n}from"./styles-vendor.B8BWolMe.js";import{d as i,u as o}from"./useAppSelector.DxXDhr7t.js";import{u as r,e as s}from"./router-vendor.B-vwFvdr.js";import{N as a}from"./Navbar.dy4uQqbn.js";import"./vendor.C1hs9ypl.js";const c=n.div`
    width: 100%;
    max-width: 500px;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center; 
    flex-direction: row;
    border-radius: 12px; 
    overflow: hidden; 
    

`,l=n.input`
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem; 
    border: none;
    outline: none;
    background-color: white;
    flex-grow: 1;
`,d=n.button`
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
`,m=n.span`
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
   
    @media only screen and (${i.sm}) {
        font-size: 35px;
    }
`;function u(){const[n,i]=r(),a=s(),u=n.get("name")||"",[f,p]=e.useState(u),{restaurant:h}=o(e=>e.restaurant),{data:g}=h??{};function x(){const e=Object.fromEntries(n.entries());""===f.trim()?(delete e.name,i(e,{replace:!0})):i({...e,name:f.trim()},{replace:!0})}function y(){x()}return e.useEffect(()=>{const e=n.get("name")||"";f!==e&&p(e)},[n]),e.useEffect(()=>{const e=n.get("name")||"";if(f.trim()!==e.trim()){const e=setTimeout(()=>{x()},500);return()=>clearTimeout(e)}},[f]),e.useEffect(()=>{g&&1===g.length&&""!==f.trim()&&a(`/restaurants/${g[0].id}`)},[g,a,f]),t.jsx(t.Fragment,{children:t.jsxs(c,{children:[t.jsx(m,{children:"map"}),t.jsx(l,{value:f,onKeyDown:function(e){"Enter"===e.key&&y()},onChange:e=>p(e.target.value),name:"valueSearch",type:"text",placeholder:"Restaurante,Sitio,Transporte..",id:"seeker"}),t.jsx(d,{onClick:y,children:"Buscar"})]})})}const f=n.div`
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`,p=n.div`
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

    @media only screen and (${i.sm}) {
        margin: 4rem;
        padding: 2rem;
        border-radius: 12px;
    }
`;n.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 4vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: white;
    flex-direction: column;
    justify-content: center;
    
`;const h=n.p`
    font-size: 22px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    line-height: normal;
    word-spacing: 3px;
    padding-bottom:2rem;
    color: white;

     @media only screen and (${i.sm}) {
        font-size: 30px;
    }

`;function g(){return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),t.jsx(f,{children:t.jsxs(p,{children:[t.jsx(h,{children:"Planea y reserva en cualquiera de nuestras ilimitadas opciones"}),t.jsx(u,{})]})})]})}export{g as default};
