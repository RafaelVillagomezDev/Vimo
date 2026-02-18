import{j as e,r}from"./react-core.hIu8Leyl.js";import{N as o}from"./Navbar.DOuCXdC6.js";import{S as a,U as i,V as n,W as t,X as s,Y as l,Z as d,Q as c}from"./vendor.Dqz0mnuI.js";import{d as p,m,l as x}from"./styles-vendor.BBhjEPUr.js";import{d as f,u as g,F as h}from"./Footer.B68oxbZL.js";import{u,e as b,g as j}from"../index.vfuDfqJv.js";import"./router-vendor.DJhrlxSV.js";import"./redux-vendor.CF7IZYAF.js";const y=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    gap: 0; 
    @media only screen and (${f.sm}) {
        flex-direction: row ;
        gap: 0; 
        align-items: center;
    }
`,v=p.div`
    display: flex;
    align-items: center;
    position: relative;
    flex: 1;
    padding: 1rem 0;


    &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 50%;
        left: calc(30px + 1rem); 
        right: 1rem;
        height: 2px;
        background-color: ${e=>e.$completed?"black":"#e0e0e0"};
        transition: background-color 0.3s ease;
        z-index: -1;
    }

    @media only screen and (${f.sm}) {
        width: 100%;
        padding: 0.5rem 0;


        &:not(:last-child)::after {
            top: 40px; 
            left: 15px; 
            width: 2px;
            height: calc(100% - 20px);
            right: auto;
        }
    }
`,w=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${e=>e.$active||e.$completed?"black":"#ccc"};
    color: white;
    font-weight: bold;
    font-size: 14px;
    margin-right: 1rem;
    z-index: 2;
`,$=p.p`
    margin: 0;
    font-size: 14px;
    font-weight: ${e=>e.$active?"600":"300"};
    color: ${e=>e.$active||e.$completed?"black":"#999"};
    flex: 1;
    padding-right: 1rem; /* Espacio para que la línea no pise el texto en desktop */
`;function k({steps:r=[],activeStep:o=1}){return e.jsx(y,{children:r.map(r=>{const a=o>r.id,i=o===r.id;return e.jsxs(v,{$active:i,$completed:a,children:[e.jsx(w,{$active:i,$completed:a,children:a?"✓":r.id}),e.jsx($,{$active:i,$completed:a,children:r.text})]},r.id)})})}const z=p.div`
    display: flex;
    justify-content: center;    
    background-color: #f9f9f9; 
    box-sizing: border-box;
    min-height: 100vh;
    padding: 2rem; /* Usamos padding en lugar de margin para evitar colapsos */

    @media ${f.sm} {
        padding: 1rem;
        width: 100%;
    }
`,C=p.div`
    width: 100%;
    max-width: 900px; 
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    /* Estabilización: */
    min-height: 700px; /* Ajusta este valor según el paso más alto */
    
    @media ${f.sm} {
        padding: 1rem; /* Padding reducido en móvil */
        min-height: auto; 
    }
`;p.div`
    width: 100%;
    flex: 1; /* Empuja el ButtonContainer hacia abajo */
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden; /* Evita que el translateX cree scroll lateral */
    min-height: 450px; /* IMPORTANTE: Mantiene el tamaño constante entre pasos */
`;const E=p.h1`
    font-size: 28px;
    margin-bottom: 1rem;
    font-family: 'Poppins', sans-serif;
    color: darkslategrey;
    font-weight: 700;
    width: 100%;
    text-align: left;

    @media ${f.sm} {
        font-size: 32px;
    }   
`;p.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem; 

    input, select, textarea {
        width: 100%; 
        padding: 0.8rem;
        border: 1px solid #ccc;
        border-radius: 6px;
        box-sizing: border-box; 
        font-size: 16px;
        outline-color: #007bff;
    }

    label {
        font-weight: 600;
        margin-bottom: -1rem; 
        color: #333;
    }
`;const S=p.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    max-width: 550px;
    margin-top: 2rem;
    margin-bottom: 2rem; /* Espacio al final */
`,F=p.button`
    flex: 1;
    padding: 0.8rem 1.5rem;
    font-family: 'inter', sans-serif;
    font-size: 15px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 2px solid ${e=>e.$secondary?"darkslategrey":"#007bff"};
    background-color: ${e=>e.$secondary?"transparent":"#007bff"};
    color: ${e=>e.$secondary?"darkslategrey":"white"};

    &:hover:not(:disabled) {
        background-color: ${e=>e.$secondary?"darkslategrey":"#0056b3"};
        color: white;
        transform: translateY(-1px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &:disabled {
        background-color: #e2e8f0;
        border-color: #e2e8f0;
        color: #94a3b8;
        cursor: not-allowed;
    }
`,A=m`
  from {
    opacity: 0;
    transform: translateY(10px); /* Cambiado a Y para evitar ensanchar el contenedor */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;p.div`
  animation: ${A} 0.4s ease-out forwards;
  width: 100%;
  height: 100%;
`;const M=m`
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
`,V=x`
    ${e=>e.$hasError&&x`
        border-color: #d32f2f !important;
        &:focus {
            border-color: #d32f2f !important;
            box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1) !important;
        }
    `}
`,R=p.div`
    width: 100%;
    padding-top: 1rem;
`,_=p.form`
    display: flex;
    flex-direction: column;
    gap: 1rem; 
`,I=p.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 25px; 
    width: 100%;
`,T=p.label`
    font-size: 16px;
    font-weight: bold;
    font-family: 'inter', sans-serif;
    color: darkslategrey;
    margin-bottom: 8px; 
    display: block;
`,L=p.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 550px;

    & > svg, & > span.icon-placeholder {
        position: absolute;
        left: 1rem;
        color: darkslategrey;
        z-index: 2; 
        pointer-events: none;
    }
`,N=p.div`
    position: absolute;
    left: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    pointer-events: none;
    z-index: 2; 
    top: 23px;
    .flag {
        font-size: 1.2rem;
    }

    .prefix {
        font-family: 'inter', sans-serif;
        font-size: 14px;
        font-weight: bold;
        color: darkslategrey;
        border-right: 1px solid #ccc;
        padding-right: 0.5rem;
    }
`,Y=p.input`
    padding: 1rem;
    padding-left: ${e=>e.$hasIcon?"3rem":e.$hasFlag?"4.8rem":"1rem"};
    border: 2px solid darkslategrey;
    border-radius: 4px;
    font-family: 'inter', sans-serif;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease;
    background-color: white;
    position: relative;
    z-index: 1;

    ${V}

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }
`,B=p.select`
    padding: 1rem;
    padding-right: 3rem;
    border: 2px solid darkslategrey;
    border-radius: 4px;
    font-family: 'inter', sans-serif;
    font-size: 16px;
    width: 100%;
    max-width: 550px;
    background-color: white;
    cursor: pointer;
    color: darkslategrey;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='darkslategrey' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.2rem;
    box-sizing: border-box;

    ${V}

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`,D=p.textarea`
    padding: 1rem;
    border: 2px solid darkslategrey;
    border-radius: 4px;
    font-family: 'inter', sans-serif;
    font-size: 16px;
    width: 100%;
    max-width: 550px;
    min-height: 100px;
    resize: vertical;
    box-sizing: border-box;

    ${V}

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`,P=p.div`
    color: #d32f2f;
    font-size: 13px;
    font-weight: 500;
    font-family: 'inter', sans-serif;
    position: absolute;
    bottom: 0px; 
    left: 0;
    animation: ${M} 0.2s ease-out forwards;
    z-index: 1;
`,q=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 550px;
`,Z=p.input`
  display: none;
`,O=p.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border: 2px dashed #ccc;
  border-radius: 12px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;

  &:hover {
    border-color: darkslategrey;
    background-color: #f0f4f4;
  }

  span {
    color: darkslategrey;
    font-weight: 500;
  }

  small {
    color: #888;
    margin-top: 5px;
  }
`;p.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  min-width: 140px;
  outline: none;

  /* Estilos para el botón Principal (Siguiente / Finalizar) */
  background-color: #4caf50;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover:not(:disabled) {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  /* Estilos para el botón Secundario (Atrás) */
  ${e=>e.$secondary&&x`
      background-color: #f5f5f5;
      color: #666;
      border: 1px solid #ddd;
      box-shadow: none;

      &:hover:not(:disabled) {
        background-color: #e8e8e8;
        color: #333;
        border-color: #ccc;
      }
    `}

  /* ESTADO DESHABILITADO (Cuando la validación de Zod falla) */
  &:disabled {
    background-color: #cccccc;
    color: #888888;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.7;
  }

  /* Responsive */
  @media (max-width: 480px) {
    width: 100%;
    padding: 14px;
  }
`;const U=({name:o,control:n,trigger:t,label:s,component:l,rules:d,...c})=>{const p=a(),m=r.useRef(null),{field:{onChange:x,onBlur:f,value:g,ref:h},fieldState:{error:b}}=i({name:o,control:n,rules:d,defaultValue:""});return e.jsxs(I,{children:[e.jsx(T,{htmlFor:o,children:s}),e.jsx(l,{...c,id:o,ref:h,value:g,onChange:async e=>{const r=e.target.value;x(r),m.current&&clearTimeout(m.current),m.current=setTimeout(async()=>{await t(o)&&p(u({field:o,value:r}))},500)},onBlur:async()=>{f(),await t(o)&&p(u({field:o,value:g}))},$hasError:!!b}),b&&e.jsx(P,{children:b.message})]})},H=["image/jpeg","image/jpg","image/png"],W=n({name:t().min(3,"Mínimo 3 caracteres *").max(30,"Máximo 30 caracteres *"),phone:t().min(1,"El teléfono no puede estar vacío *").min(7,"Mínimo 7 caracteres *").max(16,"Máximo 16 caracteres *").regex(/^(\+?\d{1,4}|00\d{1,4})?\d{6,12}$/,"Formato de teléfono inválido *"),type_food:t().min(1,"La categoría es requerida *").max(25,"Máximo 25 caracteres *"),email:t().trim().min(1,"El correo es requerido *").email("Formato de correo inválido *").max(50,"Máximo 50 caracteres *"),description:t().trim().min(10,"Mínimo 10 caracteres *").max(1200,"Máximo 1200 caracteres *")}),X=n({address:t().min(5,"Mínimo 5 caracteres *").max(200,"Máximo 200 caracteres *").regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s,.\-#º/]{4,}$/,"La dirección contiene caracteres no permitidos *"),web:t().min(10,"Mínimo 10 caracteres *").max(250,"Máximo 250 caracteres *").regex(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,"Formato de URL inválido *")}),G=n({images:s().refine(e=>e&&(e instanceof FileList||Array.isArray(e)),"Debes seleccionar imágenes.").refine(e=>e&&e.length>0,"Las imágenes son obligatorias.").transform(e=>e instanceof FileList?Array.from(e):e).refine(e=>e.length<=4,"Solo puedes subir un máximo de 4 imágenes.").refine(e=>e.every(e=>e.size<=5242880),"Cada imagen debe pesar menos de 5MB.").refine(e=>e.every(e=>H.includes(e.type)),"Solo se admiten formatos .jpg, .jpeg y .png")}),J=W.merge(X).merge(G);function Q({onValidationChange:o}){const a=c(e=>e.form),i=r.useRef(null),{control:n,trigger:t,formState:{isValid:s}}=l({resolver:d(W),mode:"onChange",defaultValues:a});return r.useEffect(()=>{i.current!==s&&(i.current=s,o(s))},[s,o]),e.jsx(R,{children:e.jsxs(_,{children:[e.jsxs(I,{children:[e.jsx(T,{htmlFor:"name",children:"Nombre del Sitio"}),e.jsx(U,{type:"text",id:"name",name:"name",control:n,trigger:t,component:Y,placeholder:"Ej: Café Exodus",label:""})]}),e.jsxs(I,{children:[e.jsx(T,{htmlFor:"phone",children:"Teléfono"}),e.jsxs(L,{children:[e.jsxs(N,{children:[e.jsx("span",{className:"flag",children:"🇪🇸"}),e.jsx("span",{className:"prefix",children:"+34"})]}),e.jsx(U,{$hasFlag:!0,id:"phone",name:"phone",type:"tel",control:n,trigger:t,component:Y,maxLength:9,placeholder:"600 000 000",label:""})]})]}),e.jsxs(I,{children:[e.jsx(T,{htmlFor:"type_food",children:"Categoría"}),e.jsxs(U,{id:"type_food",name:"type_food",component:B,trigger:t,control:n,label:"",children:[e.jsx("option",{value:"",disabled:!0,children:"Seleccione una categoría"}),e.jsx("option",{value:"restaurant",children:"Restaurante"})]})]}),e.jsxs(I,{children:[e.jsx(T,{htmlFor:"email",children:"Email"}),e.jsxs(L,{children:[e.jsx(N,{children:e.jsx("span",{className:"flag",children:"📥"})}),e.jsx(U,{$hasFlag:!0,id:"email",name:"email",type:"email",placeholder:"restaurante@gmail.es",component:Y,control:n,trigger:t,label:""})]})]}),e.jsxs(I,{children:[e.jsx(T,{htmlFor:"description",children:"Descripción"}),e.jsx(U,{id:"description",name:"description",rows:4,placeholder:"Breve descripción...",component:D,control:n,trigger:t,label:""})]})]})})}function K({onValidationChange:o}){const a=c(e=>e.form),i=r.useRef(null),{control:n,trigger:t,formState:{isValid:s}}=l({resolver:d(X),mode:"onChange",defaultValues:a});return r.useEffect(()=>{i.current!==s&&(i.current=s,o(s))},[s,o]),e.jsx(R,{children:e.jsxs(_,{children:[e.jsxs(I,{children:[e.jsx(T,{htmlFor:"address",children:"Dirección"}),e.jsxs(L,{children:[e.jsx("span",{style:{position:"absolute",left:"12px",fontSize:"1.1rem",pointerEvents:"none"},children:"📍"}),e.jsx(U,{$hasIcon:!0,type:"text",id:"address",name:"address",placeholder:"Calle, Ciudad...",component:Y,control:n,trigger:t,label:""})]})]}),e.jsxs(I,{children:[e.jsx(T,{htmlFor:"web",children:"Website"}),e.jsxs(L,{children:[e.jsx("span",{style:{position:"absolute",left:"12px",fontSize:"1.1rem",pointerEvents:"none"},children:"🌐"}),e.jsx(U,{$hasIcon:!0,type:"url",id:"web",name:"web",placeholder:"https://...",component:Y,control:n,trigger:t,label:""})]})]}),e.jsxs(I,{children:[e.jsx(T,{htmlFor:"type_food",children:"Tipo de comida"}),e.jsxs(U,{id:"type_food",name:"type_food",component:B,control:n,trigger:t,label:"",children:[e.jsx("option",{value:"",disabled:!0,children:"Seleccione un tipo"}),e.jsx("option",{value:"china",children:"China"}),e.jsx("option",{value:"española",children:"Española"}),e.jsx("option",{value:"turca",children:"Turca"}),e.jsx("option",{value:"japonesa",children:"Japonesa"})]})]})]})})}function ee({onImagesChange:o}){const[a,i]=r.useState("Ningún archivo seleccionado"),n=r.useRef({isValid:!1,filesCount:0}),{formState:{errors:t,isValid:s},setValue:c,trigger:p,watch:m}=l({resolver:d(G),mode:"onChange"}),x=m("images");return r.useEffect(()=>{const e=x instanceof FileList?Array.from(x):[];n.current.isValid===s&&n.current.filesCount===e.length||(n.current={isValid:s,filesCount:e.length},o(e,s))},[s,x,o]),e.jsx(R,{children:e.jsxs(q,{children:[e.jsx(T,{children:"Imágenes del Restaurante"}),e.jsx(Z,{type:"file",id:"file-upload",multiple:!0,accept:"image/*",onChange:async e=>{const r=e.target.files;r&&r.length>0?(i(r.length>1?`${r.length} archivos`:r[0].name),c("images",r,{shouldValidate:!0}),await p("images")):(i("Ningún archivo seleccionado"),c("images",null),o([],!1))}}),e.jsxs(O,{htmlFor:"file-upload",style:{borderColor:t.images?"red":"#ccc"},children:[e.jsx("span",{children:"📸 Haz clic para subir fotos"}),e.jsx("small",{children:a})]}),t.images&&e.jsx("span",{style:{color:"red",fontSize:"0.8rem",marginTop:"5px"},children:t.images.message})]})})}const re=[{id:1,text:"Completa el formulario con la información del sitio."},{id:2,text:"Revisa y confirma los datos ingresados."},{id:3,text:"Sube las imágenes del sitio "}];function oe(){const[o,a]=r.useState(1),[i,n]=r.useState(!1),[t,s]=r.useState([]),l=g(),{loading:d,status:p,...m}=c(e=>e.form),x=r.useCallback(e=>{n(e)},[]),f=r.useCallback((e,r)=>{s(e),n(r)},[]);return e.jsx(z,{children:e.jsxs(C,{children:[e.jsx(E,{children:"Registrar un sitio"}),e.jsx(k,{steps:re,activeStep:o}),e.jsx("div",{style:{overflow:"hidden",width:"100%",padding:"5px"},children:(()=>{switch(o){case 1:return e.jsx(Q,{onValidationChange:x});case 2:return e.jsx(K,{onValidationChange:x});case 3:return e.jsx(ee,{onImagesChange:f});default:return null}})()}),e.jsxs(S,{children:[e.jsx(F,{$secondary:!0,type:"button",onClick:()=>{a(e=>Math.max(e-1,1)),n(!0)},disabled:1===o||d,children:"Atrás"}),e.jsx(F,{type:"button",onClick:async()=>{if(o<3)a(e=>e+1),n(!1);else{if(!J.safeParse({...m,images:t}).success)return void alert("Por favor, revisa que todos los campos sean correctos.");try{const e=await l(b({api_url:"http://localhost:3000/api/v1/restaurant/create",api_path:"",body:m})).unwrap(),{id:r}=(null==e?void 0:e.data)||{};if(r&&t.length>0){const e=new FormData;t.forEach(r=>e.append("images",r)),await j({api_url:`http://localhost:3000/api/v1/image/create/restaurant/${r}`,api_path:"",body:e})}return e}catch(e){}}},disabled:d||!i,children:d?"Procesando...":3===o?"Finalizar":"Siguiente"})]}),"success"===p&&e.jsx("p",{style:{color:"green",textAlign:"center"},children:"¡Guardado correctamente!"}),"failed"===p&&e.jsx("p",{style:{color:"red",textAlign:"center"},children:"Error en el servidor."})]})})}function ae(){return e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(oe,{}),e.jsx(h,{})]})}export{ae as default};
