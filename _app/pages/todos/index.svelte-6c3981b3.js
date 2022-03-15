import{S as re,i as ue,s as de,e as v,k as U,c as m,a as P,m as N,d as T,b as a,R as ae,g as $,G as r,ai as Q,aj as le,ak as ce,al as _e,am as fe,Q as he,ad as ne,T as pe,t as ve,O as me,h as be,an as ge,p as Te,q as ke,o as Ee,ao as ye,ap as oe,n as Ue,aq as Ne,L as Ie}from"../../chunks/vendor-12d1c1dc.js";import{c as q}from"../../chunks/singletons-d1fb5791.js";q.disable_scroll_handling;q.goto;const Oe=q.invalidate;q.prefetch;q.prefetch_routes;q.before_navigate;q.after_navigate;function z(u,{pending:t,error:e,result:o}={}){let p;async function k(c){const d=p={};c.preventDefault();const h=new FormData(u);t&&t({data:h,form:u});try{const l=await fetch(u.action,{method:u.method,headers:{accept:"application/json"},body:h});if(d!==p)return;if(l.ok){o&&o({data:h,form:u,response:l});const b=new URL(u.action);b.search=b.hash="",Oe(b.href)}else e?e({data:h,form:u,error:null,response:l}):console.error(await l.text())}catch(l){if(e)e({data:h,form:u,error:l,response:null});else throw l}}return u.addEventListener("submit",k),{destroy(){u.removeEventListener("submit",k)}}}function se(u,t,e){const o=u.slice();return o[3]=t[e],o[4]=t,o[5]=e,o}function ie(u,t){let e,o,p,k,c,d,h,l,b,w,M,B,f,E,s,i,n,R,C,I,J,O,D,S,K,F,j,V,W,L,X,Y=Ie,y,Z,x;function ee(...g){return t[1](t[3],t[4],t[5],...g)}function te(){return t[2](t[3],t[4],t[5])}return{key:u,first:null,c(){e=v("div"),o=v("form"),p=v("input"),c=U(),d=v("input"),l=U(),b=v("button"),B=U(),f=v("form"),E=v("input"),i=U(),n=v("input"),C=U(),I=v("button"),J=U(),O=v("form"),D=v("input"),K=U(),F=v("button"),W=U(),this.h()},l(g){e=m(g,"DIV",{class:!0});var _=P(e);o=m(_,"FORM",{action:!0,method:!0});var A=P(o);p=m(A,"INPUT",{type:!0,name:!0,class:!0}),c=N(A),d=m(A,"INPUT",{type:!0,name:!0,class:!0}),l=N(A),b=m(A,"BUTTON",{class:!0,"aria-label":!0}),P(b).forEach(T),A.forEach(T),B=N(_),f=m(_,"FORM",{class:!0,action:!0,method:!0});var H=P(f);E=m(H,"INPUT",{type:!0,name:!0,class:!0}),i=N(H),n=m(H,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),C=N(H),I=m(H,"BUTTON",{class:!0,"aria-label":!0}),P(I).forEach(T),H.forEach(T),J=N(_),O=m(_,"FORM",{action:!0,method:!0});var G=P(O);D=m(G,"INPUT",{type:!0,name:!0,class:!0}),K=N(G),F=m(G,"BUTTON",{class:!0,"aria-label":!0}),P(F).forEach(T),G.forEach(T),W=N(_),_.forEach(T),this.h()},h(){a(p,"type","hidden"),a(p,"name","uid"),p.value=k=t[3].uid,a(p,"class","svelte-16nsat"),a(d,"type","hidden"),a(d,"name","done"),d.value=h=t[3].done?"":"true",a(d,"class","svelte-16nsat"),a(b,"class","toggle svelte-16nsat"),a(b,"aria-label",w="Mark todo as "+(t[3].done?"not done":"done")),a(o,"action","/todos?_method=PATCH"),a(o,"method","post"),a(E,"type","hidden"),a(E,"name","uid"),E.value=s=t[3].uid,a(E,"class","svelte-16nsat"),a(n,"aria-label","Edit todo"),a(n,"type","text"),a(n,"name","text"),n.value=R=t[3].text,a(n,"class","svelte-16nsat"),a(I,"class","save svelte-16nsat"),a(I,"aria-label","Save todo"),a(f,"class","text svelte-16nsat"),a(f,"action","/todos?_method=PATCH"),a(f,"method","post"),a(D,"type","hidden"),a(D,"name","uid"),D.value=S=t[3].uid,a(D,"class","svelte-16nsat"),a(F,"class","delete svelte-16nsat"),a(F,"aria-label","Delete todo"),F.disabled=j=t[3].pending_delete,a(O,"action","/todos?_method=DELETE"),a(O,"method","post"),a(e,"class","todo svelte-16nsat"),ae(e,"done",t[3].done),this.first=e},m(g,_){$(g,e,_),r(e,o),r(o,p),r(o,c),r(o,d),r(o,l),r(o,b),r(e,B),r(e,f),r(f,E),r(f,i),r(f,n),r(f,C),r(f,I),r(e,J),r(e,O),r(O,D),r(O,K),r(O,F),r(e,W),y=!0,Z||(x=[Q(M=z.call(null,o,{pending:ee})),Q(z.call(null,f)),Q(V=z.call(null,O,{pending:te}))],Z=!0)},p(g,_){t=g,(!y||_&1&&k!==(k=t[3].uid))&&(p.value=k),(!y||_&1&&h!==(h=t[3].done?"":"true"))&&(d.value=h),(!y||_&1&&w!==(w="Mark todo as "+(t[3].done?"not done":"done")))&&a(b,"aria-label",w),M&&le(M.update)&&_&1&&M.update.call(null,{pending:ee}),(!y||_&1&&s!==(s=t[3].uid))&&(E.value=s),(!y||_&1&&R!==(R=t[3].text)&&n.value!==R)&&(n.value=R),(!y||_&1&&S!==(S=t[3].uid))&&(D.value=S),(!y||_&1&&j!==(j=t[3].pending_delete))&&(F.disabled=j),V&&le(V.update)&&_&1&&V.update.call(null,{pending:te}),_&1&&ae(e,"done",t[3].done)},r(){X=e.getBoundingClientRect()},f(){ce(e),Y(),_e(e,X)},a(){Y(),Y=fe(e,X,ye,{duration:200})},i(g){y||(g&&he(()=>{L||(L=ne(e,oe,{start:.7},!0)),L.run(1)}),y=!0)},o(g){g&&(L||(L=ne(e,oe,{start:.7},!1)),L.run(0)),y=!1},d(g){g&&T(e),g&&L&&L.end(),Z=!1,pe(x)}}}function Pe(u){let t,e,o,p,k,c,d,h,l=[],b=new Map,w,M,B,f=u[0];const E=s=>s[3].uid;for(let s=0;s<f.length;s+=1){let i=se(u,f,s),n=E(i);b.set(n,l[s]=ie(n,i))}return{c(){t=U(),e=v("div"),o=v("h1"),p=ve("Todos"),k=U(),c=v("form"),d=v("input"),h=U();for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){me('[data-svelte="svelte-181o7gf"]',document.head).forEach(T),t=N(s),e=m(s,"DIV",{class:!0});var n=P(e);o=m(n,"H1",{});var R=P(o);p=be(R,"Todos"),R.forEach(T),k=N(n),c=m(n,"FORM",{class:!0,action:!0,method:!0});var C=P(c);d=m(C,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),C.forEach(T),h=N(n);for(let I=0;I<l.length;I+=1)l[I].l(n);n.forEach(T),this.h()},h(){document.title="Todos",a(d,"name","text"),a(d,"aria-label","Add todo"),a(d,"placeholder","+ tap to add a todo"),a(d,"class","svelte-16nsat"),a(c,"class","new svelte-16nsat"),a(c,"action","/todos"),a(c,"method","post"),a(e,"class","todos svelte-16nsat")},m(s,i){$(s,t,i),$(s,e,i),r(e,o),r(o,p),r(e,k),r(e,c),r(c,d),r(e,h);for(let n=0;n<l.length;n+=1)l[n].m(e,null);w=!0,M||(B=Q(z.call(null,c,{result:we})),M=!0)},p(s,[i]){if(i&1){f=s[0],Ue();for(let n=0;n<l.length;n+=1)l[n].r();l=ge(l,i,E,1,s,f,b,e,Ne,ie,null,se);for(let n=0;n<l.length;n+=1)l[n].a();Te()}},i(s){if(!w){for(let i=0;i<f.length;i+=1)ke(l[i]);w=!0}},o(s){for(let i=0;i<l.length;i+=1)Ee(l[i]);w=!1},d(s){s&&T(t),s&&T(e);for(let i=0;i<l.length;i+=1)l[i].d();M=!1,B()}}}const we=async({form:u})=>{u.reset()};function Me(u,t,e){let{todos:o}=t;const p=(c,d,h,{data:l})=>{e(0,d[h].done=!!l.get("done"),o)},k=(c,d,h)=>e(0,d[h].pending_delete=!0,o);return u.$$set=c=>{"todos"in c&&e(0,o=c.todos)},[o,p,k]}class Fe extends re{constructor(t){super();ue(this,t,Me,Pe,de,{todos:0})}}export{Fe as default};
