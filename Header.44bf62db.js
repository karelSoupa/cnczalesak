import{p as r,e}from"./chunks/jsxRuntime.module.e52a7d1c.js";import"./chunks/preact.module.f099146f.js";function o(c){const[l,n]=r(!1),a=c.pathname;return console.log(a),e("div",{className:"header flex flex-row items-center justify-between py-8 ",children:[e("div",{children:e("a",{href:"/cnczalesak/",children:e("h2",{className:"text-2xl lg:text-3xl",children:[e("span",{className:"red-c",children:"C"}),"NC Z\xC1LE\u0160\xC1K s.r.o"]})})}),e("nav",{children:[e("section",{className:"MOBILE-MENU flex lg:hidden",children:[e("div",{className:"HAMBURGER-ICON space-y-2",onClick:()=>n(i=>!i),children:[e("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),e("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),e("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"})]}),e("div",{className:l?"showMenuNav":"hideMenuNav",children:[e("div",{className:"absolute top-0 right-0 px-8 py-8",onClick:()=>n(!1),children:e("svg",{className:"h-8 w-8 text-gray-600",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),e("ul",{className:"flex flex-col items-center justify-between min-h-[250px]",children:[e("a",{href:"/cnczalesak/kontakt",children:e("li",{className:"border-b border-gray-400 my-8 uppercase"+(a==="/cnczalesak/kontakt"?"active":""),children:"Kontakt"})}),e("a",{href:"/cnczalesak/reference",children:e("li",{className:"border-b border-gray-400 my-8 uppercase"+(a==="/cnczalesak/reference"?"active":""),children:"Reference"})}),e("a",{href:"/cnczalesak/o-nas",children:e("li",{className:"border-b border-gray-400 my-8 uppercase"+(a==="/cnczalesak/o-nas"?"active":""),children:"O N\xE1s"})})]})]})]}),e("ul",{className:"DESKTOP-MENU hidden space-x-8 lg:flex",children:[e("a",{href:"/cnczalesak/kontakt",children:e("li",{className:"list-item nav-item "+(a==="/cnczalesak/kontakt"?"active":""),children:"Kontakt"})}),e("a",{href:"/cnczalesak/reference",children:e("li",{className:"list-item nav-item "+(a==="/cnczalesak/reference"?"active":""),children:"Reference"})}),e("a",{href:"/cnczalesak/o-nas",children:e("li",{className:"list-item nav-item "+(a==="/cnczalesak/o-nas"?"active":""),children:"O N\xE1s"})})]})]}),e("style",{children:`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }

      nav h2 {
        font-size: 30px;
        font-weight: bold;
      }
      .nav-item {
        background-color: var(--color-gray);
        padding: 0.8rem;
        border-radius: 16px;
      }
      .nav-item.active, .nav-item:hover {
        background-color: #DB0005 !important;
        color: white;
      }
      .nav-item > li {
        font-size: 20px;
        font-weight: bold;
      }
      .red-c {
        color: #DB0005;
      }
      
    `})]})}export{o as default};
