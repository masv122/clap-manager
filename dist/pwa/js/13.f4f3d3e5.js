(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"85ad":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{"style-fn":e.myTweak,padding:""}},[a("div",{staticClass:"shadow-1 bg-white q-mt-md"},[a("NavPersonas"),a("ModificarPersona"),a("ConfirmacionEliminacion"),a("DetallesPersona"),a("router-view")],1),a("FBA")],1)},s=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-dialog",{attrs:{persistent:"","full-height":e.$q.screen.lt.sm,"full-width":e.$q.screen.lt.sm},model:{value:e._detallesPersona,callback:function(t){e._detallesPersona=t},expression:"_detallesPersona"}},[a("q-card",{staticClass:"bg-white text-dark",staticStyle:{width:"700px","max-width":"80vw"}},[a("q-toolbar",{staticClass:"bg-negative text-white q-mb-md",attrs:{dark:""}},[a("q-toolbar-title",{attrs:{shrink:""}},[a("div",{staticClass:"text-h6"},[a("q-icon",{staticClass:"q-mr-md",attrs:{name:"article"}}),e._v("Detalles Persona\n          ")],1)]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ml-auto",attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-dark text-white"}},[e._v("Cerrar")])],1)],1),a("q-card-section",{staticClass:"q-pt-none"},["integrante"===e.tipoPersona.value?a("DetallesIntegrante"):e._e(),"nucleo"===e.tipoPersona.value?a("DetallesNucleo"):e._e(),"jefe"===e.tipoPersona.value?a("DetallesJefeCalle"):e._e()],1)],1)],1)],1)},r=[],l=a("ded3"),c=a.n(l),i=a("2f62"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"column"},[a("div",{staticClass:"col"},[a("div",{staticClass:"text-h6 q-ml-xl"},[a("q-icon",{attrs:{name:"info"}}),e._v("Informacion personal\n      ")],1),a("InformacionPersonal",{attrs:{nombre:e.integrante.nombre,apellido:e.integrante.apellido,cedula:e.integrante.id,telefono:e.integrante.telefono}})],1),a("div",{staticClass:"col"},[a("div",{staticClass:"text-h6 q-ml-xl"},[a("q-icon",{attrs:{name:"group"}}),e._v("Informacion del nucleo\n      ")],1),a("InformacionNucleo",{attrs:{nombreNucleo:e.buscarNucleo(e.integrante.nucleo).nombre,nombre:e.buscarIntegrante(e.buscarNucleo(e.integrante.nucleo).cedula).nombre,cedula:e.buscarNucleo(e.integrante.nucleo).cedula,direccion:e.buscarNucleo(e.integrante.nucleo).direccion}})],1),a("div",{staticClass:"col"},[a("div",{staticClass:"text-h6 q-ml-xl"},[a("q-icon",{attrs:{name:"place"}}),e._v("Sector\n      ")],1),a("informacion-sector",{attrs:{nombre:e.buscarSector(e.buscarNucleo(e.integrante.nucleo).sector).nombre,estado:e.buscarSector(e.buscarNucleo(e.integrante.nucleo).sector).estado,municipio:e.buscarSector(e.buscarNucleo(e.integrante.nucleo).sector).municipio,parroquia:e.buscarSector(e.buscarNucleo(e.integrante.nucleo).sector).parroquia}})],1)])])},d=[],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-field",{attrs:{borderless:"",label:"Nombre","stack-label":""},scopedSlots:e._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline"},[e._v(e._s(e.nombre))])]},proxy:!0}])}),a("q-field",{attrs:{borderless:"",label:"Apellidos","stack-label":""},scopedSlots:e._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline"},[e._v(e._s(e.apellido))])]},proxy:!0}])}),a("q-field",{attrs:{borderless:"",label:"Cedula","stack-label":""},scopedSlots:e._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline"},[e._v(e._s(e.cedula))])]},proxy:!0}])}),a("q-field",{attrs:{borderless:"",label:"Telefono","stack-label":""},scopedSlots:e._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline"},[e._v(e._s(e.telefono))])]},proxy:!0}])})],1)},f=[],p={name:"InformacionPersonal",props:{nombre:{type:String,default:""},apellido:{type:String,default:""},cedula:{type:Number,default:null},telefono:{type:String,default:""}}},b=p,v=a("2877"),g=a("8572"),h=a("eebe"),q=a.n(h),_=Object(v["a"])(b,m,f,!1,null,"0b08efb5",null),C=_.exports;q()(_,"components",{QField:g["a"]});var x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-field",{attrs:{borderless:"",label:"Nombre del nucleo","stack-label":""},scopedSlots:e._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline"},[e._v(e._s(e.nombreNucleo))])]},proxy:!0}])}),a("q-field",{attrs:{borderless:"",label:"Jefe(a) del nucleo","stack-label":""},scopedSlots:e._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline"},[e._v(e._s(e.nombre))])]},proxy:!0}])}),a("q-field",{attrs:{borderless:"",label:"Cedula","stack-label":""},scopedSlots:e._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline"},[e._v(e._s(e.cedula))])]},proxy:!0}])}),a("q-field",{attrs:{borderless:"",label:"Direccion","stack-label":""},scopedSlots:e._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline"},[e._v(e._s(e.direccion))])]},proxy:!0}])})],1)},j=[],S={name:"InformacionNucleo",props:{nombreNucleo:{type:String,default:""},nombre:{type:String,default:""},cedula:{type:Number,default:null},direccion:{type:String,default:""}}},P=S,N=Object(v["a"])(P,x,j,!1,null,"a5a3f3f8",null),y=N.exports;q()(N,"components",{QField:g["a"]});var w=a("4bcc"),k={name:"DetallesIntegrante",components:{InformacionPersonal:C,InformacionNucleo:y,InformacionSector:w["a"]},computed:c()(c()({},Object(i["c"])("personas",["integrante","buscarNucleo","buscarIntegrante"])),Object(i["c"])("sectores",["buscarSector"]))},Q=k,I=a("0016"),O=Object(v["a"])(Q,u,d,!1,null,"5b50b874",null),D=O.exports;q()(O,"components",{QIcon:I["a"]});var T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"column"},[a("div",{staticClass:"col"},[a("div",{staticClass:"text-h6 q-ml-xl"},[a("q-icon",{attrs:{name:"group"}}),e._v("Informacion del nucleo\n      ")],1),a("InformacionNucleo",{attrs:{nombreNucleo:e.nucleo.nombre,nombre:e.nucleo.cedula?e.buscarIntegrante(e.nucleo.cedula).nombre:"Sin jefe familiar, asigne uno",cedula:e.nucleo.cedula,direccion:e.nucleo.direccion}})],1),a("div",{staticClass:"col"},[a("div",{staticClass:"text-h6 q-ml-xl"},[a("q-icon",{attrs:{name:"place"}}),e._v("Sector\n      ")],1),a("informacion-sector",{attrs:{nombre:e.buscarSector(e.nucleo.sector).nombre,estado:e.buscarSector(e.nucleo.sector).estado,municipio:e.buscarSector(e.nucleo.sector).municipio,parroquia:e.buscarSector(e.nucleo.sector).parroquia}})],1),a("div",{staticClass:"col"},[a("div",{staticClass:"text-h6 q-ml-xl"},[a("q-icon",{attrs:{name:"info"}}),e._v("Informacion de control\n      ")],1),a("q-field",{attrs:{borderless:"",label:"Integrantes registrados","stack-label":""},scopedSlots:e._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline"},[e._v(e._s(e.nucleo.integrantes.length))])]},proxy:!0}])}),a("q-field",{attrs:{borderless:"",label:"Pagos registrados","stack-label":""},scopedSlots:e._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline"},[e._v("Pagos registrados")])]},proxy:!0}])})],1)])])},F=[],$={name:"DetallesNucleo",components:{InformacionNucleo:y,InformacionSector:w["a"]},computed:c()(c()({},Object(i["c"])("personas",["nucleo","buscarIntegrante"])),Object(i["c"])("sectores",["buscarSector"]))},E=$,J=Object(v["a"])(E,T,F,!1,null,"5f4007b2",null),M=J.exports;q()(J,"components",{QIcon:I["a"],QField:g["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"column"},[a("div",{staticClass:"col"},[a("div",{staticClass:"text-h6 q-ml-xl"},[a("q-icon",{attrs:{name:"info"}}),e._v("Informacion personal\n      ")],1),a("InformacionPersonal",{attrs:{nombre:e.jefe.nombre,apellido:e.jefe.apellido,cedula:e.jefe.id,telefono:e.jefe.telefono}}),a("div",{staticClass:"text-h6 q-ml-xl"},[a("q-icon",{attrs:{name:"supervised_user_circle"}}),e._v("Informacion del jefe\n      ")],1),a("q-field",{attrs:{borderless:"",label:"Codigo","stack-label":""},scopedSlots:e._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline"},[e._v(e._s(e.jefe.codigo))])]},proxy:!0}])}),a("q-field",{attrs:{borderless:"",label:"Direccion","stack-label":""},scopedSlots:e._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline"},[e._v(e._s(e.jefe.direccion))])]},proxy:!0}])})],1),a("div",{staticClass:"col"},[a("div",{staticClass:"text-h6 q-ml-xl"},[a("q-icon",{attrs:{name:"place"}}),e._v("Sector\n      ")],1),a("informacion-sector",{attrs:{nombre:e.jefe.sector?e.buscarSector(e.jefe.sector).nombre:"Sin sector asignado",estado:e.jefe.sector?e.buscarSector(e.jefe.sector).estado:"Sin sector asignado",municipio:e.jefe.sector?e.buscarSector(e.jefe.sector).municipio:"Sin sector asignado",parroquia:e.jefe.sector?e.buscarSector(e.jefe.sector).parroquia:"Sin sector asignado"}})],1)])])},B=[],R={name:"DetallesJefeCalle",components:{InformacionPersonal:C,InformacionSector:w["a"]},computed:c()(c()({},Object(i["c"])("personas",["jefe"])),Object(i["c"])("sectores",["buscarSector"]))},L=R,z=Object(v["a"])(L,A,B,!1,null,"e94faa60",null),H=z.exports;q()(z,"components",{QIcon:I["a"],QField:g["a"]});var G={name:"DetallesPersona",components:{DetallesIntegrante:D,DetallesNucleo:M,DetallesJefeCalle:H},computed:c()(c()({},Object(i["c"])("personas",["detallesPersona","integrante","nucleo","jefe","tipoPersona"])),{},{_detallesPersona:{get(){return this.detallesPersona},set(e){this.updateDetallesPersona(e)}}}),methods:c()({},Object(i["d"])("personas",["updateDetallesPersona"]))},V=G,K=a("24e8"),U=a("f09f"),W=a("65c6"),X=a("6ac5"),Y=a("9c40"),Z=a("05c0"),ee=a("a370"),te=a("7f67"),ae=Object(v["a"])(V,n,r,!1,null,"640995b7",null),oe=ae.exports;q()(ae,"components",{QDialog:K["a"],QCard:U["a"],QToolbar:W["a"],QToolbarTitle:X["a"],QIcon:I["a"],QBtn:Y["a"],QTooltip:Z["a"],QCardSection:ee["a"]}),q()(ae,"directives",{ClosePopup:te["a"]});var se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-dialog",{attrs:{persistent:"","full-height":e.$q.screen.lt.sm,"full-width":e.$q.screen.lt.sm},model:{value:e._modificarPersona,callback:function(t){e._modificarPersona=t},expression:"_modificarPersona"}},[a("q-card",{staticClass:"bg-white text-dark",staticStyle:{width:"700px","max-width":"80vw"}},[a("q-toolbar",{staticClass:"bg-negative text-white q-mb-md",attrs:{dark:""}},[a("q-toolbar-title",{attrs:{shrink:""}},[a("div",{staticClass:"text-h6"},[a("q-icon",{attrs:{name:"add"}}),e._v("Modificar Persona\n          ")],1)]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ml-auto",attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-dark text-white"}},[e._v("Cerrar")])],1)],1),a("q-card-section",{staticClass:"q-ma-md"},[e.tipoPersona&&"integrante"===e.tipoPersona.value?a("ModificarIntegrante"):e._e(),e.tipoPersona&&"nucleo"===e.tipoPersona.value?a("ModificarNucleo"):e._e(),e.tipoPersona&&"jefe"===e.tipoPersona.value?a("ModificarJefe"):e._e()],1),a("q-separator"),a("q-card-actions",{staticClass:"q-ma-md",attrs:{align:"center"}},[a("q-btn",{staticClass:"q-ml-sm full-width",attrs:{label:"Guardar",icon:"save",type:"submit",color:"primary"},on:{click:function(t){return e.confirmarPersona("modificar")}}})],1)],1)],1)],1)},ne=[],re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-form",{staticClass:"q-gutter-md"},[a("div",{staticClass:"text-h6 q-mt-md"},[a("q-icon",{staticClass:"q-mr-md",attrs:{name:"info"}}),e._v("Datos Personales\n      "),a("q-btn",{staticClass:"float-right",attrs:{color:"negative",icon:"redo",label:"Restablecer"}})],1),a("q-separator"),a("datos-personales"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 text-h6"},[a("q-icon",{staticClass:"q-mr-md",attrs:{name:"group"}}),e._v("\n        "+e._s(e.reasignar?"Reasignar Nucleo":"Crear nucleo")+"\n      ")],1),a("div",{staticClass:"col-6"},[a("q-btn",{staticClass:"float-right",attrs:{color:"negative",icon:"add",label:e.reasignar?"Crear Nucleo ":"Reasignar Nucleo"},on:{click:function(t){e.reasignar=!e.reasignar}}},[e.reasignar?a("q-tooltip",{attrs:{"content-class":"bg-negative","content-style":"font-size: 14px"}},[a("q-icon",{attrs:{name:"info",size:"sm"}}),e._v(" Esta accion creara un nuevo nucleo con este integrante")],1):e._e()],1)],1)]),a("div",{staticClass:"text-h6 q-mt-md"}),a("q-banner",{directives:[{name:"show",rawName:"v-show",value:e.esJefeFamiliar(e.integrante.id)>=0&&!e.reasignar,expression:"esJefeFamiliar(integrante.id) >= 0 && !reasignar"}],staticClass:"text-white bg-red alerta",attrs:{dense:"","inline-actions":""},scopedSlots:e._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"warning",color:"white"}})]},proxy:!0}])},[e._v("\n      Va a reasignar el jefe familiar del nucleo.\n      Debera proporcionar un nuevo jefe familiar para el mismo.\n    ")]),e.reasignar?a("div",[a("q-separator"),a("seleccionar-nucleo")],1):a("crear-nucleo",{attrs:{modificar:""}})],1)],1)},le=[],ce=a("faf8"),ie=a("71ad"),ue=a("fdf5"),de={name:"ModificarIntegrante",components:{DatosPersonales:ce["a"],SeleccionarNucleo:ie["a"],CrearNucleo:ue["a"]},data(){return{reasignar:!0}},computed:c()(c()({},Object(i["c"])("personas",["nucleos","nucleo","integrante","buscarNucleo","esJefeFamiliar"])),Object(i["c"])("sectores",["sectores"])),methods:c()(c()({},Object(i["d"])("personas",["updateNucleo","updateNombre","updateApellido","updateCedula","updateTelefono","updateFechaNacimiento"])),Object(i["d"])("sectores",["updateSector"])),created(){this.updateSector(this.buscarNucleo(this.integrante.nucleo).sector),this.updateNucleo(this.integrante.nucleo),this.updateNombre(this.integrante.nombre),this.updateApellido(this.integrante.apellido),this.updateCedula(this.integrante.id),this.updateTelefono(this.integrante.telefono),this.updateFechaNacimiento(this.integrante.fechaNacimiento)}},me=de,fe=a("0378"),pe=a("eb85"),be=a("54e1"),ve=Object(v["a"])(me,re,le,!1,null,"26efbaca",null),ge=ve.exports;q()(ve,"components",{QForm:fe["a"],QIcon:I["a"],QBtn:Y["a"],QSeparator:pe["a"],QTooltip:Z["a"],QBanner:be["a"]});var he=a("24f3"),qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-form",{staticClass:"q-gutter-md"},[a("div",{staticClass:"text-h6 q-mt-md"},[a("q-icon",{staticClass:"q-mr-md",attrs:{name:"group"}}),e._v("Reasignar Sector\n    ")],1),a("q-separator"),a("q-select",{staticStyle:{"padding-bottom":"32px"},attrs:{label:"Sector","use-input":"",behavior:"menu","hide-selected":"","fill-input":"","lazy-rules":"","input-debounce":"0",options:e.sectoresOpt,"label-color":"negative",color:"negative","option-value":"id","option-label":"nombre","emit-value":"","map-options":""},on:{filter:e.filterSectores},scopedSlots:e._u([{key:"option",fn:function(t){return[a("q-item",e._g(e._b({},"q-item",t.itemProps,!1),t.itemEvents),[a("q-item-section",[a("q-item-label",{domProps:{innerHTML:e._s(t.opt.nombre)}}),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.opt.getDirecion()))])],1)],1)]}},{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey"},[e._v("No results")])],1)]},proxy:!0}]),model:{value:e._sector,callback:function(t){e._sector=t},expression:"_sector"}}),a("div",{staticClass:"text-h6 q-mt-md"},[a("q-icon",{staticClass:"q-mr-md",attrs:{name:"group"}}),e._v("Reasignar Jefe Familiar\n    ")],1),a("q-separator"),a("q-select",{attrs:{"use-input":"","input-debounce":"0",label:"Jefe Familiar",options:e.cedulas,"label-color":"negative",color:"negative"},on:{filter:e.filterSectores},scopedSlots:e._u([{key:"option",fn:function(t){return[a("q-item",e._g(e._b({},"q-item",t.itemProps,!1),t.itemEvents),[a("q-item-section",[a("q-item-label",{domProps:{innerHTML:e._s(t.opt)}}),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.buscarIntegrante(t.opt).nombre))])],1)],1)]}},{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey"},[e._v("Sin resultados")])],1)]},proxy:!0}]),model:{value:e._cedula,callback:function(t){e._cedula=t},expression:"_cedula"}}),a("div",{staticClass:"text-h6 q-mt-md"},[a("q-icon",{staticClass:"q-mr-md",attrs:{name:"info"}}),e._v("Datos del nucleo\n      "),a("q-btn",{staticClass:"float-right",attrs:{color:"negative",icon:"redo",label:"Restablecer"}})],1),a("q-separator"),a("datos-basicos-nucleo",{attrs:{modificar:""}})],1)],1)},_e=[],Ce=(a("c975"),a("b5ae")),xe=a("af6b"),je={name:"ModificarNucleo",components:{DatosBasicosNucleo:xe["a"]},data(){return{cedulas:[],sectoresOpt:[]}},validations:{_sector:{required:Ce["required"]},_cedula:{required:Ce["required"]}},computed:c()(c()(c()({},Object(i["c"])("sectores",["sectores","sector"])),Object(i["c"])("personas",["nucleo","cedula","buscarIntegrante"])),{},{_sector:{get(){return this.sector},set(e){this.updateSector(e)}},_cedula:{get(){return this.cedula},set(e){this.updateCedula(e)}}}),methods:c()(c()(c()({},Object(i["d"])("sectores",["updateSector"])),Object(i["d"])("personas",["updateDatosTipoPersonaInvalido","updateCedula"])),{},{filterSectores(e,t,a){let o=this.sectores;t(()=>{const t=e.toLocaleLowerCase();this.sectoresOpt=o.filter(e=>e.nombre.toLocaleLowerCase().indexOf(t)>-1)})},filterCedulas(e,t,a){let o=this.nucleo.integrantes;t(()=>{this.cedulas=o.filter(t=>t===e)})}}),created(){this.sectoresOpt=this.sectores,this.cedulas=this.nucleo.integrantes,this.updateSector(this.nucleo.sector),this.updateCedula(this.nucleo.cedula)}},Se=je,Pe=a("ddd8"),Ne=a("66e5"),ye=a("4074"),we=a("0170"),ke=Object(v["a"])(Se,qe,_e,!1,null,null,null),Qe=ke.exports;q()(ke,"components",{QForm:fe["a"],QIcon:I["a"],QSeparator:pe["a"],QSelect:Pe["a"],QItem:Ne["a"],QItemSection:ye["a"],QItemLabel:we["a"],QBtn:Y["a"]});var Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-form",{staticClass:"q-gutter-md"},[a("div",{staticClass:"text-h6 q-mt-md"},[a("q-icon",{staticClass:"q-mr-md",attrs:{name:"info"}}),e._v("Datos Personales\n      "),a("q-btn",{staticClass:"float-right",attrs:{color:"negative",icon:"redo",label:"Restablecer"}})],1),a("q-separator"),a("datos-personales"),a("crear-jefe-calle",{attrs:{modificar:""}})],1)],1)},Oe=[],De=a("4e5c"),Te={name:"ModificarJefe",components:{DatosPersonales:ce["a"],CrearJefeCalle:De["a"]},data(){return{}},computed:c()(c()({},Object(i["c"])("personas",["jefe"])),Object(i["c"])("sectores",["sectores","sector"])),methods:c()(c()({},Object(i["d"])("personas",["updateNombre","updateApellido","updateCedula","updateTelefono","updateCodigo","updateDireccion","updateFechaNacimiento"])),Object(i["d"])("sectores",["updateSector"])),created(){this.updateNombre(this.jefe.nombre),this.updateApellido(this.jefe.apellido),this.updateCedula(this.jefe.id),this.updateTelefono(this.jefe.telefono),this.updateFechaNacimiento(this.jefe.fechaNacimiento),this.updateCodigo(this.jefe.codigo),this.updateDireccion(this.jefe.direccion),this.updateSector(this.jefe.sector)}},Fe=Te,$e=Object(v["a"])(Fe,Ie,Oe,!1,null,null,null),Ee=$e.exports;q()($e,"components",{QForm:fe["a"],QIcon:I["a"],QBtn:Y["a"],QSeparator:pe["a"]});var Je={name:"ModificarPersona",components:{ModificarIntegrante:ge,ModificarNucleo:Qe,ModificarJefe:Ee},mixins:[he["a"]],data(){return{}},computed:c()(c()(c()({},Object(i["c"])("sectores",["sector"])),Object(i["c"])("personas",["modificarPersona","nombre","apellido","cedula","telefono","fechaNacimiento","detallesPersona","integrante","nucleo","jefe","nombreNucleo","direccion","tipoPersona","esJefeFamiliar"])),{},{_modificarPersona:{get(){return this.modificarPersona},set(){this.updateModificarPersona()}}}),methods:c()({},Object(i["d"])("personas",["updateModificarPersona"]))},Me=Je,Ae=a("4b7e"),Be=Object(v["a"])(Me,se,ne,!1,null,"77df2fef",null),Re=Be.exports;q()(Be,"components",{QDialog:K["a"],QCard:U["a"],QToolbar:W["a"],QToolbarTitle:X["a"],QIcon:I["a"],QBtn:Y["a"],QTooltip:Z["a"],QCardSection:ee["a"],QSeparator:pe["a"],QCardActions:Ae["a"]}),q()(Be,"directives",{ClosePopup:te["a"]});var Le=a("e6d0"),ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fit row q-gutter-y-md"},[a("q-toolbar",{staticClass:"col-sm-8"},[a("q-tabs",{staticClass:"q-mx-auto text-negative",attrs:{dense:"",align:"justify"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-route-tab",{attrs:{to:{name:"integrantes"},name:"integrantes",icon:"perm_identity",label:"Integrantes"}}),a("q-route-tab",{attrs:{to:{name:"nucleos"},name:"nucleos",icon:"group",label:"Nucleos"}}),a("q-route-tab",{attrs:{to:{name:"jefes de calle"},name:"jefes",icon:"supervised_user_circle",label:"Jefes de calle"}})],1)],1),e.$q.screen.lt.sm?e._e():a("q-toolbar",{staticClass:"col-4 q-gutter-xs"},[a("q-btn",{attrs:{color:"positive",flat:"",icon:"add",label:"Agregar"},on:{click:e.updateAgregarPersona}}),a("q-btn",{attrs:{color:"primary",flat:"",icon:"print",label:"Imprimir"}})],1)],1)},He=[],Ge={name:"NavPersonas",data(){return{tab:"integrantes"}},methods:c()({},Object(i["d"])("personas",["updateAgregarPersona"]))},Ve=Ge,Ke=a("429b"),Ue=a("7867"),We=Object(v["a"])(Ve,ze,He,!1,null,"852a8e0a",null),Xe=We.exports;q()(We,"components",{QToolbar:W["a"],QTabs:Ke["a"],QRouteTab:Ue["a"],QBtn:Y["a"]});var Ye=a("ee3b"),Ze={name:"Personas",components:{DetallesPersona:oe,ConfirmacionEliminacion:Le["a"],ModificarPersona:Re,NavPersonas:Xe,FBA:Ye["a"]},methods:{myTweak(e){return{minHeight:e?`calc(100vh - ${e}px`:"100vh"}}}},et=Ze,tt=a("9989"),at=Object(v["a"])(et,o,s,!1,null,"7441a651",null);t["default"]=at.exports;q()(at,"components",{QPage:tt["a"]})}}]);