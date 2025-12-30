import{j as e}from"./react-core.Y2jSZEnw.js";import{d as o}from"./styles-vendor.B8BWolMe.js";import{d as i}from"./mixin_styledComponent.DHb0f0Lx.js";import{L as n}from"./router-vendor.BDvUuwyP.js";const s=o.nav`
    background-color: ${e=>e.theme.colors.blueDeep};
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    width: -webkit-fill-available;
`,t=o.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,r=o(t)`
    display: none;
    @media only screen and (${i.sm}) {
        display: flex;
    }
`,a=o(t)`
    display: flex;
`,l=o.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
    @media only screen and (${i.sm}) {
        font-size: 35px;
    }
`,d=o.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`,c=o(n)`
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
`;function p(){return e.jsx(e.Fragment,{children:e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{children:"ZappyMap"})}),e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(c,{to:"/restaurants",children:"Restaurantes"}),e.jsx(c,{to:"/destinations",children:"Discotecas"}),e.jsx(c,{to:"sites",children:"Sitios"}),e.jsx(c,{to:"destinations",children:"Transporte"})]})})]})})}export{p as N};
