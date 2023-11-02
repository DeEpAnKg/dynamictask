(function(){"use strict";var e={6732:function(e,o,t){var r=t(9242),i=t(3396);const n={id:"app"};function s(e,o,t,r,s,a){const l=(0,i.up)("DynamicForm");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(l)])}var a=t(7139);const l=e=>((0,i.dD)("data-v-7979effe"),e=e(),(0,i.Cn)(),e),p=["for"],c=["type","name","onUpdate:modelValue"],d=["type","name","onUpdate:modelValue","onInput"],m={key:2},u=l((()=>(0,i._)("label",null,"Indoor Hobbies",-1))),b={class:"hobbies-group"},h=["onUpdate:modelValue","onInput"],f=["onClick"],y=l((()=>(0,i._)("label",null,"Outdoor Hobbies",-1))),v={class:"hobbies-group"},g=["onUpdate:modelValue","onInput"],w=["onClick"],D={key:3,class:"error-message"},k={key:0,class:"submitted-data"},O=l((()=>(0,i._)("h2",null,"Submitted Data:",-1)));function _(e,o,t,n,s,l){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("form",{onSubmit:o[4]||(o[4]=(0,r.iM)(((...e)=>l.submitForm&&l.submitForm(...e)),["prevent"])),class:"dynamic-form"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Object.keys(s.schema.properties),(e=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:"form-group"},[(0,i._)("label",{for:e},(0,a.zw)(s.schema.properties[e].description),9,p),"number"===s.schema.properties[e].type?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,type:s.schema.properties[e].type,name:e,"onUpdate:modelValue":o=>s.formData[e]=o,class:"form-control"},null,8,c)),[[r.YZ,s.formData[e]]]):"string"===s.schema.properties[e].type?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:1,type:s.schema.properties[e].type,name:e,"onUpdate:modelValue":o=>s.formData[e]=o,class:"form-control",onInput:o=>l.validateField(e)},null,40,d)),[[r.YZ,s.formData[e]]]):"hobbies"===e?((0,i.wg)(),(0,i.iD)("div",m,[u,(0,i._)("div",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.formData.hobbies.indoor,((e,o)=>((0,i.wg)(),(0,i.iD)("div",{key:o},[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e=>s.formData.hobbies.indoor[o]=e,class:"form-control",onInput:e=>l.validateHobby("indoor",o)},null,40,h),[[r.nr,s.formData.hobbies.indoor[o]]]),(0,i._)("button",{onClick:e=>l.removeHobby("indoor",o)},"Remove",8,f)])))),128)),(0,i._)("button",{onClick:o[0]||(o[0]=e=>l.addHobby("indoor"))},"Add Indoor Hobby")]),y,(0,i._)("div",v,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.formData.hobbies.outdoor,((e,o)=>((0,i.wg)(),(0,i.iD)("div",{key:o},[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e=>s.formData.hobbies.outdoor[o]=e,class:"form-control",onInput:e=>l.validateHobby("outdoor",o)},null,40,g),[[r.nr,s.formData.hobbies.outdoor[o]]]),(0,i._)("button",{onClick:e=>l.removeHobby("outdoor",o)},"Remove",8,w)])))),128)),(0,i._)("button",{onClick:o[1]||(o[1]=e=>l.addHobby("outdoor"))},"Add Outdoor Hobby")])])):(0,i.kq)("",!0),s.errors[e]?((0,i.wg)(),(0,i.iD)("span",D,(0,a.zw)(s.errors[e]),1)):(0,i.kq)("",!0)])))),128)),(0,i._)("button",{onClick:o[2]||(o[2]=(...e)=>l.downloadJSON&&l.downloadJSON(...e)),type:"submit",class:"btn btn-primary"},"Submit"),(0,i._)("input",{type:"file",onChange:o[3]||(o[3]=(...e)=>l.loadJSONFile&&l.loadJSONFile(...e)),accept:".json"},null,32)],32),s.submitted?((0,i.wg)(),(0,i.iD)("div",k,[O,(0,i._)("pre",null,(0,a.zw)(JSON.stringify(s.formData,null,2)),1)])):(0,i.kq)("",!0)])}t(560),t(8858),t(1318),t(3228);var j={data(){return{schema:{$schema:"http://json-schema.org/draft-04/schema#",$id:"https://example.com/employee.schema.json",title:"Record of employee",description:"This document records the details of an employee",type:"object",properties:{id:{description:"A unique identifier for an employee",type:"number"},name:{description:"Full name of the employee",type:"string"},contactNumber:{description:"Contact number ",type:"string",pattern:"^(0|91)?[6-9][0-9]{9}$",$errorMessage:"Contact number contains invalid characters"},email:{description:"Email",type:"string",pattern:"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",$errorMessage:"Email contains invalid characters"},age:{description:"Age of the employee",type:"number"},hobbies:{description:"Hobbies of the employee",type:"object",properties:{indoor:{type:"array",minItems:1,maxItems:5,items:{description:"List of indoor hobbies",type:"string",optional:!0}},outdoor:{type:"array",minItems:1,maxItems:5,items:{description:"List of outdoor hobbies",type:"string",optional:!0}}}}}},formData:{hobbies:{indoor:[],outdoor:[]}},errors:{},submitted:!1}},methods:{submitForm(){console.log(this.formData),this.submitted=!0,this.validateForm(),0===Object.keys(this.errors).length&&(this.submitted=!0)},validateField(e){if("contactNumber"===e){const o=new RegExp(this.schema.properties[e].pattern);o.test(this.formData[e])?this.errors[e]=null:this.errors[e]=this.schema.properties[e].$errorMessage}else if("email"===e){const o=new RegExp(this.schema.properties[e].pattern);o.test(this.formData[e])?this.errors[e]=null:this.errors[e]=this.schema.properties[e].$errorMessage}else this.errors[e]=null},validateHobby(e,o){if(this.schema.properties.hobbies.properties[e].items.pattern){const t=new RegExp(this.schema.properties.hobbies.properties[e].items.pattern);t.test(this.formData.hobbies[e][o])?this.$delete(this.errors,`hobbies.${e}[${o}]`):this.$set(this.errors,`hobbies.${e}[${o}]`,this.schema.properties.hobbies.properties[e].items.$errorMessage)}},addHobby(e){this.formData.hobbies[e].length<5&&this.formData.hobbies[e].push("")},removeHobby(e,o){this.formData.hobbies[e].splice(o,1)},validateForm(){this.errors={};for(const e of Object.keys(this.schema.properties))this.validateField(e);for(const e of["indoor","outdoor"])for(let o=0;o<this.formData.hobbies[e].length;o++)this.validateHobby(e,o)},downloadJSON(){const e=JSON.stringify(this.formData,null,2),o=new Blob([e],{type:"application/json"}),t=window.URL.createObjectURL(o),r=document.createElement("a");r.href=t,r.download="formData.json",document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(t),document.body.removeChild(r)},loadJSONFile(e){const o=e.target.files[0];if(o){const t=new FileReader;t.onload=o=>{const t=o.target.result;try{const o=JSON.parse(t);this.formData=o,this.errors={},e.target.value=null}catch(r){console.error("Error parsing JSON:",r)}},t.readAsText(o)}}}},H=t(89);const F=(0,H.Z)(j,[["render",_],["__scopeId","data-v-7979effe"]]);var C=F,$={components:{DynamicForm:C}};const x=(0,H.Z)($,[["render",s]]);var I=x;(0,r.ri)(I).mount("#app")}},o={};function t(r){var i=o[r];if(void 0!==i)return i.exports;var n=o[r]={exports:{}};return e[r].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(o,r,i,n){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],n=e[c][2];for(var a=!0,l=0;l<r.length;l++)(!1&n||s>=n)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(a=!1,n<s&&(s=n));if(a){e.splice(c--,1);var p=i();void 0!==p&&(o=p)}}return o}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,i,n]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,r){var i,n,s=r[0],a=r[1],l=r[2],p=0;if(s.some((function(o){return 0!==e[o]}))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(l)var c=l(t)}for(o&&o(r);p<s.length;p++)n=s[p],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(c)},r=self["webpackChunkdynamic_form"]=self["webpackChunkdynamic_form"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6732)}));r=t.O(r)})();
//# sourceMappingURL=app.a02e018d.js.map