(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"013f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("q-card",{staticClass:"login"},[a("q-card-section",{staticClass:"q-pt-none"},[a("div",{staticClass:"q-pa-md"},[a("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit,reset:e.onReset}},[a("div",{staticClass:"text-h5 text-negative"},[e._v("Ingresa tus credenciales")]),a("q-separator"),a("q-input",{attrs:{"label-color":"negative",color:"negative",label:"Cedula","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"perm_identity",color:"negative"}})]},proxy:!0}]),model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("q-input",{attrs:{"label-color":"negative",color:"negative",type:"password",label:"Contraseña","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"vpn_key",color:"negative"}})]},proxy:!0}]),model:{value:e.age,callback:function(t){e.age=t},expression:"age"}}),a("q-toggle",{attrs:{color:"negative",label:"Recuerdame"},model:{value:e.accept,callback:function(t){e.accept=t},expression:"accept"}}),a("div",[a("q-btn",{staticClass:"full-width",attrs:{label:"Ingresar",type:"submit",color:"negative"}})],1),a("q-btn",{staticClass:"full-width",attrs:{label:"¿No tienes cuenta? registrate",color:"negative",flat:""}}),a("q-btn",{staticClass:"full-width",attrs:{label:"Olvide mi contraseña",color:"negative",flat:""}})],1)],1)])],1)],1)},l=[],s={name:"Login",data(){return{name:null,age:null,accept:!1}},methods:{onSubmit(){!0!==this.accept?this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"}):this.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"})},onReset(){this.name=null,this.age=null,this.accept=!1}}},o=s,r=a("2877"),i=a("9989"),c=a("f09f"),u=a("a370"),p=a("0378"),d=a("eb85"),g=a("27f9"),m=a("0016"),f=a("9564"),b=a("9c40"),v=a("eebe"),h=a.n(v),q=Object(r["a"])(o,n,l,!1,null,"617bd8c0",null);t["default"]=q.exports;h()(q,"components",{QPage:i["a"],QCard:c["a"],QCardSection:u["a"],QForm:p["a"],QSeparator:d["a"],QInput:g["a"],QIcon:m["a"],QToggle:f["a"],QBtn:b["a"]})}}]);