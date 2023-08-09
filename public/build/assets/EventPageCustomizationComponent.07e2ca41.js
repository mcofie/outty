import{a2 as F,z as g,r as L,y as U,o as $,a as r,c as i,b as e,n as f,f as I,t as _,u as a,g as B,w as p,v as x,ac as C,F as w,e as S,L as N,p as Y,j as O,a1 as A,ad as H}from"./store.7c651ce0.js";import{P as D,S as E}from"./utils.392776ca.js";import{L as R}from"./LineUpCard.086b141f.js";import{u as q,r as m}from"./index.d19c96ab.js";import{u as W}from"./vue-router.1549c88e.js";import{_ as X}from"./_plugin-vue_export-helper.cdc0426e.js";import"./helper.ca89f9df.js";const l=d=>(Y("data-v-7fe5d550"),d=d(),O(),d),G={class:""},J={class:"row justify-content-center"},K={class:"container"},Q={class:"col-md-8"},Z={class:"py-3 text-center"},ee={class:"px-4 text-center pb-0 mb-1"},te=["innerHTML"],oe={class:"text-center"},se={class:"mt-3"},ne=l(()=>e("hr",null,null,-1)),ae={class:"row justify-content-between"},le={class:"col-6"},ce=l(()=>e("label",{class:"form-label"},"Text Color",-1)),re={class:"col-6"},ie=l(()=>e("label",{class:"form-label"},"Background Color",-1)),de={class:"row justify-content-between mt-4"},ue={class:"col-6"},_e=l(()=>e("label",{class:"form-label"},"Primary Font",-1)),pe=l(()=>e("option",{disabled:"",value:""},"Select font",-1)),me=["value"],ve={class:"col-6"},fe=l(()=>e("label",{class:"form-label"},"Secondary Font",-1)),ye=l(()=>e("option",{disabled:"",value:""},"Select font",-1)),be=["value"],he={class:"fixed-bottom"},ge={class:"bottom w-100 py-3"},xe={class:"container"},Ce={class:"row justify-content-center"},we={class:"col-md-10 col-lg-9 col-xl-7"},Se=l(()=>e("h6",{class:""},"Theme Customization",-1)),De={class:"d-flex justify-content-between w-100 mt-4"},Ee=l(()=>e("i",{class:"fa-solid fa-caret-left"},null,-1)),ke=[Ee],Pe={name:"EventPageCustomizationComponent",emits:["next","previous"],setup(d,{emit:k}){const y=F(),v=W(),b=g(()=>y.state.event),c=b.value.event,P=b.value.lineups[0],t=L({background_color:c.background_color,text_color:c.text_color,primary_typeface:c.primary_typeface,secondary_typeface:c.secondary_typeface}),u=()=>{const s=H;return s.page="EventPageCustomizationComponent",s.data.event=Object.assign(s.data.event,t.value),s},h=s=>{y.commit("storeEventDetails",s)},j=()=>{v.push({name:"Organizer"}),h(u().data)},M=()=>{v.go(-1),h(u().data)},z=()=>{v.push({name:"Preview"});const s=u();s.page="EventPreviewComponent",k("goto",s)},T=g(()=>A(c.date).format("Do MMMM YYYY"));U(t.value,s=>{u()});const V=q({text_color:{required:m,$autoDirty:!0},background_color:{required:m,$autoDirty:!0},primary_typeface:{required:m,$autoDirty:!0},secondary_typeface:{required:m,$autoDirty:!0}},t);return $(()=>{}),(s,n)=>(r(),i("div",G,[e("form",{onSubmit:n[4]||(n[4]=N(o=>o.preventDefault(),["prevent"]))},[e("div",J,[e("div",K,[e("div",{class:f(["row justify-content-center",t.value.primary_typeface])},[e("div",Q,[e("ul",{class:"list-unstyled",style:I({color:t.value.text_color})},[e("li",Z,[e("h1",{class:f(t.value.secondary_typeface)},_(a(c).name),3)]),e("li",null,[e("p",ee,[e("span",{innerHTML:a(c).description},null,8,te)])]),e("li",oe,[e("small",null,_(a(T)),1)]),e("li",se,[B(a(R),{event:t.value,lineup:a(P)},null,8,["event","lineup"])])],4)])],2)])]),ne,e("div",ae,[e("div",le,[ce,p(e("input",{type:"color","onUpdate:modelValue":n[0]||(n[0]=o=>t.value.text_color=o),class:"form-control form-control-color",title:"Choose your color"},null,512),[[x,t.value.text_color]])]),e("div",re,[ie,p(e("input",{type:"color","onUpdate:modelValue":n[1]||(n[1]=o=>t.value.background_color=o),class:"form-control form-control-color",title:"Choose your color"},null,512),[[x,t.value.background_color]])])]),e("div",de,[e("div",ue,[_e,p(e("select",{class:"form-select form-control","onUpdate:modelValue":n[2]||(n[2]=o=>t.value.primary_typeface=o),"aria-label":"Default select example"},[pe,(r(!0),i(w,null,S(a(D).concat(a(E)),o=>(r(),i("option",{value:o.replaceAll(" ","-")},_(o),9,me))),256))],512),[[C,t.value.primary_typeface]])]),e("div",ve,[fe,p(e("select",{class:"form-select form-control","onUpdate:modelValue":n[3]||(n[3]=o=>t.value.secondary_typeface=o),"aria-label":"Default select example"},[ye,(r(!0),i(w,null,S(a(D).concat(a(E)),o=>(r(),i("option",{value:o.replaceAll(" ","-")},_(o),9,be))),256))],512),[[C,t.value.secondary_typeface]])])])],32),e("div",he,[e("div",ge,[e("div",xe,[e("div",Ce,[e("div",we,[Se,e("div",De,[e("button",{onClick:M,class:"btn btn-secondary btn-lg rounded-5",style:{padding:"10px 26px"}},ke),e("div",null,[e("button",{onClick:z,class:"btn btn-secondary btn-lg rounded-1 mx-2 rounded-5 px-4 py-3 font-bold"}," PREVIEW "),e("button",{onClick:j,class:f([a(V).$invalid?"disabled":"","btn btn-primary btn-lg rounded-5 px-5 py-3 font-bold"])}," NEXT ",2)])])])])])])])]))}},$e=X(Pe,[["__scopeId","data-v-7fe5d550"]]);export{$e as default};
