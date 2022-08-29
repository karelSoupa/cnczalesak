import{p as n,e as t}from"./chunks/jsxRuntime.module.e52a7d1c.js";import"./chunks/preact.module.f099146f.js";const m="/assets/100_9075.9f3cd9a1.jpg",o="/assets/100_9078.b1abab32.jpg",p="/assets/100_9080.cb65f71a.jpg",_="/assets/100_9081.f60b33ae.jpg",b="/assets/100_9082.e99532e2.jpg",d="/assets/100_9084.1dd3042c.jpg",l="/assets/100_9086.aa53cf46.jpg",u="/assets/100_9092.9017ef81.jpg",j="/assets/100_9097.e7a21d1e.jpg",r="/assets/100_9098.0b5f2a59.jpg",h="/assets/100_9101.b16a4a2f.jpg",f="/assets/100_9103.01e43e8b.jpg",x="/assets/100_9106.e668a1be.jpg",v="/assets/100_9110.6205a895.jpg",w="/assets/100_9111.343849e7.jpg",k="/assets/100_9113.c199596e.jpg",y="/assets/100_9115.51bfb105.jpg",N="/assets/100_9116.4d751121.jpg",C="/assets/100_9117.77420975.jpg",z="/assets/20170509_175030.b21d4cdb.jpg",D="/assets/20170514_142847.752d7545.jpg",E="/assets/20170514_152934.4c6ef1e7.jpg",H="/assets/20170514_152955.95112288.jpg",I="/assets/20170528_193602.56608cf2.jpg",G="/assets/20170625_105954.003bd183.jpg",P="/assets/20170818_174439.89da2e1b.jpg",Z="/assets/20170911_182030.76906f54.jpg",q="/assets/20170915_171651.17bd27d4.jpg",A="/assets/20171004_083829.02507954.jpg",B="/assets/100_9097.e7a21d1e.jpg",F="/assets/img-20170919-wa0010.bce6b775.jpg",J="/assets/svarence.ebf80b4d.jpg",K="/assets/100_9075.0b9dd468.jpg",L="/assets/100_9078.29962018.jpg",M="/assets/100_9080.94877c5e.jpg",O="/assets/100_9081.9f087fd9.jpg",Q="/assets/100_9082.ca7a4ba6.jpg",R="/assets/100_9084.ff17e985.jpg",S="/assets/100_9086.4721a182.jpg",T="/assets/100_9092.05412783.jpg",U="/assets/100_9097.0bdee4c7.jpg",V="/assets/100_9098.0f8ac1a0.jpg",W="/assets/100_9101.08e22e24.jpg",X="/assets/100_9103.42422ff3.jpg",Y="/assets/100_9106.c537f914.jpg",$="/assets/100_9110.be1b953c.jpg",ss="/assets/100_9111.a4d83f07.jpg",ts="/assets/100_9113.ddc28662.jpg",es="/assets/100_9115.1c0424c6.jpg",gs="/assets/100_9116.7d88391a.jpg",as="/assets/100_9117.e9b830d9.jpg",is="/assets/20170509_175030.5ada7f4e.jpg",cs="/assets/20170514_142847.3b5c1ffa.jpg",ns="/assets/20170514_152934.abd44d4d.jpg",ms="/assets/20170514_152955.cef7d420.jpg",os="/assets/20170528_193602.18d76886.jpg",ps="/assets/20170625_105954.7f7047d3.jpg",_s="/assets/20170818_174439.55beb137.jpg",bs="/assets/20170911_182030.b9e81404.jpg",ds="/assets/20170915_171651.43cf39f7.jpg",ls="/assets/20171004_083829.71ef529b.jpg",us="/assets/100_9097.0bdee4c7.jpg",js="/assets/img-20170919-wa0010.e31a7673.jpg",rs="/assets/svarence.83950da9.jpg",g=[m,o,p,_,b,d,l,u,j,r,h,f,x,v,w,k,y,N,C,z,D,E,H,I,G,P,Z,q,A,B,F,J],hs=[K,L,M,O,Q,R,S,T,U,V,W,X,Y,$,ss,ts,es,gs,as,is,cs,ns,ms,os,ps,_s,bs,ds,ls,us,js,rs],vs=()=>{const c=hs.map((s,i)=>({thumbnail:s,original:g[i],thumbnailHeight:100})),[a,e]=n(-1);return console.log(a),t("div",{className:"max-w-full",children:[t("div",{className:a>=0?"fullscreen visible":"fullscreen",children:[t("button",{onClick:()=>e(-1),className:"exit",children:"Zav\u0159\xEDt"}),t("button",{onClick:()=>e(s=>s+1==g.length?0:s+1),className:"next",children:"Dal\u0161\xED"}),t("button",{onClick:()=>e(s=>s==0?g.length-1:s-1),className:"prev",children:"P\u0159edchoz\xED"}),t("img",{loading:"lazy",alt:"cnc",src:g?.[a]})]}),t("div",{className:"flex flex-row flex-wrap max-w-full gap-3 mt-2",children:c.map((s,i)=>t("img",{alt:"cnc",src:s.thumbnail,style:{maxHeight:200},onClick:()=>e(i),className:"rounded-2xl",loading:"lazy"}))}),t("style",{children:`
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

        `})]})};export{vs as default};
