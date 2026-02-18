import{S as e}from"./vendor.Dqz0mnuI.js";import{j as i}from"./react-core.hIu8Leyl.js";import{d as n,m as s}from"./styles-vendor.BBhjEPUr.js";import{L as a}from"./router-vendor.DJhrlxSV.js";const o={sm:"(min-width: 577px)",md:"(min-width: 769px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"},t=()=>e(),r=n.div`
    background-color: ${e=>e.theme.colors.blueDeep};
    padding: 2rem;
    position: -webkit-sticky;
    width: 100%;
    bottom: 0px;
    @media only screen and (${o.sm}) {
        height: 200px;
    }
`,d=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    row-gap: 2rem;
    column-gap: 2rem;
`,l=n.div`
    display: flex;
    justify-content: space-evenly;
    column-gap: 2rem;
    align-items: center;
`,p=n.h1`
    font-family: 'Poppins', sans-serif;
    font-family: 24px;
    font-weight: 500;
    color: white;
    @media only screen and (${o.sm}) {
        font-family: 35px;
    }
`;n.img`
    width: ${({sizes:e})=>e||"40px"};
    height: ${({sizes:e})=>e||"40px"};
`;const m=n(n.span`
    font-family: 'Material Symbols Outlined';
    font-size: 22px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`)`
    color: white;
`,c=n.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    @media only screen and (${o.sm}) {
    }
`,f=n(a)`
    color: #fff;
    font-size: 12px;
    @media only screen and (${o.sm}) {
        font-size: 16px;
    }
`,x=n.div`
    display: grid;
    /* Definimos 12 columnas fijas para que las coordenadas 3/7 existan */
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    gap: 1rem;
    
`,g=n.div`
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
      @media only screen and (${o.sm}) {
        grid-column: 6/ 12;
    }
    @media only screen and (${o.md}) {
        grid-column: 5 / 12;
    }
    @media only screen and (${o.lg}) {
        grid-column: 4 / 12;
    }
`;n.div`
    display: grid;
    @media only screen and (${o.sm}) {
        display: grid;
        grid-template-columns: 275px auto;
        gap: 2rem;
        width: 100%;
    }
`,n.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;const y=n(a)``,h=n.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 12px;
    overflow: hidden;

    @media only screen and (${o.xl}) {
        flex-direction: row;
        align-items: center;
    }
`;n.div`
    display: none;
    @media only screen and (${o.sm}) {
        display: block;
    }
`;const u=n.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
`,w=n(u)`
    padding: 1rem;
`,b=n.img.attrs(({src:e})=>({src:e,alt:"Imagen card "}))`
    width: fit-content;
`,j=n.div`
    display: flex;
    align-items: baseline;
    padding: 3px;
    @media only screen and (${o.sm}) {
        padding: 0.1rem;
    }
`,v=n(j)`
    flex-direction: column;
    padding: 10px 0px;
    flex-grow: 1;
`,$=n(j)`
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (${o.sm}) {
        padding: 0.1rem;
    }
`;n.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
`;const z=n.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: bold;
    padding: 10px 0px;
`,k=n.h3`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    font-weight: bold;
`,I=n.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    padding-bottom: 6px;
    display: flex;
    align-items: baseline;
`,L=n(I)`
    display: flex;
    align-items: end;
    font-size: 16px;
`,P=n.button`
    padding: 6px 6px;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
`,M=n.span`
    font-family: 'Material Symbols Outlined';
    font-size: 16px;
    padding-right: 10px;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
`,D=n(a)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 400;
    gap: 0.25rem;
`,R=n(D)`
    color: white;
    font-size: 16px;
    padding: 0rem;
`,Y=n.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    gap: 0.25rem;
`,A=n.button`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    padding: 12px 6px;
    border: none;
    border-radius: 10px;
    background-color: #ff3d00;
    color: white;
    font-weight: 400;
    cursor: pointer;
`,E=n.div`
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
   
`,F=s`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,S=n.div`
    /* Estado de carga: opacidad y bloqueo de clicks */
    opacity: ${e=>"loading"===e.$status?.5:1};
    pointer-events: ${e=>"loading"===e.$status?"none":"auto"};
    
    /* Efecto de desplazamiento sutil al cambiar de estado */
    transform: ${e=>"loading"===e.$status?"translateY(5px)":"translateY(0)"};
    
    /* Transiciones suaves */
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
    
    /* Layout */
    flex-grow: 1; 
    display: flex;
    flex-direction: column;
    gap: 1rem;

    /* Aplicamos la animación a las tarjetas hijas */
    & > div {
        animation: ${F} 0.5s ease-out forwards;
        /* El retraso (delay) se controla mediante el style inline en el map */
    }
`;function q(){return i.jsx(r,{children:i.jsxs(d,{children:[i.jsx(p,{children:"ZappyMap"}),i.jsxs(l,{children:[i.jsxs(c,{children:[i.jsx(f,{to:"./legales",children:"¿Quienes somos?"}),i.jsx(f,{to:"./legales",children:"Información de contacto"}),i.jsx(f,{to:"/register",children:"Registrar un sitio"})]}),i.jsxs(c,{children:[i.jsx(f,{to:"./legales",children:"Preguntas frecuentes"}),i.jsx(f,{to:"./legales",children:"Condiciones legales"})]}),i.jsxs(c,{children:[i.jsxs(R,{to:"https://yandrydev.es/",children:[i.jsx(m,{children:"rss_feed"}),"Redes sociales"]}),i.jsxs(R,{to:"https://yandrydev.es/",children:[i.jsx(m,{children:"copyright"}),"ZappyMap Inc"]})]}),i.jsx(c,{})]})]})})}export{P as B,h as C,q as F,M as I,y as L,g as M,Y as T,u as a,b,w as c,o as d,j as e,k as f,z as g,L as h,v as i,I as j,A as k,$ as l,D as m,x as n,E as o,S as p,t as u};
