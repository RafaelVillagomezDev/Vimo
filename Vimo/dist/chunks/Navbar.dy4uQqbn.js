import{j as e}from"./react-core.Y2jSZEnw.js";import{d as o}from"./styles-vendor.B8BWolMe.js";import{d as i}from"./useAppSelector.DxXDhr7t.js";import{L as r}from"./router-vendor.B-vwFvdr.js";const s=o.nav`
    background-color: ${e=>e.theme.colors.blueDeep};
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    width: -webkit-fill-available;
`,n=o.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,t=o(n)`
    display: none;
    @media only screen and (${i.sm}) {
        display: flex;
    }
`,a=o(n)`
    display: flex;
`,l=o.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
    @media only screen and (${i.sm}) {
        font-size: 35px;
    }
`,c=o.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`,d=o(r)`
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
`;function p(){return e.jsx(e.Fragment,{children:e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{children:"ZappyMap"})}),e.jsx(t,{children:e.jsxs(c,{children:[e.jsx(d,{to:"/restaurants",children:"Restaurantes"}),e.jsx(d,{to:"/destinations",children:"Discotecas"}),e.jsx(d,{to:"sites",children:"Sitios"}),e.jsx(d,{to:"destinations",children:"Transporte"})]})})]})})}export{p as N};
