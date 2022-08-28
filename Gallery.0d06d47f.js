import{p as i,e as a}from"./chunks/jsxRuntime.module.e52a7d1c.js";import"./chunks/preact.module.f099146f.js";const l="/cnczalesak/assets/100_9075.9f3cd9a1.jpg",m="/cnczalesak/assets/100_9078.b1abab32.jpg",o="/cnczalesak/assets/100_9080.cb65f71a.jpg",p="/cnczalesak/assets/100_9081.f60b33ae.jpg",_="/cnczalesak/assets/100_9082.e99532e2.jpg",b="/cnczalesak/assets/100_9084.1dd3042c.jpg",d="/cnczalesak/assets/100_9086.aa53cf46.jpg",k="/cnczalesak/assets/100_9092.9017ef81.jpg",z="/cnczalesak/assets/100_9097.e7a21d1e.jpg",u="/cnczalesak/assets/100_9098.0b5f2a59.jpg",j="/cnczalesak/assets/100_9101.b16a4a2f.jpg",r="/cnczalesak/assets/100_9103.01e43e8b.jpg",h="/cnczalesak/assets/100_9106.e668a1be.jpg",f="/cnczalesak/assets/100_9110.6205a895.jpg",x="/cnczalesak/assets/100_9111.343849e7.jpg",v="/cnczalesak/assets/100_9113.c199596e.jpg",w="/cnczalesak/assets/100_9115.51bfb105.jpg",y="/cnczalesak/assets/100_9116.4d751121.jpg",N="/cnczalesak/assets/100_9117.77420975.jpg",C="/cnczalesak/assets/20170509_175030.b21d4cdb.jpg",D="/cnczalesak/assets/20170514_142847.752d7545.jpg",E="/cnczalesak/assets/20170514_152934.4c6ef1e7.jpg",H="/cnczalesak/assets/20170514_152955.95112288.jpg",I="/cnczalesak/assets/20170528_193602.56608cf2.jpg",G="/cnczalesak/assets/20170625_105954.003bd183.jpg",P="/cnczalesak/assets/20170818_174439.89da2e1b.jpg",Z="/cnczalesak/assets/20170911_182030.76906f54.jpg",q="/cnczalesak/assets/20170915_171651.17bd27d4.jpg",A="/cnczalesak/assets/20171004_083829.02507954.jpg",B="/cnczalesak/assets/100_9097.e7a21d1e.jpg",F="/cnczalesak/assets/img-20170919-wa0010.bce6b775.jpg",J="/cnczalesak/assets/svarence.ebf80b4d.jpg",K="/cnczalesak/assets/100_9075.0b9dd468.jpg",L="/cnczalesak/assets/100_9078.29962018.jpg",M="/cnczalesak/assets/100_9080.94877c5e.jpg",O="/cnczalesak/assets/100_9081.9f087fd9.jpg",Q="/cnczalesak/assets/100_9082.ca7a4ba6.jpg",R="/cnczalesak/assets/100_9084.ff17e985.jpg",S="/cnczalesak/assets/100_9086.4721a182.jpg",T="/cnczalesak/assets/100_9092.05412783.jpg",U="/cnczalesak/assets/100_9097.0bdee4c7.jpg",V="/cnczalesak/assets/100_9098.0f8ac1a0.jpg",W="/cnczalesak/assets/100_9101.08e22e24.jpg",X="/cnczalesak/assets/100_9103.42422ff3.jpg",Y="/cnczalesak/assets/100_9106.c537f914.jpg",$="/cnczalesak/assets/100_9110.be1b953c.jpg",ss="/cnczalesak/assets/100_9111.a4d83f07.jpg",as="/cnczalesak/assets/100_9113.ddc28662.jpg",cs="/cnczalesak/assets/100_9115.1c0424c6.jpg",es="/cnczalesak/assets/100_9116.7d88391a.jpg",ts="/cnczalesak/assets/100_9117.e9b830d9.jpg",ns="/cnczalesak/assets/20170509_175030.5ada7f4e.jpg",gs="/cnczalesak/assets/20170514_142847.3b5c1ffa.jpg",is="/cnczalesak/assets/20170514_152934.abd44d4d.jpg",ls="/cnczalesak/assets/20170514_152955.cef7d420.jpg",ms="/cnczalesak/assets/20170528_193602.18d76886.jpg",os="/cnczalesak/assets/20170625_105954.7f7047d3.jpg",ps="/cnczalesak/assets/20170818_174439.55beb137.jpg",_s="/cnczalesak/assets/20170911_182030.b9e81404.jpg",bs="/cnczalesak/assets/20170915_171651.43cf39f7.jpg",ds="/cnczalesak/assets/20171004_083829.71ef529b.jpg",ks="/cnczalesak/assets/100_9097.0bdee4c7.jpg",zs="/cnczalesak/assets/img-20170919-wa0010.e31a7673.jpg",us="/cnczalesak/assets/svarence.83950da9.jpg",e=[l,m,o,p,_,b,d,k,z,u,j,r,h,f,x,v,w,y,N,C,D,E,H,I,G,P,Z,q,A,B,F,J],js=[K,L,M,O,Q,R,S,T,U,V,W,X,Y,$,ss,as,cs,es,ts,ns,gs,is,ls,ms,os,ps,_s,bs,ds,ks,zs,us],fs=()=>{const g=js.map((s,n)=>({thumbnail:s,original:e[n],thumbnailHeight:100})),[t,c]=i(-1);return console.log(t),a("div",{className:"max-w-full",children:[a("div",{className:t>=0?"fullscreen visible":"fullscreen",children:[a("button",{onClick:()=>c(-1),className:"exit",children:"Zav\u0159\xEDt"}),a("button",{onClick:()=>c(s=>s+1==e.length?0:s+1),className:"next",children:"Dal\u0161\xED"}),a("button",{onClick:()=>c(s=>s==0?e.length-1:s-1),className:"prev",children:"P\u0159edchoz\xED"}),a("img",{loading:"lazy",alt:"cnc",src:e?.[t]})]}),a("div",{className:"flex flex-row flex-wrap max-w-full gap-3 mt-2",children:g.map((s,n)=>a("img",{alt:"cnc",src:s.thumbnail,style:{maxHeight:200},onClick:()=>c(n),className:"rounded-2xl",loading:"lazy"}))}),a("style",{children:`
           .fullscreen {
            display: none;
           }
          .fullscreen.visible {
            display: flex;
            justify-content: center;
           
            align-items: center;
            width: 100vw;
            height: 100vh;
            z-index: 2000;
            top:0;
            left:0;
            position: fixed;
            background: black;
          }
         .fullscreen.visible img {
           height: 80%;
          }
          .prev {
            top:50vh;
            left:20px;
            position: fixed;
            color: white;
           background: red;
            padding: 10px;
            border-radius: 16px;
          }
          .next {
            top:50vh;
            right:20px;
            position: fixed;
            color: white;
            background: red;
            padding: 10px;
            border-radius: 16px;

          }
          .exit {
            top: 20px;
            right: 20px;
            position: fixed;
            color: white;
            background: red;
            padding: 10px;
            border-radius: 16px;
          }

        `})]})};export{fs as default};
