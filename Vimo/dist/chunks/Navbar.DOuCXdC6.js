import{j as e}from"./react-core.hIu8Leyl.js";import{d as o}from"./styles-vendor.BBhjEPUr.js";import{d as r}from"./Footer.B68oxbZL.js";import{L as i}from"./router-vendor.DJhrlxSV.js";const n=o.nav`
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
    justify-content: flex-end;
    align-items: center;
    background-color: whitesmoke;
`,s=o.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,l=o(s)`
    display: none;
    @media only screen and (${r.sm}) {
        display: flex;
    }
`,a=o(s)`
    display: flex;
`,c=o(i)`
    display: flex;
    align-items: center;
`,d=o.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
    @media only screen and (${r.sm}) {
        font-size: 35px;
    }
`,f=o.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`,x=o(i)`
    color:  ${e=>e.color||"white"};
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    font-weight: bold;
    font-size: ${e=>e.fontSize||"16px"};
    /* Color cuando el enlace está activo */
    &.active {
        background-color: '#6200ea'; 
        color: #fff;
    }

    /* Color al pasar el ratón */
    &:hover {
        background-color: ${e=>e.hoverColor||"rgba(255, 255, 255, 0.1)"};
    }
`;function p(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsx(f,{children:e.jsx(x,{to:"/register",color:"black",fontSize:"14px",children:"REGISTRAR UN SITIO"})})}),e.jsxs(n,{children:[e.jsx(a,{children:e.jsx(c,{to:"/",children:e.jsx(d,{children:"ZappyMap"})})}),e.jsx(l,{children:e.jsxs(f,{children:[e.jsx(x,{to:"/",children:"Inicio"}),e.jsx(x,{to:"/restaurants",children:"Restaurantes"})]})})]})]})}export{p as N};
