import{a2 as g,z as r,o as C,a,c as l,b as e,f as b,u as t,n as i,t as d,F as k,e as E,g as M,I as S,p as w,j,a1 as D,ad as I}from"./store.7c651ce0.js";import{L}from"./LineUpCard.086b141f.js";import{F as z}from"./Footer.762223c9.js";import{u as B}from"./vue-router.1549c88e.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";import"./helper.ca89f9df.js";const p=o=>(w("data-v-679e854d"),o=o(),j(),o),P=p(()=>e("i",{class:"fa-solid fa-xmark"},null,-1)),Y=[P],T={class:"row justify-content-center"},H={class:"col-md-10 text-center"},N={class:"py-3"},O={class:"px-4"},U=["innerHTML"],V=p(()=>e("li",null,null,-1)),R={class:"col-md-10"},q={name:"EventPreviewComponent",setup(o){const u=g(),_=B(),c=r(()=>u.state.event),s=c.value.event,m=c.value.lineups,v=()=>{const n=I;return n.page="EventOrganizerComponent",n};C(()=>{});const f=r(()=>D(s.date).format("Do MMMM YYYY")),y=()=>{_.go(-1),emit("previous",v())};return(n,A)=>(a(),l("div",null,[e("div",{class:"my-5"},[e("div",{class:"d-flex justify-content-end w-100 mt-4"},[e("button",{onClick:y,class:"btn btn-secondary btn-lg rounded-5",style:{padding:"12px 22px"}},Y)])]),e("div",{class:i(["container",t(s).primary_typeface])},[e("div",T,[e("div",H,[e("ul",{class:"list-unstyled",style:b({color:t(s).text_color})},[e("li",N,[e("h1",{class:i(t(s).secondary_typeface)},d(t(s).name),3)]),e("li",null,[e("p",O,[e("span",{innerHTML:t(s).description},null,8,U)])]),e("li",null,[e("small",null,d(t(f)),1)]),V],4)]),e("div",R,[(a(!0),l(k,null,E(t(m),(h,x)=>(a(),S(t(L),{lineup:h,event:t(s),key:x},null,8,["lineup","event"]))),128))])])],2),M(t(z))]))}},Z=F(q,[["__scopeId","data-v-679e854d"]]);export{Z as default};