import{r as e,j as r,c as t}from"./chunks/vendor.mYzBb_zv.js";function o(){const[t,o]=e.useState(0);return r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:[r.jsx("a",{href:"https://vite.dev",target:"_blank",rel:"noopener noreferrer",children:r.jsx("img",{src:"/vite.svg",className:"logo",alt:"Vite logo"})}),r.jsx("a",{href:"https://react.dev",target:"_blank",rel:"noopener noreferrer",children:r.jsx("img",{src:"/assets/react.CHdo91hT.svg",className:"logo react",alt:"React logo"})})]}),r.jsx("h1",{children:"Vite + React"}),r.jsxs("div",{className:"card",children:[r.jsxs("button",{onClick:()=>o((e=>e+1)),children:["count is ",t]}),r.jsxs("p",{children:["Edit ",r.jsx("code",{children:"src/App.tsx"})," and save to test HMR"]})]}),r.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),r.credentials="use-credentials"===e.crossOrigin?"include":"anonymous"===e.crossOrigin?"omit":"same-origin",r}(e);fetch(e.href,r)}}(),t.createRoot(document.getElementById("root")).render(r.jsx(e.StrictMode,{children:r.jsx(o,{})}));