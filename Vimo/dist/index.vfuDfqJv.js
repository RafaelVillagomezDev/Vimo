const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/Home.Bs5e9lR4.js","chunks/react-core.hIu8Leyl.js","chunks/vendor.Dqz0mnuI.js","assets/vendor.ytJtD8ZQ.css","chunks/styles-vendor.BBhjEPUr.js","chunks/Footer.B68oxbZL.js","chunks/router-vendor.DJhrlxSV.js","chunks/useAppSelector.BUBff-Wi.js","chunks/redux-vendor.CF7IZYAF.js","chunks/Experience.DHTRsGJ6.js","chunks/Destination.BV5f03n3.js","chunks/Restaurants.CYKNXotc.js","chunks/Restaurant.DDmE7V04.js","chunks/Navbar.DOuCXdC6.js","chunks/Register.z6fMDI9M.js"])))=>i.map(i=>d[i]);
import{j as e,r as t,d as r}from"./chunks/react-core.hIu8Leyl.js";import{u as a,a as n,i as s,c as o,b as i,R as l,d}from"./chunks/router-vendor.DJhrlxSV.js";import{x as c,y as u,z as p,F as h,A as m,P as f,B as g,C as y,D as x,G as b,H as j,I as v}from"./chunks/vendor.Dqz0mnuI.js";import{c as _,a as E,b as k}from"./chunks/redux-vendor.CF7IZYAF.js";import{m as w,d as T,o as S}from"./chunks/styles-vendor.BBhjEPUr.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials="use-credentials"===e.crossOrigin?"include":"anonymous"===e.crossOrigin?"omit":"same-origin",t}(e);fetch(e.href,t)}}();const C={},P=function(e,t,r){let a=Promise.resolve();if(t&&t.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),n=(null==r?void 0:r.nonce)||(null==r?void 0:r.getAttribute("nonce"));a=e(t.map(e=>{if((e=function(e){return"/"+e}(e))in C)return;C[e]=!0;const t=e.endsWith(".css");if(document.querySelector(`link[href="${e}"]${t?'[rel="stylesheet"]':""}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script"),r.crossOrigin="",r.href=e,n&&r.setAttribute("nonce",n),document.head.appendChild(r),t?new Promise((t,a)=>{r.addEventListener("load",t),r.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function n(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return a.then(t=>{for(const e of t||[])"rejected"===e.status&&n(e.reason);return e().catch(n)})};function R({isOverlay:t=!1}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:t?"absolute":"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:t?"rgba(255, 255, 255, 0.7)":"white",zIndex:9999,transition:"all 0.3s ease",backdropFilter:t?"blur(4px)":"none"},children:[e.jsx("style",{children:"\n                @keyframes spin {\n                    0% { transform: rotate(0deg); }\n                    100% { transform: rotate(360deg); }\n                }\n                "}),e.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid rgba(0,0,0,0.1)",borderTop:"4px solid #000",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),t&&e.jsx("span",{style:{marginTop:"15px",fontFamily:"sans-serif",fontSize:"14px",color:"#333",fontWeight:"500"},children:"Buscando restaurantes..."})]})}const A=async(e,t)=>{const r={},a=(()=>{var e;const t=`; ${document.cookie}`.split("; _csrf_token=");if(2===t.length){let r=(null==(e=t.pop())?void 0:e.split(";").shift())||null;return r?(r=decodeURIComponent(r),r.startsWith("s:")?r.slice(2).split(".")[0]:r):null}return null})();if(a)r["x-csrf-token"]=a;else if(!t.includes("/anonymous/token")&&!["GET","OPTIONS"].includes(e))throw new Error("CSRF Token missing. Please refresh.");return r},O=async({api_url:e,api_path:t,method:r="GET",body:a,headers:n={},token:s,authHeadersGenerator:o=A})=>{let i={};if("GET"!==r&&"OPTIONS"!==r)try{i=await o(r,t,a)}catch(d){return{data:null,error:d instanceof Error?d.message:"Error desconocido al generar encabezados de seguridad."}}const l={Accept:"application/json","Content-Type":"application/json",...s&&{Authorization:`Bearer ${s}`},...n,...i};try{const t=await fetch(e,{method:r,headers:l,body:"GET"!==r&&a?JSON.stringify(a):void 0,credentials:"include"});if(!t.ok){const e=await t.text();let r=`Error ${t.status}: ${t.statusText}`;try{r=JSON.parse(e).message||r}catch{}throw new Error(r)}return{data:await t.json(),error:null}}catch(c){return c instanceof Error?{data:null,error:c.message||"Error de red o desconocido"}:{data:null,error:"Error de red o desconocido"}}},z=_("auth/fetchAuth",async(e,{rejectWithValue:t})=>{const{method:r="GET",...a}=e,n={method:r,...a};try{const{data:e,error:r}=await O(n);return r?t(r):e}catch(s){return t(s instanceof Error?s.message:"Error desconocido al contactar la API.")}}),I=_("restaurant/fetchRestaurant",async(e,{rejectWithValue:t})=>{const{method:r="GET",...a}=e,n={method:r,...a};try{const{data:e,error:r}=await O(n);return r?t(r):e}catch(s){return t(s instanceof Error?s.message:"Error desconocido al contactar la API.")}}),L=_("api/fetchTokenAndRestaurant",async(e,{dispatch:t,rejectWithValue:r})=>{var a;const{api_url:n,api_path:s}=e;try{const e=null==(a=(await t(z({api_url:"http://localhost:3000/api/v1/anonymous/token",api_path:"/anonymous/token",method:"POST"})).unwrap()).data.user)?void 0:a.token;return e&&"string"==typeof e&&null!==e?await t(I({api_url:n,api_path:s,method:"GET",headers:{Authorization:`Bearer ${e}`}})).unwrap():r("Token no válido o ausente en la respuesta de autenticación.")}catch(o){let e;return e="string"==typeof o?o:"object"==typeof o&&null!==o&&"message"in o&&"string"==typeof o.message||o instanceof Error?o.message:"Error desconocido al encadenar las llamadas a la API.",r(e)}}),N={restaurant:{code:"",count:0,data:[],message:""},status:"idle",loading:!1,searchTerm:""},B=E({name:"restaurant",initialState:N,reducers:{setSearchTerm:(e,t)=>{e.searchTerm=t.payload},resetSearch:e=>{e.searchTerm=""}},extraReducers:e=>{e.addCase(I.pending,e=>{e.status="loading",e.loading=!0}),e.addCase(I.fulfilled,(e,t)=>{e.status="success",e.loading=!1,e.restaurant=t.payload}),e.addCase(I.rejected,e=>{e.status="failed",e.loading=!1})},selectors:{selectRestaurantById:(e,t)=>e.restaurant.data.find(e=>e.id===t),selectFilteredRestaurants:e=>{var t;const r=e.searchTerm.toLowerCase().trim(),a=(null==(t=e.restaurant)?void 0:t.data)||[];return r?a.filter(e=>{const t=e.name.toLowerCase().includes(r),a=e.address.toLowerCase().includes(r),n=e.type_food.toLocaleLowerCase().includes(r);return t||a||n}):a},selectSearchTerm:e=>e.searchTerm,selectRestaurantStatus:e=>e.status,selectRestaurantCount:e=>e.restaurant.count}}),{setSearchTerm:F}=B.actions,{selectRestaurantById:$,selectFilteredRestaurants:G,selectSearchTerm:V,selectRestaurantStatus:D,selectRestaurantCount:H}=B.selectors,W=B.reducer,q="http://localhost:3000/api/v1/anonymous/token",J="/anonymous/token",M=_("restaurant/registerRestaurant",async(e,{rejectWithValue:t})=>{const{method:r="POST",...a}=e;try{const{data:e,error:n}=await O({method:r,...a});return n?t(n):e}catch(n){return t(n.message||"Error en registro")}}),U=async e=>{var t,r,a;const{api_url:n,api_path:s,body:o}=e;try{const e=await O({api_url:q,api_path:J,method:"POST"});if(null==e?void 0:e.error)return{data:null,error:e.error};const i=null==(a=null==(r=null==(t=null==e?void 0:e.data)?void 0:t.data)?void 0:r.user)?void 0:a.token;if(!i)return{data:null,error:"No se pudo encontrar 'user.token' en la respuesta del servidor"};const l=await(async({api_url:e,api_path:t,method:r="POST",body:a,headers:n={},token:s,authHeadersGenerator:o=A})=>{let i={};if("GET"!==r&&"OPTIONS"!==r)try{i=await o(r,t,null)}catch(d){return{data:null,error:d instanceof Error?d.message:"Error al generar seguridad para archivos (CSRF)."}}const l={Accept:"application/json",...s&&{Authorization:`Bearer ${s}`},...n,...i};try{const t=await fetch(e,{method:r,headers:l,body:a,credentials:"include"});if(!t.ok){const e=await t.text();let r=`Error ${t.status}: ${t.statusText}`;try{r=JSON.parse(e).message||r}catch{r=e||"Error en el servidor al procesar archivos"}throw new Error(r)}return{data:await t.json(),error:null}}catch(c){return{data:null,error:c instanceof Error?c.message:"Error de conexión al subir archivos"}}})({api_url:n,api_path:s,method:"POST",body:o,token:i,credentials:"include"});return(null==l?void 0:l.error)?{data:null,error:l.error}:{data:l.data,error:null}}catch(i){return{data:null,error:i.message||"Error inesperado"}}},Y=_("api/createRestaurant",async(e,{dispatch:t,rejectWithValue:r})=>{var a,n;const{api_url:s,api_path:o,body:i}=e;try{const e=await t(z({api_url:q,api_path:J,method:"POST"})).unwrap(),l=(null==(n=null==(a=null==e?void 0:e.data)?void 0:a.user)?void 0:n.token)||(null==e?void 0:e.token);return l?await t(M({api_url:s,api_path:o,method:"POST",headers:{Authorization:`Bearer ${l}`},body:i})).unwrap():r("Token ausente")}catch(l){return r(l||"Fallo en el flujo unificado")}}),K={name:"",email:"",phone:"",type_food:"",description:"",address:"",web:"",status:"idle",loading:!1},Q=E({name:"form",initialState:K,reducers:{updateFormField:(e,t)=>{const{field:r,value:a}=t.payload;e[r]!==a&&(e[r]=a)},resetForm:()=>K},extraReducers:e=>{e.addCase(Y.pending,e=>{e.status="loading",e.loading=!0}).addCase(Y.fulfilled,e=>{e.name=K.name,e.email=K.email,e.phone=K.phone,e.type_food=K.type_food,e.description=K.description,e.address=K.address,e.web=K.web,e.status="success",e.loading=!1}).addCase(Y.rejected,e=>{e.status="failed",e.loading=!1})}}),{updateFormField:X}=Q.actions,Z=Q.reducer,ee=E({name:"auth",initialState:{data:{code:"",count:0,user:null,message:""},status:"idle",loading:!1,error:null,isAuthenticated:!1,token:null,refreshToken:null},reducers:{},extraReducers:e=>{e.addCase(z.pending,e=>{e.loading=!0,e.status="loading",e.error=null,e.isAuthenticated=!1,e.data.user=null,e.data.count=0,e.data.message="",e.data.code=""}),e.addCase(z.fulfilled,(e,t)=>{var r;t.payload.data.user&&(e.token=null==(r=t.payload.data.user)?void 0:r.token,e.isAuthenticated=!0,e.status="success")}),e.addCase(z.rejected,(e,t)=>{e.loading=!1,e.status="failed",e.error=t.payload||t.error.message||"Fallo de red.",e.isAuthenticated=!1,e.data.user=null})},selectors:{}}).reducer,te="app_build_id_cookie",re=Number("23"),ae={key:"roott",storage:b,whitelist:["restaurant"],migrate:async(e,t)=>(async(e,t,r)=>{const a=e||{},n=c.get(te);return Number(n)!==r?(c.set(te,String(r),{expires:365,secure:!0,sameSite:"Lax"}),{...a,restaurant:N}):a})(e,0,re),blacklist:["auth"]},ne=k({reducer:{restaurant:p(ae,W),auth:p(ae,ee),form:p(ae,Z)},middleware:e=>e({serializableCheck:{ignoredActions:[h,m,f,g,y,x]}})}),se=u(ne),oe={colors:{blueDeep:"#1f3a61",blueGray:"#497c92",cyanAccent:"#6ec1c4",orangeHot:"#f9a64e",redAlert:"#e83f21"},spacing:{small:"8px",medium:"16px",large:"24px"},transitionDuration:"0.3s"},ie=()=>{const t=a(),r=n();let o="¡Ups! Página no encontrado",i="Parece que la página que buscas no está disponible o la dirección ha cambiado.",l="404";return s(r)?(l=String(r.status),404===r.status?o="Página no encontrada":500===r.status&&(o="Error en la cocina",i="Nuestro servidor ha tenido un problema. Intenta refrescar el menú.")):null!=r&&(o="Algo salió mal",i="Hubo un error al preparar esta sección. ¡Estamos trabajando en ello!",l="ERR"),e.jsx(ce.Container,{children:e.jsxs(ce.Content,{children:[e.jsx(ce.ErrorCode,{children:l}),e.jsxs(ce.Illustration,{children:[e.jsx("span",{className:"material-symbols-outlined",children:"404"===l?"bomb":"warning"}),e.jsx(ce.BrokenCircle,{})]}),e.jsx(ce.Title,{children:o}),e.jsx(ce.Message,{children:i}),e.jsxs(ce.HomeButton,{onClick:()=>t("/restaurants"),children:[e.jsx("span",{className:"material-symbols-outlined",children:"home"}),"Volver a inicio"]})]})})},le=w`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,de=w`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,ce={Container:T.div`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f9f9f9;
        padding: 20px;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        overflow: hidden;
    `,Content:T.div`
        position: relative;
        max-width: 500px;
        animation: ${le} 0.6s ease-out forwards;
        z-index: 2;
    `,ErrorCode:T.h1`
        font-size: clamp(5rem, 15vw, 10rem);
        margin: 0;
        color: #e0e0e0;
        font-weight: 900;
        line-height: 1;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        z-index: -1;
        opacity: 0.6;
        user-select: none;
    `,Illustration:T.div`
        position: relative;
        font-size: 5rem;
        color: #000;
        margin-bottom: 2rem;
        
        span {
            font-size: 5rem;
            display: block;
        }
    `,BrokenCircle:T.div`
        position: absolute;
        top: 50%;
        left: 50%;
        width: 120px;
        height: 120px;
        border: 4px dashed #000;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: ${de} 15s linear infinite;
        opacity: 0.15;
    `,Title:T.h2`
        font-size: 2rem;
        color: #333;
        margin-bottom: 1rem;
        font-weight: 700;
    `,Message:T.p`
        color: #666;
        line-height: 1.6;
        margin-bottom: 2.5rem;
        padding: 0 20px;
    `,HomeButton:T.button`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 14px 35px;
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);

        &:hover {
            background-color: #333;
            transform: translateY(-2px);
            box-shadow: 0 15px 25px rgba(0,0,0,0.15);
        }

        span {
            font-size: 1.2rem;
        }
    `},ue=t.lazy(()=>P(()=>import("./chunks/Home.Bs5e9lR4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),pe=t.lazy(()=>P(()=>import("./chunks/Experience.DHTRsGJ6.js"),__vite__mapDeps([9,1,2,3]))),he=t.lazy(()=>P(()=>import("./chunks/Destination.BV5f03n3.js"),__vite__mapDeps([10,1,2,3]))),me=t.lazy(()=>P(()=>import("./chunks/Restaurants.CYKNXotc.js"),__vite__mapDeps([11,1,2,3,5,4,6,7,8]))),fe=t.lazy(()=>P(()=>import("./chunks/Restaurant.DDmE7V04.js"),__vite__mapDeps([12,1,2,3,13,4,5,6,7,8]))),ge=t.lazy(()=>P(()=>import("./chunks/Register.z6fMDI9M.js"),__vite__mapDeps([14,1,2,3,13,4,5,6,8]))),ye=document.getElementById("root");if(ye){const a=r.createRoot(ye),n=i(o(e.jsxs(d,{path:"/",errorElement:e.jsx(ie,{}),children:[e.jsx(d,{index:!0,element:e.jsx(ue,{})}),e.jsx(d,{path:"home",element:e.jsx(ue,{})}),e.jsx(d,{path:"restaurants",element:e.jsx(me,{})}),e.jsx(d,{path:"restaurants/:id",element:e.jsx(fe,{})}),e.jsx(d,{path:"experiences",element:e.jsx(pe,{})}),e.jsx(d,{path:"destinations",element:e.jsx(he,{})}),e.jsx(d,{path:"register",element:e.jsx(ge,{})}),e.jsx(d,{path:"*",element:e.jsx(ie,{})})]})));a.render(e.jsx(j,{store:ne,children:e.jsx(v,{loading:null,persistor:se,children:e.jsx(S,{theme:oe,children:e.jsx(t.Suspense,{fallback:e.jsx(R,{}),children:e.jsx(l,{router:n})})})})}))}export{R as L,P as _,F as a,G as b,H as c,$ as d,Y as e,L as f,U as g,V as h,D as s,X as u};
