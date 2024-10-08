import{a as Z}from"./VSelectionControl-BIfPhiGl.js";import{V as re,a as ie}from"./VRow-BS03yX6S.js";import{V as De,c as Re,a as Ue,b as Te}from"./VCard-DFEzo_lP.js";import{V as Me,a as ee}from"./VForm-DSaG_7mw.js";import{m as Be,a as Ee,u as je,b as Ne,V as Le,c as ze,d as Oe,e as $e}from"./filter-j4CcKNgi.js";import{m as Ke,u as qe,V as le,f as He}from"./VTextField-DWI3MSZh.js";import{j as We,k as Ge,l as Je,h as te,g as Qe,i as ce,_ as Xe}from"./VContainer-Bd8Dxbcf.js";import{u as Ye,V as Ze,a as ae}from"./VList-zTHY8DS8.js";import{p as el,P as ll,j as tl,Q as al,v as C,s as U,q as G,c as _,R as ul,w as j,D as ue,S as nl,z as ol,A as u,F as N,B as D,U as sl,J as L,W as rl,X as il,Y as ne,o as cl,E as z,G as O,H as g,I as dl,M as oe,Z as se}from"./index-CrBq_UzM.js";import{V as vl}from"./VSwitch-w7sejuzM.js";import{V as fl}from"./index-iYrz7fL7.js";import"./scopeId-Bvk2S17w.js";function ml(e,h,t){if(h==null)return e;if(Array.isArray(h))throw new Error("Multiple matches is not implemented");return typeof h=="number"&&~h?u(N,null,[u("span",{class:"v-autocomplete__unmask"},[e.substr(0,h)]),u("span",{class:"v-autocomplete__mask"},[e.substr(h,t)]),u("span",{class:"v-autocomplete__unmask"},[e.substr(h+t)])]):e}const pl=el({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Be({filterKeys:["title"]}),...Ee(),...ll(Ke({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...We({transition:!1})},"VAutocomplete"),Vl=tl()({name:"VAutocomplete",props:pl(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,h){let{slots:t}=h;const{t:I}=al(),m=C(),p=U(!1),k=U(!0),F=U(!1),T=C(),x=C(),d=G(e,"menu"),a=_({get:()=>d.value,set:l=>{var n;d.value&&!l&&((n=T.value)!=null&&n.ΨopenChildren.size)||(d.value=l)}}),c=U(-1),de=_(()=>{var l;return(l=m.value)==null?void 0:l.color}),J=_(()=>a.value?e.closeText:e.openText),{items:Q,transformIn:ve,transformOut:fe}=Ye(e),{textColorClasses:me,textColorStyles:pe}=Ge(de),v=G(e,"search",""),s=G(e,"modelValue",[],l=>ve(l===null?[null]:ul(l)),l=>{const n=fe(l);return e.multiple?n:n[0]??null}),Ve=_(()=>typeof e.counterValue=="function"?e.counterValue(s.value):typeof e.counterValue=="number"?e.counterValue:s.value.length),P=qe(),{filteredItems:$,getMatches:he}=je(e,Q,()=>k.value?"":v.value),w=_(()=>e.hideSelected?$.value.filter(l=>!s.value.some(n=>n.value===l.value)):$.value),M=_(()=>!!(e.chips||t.chip)),R=_(()=>M.value||!!t.selection),ge=_(()=>s.value.map(l=>l.props.value)),K=_(()=>{var n;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&v.value===((n=w.value[0])==null?void 0:n.title))&&w.value.length>0&&!k.value&&!F.value}),q=_(()=>e.hideNoData&&!w.value.length||e.readonly||(P==null?void 0:P.isReadonly.value)),H=C(),ye=Ne(H,m);function Se(l){e.openOnClear&&(a.value=!0),v.value=""}function ke(){q.value||(a.value=!0)}function _e(l){q.value||(p.value&&(l.preventDefault(),l.stopPropagation()),a.value=!a.value)}function Ce(l){var n;il(l)&&((n=m.value)==null||n.focus())}function we(l){var o,r,y;if(e.readonly||P!=null&&P.isReadonly.value)return;const n=m.value.selectionStart,i=s.value.length;if((c.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(a.value=!0),["Escape"].includes(l.key)&&(a.value=!1),K.value&&["Enter","Tab"].includes(l.key)&&!s.value.some(f=>{let{value:V}=f;return V===w.value[0].value})&&b(w.value[0]),l.key==="ArrowDown"&&K.value&&((o=H.value)==null||o.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&R.value&&s.value.length>0&&!v.value)return b(s.value[0],!1);if(~c.value){const f=c.value;b(s.value[c.value],!1),c.value=f>=i-1?i-2:f}else l.key==="Backspace"&&!v.value&&(c.value=i-1)}if(e.multiple){if(l.key==="ArrowLeft"){if(c.value<0&&n>0)return;const f=c.value>-1?c.value-1:i-1;s.value[f]?c.value=f:(c.value=-1,m.value.setSelectionRange((r=v.value)==null?void 0:r.length,(y=v.value)==null?void 0:y.length))}if(l.key==="ArrowRight"){if(c.value<0)return;const f=c.value+1;s.value[f]?c.value=f:(c.value=-1,m.value.setSelectionRange(0,0))}}}function xe(l){if(ne(m.value,":autofill")||ne(m.value,":-webkit-autofill")){const n=Q.value.find(i=>i.title===l.target.value);n&&b(n)}}function be(){var l;e.eager&&((l=x.value)==null||l.calculateVisibleItems())}function Ae(){var l;p.value&&(k.value=!0,(l=m.value)==null||l.focus())}function Ie(l){p.value=!0,setTimeout(()=>{F.value=!0})}function Fe(l){F.value=!1}function Pe(l){(l==null||l===""&&!e.multiple&&!R.value)&&(s.value=[])}const W=U(!1);function b(l){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const i=s.value.findIndex(r=>e.valueComparator(r.value,l.value)),o=n??!~i;if(~i){const r=o?[...s.value,l]:[...s.value];r.splice(i,1),s.value=r}else o&&(s.value=[...s.value,l]);e.clearOnSelect&&(v.value="")}else{const i=n!==!1;s.value=i?[l]:[],v.value=i&&!R.value?l.title:"",ue(()=>{a.value=!1,k.value=!0})}}return j(p,(l,n)=>{var i;l!==n&&(l?(W.value=!0,v.value=e.multiple||R.value?"":String(((i=s.value.at(-1))==null?void 0:i.props.title)??""),k.value=!0,ue(()=>W.value=!1)):(!e.multiple&&v.value==null&&(s.value=[]),a.value=!1,s.value.some(o=>{let{title:r}=o;return r===v.value})||(v.value=""),c.value=-1))}),j(v,l=>{!p.value||W.value||(l&&(a.value=!0),k.value=!l)}),j(a,()=>{if(!e.hideSelected&&a.value&&s.value.length){const l=w.value.findIndex(n=>s.value.some(i=>n.value===i.value));nl&&window.requestAnimationFrame(()=>{var n;l>=0&&((n=x.value)==null||n.scrollToIndex(l))})}}),j(()=>e.items,(l,n)=>{a.value||p.value&&!n.length&&l.length&&(a.value=!0)}),ol(()=>{const l=!!(!e.hideNoData||w.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),n=s.value.length>0,i=le.filterProps(e);return u(le,D({ref:m},i,{modelValue:v.value,"onUpdate:modelValue":[o=>v.value=o,Pe],focused:p.value,"onUpdate:focused":o=>p.value=o,validationValue:s.externalValue,counterValue:Ve.value,dirty:n,onChange:xe,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":a.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!R.value,"v-autocomplete--selecting-index":c.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:n?void 0:e.placeholder,"onClick:clear":Se,"onMousedown:control":ke,onKeydown:we}),{...t,default:()=>u(N,null,[u(Le,D({ref:T,modelValue:a.value,"onUpdate:modelValue":o=>a.value=o,activator:"parent",contentClass:"v-autocomplete__content",disabled:q.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:be,onAfterLeave:Ae},e.menuProps),{default:()=>[l&&u(Ze,D({ref:H,selected:ge.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onKeydown:Ce,onFocusin:Ie,onFocusout:Fe,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},ye,e.listProps),{default:()=>{var o,r,y;return[(o=t["prepend-item"])==null?void 0:o.call(t),!w.value.length&&!e.hideNoData&&(((r=t["no-data"])==null?void 0:r.call(t))??u(ae,{title:I(e.noDataText)},null)),u(ze,{ref:x,renderless:!0,items:w.value},{default:f=>{var Y;let{item:V,index:A,itemRef:S}=f;const X=D(V.props,{ref:S,key:A,active:K.value&&A===0?!0:void 0,onClick:()=>b(V,null)});return((Y=t.item)==null?void 0:Y.call(t,{item:V,index:A,props:X}))??u(ae,D(X,{role:"option"}),{prepend:B=>{let{isSelected:E}=B;return u(N,null,[e.multiple&&!e.hideSelected?u(Oe,{key:V.value,modelValue:E,ripple:!1,tabindex:"-1"},null):void 0,V.props.prependAvatar&&u(Je,{image:V.props.prependAvatar},null),V.props.prependIcon&&u(te,{icon:V.props.prependIcon},null)])},title:()=>{var B,E;return k.value?V.title:ml(V.title,(B=he(V))==null?void 0:B.title,((E=v.value)==null?void 0:E.length)??0)}})}}),(y=t["append-item"])==null?void 0:y.call(t)]}})]}),s.value.map((o,r)=>{function y(S){S.stopPropagation(),S.preventDefault(),b(o,!1)}const f={"onClick:close":y,onKeydown(S){S.key!=="Enter"&&S.key!==" "||(S.preventDefault(),S.stopPropagation(),y(S))},onMousedown(S){S.preventDefault(),S.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},V=M.value?!!t.chip:!!t.selection,A=V?sl(M.value?t.chip({item:o,index:r,props:f}):t.selection({item:o,index:r})):void 0;if(!(V&&!A))return u("div",{key:o.value,class:["v-autocomplete__selection",r===c.value&&["v-autocomplete__selection--selected",me.value]],style:r===c.value?pe.value:{}},[M.value?t.chip?u(Qe,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[A]}):u($e,D({key:"chip",closable:e.closableChips,size:"small",text:o.title,disabled:o.props.disabled},f),null):A??u("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&r<s.value.length-1&&u("span",{class:"v-autocomplete__selection-comma"},[L(",")])])])})]),"append-inner":function(){var f;for(var o=arguments.length,r=new Array(o),y=0;y<o;y++)r[y]=arguments[y];return u(N,null,[(f=t["append-inner"])==null?void 0:f.call(t,...r),e.menuIcon?u(te,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:_e,onClick:rl,"aria-label":I(J.value),title:I(J.value),tabindex:"-1"},null):void 0])}})}),He({isFocused:p,isPristine:k,menu:a,search:v,filteredItems:$,select:b},m)}}),hl={__name:"AdjustSellerStatus",setup(e){const h=C(null),t=C(!1),I=C([]),m=C(""),p=C(""),k=C(!1),F=async()=>{const x=localStorage.getItem("token"),d=void 0;try{const a=await Z.get(`${d}/api/admin/users`,{headers:{Authorization:`Bearer ${x}`}});I.value=a.data}catch(a){console.error("Error fetching users:",a),p.value="Failed to fetch users. Please try again later."}},T=async()=>{const x=localStorage.getItem("token"),d=void 0;try{const a=await Z.put(`${d}/api/admin/adjust_seller/${h.value}`,{isSeller:t.value},{headers:{Authorization:`Bearer ${x}`,"Content-Type":"application/json"}});a.status===200?(m.value="User seller status updated successfully!",p.value="",h.value=null,t.value=!1,F()):(p.value=a.data.message||"An error occurred while updating the seller status.",m.value="")}catch(a){p.value=a.response.data.message||"An error occurred while updating the seller status.",m.value=""}};return cl(F),(x,d)=>(z(),O(ce,null,{default:g(()=>[u(re,{justify:"center"},{default:g(()=>[u(ie,{cols:"12",md:"10"},{default:g(()=>[u(De,{class:"elevation-12"},{default:g(()=>[u(Re,null,{default:g(()=>d[3]||(d[3]=[dl("span",{class:"headline"},"Adjust Seller Status",-1)])),_:1}),u(Ue,null,{default:g(()=>[u(Me,{ref:"form",modelValue:k.value,"onUpdate:modelValue":d[2]||(d[2]=a=>k.value=a),"lazy-validation":""},{default:g(()=>[u(Vl,{modelValue:h.value,"onUpdate:modelValue":d[0]||(d[0]=a=>h.value=a),items:I.value,"item-text":"name","item-value":"_id",rules:[a=>!!a||"User is required."],label:"Select User",required:""},null,8,["modelValue","items","rules"]),u(vl,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=a=>t.value=a),label:"Is Seller"},null,8,["modelValue"]),p.value?(z(),O(ee,{key:0,type:"error",dismissible:""},{default:g(()=>[L(oe(p.value),1)]),_:1})):se("",!0),m.value?(z(),O(ee,{key:1,type:"success",dismissible:""},{default:g(()=>[L(oe(m.value),1)]),_:1})):se("",!0)]),_:1},8,["modelValue"])]),_:1}),u(Te,null,{default:g(()=>[u(fl,{disabled:!k.value,color:"primary",onClick:T},{default:g(()=>d[4]||(d[4]=[L("Update Status")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},gl={};function yl(e,h){const t=hl;return z(),O(ce,null,{default:g(()=>[u(re,null,{default:g(()=>[u(ie,null,{default:g(()=>[u(t)]),_:1})]),_:1})]),_:1})}const Rl=Xe(gl,[["render",yl],["__scopeId","data-v-10c89322"]]);export{Rl as default};
