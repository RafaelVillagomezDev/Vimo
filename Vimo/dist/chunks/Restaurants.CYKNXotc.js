const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/Carrousell.4ytHsItf.js","chunks/react-core.hIu8Leyl.js","chunks/vendor.Dqz0mnuI.js","assets/vendor.ytJtD8ZQ.css","index.vfuDfqJv.js","chunks/router-vendor.DJhrlxSV.js","chunks/redux-vendor.CF7IZYAF.js","chunks/styles-vendor.BBhjEPUr.js","assets/index.Cr8nHPJu.css","chunks/Footer.B68oxbZL.js","chunks/Navbar.DOuCXdC6.js"])))=>i.map(i=>d[i]);
import{a as e,b as o,c as r,s as t,f as n,L as s,_ as i}from"../index.vfuDfqJv.js";import{j as a,r as l}from"./react-core.hIu8Leyl.js";import{C as c,a as d,L as p,b as m,c as f,e as h,f as u,I as x,B as g,g as b,h as j,i as v,j as w,k as y,l as k,m as C,T as $,d as S,u as _,n as P,M as L,o as z,p as T,F as E}from"./Footer.B68oxbZL.js";import{u as M}from"./useAppSelector.BUBff-Wi.js";import{d as I}from"./styles-vendor.BBhjEPUr.js";import{e as O}from"./router-vendor.DJhrlxSV.js";import"./vendor.Dqz0mnuI.js";import"./redux-vendor.CF7IZYAF.js";const q=I.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: 2rem 0;
`,A=I.button`
    padding: 8px 16px;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;
    border-radius: 4px;
    /* Añadimos transición a todas las propiedades */
    transition: all 0.3s ease-in-out; 

    &:disabled {
        background: #f5f5f5;
        color: #ccc;
        cursor: not-allowed;
        border-color: #eee;
    }

    &:hover:not(:disabled) {
        background: #f0f0f0;
        border-color: #bbb;
        transform: translateY(-1px); // Pequeño salto hacia arriba
    }

    &:active:not(:disabled) {
        transform: translateY(0); // Vuelve al sitio al pulsar
        background: #e0e0e0;
    }
`,F=I.button`
    width: 40px;
    height: 40px;
    border: 1px solid ${e=>e.$active?"#ff4757":"#ddd"};
    background: ${e=>e.$active?"#ff4757":"white"};
    color: ${e=>e.$active?"white":"#333"};
    border-radius: 4px;
    cursor: pointer;
    font-weight: ${e=>e.$active?"bold":"normal"};
    /* Transición suave para el cambio de color de fondo y borde */
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        border-color: #ff4757;
        background: ${e=>e.$active?"#ff4757":"#fff1f2"};
    }

    &:active {
        transform: scale(0.95); // Efecto de presión
    }
`,N=({totalItems:e,itemsPerPage:o,currentPage:r,onPageChange:t})=>{const n=Math.ceil(e/o);if(n<=1)return null;const s=Array.from({length:n},(e,o)=>o+1);return a.jsxs(q,{children:[a.jsx(A,{disabled:1===r,onClick:()=>t(r-1),children:"« Anterior"}),s.map(e=>a.jsx(F,{$active:e===r,onClick:()=>t(e),children:e},e)),a.jsx(A,{disabled:r===n,onClick:()=>t(r+1),children:"Siguiente »"})]})},B=l.createContext(null);function R({data:e,children:o}){return a.jsx(B.Provider,{value:e,children:a.jsx(c,{children:o})})}R.Image=function(){var e;const o=l.useContext(B),r=null==(e=o.images)?void 0:e[0];return r?a.jsx(d,{children:a.jsx(p,{to:o.id,children:a.jsx(m,{alt:o.name,src:r.url,loading:"lazy"})})}):null},R.Content=function({children:e}){return a.jsx(f,{children:e})},R.Header=function({id:e}){const o=l.useContext(B);return a.jsxs(a.Fragment,{children:[a.jsxs(h,{children:[a.jsxs(u,{children:["Top ",e," ",a.jsx(x,{children:"editor_choice"})]}),a.jsx(g,{children:"Michelin"})]}),a.jsx(h,{children:a.jsx(p,{to:o.id,children:a.jsx(b,{children:o.name})})}),a.jsx(h,{children:a.jsxs(j,{children:[a.jsx(x,{children:"kid_star"})," Puntuación (9,6)"]})}),a.jsx(h,{children:a.jsxs(j,{children:[a.jsx(x,{children:"fork_spoon"})," ",o.type_food]})})]})},R.Description=function(){const e=l.useContext(B),[o,r]=l.useState(!1);return a.jsxs(v,{children:[a.jsxs(w,{children:[e.description," ",o&&e.description]}),a.jsx(y,{onClick:()=>r(!o),children:o?"Ver menos":"Ver más"})]})},R.Actions=function(){const e=l.useContext(B);return a.jsxs(k,{children:[a.jsxs(C,{to:e.web,children:[a.jsx(x,{children:"language"})," Web"]}),a.jsxs(C,{to:e.web,children:[a.jsx(x,{children:"menu_book"})," Menú"]}),a.jsxs($,{href:`tel:${e.phone}`,children:[a.jsx(x,{children:"call_quality"}),e.phone]})]})};const V=()=>{const[e,o]=O(),r=l.useMemo(()=>{var o,r,t;const n=(null==(o=e.get("name"))?void 0:o.toLowerCase())||"",s=(null==(r=e.get("address"))?void 0:r.toLowerCase())||"",i=(null==(t=e.get("type_food"))?void 0:t.toLowerCase())||"",a=parseInt(e.get("limit")||"5",10),l=parseInt(e.get("offset")||"0",10);return{name:n,address:s,type_food:i,limit:isNaN(a)||a<=0?5:a,offset:isNaN(l)||l<0?0:l}},[e]),t=l.useCallback(()=>{o({limit:"5",offset:"0"},{replace:!0})},[o]);return{...r,setSearchParams:o,searchParams:e,clearFilters:t}},D=I.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    max-height: 800px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: none;

    @media only screen and (${S.sm}) {
        grid-row: 1;
        grid-column: 2/6;
        display: block;
    }
    @media only screen and (${S.md}) {
        grid-column: 2/ 5;
    }
    @media only screen and (${S.lg}) {
        grid-column: 2/ 4;
    }
`,H=I.ul`
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
`,U=I.div`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.open?"#fff":"inherit"};
    transition: background-color 0.3s ease-in-out;
`,Y=I.ul`
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
`,G=I.li`
    padding: 10px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        transform: scale(1.05);
    }
`,J=I.input`
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
`,W=I.span`
    transition: transform 0.3s ease-in-out;
    transform: ${e=>e.open?"rotate(180deg)":"rotate(0)"};
`,K=I.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
`,Q=I.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    margin-top: 1.5rem;
    padding: 0.8rem;
    background-color: transparent;
    color: #718096;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #f7fafc;
        color: #e53e3e;
        border-color: #feb2b2;
    }

    &:active {
        transform: scale(0.98);
    }
`,X=I.span`
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px; 
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  color: inherit; 
  
  /* Centrado vertical si está junto a texto */
  vertical-align: middle;
  
  /* Evita que se seleccione el texto del icono */
  user-select: none;
`;function Z({menuOptions:e}){const{type_food:o,address:r,name:t,limit:n,setSearchParams:s}=V(),i=l.useMemo(()=>!!(o||t||r),[o,t,r]),[c,d]=l.useState(()=>{const o={};return e.forEach((e,r)=>{o[r]=!0}),o});return a.jsxs(D,{children:[a.jsx(H,{children:e.map((e,t)=>a.jsxs("li",{style:{listStyle:"none"},children:[a.jsxs(U,{as:"div",onClick:()=>(e=>{d(o=>({...o,[e]:!o[e]}))})(t),open:c[t],children:[a.jsx(K,{children:e.label}),a.jsx(W,{open:c[t],children:"▼"})]}),a.jsx(Y,{open:c[t],children:e.subOptions.map((t,i)=>{const l="Tipo de comida"===e.label&&o===t.toLowerCase()||"Ciudad"===e.label&&r===t.toLowerCase();return a.jsxs(G,{children:[a.jsx(J,{type:"checkbox",checked:l,onChange:()=>((e,o)=>{const r=o.toLowerCase();let t="type_food";"Ciudad"===e&&(t="address"),"Precio"===e&&(t="price"),s(e=>{var o;const s=new URLSearchParams(e);return(null==(o=e.get(t))?void 0:o.toLowerCase())===r?s.delete(t):s.set(t,r),s.set("offset","0"),s.set("limit",String(n)),s},{replace:!0})})(e.label,t)}),t]},`${e.label}-${i}`)})})]},`menu-${t}`))}),i&&a.jsxs(Q,{onClick:()=>s({limit:String(n),offset:"0"},{replace:!0}),children:[a.jsx(X,{children:"filter_alt_off"}),"Limpiar filtros"]})]})}const ee=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  width: 100%;
  min-height: 400px;
  text-align: center;
`,oe=I.div`
  background-color: #fff5f5;
  color: #e53e3e;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  span {
    font-size: 3rem;
  }
`,re=I.h3`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 0.75rem;
  font-weight: 700;
`,te=I.p`
  color: #718096;
  font-size: 1.1rem;
  max-width: 400px;
  line-height: 1.6;
`,ne=I.span`
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px; 
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  color: inherit; 
  
  /* Centrado vertical si está junto a texto */
  vertical-align: middle;
  
  /* Evita que se seleccione el texto del icono */
  user-select: none;
`,se=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  width: 100%;
  text-align: center;
`,ie=I.div`
  background-color: #f7fafc; /* Gris muy suave */
  color: #a0aec0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  border: 2px dashed #e2e8f0;

  span {
    font-size: 4rem;
  }
`,ae=I.h2`
  font-size: 1.5rem;
  color: #4a5568;
  margin-bottom: 1rem;
  font-weight: 600;
`,le=I.p`
  color: #718096;
  font-size: 1rem;
  max-width: 320px;
  line-height: 1.6;
  margin-bottom: 2rem;
`,ce=I.button`
  background: none;
  border: 2px solid #3182ce;
  color: #3182ce;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #3182ce;
    color: white;
  }
`,de=({message:e})=>a.jsxs(ee,{children:[a.jsx(oe,{children:a.jsx(ne,{style:{fontSize:"3.5rem"},children:"cloud_off"})}),a.jsx(re,{children:e}),a.jsx(te,{children:"Parece que tenemos problemas para conectar con el servidor. Por favor, revisa tu conexión a internet o intenta recargar la página."})]}),pe=()=>{const{clearFilters:o}=V(),r=_();return a.jsxs(se,{children:[a.jsx(ie,{children:a.jsx(ne,{children:"search_off"})}),a.jsx(ae,{children:"No encontramos lo que buscas"}),a.jsx(le,{children:"No hay restaurantes que coincidan con tus filtros actuales. Intenta buscar con otros términos o limpia los filtros."}),a.jsx(ce,{onClick:()=>{r(e("")),o()},children:"Limpiar todos los filtros"})]})},me=l.lazy(()=>i(()=>import("./Carrousell.4ytHsItf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),fe=[{label:"Tipo de comida",subOptions:["Japonesa","Española","China","Turca"]},{label:"Ciudad",subOptions:["Madrid","Barcelona","Sevilla","Bilbao"]}];function he(){const i=_(),{name:c,address:d,type_food:p,limit:m,offset:f,setSearchParams:h}=V(),u=M(o),x=M(r),g=M(t),[b,j]=l.useState(!1);l.useEffect(()=>{let e;return"loading"===g?e=setTimeout(()=>j(!0),200):j(!1),()=>clearTimeout(e)},[g]),l.useEffect(()=>{i(e(c)),l.startTransition(()=>{const e=new URLSearchParams;c.trim()&&e.append("name",c.trim().toLowerCase()),d.trim()&&e.append("address",d.trim().toLowerCase()),p.trim()&&e.append("type_food",p.trim().toLowerCase()),e.append("offset",f.toString()),e.append("limit",m.toString());const o=`?${e.toString()}`;i(n({api_url:`http://localhost:3000/api/v1/restaurant${o}`,api_path:o}))})},[c,d,p,m,f,i]);const v=l.useCallback(e=>{const o=(e-1)*m;h(e=>{const r=new URLSearchParams(e);return r.set("offset",o.toString()),r},{replace:!0}),window.scrollTo({top:0,behavior:"smooth"})},[m,h]),w=Math.floor(f/m)+1;return a.jsxs(l.Suspense,{fallback:a.jsx(s,{}),children:[a.jsx(me,{}),a.jsxs(P,{children:[a.jsx(Z,{menuOptions:fe}),a.jsxs(L,{style:{position:"relative",minHeight:"600px"},children:[b&&u.length>0&&a.jsx(z,{children:a.jsx(s,{isOverlay:!0})}),a.jsx(T,{$status:g,children:"loading"===g&&0===u.length?a.jsx(s,{}):"failed"===g?a.jsx(de,{message:"Error de conexión"}):"success"===g&&0===u.length?a.jsx(pe,{}):u.map((e,o)=>a.jsxs(R,{data:e,children:[a.jsx(R.Image,{}),a.jsxs(R.Content,{children:[a.jsx(R.Header,{id:o+1+f}),a.jsx(R.Description,{}),a.jsx(R.Actions,{})]})]},e.id))})]})]}),"success"===g&&x>m&&a.jsx(N,{totalItems:x,itemsPerPage:m,currentPage:w,onPageChange:v}),a.jsx(E,{})]})}export{he as default};
