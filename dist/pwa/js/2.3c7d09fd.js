(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"65e6":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.$q.screen.lt.sm?e._e():a("nav-sectores"),a("dialog-modificar-sector"),a("dialog-detalles-sector"),a("tabla-sectores"),a("f-b-a")],1)},s=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pt-md q-mx-md"},[a("div",{staticClass:"fit row justify-end"},[a("div",{staticClass:"col-auto q-gutter-xs"},[a("q-btn",{attrs:{color:"positive",flat:"",icon:"add",label:"Agregar"},on:{click:e.updateAgregar}}),a("q-btn",{attrs:{color:"primary",flat:"",icon:"print",label:"Imprimir"}})],1)])])},i=[],l=a("ded3"),c=a.n(l),n=a("2f62"),d={name:"NavSectores",computed:{},methods:c()({},Object(n["d"])("sectores",["updateAgregar"]))},u=d,m=a("2877"),p=a("9c40"),f=a("eebe"),b=a.n(f),q=Object(m["a"])(u,r,i,!1,null,"3ed73da1",null),h=q.exports;b()(q,"components",{QBtn:p["a"]});var v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-dialog",{attrs:{persistent:"","full-height":e.$q.screen.lt.sm,"full-width":e.$q.screen.lt.sm},model:{value:e._detallesSector,callback:function(t){e._detallesSector=t},expression:"_detallesSector"}},[a("q-card",{staticClass:"bg-white text-dark",staticStyle:{width:"700px","max-width":"80vw"}},[a("q-toolbar",{staticClass:"bg-negative text-white q-mb-md",attrs:{dark:""}},[a("q-toolbar-title",{attrs:{shrink:""}},[a("div",{staticClass:"text-h6"},[a("q-icon",{staticClass:"q-mr-md",attrs:{name:"article"}}),e._v("Detalles Sector\n        ")],1)]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ml-auto",attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-dark text-white"}},[e._v("Cerrar")])],1)],1),a("q-card-section",{staticClass:"q-pt-none"},[a("detalles-sector")],1)],1)],1)},g=[],S=a("7ec5"),_={name:"DialogDetallesSector",components:{DetallesSector:S["default"]},data(){return{}},computed:c()(c()({},Object(n["c"])("sectores",["detalles"])),{},{_detallesSector:{get(){return this.detalles},set(e){this.updateDetalles(e)}}}),methods:c()({},Object(n["d"])("sectores",["updateDetalles"]))},C=_,Q=a("24e8"),w=a("f09f"),x=a("65c6"),k=a("6ac5"),j=a("0016"),y=a("05c0"),M=a("a370"),O=a("7f67"),T=Object(m["a"])(C,v,g,!1,null,"479f9d00",null),$=T.exports;b()(T,"components",{QDialog:Q["a"],QCard:w["a"],QToolbar:x["a"],QToolbarTitle:k["a"],QIcon:j["a"],QBtn:p["a"],QTooltip:y["a"],QCardSection:M["a"]}),b()(T,"directives",{ClosePopup:O["a"]});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-table",{staticClass:"q-mt-md",attrs:{grid:e.$q.screen.xs,"visible-columns":e.visibleColumns,title:"Sectores",data:e.sectores,columns:e.columns,"row-key":"id",filter:e.filter,loading:e.cargandoSectores,"no-data-label":"Sin registro de sectores"},scopedSlots:e._u([{key:"loading",fn:function(){return[a("q-inner-loading",{attrs:{showing:"",color:"negative"}})]},proxy:!0},{key:"top-right",fn:function(){return[a("q-select",{staticClass:"q-mr-md",staticStyle:{"min-width":"150px"},attrs:{multiple:"","label-color":"negative",color:"negative",dense:"","options-dense":"","display-value":e.$q.lang.table.columns,"emit-value":"","map-options":"",options:e.columns,"option-value":"name","options-cover":""},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-input",{attrs:{dense:"",debounce:"300",placeholder:"Buscar"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"header",fn:function(t){return[a("q-tr",{attrs:{props:t}},[e._l(t.cols,(function(o){return a("q-th",{key:o.name,attrs:{props:t}},[e._v(e._s(o.label))])})),a("q-th",{attrs:{"auto-width":""}})],2)]}},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[e._l(t.cols,(function(o){return a("q-td",{key:o.name,attrs:{props:t}},[e._v(e._s(o.value))])})),a("q-td",{attrs:{"auto-width":""}},[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"more_vert"},on:{click:function(a){return e.updateSector(t.row)}}},[a("menu-registros")],1)],1)],2)]}},{key:"item",fn:function(t){return[a("div",{staticClass:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:t.selected?"transform: scale(0.95);":""},[a("q-card",[a("q-card-section",[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"more_horiz"},on:{click:function(a){return e.updateSector(t.row)}}},[a("menu-registros")],1)],1),a("q-separator"),a("q-list",{attrs:{dense:""}},e._l(t.cols.filter((function(e){return"desc"!==e.name})),(function(t){return a("q-item",{key:t.name},[a("q-item-section",[a("q-item-label",[e._v(e._s(t.label))])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.value))])],1)],1)})),1)],1)],1)]}}])})},I=[],E=a("0a45"),J={name:"TablaSectores",components:{MenuRegistros:E["a"]},data(){return{filter:"",visibleColumns:["nombre","estado","municipio","parroquia","jefe"],columns:[{name:"nombre",label:"Nombre",field:"nombre"},{name:"estado",label:"Estado",field:"estado"},{name:"municipio",label:"Municipio",field:"municipio"},{name:"parroquia",label:"Parroquia",field:"parroquia"},{name:"jefe",label:"Jefe de Calle",field:e=>e.jefe?this.buscarJefe(e.jefe).nombreCompleto():"Sin jefe de calle asingado"},{name:"id",label:"Identificador",field:"id"},,{name:"nucleos",label:"nucleos",field:e=>{const t=[];return e.nucleos.forEach(e=>{const a=this.buscarNucleo(e);t.push(a.nombre)}),t}}]}},methods:c()({},Object(n["d"])("sectores",["updateSector"])),computed:c()(c()({},Object(n["c"])("sectores",["sectores","sector","cargandoSectores"])),Object(n["c"])("personas",["buscarJefe","buscarNucleo"]))},N=J,B=a("eaac"),P=a("74f7"),A=a("ddd8"),L=a("27f9"),R=a("bd08"),z=a("357e"),F=a("db86"),G=a("eb85"),H=a("1c1c"),K=a("66e5"),U=a("4074"),V=a("0170"),W=Object(m["a"])(N,D,I,!1,null,null,null),X=W.exports;b()(W,"components",{QTable:B["a"],QInnerLoading:P["a"],QSelect:A["a"],QInput:L["a"],QIcon:j["a"],QTr:R["a"],QTh:z["a"],QTd:F["a"],QBtn:p["a"],QCard:w["a"],QCardSection:M["a"],QSeparator:G["a"],QList:H["a"],QItem:K["a"],QItemSection:U["a"],QItemLabel:V["a"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-dialog",{attrs:{persistent:"","full-height":e.$q.screen.lt.sm,"full-width":e.$q.screen.lt.sm},on:{show:e.cargarSector,hide:e.resetear},model:{value:e._modificarSector,callback:function(t){e._modificarSector=t},expression:"_modificarSector"}},[a("q-card",{staticClass:"bg-white text-dark",staticStyle:{width:"700px","max-width":"80vw"}},[a("q-toolbar",{staticClass:"bg-negative text-white",attrs:{dark:""}},[a("q-toolbar-title",{attrs:{shrink:""}},[a("div",{staticClass:"text-h6"},[a("q-icon",{staticClass:"q-mr-md",attrs:{name:"edit"}}),e._v("Modificar Sector\n        ")],1)]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ml-auto",attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-dark text-white"}},[e._v("Cerrar")])],1)],1),a("q-card-section",{staticClass:"q-ma-none"},[a("modificar-sector")],1)],1)],1)},Z=[],ee=a("ebf5"),te={name:"DialogModificarSector",components:{ModificarSector:ee["default"]},data(){return{}},computed:c()(c()({},Object(n["c"])("sectores",["modificar","sector"])),{},{_modificarSector:{get(){return this.modificar},set(){this.updateModificar()}}}),methods:c()(c()(c()({},Object(n["d"])("sectores",["updateModificar","updateSector","updateEstadoMod","updateMunicipioMod","updateParroquiaMod","updateNombreMod"])),Object(n["d"])("personas",["updateJefeSector"])),{},{cargarSector(){this.updateJefeSector(this.sector.jefe?[this.buscarJefe(this.sector.jefe)]:[])},confirmacion(){this.$q.dialog({title:"Confirme",message:"¿Seguro que quiere modificar este sector",cancel:!0,persistent:!0}).onOk(()=>{this.guardarSector()})},resetear(){this.updateSector(null),this.updateEstadoMod(null),this.updateMunicipioMod(null),this.updateParroquiaMod(null),this.updateNombreMod(""),this.updateJefeSector([])}})},ae=te,oe=Object(m["a"])(ae,Y,Z,!1,null,"ed01e9fa",null),se=oe.exports;b()(oe,"components",{QDialog:Q["a"],QCard:w["a"],QToolbar:x["a"],QToolbarTitle:k["a"],QIcon:j["a"],QBtn:p["a"],QTooltip:y["a"],QCardSection:M["a"]}),b()(oe,"directives",{ClosePopup:O["a"]});var re=a("ee3b"),ie={name:"Registros",components:{NavSectores:h,DialogDetallesSector:$,TablaSectores:X,DialogModificarSector:se,FBA:re["a"]}},le=ie,ce=Object(m["a"])(le,o,s,!1,null,"cc19efc0",null);t["default"]=ce.exports}}]);