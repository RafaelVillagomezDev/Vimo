import{j as e,r as i}from"./react-core.Y2jSZEnw.js";import{d as n}from"./styles-vendor.B8BWolMe.js";import{d as o}from"./mixin_styledComponent.DHb0f0Lx.js";import"./vendor.C1hs9ypl.js";const r=n.section`
    display: grid;

    grid-template-columns: repeat(12, 1fr); 
    grid-auto-rows: min-content;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 1rem;
    background-color: #f5f5f5;

    @media only screen and (${o.md}) {
        padding: 2rem;
    }
`,s=n.div`
    grid-column: 1 / -1; 
    
    @media only screen and (${o.md}) {
        grid-column: 2 / 12;
    }
`,t=n.ul`
    list-style: none;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e0e0e0;
    overflow-x: auto; 
    &::-webkit-scrollbar { display: none; }
`,a=n.li`
    cursor: pointer;
    font-family: inherit; /* Mejor que forzar Arial */
    font-size: 1rem;
    padding: 10px 5px;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    color: ${e=>e.$active?"#000":"#666"};
    font-weight: ${e=>e.$active?"700":"500"};
    position: relative;

    /* Indicador visual de activo permanente, no solo hover */
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${e=>e.$active?"black":"transparent"};
        transition: background-color 0.3s;
    }

    &:hover {
        color: #000;
    }

    @media only screen and (${o.md}) {
       font-size: 1.25rem;
    }
`,d=n.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;function l(){return e.jsxs("div",{children:[e.jsx("h2",{children:"Descripción"}),e.jsx("p",{children:"Esta es la sección de descripción. Aquí puedes agregar detalles sobre el contenido que estás mostrando."})]})}const c={desc:e.jsx(l,{}),menu:e.jsx(l,{}),reviews:e.jsx(l,{})},p=[{id:"desc",label:"Descripción"},{id:"menu",label:"Menú"},{id:"reviews",label:"Opiniones"}];function m(){const[n,o]=i.useState("desc"),[l,m]=i.useTransition(),u=i.useMemo(()=>c[n]||c.desc,[n]),x=i.useCallback(e=>{m(()=>{o(e)})},[]);return e.jsx(r,{children:e.jsx(s,{children:e.jsxs(d,{children:[e.jsx(t,{style:{opacity:l?.7:1,transition:"opacity 0.2s"},children:p.map(i=>e.jsx(a,{$active:n===i.id,onClick:()=>x(i.id),children:i.label},i.id))}),e.jsx(i.Suspense,{fallback:e.jsx("div",{style:{height:"200px"},children:"Cargando..."}),children:e.jsx("div",{style:{opacity:l?.6:1,transition:"opacity 0.3s ease",filter:l?"grayscale(0.5)":"none"},children:u})})]})})})}export{m as default};
