import{r as e,j as s}from"./react-core.Y2jSZEnw.js";import{C as r,M as o,S as n,a,B as i,b as t,c as l,L as d,d as c,e as p,f as h,g as u,I as x,h as m,i as j,j as f,k as b,l as g,m as k,n as y,o as v,T as C}from"./Restaurants.BztBli-G.js";import{d as M}from"./styles-vendor.B8BWolMe.js";import{u as I}from"./useAppDispatch.VU3wg90-.js";import{f as S}from"../index.1WEvsWGG.js";import{u as w}from"./useAppSelector.C5JIY7tC.js";import{d as E,u as $}from"./router-vendor.BDvUuwyP.js";import"./vendor.C1hs9ypl.js";import"./mixin_styledComponent.DHb0f0Lx.js";import"./redux-vendor.DrAjmWdk.js";const _=M.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    max-height: 900px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,L=M.ul`
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
`,T=M.li`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.open?"#fff":"inherit"};
    transition: background-color 0.3s ease-in-out;
`,O=M.ul`
    list-style: none;
    max-height: ${e=>e.open?"1000px":"0"}; 
    overflow: hidden;
    opacity: ${({open:e})=>e?"1":"0"};
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out; 
    background-color: #fff;
    padding-left: 10px;
    margin: 0;
`,N=M.li`
    padding: 10px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        transform: scale(1.05);
    }
`,H=M.input`
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
`,P=M.span`
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.open?"rotate(180deg)":"rotate(0)"};
`;function R({menuOptions:o}){const[n,a]=e.useState(()=>{const e={};return o.forEach((s,r)=>{e[r]=!0}),e});return s.jsx(_,{children:s.jsx(L,{children:o.map((e,o)=>s.jsxs("ul",{children:[s.jsxs(T,{onClick:()=>(e=>{a(s=>({...s,[e]:!s[e]}))})(o),open:n[o],children:[s.jsx(r,{children:e.label}),s.jsx(P,{open:n[o],children:"▼"})]}),s.jsx(O,{open:n[o],children:e.subOptions.map((e,r)=>s.jsxs(N,{children:[s.jsx(H,{type:"checkbox"}),e]},r))})]},e.label||o))})})}function z(){const[r,M]=e.useState(!1),_=()=>M(!0),L=()=>M(!1),{restaurant:T}=w(e=>e.restaurant),{data:O}=T??{},{id:N}=$(),[H]=E(),P="http://localhost:3000/api/v1/restaurant/",z=I(),B=(({pathId:s,baseURL:r="/api/restaurants",pageSize:o,filters:n={}})=>{const[a]=E(),i=Number(a.get("page"))||1,t=o?(i-1)*o:0;return e.useMemo(()=>{let e=s?`${r}/${s}`:r;const i=new URLSearchParams;Object.keys(n).forEach(e=>{const s=n[e];null!=s&&""!==s&&i.append(e,String(s))}),a.forEach((e,s)=>{"page"===s||"limit"===s||"offset"===s||i.has(s)||i.append(s,e)}),o&&(i.set("limit",String(o)),i.set("offset",String(t)));const l=i.toString();return l&&(e+=`?${l}`),e},[s,r,o,n,a,t])})({pathId:N,baseURL:P,filters:{name:H.get("name"),address:H.get("address")}}),U=B?((e,s)=>{const r=e.replace(s,"");return s.endsWith("/")?"/"+r:r})(B,P):"";return e.useEffect(()=>{e.startTransition(()=>{z(S({api_url:B,api_path:U}))})},[N,B,U,z]),s.jsx(o,{children:s.jsxs(n,{children:[s.jsx(a,{children:s.jsx(R,{menuOptions:[{label:"Tipo de comida ",subOptions:["Mediterranea","Japonesa","Mexicana","China","Turca"]},{label:"Precio",subOptions:["Menos de 15€ por persona.","Entre 15€ y 30€ por persona.","Más de 30€ por persona."]},{label:"Guía Michelin",subOptions:["Guía MICHELIN","3 estrellas MICHELIN","2 estrellas MICHELIN","1 estrella MICHELIN"]}]})}),s.jsx(i,{children:(null==T?void 0:T.count)>0?O.map(e=>{var o;return s.jsxs(t,{children:[e.images.map((r,o)=>0===o?s.jsx(l,{children:s.jsx(d,{to:e.id,children:s.jsx(c,{alt:`${e.name} - Imagen ${o+1}`,src:r.url,loading:"lazy"})})},r.url||o):null),s.jsxs(p,{children:[s.jsxs(h,{children:[s.jsxs(u,{children:["Top 1 ",s.jsx(x,{children:"editor_choice"})]}),s.jsx(m,{children:"Michelin"})]}),s.jsx(h,{children:s.jsx(d,{to:e.id,children:s.jsx(j,{children:e.name})})}),s.jsx(h,{children:s.jsxs(f,{children:[s.jsx(x,{children:"kid_star"})," Puntuación (9,6)"]})}),s.jsx(h,{children:s.jsxs(f,{children:[s.jsx(x,{children:"location_on"}),null==(o=e.location)?void 0:o.address]})}),s.jsx(h,{children:s.jsxs(f,{children:[s.jsx(x,{children:"restaurant"}),e.type_food," . Precio medio: 20€"]})}),s.jsxs(b,{children:[s.jsxs(g,{children:[e.description," ",r&&e.description]}),s.jsx(k,{onClick:r?L:_,children:r?"Ver menos":"Ver más"})]}),s.jsxs(y,{children:[s.jsxs(v,{to:e.web,children:[s.jsx(x,{children:"language"})," Web"]}),s.jsxs(v,{to:e.web,children:[s.jsx(x,{children:"menu_book"})," Menú"]}),s.jsxs(C,{href:`tel:${e.phone}`,children:[s.jsx(x,{children:"call_quality"}),e.phone]})]})]})]},e.id)}):s.jsx(h,{children:s.jsx(g,{children:"No hay restaurantes disponibles"})})})]})})}export{z as default};
