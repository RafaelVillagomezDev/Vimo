import{d as e,L as i,j as n}from"./vendor.r7jEoLFQ.js";const o="(min-width: 577px)",t=e.nav`
    margin: 2rem;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    position: absolute;
    top: 2rem;
    width: -webkit-fill-available;
`,r=e.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,s=e(r)`
    display: none;
    @media only screen and (${o}) {
        display: flex;
    }
`,a=e(r)`
    display: none;
    @media only screen and (${o}) {
        display: flex;
    }
`,l=e(r)`
    display: flex;
`,d=e.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`,c=e(i)`
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    font-weight: bold;
    &:hover {
        border-bottom: 5px solid black;
    }

    &.active {
        background-color: #6200ea; /* Color de fondo para el enlace activo */
        color: #fff;
    }
`,x=e.input`
    height: 45px;
    width: 100%;
    max-width: 260px;
    padding: 10px 15px 10px 40px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 25px;
    outline: none;
    transition: all 0.3s ease-in-out;

    &:focus {
        border-color: #000300;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    }

    &::placeholder {
        color: #aaa;
        font-size: 14px;
    }
`,p=e.button`
    width: 160px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 15px;
    border-radius: 250px;
    background: #ff3d00;
    border: none;
`,h=e.p`
    color: #fff;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;function f(){return n.jsx(n.Fragment,{children:n.jsxs(t,{children:[n.jsx(s,{children:n.jsxs(d,{children:[n.jsx(c,{to:"/",children:"Pais"}),n.jsx(c,{to:"experiences",children:"Experiences"}),n.jsx(c,{to:"destinations",children:"Destinations"})]})}),n.jsx(a,{children:n.jsx(x,{"aria-label":"Busca un lugar",placeholder:"Busca un lugar",type:"search"})}),n.jsx(l,{children:n.jsx(p,{children:n.jsx(h,{children:"Contacto"})})})]})})}const m=e.div`
    width: 100%;
    height: 1117px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`,u=e.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,g=e.h1`
    font-family: 'Rokkitt', serif;
    font-size: 90px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    color: white;
    top: 12rem;
    flex-direction: column;
    justify-content: center;
    @media only screen and (${o}) {
        font-size: 200px;
    }
    @media only screen and (${"(min-width: 768px)"}) {
        font-size: 250px;
    }
`;function w(){return n.jsx(n.Fragment,{children:n.jsxs(m,{children:[n.jsx(u,{srcSet:"\n                        /assets/tokio_576.B31sN_k9.jpg 576w,\n                        /assets/tokio_768.bc-SkHwN.jpg 768w,\n                        /assets/tokio_1200.CvXFdeM8.jpg 1200w,\n                    ",sizes:"\n                        (max-width: 576px) 100vw,\n                        (max-width: 768px) 80vw,\n                        (max-width: 1200px) 60vw,\n                    ",alt:"Vista de Tokio, Japón",loading:"lazy"}),n.jsx(f,{}),n.jsx(g,{children:"JAPÓN"})]})})}export{w as C};
