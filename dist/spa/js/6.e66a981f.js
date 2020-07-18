(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"8bd7":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"q-pa-md"},[o("q-table",{attrs:{grid:e.$q.screen.xs,"visible-columns":e.visibleColumns,title:"Integrantes",data:e._integrantes,columns:e.columns,"row-key":"id",filter:e.filter,loading:e.cargandoPersonas,"no-data-label":"Sin registro de integrantes"},scopedSlots:e._u([{key:"loading",fn:function(){return[o("q-inner-loading",{attrs:{showing:"",color:"negative"}})]},proxy:!0},{key:"top-right",fn:function(){return[o("q-select",{staticClass:"q-mr-md",attrs:{label:"Sector","use-input":"",outlined:"",dense:"","options-dense":"",behavior:"menu","hide-selected":"","fill-input":"","lazy-rules":"","input-debounce":"0",options:e.sectoresOpt,"label-color":"negative",color:"negative","option-value":"id","option-label":"nombre","emit-value":"","map-options":""},on:{filter:e.filterSectores},scopedSlots:e._u([{key:"option",fn:function(t){return[o("q-item",e._g(e._b({},"q-item",t.itemProps,!1),t.itemEvents),[o("q-item-section",[o("q-item-label",{domProps:{innerHTML:e._s(t.opt.nombre)}}),o("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.opt.getDirecion()))])],1)],1)]}},{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[e._v("No results")])],1)]},proxy:!0}]),model:{value:e.sector,callback:function(t){e.sector=t},expression:"sector"}}),o("q-select",{staticClass:"q-mr-md",attrs:{label:"Nucleo","error-message":"Debe seleccionar un nucleo","use-input":"",outlined:"",dense:"","options-dense":"",behavior:"menu","hide-selected":"","fill-input":"","lazy-rules":"","input-debounce":"0",options:e.nucleosOpt,"label-color":"negative",color:"negative","option-value":"id","option-label":"nombre","emit-value":"","map-options":""},on:{filter:e.filterNucleos},scopedSlots:e._u([{key:"option",fn:function(t){return[o("q-item",e._g(e._b({},"q-item",t.itemProps,!1),t.itemEvents),[o("q-item-section",[o("q-item-label",{domProps:{innerHTML:e._s(t.opt.cedula)}}),o("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.opt.nombre))]),o("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.opt.direccion))])],1)],1)]}},{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[e._v("No results")])],1)]},proxy:!0}]),model:{value:e.nucleo,callback:function(t){e.nucleo=t},expression:"nucleo"}}),o("q-select",{staticClass:"q-mr-md",staticStyle:{"min-width":"150px"},attrs:{multiple:"",outlined:"",dense:"","options-dense":"","display-value":e.$q.lang.table.columns,"emit-value":"","map-options":"",options:e.columns,"option-value":"name","options-cover":""},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),o("q-input",{attrs:{dense:"",debounce:"300",placeholder:"Buscar"},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"header",fn:function(t){return[o("q-tr",{attrs:{props:t}},[e._l(t.cols,(function(n){return o("q-th",{key:n.name,attrs:{props:t}},[e._v(e._s(n.label))])})),o("q-th",{attrs:{"auto-width":""}})],2)]}},{key:"body",fn:function(t){return[o("q-tr",{attrs:{props:t}},[e._l(t.cols,(function(n){return o("q-td",{key:n.name,attrs:{props:t}},[e._v(e._s(n.value))])})),o("q-td",{attrs:{"auto-width":""}},[o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"more_vert"},on:{click:function(o){return e.updateIntegrante(t.row)}}},[o("q-menu",[o("q-list",{staticStyle:{"min-width":"100px"}},[o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:e.updateDetallesPersona}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"article",color:"info"}})],1),o("q-item-section",[e._v("Detalles")])],1),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:e.updateModificarPersona}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"edit",color:"amber"}})],1),o("q-item-section",[e._v("Modificar")])],1),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:e.confirmacion}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"delete",color:"negative"}})],1),o("q-item-section",[e._v("Eliminar")])],1),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"print",color:"primary"}})],1),o("q-item-section",[e._v("Imprimir")])],1)],1)],1)],1)],1)],2)]}}])})],1)},i=[],a=(o("c975"),o("c973")),s=o.n(a),l=o("ded3"),r=o.n(l),c=o("2f62"),u=o("08e6"),p={name:"TablaIntegrantes",data(){return{filter:"",nucleo:null,sector:null,sectoresOpt:[],nucleosOpt:[],visibleColumns:["nombre","apellido","cedula","telefono","nucleo","fechaNacimiento"],columns:[{name:"nombre",label:"Nombre(s)",field:"nombre"},{name:"apellido",label:"Apellido(s)",field:"apellido"},{name:"cedula",label:"Cedula",field:"cedula"},{name:"telefono",label:"Telefono",field:"telefono"},{name:"nucleo",label:"Nucleo",field:"nucleo"},{name:"fechaNacimiento",label:"Nacimiento",field:"fechaNacimiento"},{name:"id",label:"Identificador",field:"id"}]}},watch:{sector(e,t){e!==t&&(this.nucleosOpt=this.nucleosSector(e))}},methods:r()(r()({},Object(c["d"])("personas",["updateIntegrante","updateAgregarPersona","updateModificarPersona","updateDetallesPersona"])),{},{confirmacion(){var e=this;this.$q.dialog({title:"Confirme",message:"¿Seguro que quiere eliminar este integrante",cancel:!0,persistent:!0}).onOk(s()((function*(){try{const t=yield u["g"](e.integrante);let o=t.deleted?"Integrante eliminado":"No se pudo eliminar el integrante",n=t?"check":"close";e.$q.notify({message:o,icon:n})}catch(t){alert(t)}})))},filterSectores(e,t,o){let n=this.sectores;t(()=>{const t=e.toLocaleLowerCase();this.sectoresOpt=n.filter(e=>e.nombre.toLocaleLowerCase().indexOf(t)>-1)})},filterNucleos(e,t,o){let n=this.nucleos;t(()=>{const t=e.toLocaleLowerCase();this.sectoresOpt=n.filter(e=>e.nombre.toLocaleLowerCase().indexOf(t)>-1)})}}),computed:r()(r()(r()({},Object(c["c"])("personas",["integrantes","integrante","cargandoPersonas","integrantesNucleo","nucleos","nucleosSector"])),Object(c["c"])("sectores",["sectores"])),{},{_integrantes(){return this.nucleo?this.integrantesNucleo(this.nucleo):this.integrantes}}),created(){this.sectoresOpt=this.sectores,this.nucleosOpt=this.nucleos}},m=p,d=o("2877"),f=o("eaac"),b=o("74f7"),v=o("ddd8"),q=o("66e5"),g=o("4074"),h=o("0170"),_=o("27f9"),y=o("0016"),k=o("bd08"),w=o("357e"),C=o("db86"),N=o("9c40"),x=o("4e73"),O=o("1c1c"),S=o("7f67"),Q=o("eebe"),I=o.n(Q),L=Object(d["a"])(m,n,i,!1,null,null,null);t["default"]=L.exports;I()(L,"components",{QTable:f["a"],QInnerLoading:b["a"],QSelect:v["a"],QItem:q["a"],QItemSection:g["a"],QItemLabel:h["a"],QInput:_["a"],QIcon:y["a"],QTr:k["a"],QTh:w["a"],QTd:C["a"],QBtn:N["a"],QMenu:x["a"],QList:O["a"]}),I()(L,"directives",{ClosePopup:S["a"]})}}]);