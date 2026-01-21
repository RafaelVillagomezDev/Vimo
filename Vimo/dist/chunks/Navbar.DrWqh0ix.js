import{j as e}from"./react-core.DzcB_2w7.js";import{d as i}from"./styles-vendor.DBgNySS0.js";import{d as o}from"./useAppSelector.D6_7lV5f.js";import{L as n}from"./router-vendor.DNrqJuUa.js";const s=i.nav`
    background-color: ${e=>e.theme.colors.blueDeep};
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    width: -webkit-fill-available;
`,r=i.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,t=i(r)`
    display: none;
    @media only screen and (${o.sm}) {
        display: flex;
    }
`,a=i(r)`
    display: flex;
`,l=i(n)`
    display: flex;
    align-items: center;
`,c=i.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
    @media only screen and (${o.sm}) {
        font-size: 35px;
    }
`,d=i.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`,p=i(n)`
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
`;function f(){return e.jsx(e.Fragment,{children:e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{to:"/",children:e.jsx(c,{children:"ZappyMap"})})}),e.jsx(t,{children:e.jsxs(d,{children:[e.jsx(p,{to:"/",children:"Inicio"}),e.jsx(p,{to:"/restaurants",children:"Restaurantes"}),e.jsx(p,{to:"/destinations",children:"Discotecas"}),e.jsx(p,{to:"sites",children:"Sitios"}),e.jsx(p,{to:"destinations",children:"Transporte"})]})})]})})}export{f as N};
