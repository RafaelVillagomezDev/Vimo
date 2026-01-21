import{r as e,j as r}from"./react-core.DzcB_2w7.js";import{d as o}from"./styles-vendor.DBgNySS0.js";import{d as t}from"./useAppSelector.D6_7lV5f.js";import{L as n}from"./router-vendor.DNrqJuUa.js";import"./vendor.hSDL9w0M.js";const s=o.div`
    display: flex;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    bottom: 3rem;
    margin: 2rem;
    cursor: grab;

    /* ✅ 1. ESPACIADO MÓVIL: Reducido a 0.5rem (8px) */
    column-gap: 0.5rem;

    @media only screen and (${t.md}) {
        margin: 4rem;
        /* MANTENER ESPACIADO GRANDE EN ESCRITORIO (2rem) */
        column-gap: 2rem;
    }
`,i=o.div`
    height: 100%;
    transition: transform 0.5s ease;
    text-align: center;
    background-color: transparent;

    /* Propiedades Flexbox requeridas para el scroll horizontal */
    flex-shrink: 0;

    /* 🎯 2. CÁLCULO MÓVIL (3 Slides con 0.5rem de gap) */
    /* Fórmula: (100% / 3) - (0.5rem / 3) = 33.333% - 0.1666rem */
    flex-basis: calc(33.333% - 0.1666rem);

    /* Alineación de los elementos internos (img, texto) para móvil */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (${t.md}) {
        /* 🎯 CÁLCULO ESCRITORIO (3 Slides con 2rem de gap) */
        /* Fórmula: (100% / 3) - (4rem / 3) = 33.333% - 1.333rem */
        flex-basis: calc(33.333% - 1.333rem);

        /* Ajuste de layout interno en escritorio */
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`,a=o.img`
    height: 75px;
    width: 75px;
    border-radius: 12px;
    object-fit: cover;
    object-position: center;
    border-radius: 120px; /* Redondeado total en móvil */

    @media only screen and (${t.md}) {
        border-radius: 12px; /* Cuadrado o menos redondeado en escritorio */
        height: 100%;
        width: 350px;
    }
`,l=o.p`
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    /* El texto es visible en móvil ya que no tiene 'display: none' fuera de la media query */

    @media only screen and (${t.md}) {
        font-size: 18px;
        display: block; /* Aseguramos visibilidad en escritorio si fuera necesario */
    }
`;o(l)`
    font-weight: bold;
    line-height: 30px;
    word-spacing: 5px;
    &:hover {
        border-bottom: solid 3px blue;
    }
`;const c=o(n)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
`,d=({slidesData:o})=>{const t=e.useRef(null),[n,d]=e.useState(!1),[u,m]=e.useState(0),[f,p]=e.useState(0);return r.jsx(r.Fragment,{children:r.jsx(s,{ref:t,onMouseDown:e=>{t.current&&(d(!0),m(e.pageX-t.current.offsetLeft),p(t.current.scrollLeft),t.current.style.cursor="grabbing")},onMouseMove:e=>{n&&t.current&&(t.current.scrollLeft=f-3*(e.pageX-t.current.offsetLeft-u))},onMouseUp:()=>{t.current&&(d(!1),t.current.style.cursor="grab")},onMouseLeave:()=>{t.current&&(d(!1),t.current.style.cursor="grab")},onTouchStart:e=>{t.current&&(d(!0),m(e.touches[0].pageX-t.current.offsetLeft),p(t.current.scrollLeft),t.current.style.cursor="grabbing")},onTouchMove:e=>{n&&t.current&&(t.current.scrollLeft=f-3*(e.touches[0].pageX-t.current.offsetLeft-u))},onTouchEnd:()=>{t.current&&(d(!1),t.current.style.cursor="grab")},children:o.map((e,o)=>r.jsx(i,{children:r.jsxs(c,{to:e.to,children:[r.jsx(a,{src:e.iconSrc,loading:"lazy"}),r.jsx(l,{children:e.text})]})},o))})})};export{d as default};
