(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"65e6":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("div",[e.$q.screen.lt.sm?e._e():t("nav-sectores"),t("dialog-modificar-sector"),t("dialog-detalles-sector"),t("tabla-sectores"),t("f-b-a")],1)},s=[],r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"q-pt-md q-mx-md"},[t("div",{staticClass:"fit row justify-end"},[t("div",{staticClass:"col-auto q-gutter-xs"},[t("q-btn",{attrs:{color:"positive",flat:"",icon:"add",label:"Agregar"},on:{click:e.updateAgregar}}),t("q-btn",{attrs:{color:"primary",flat:"",icon:"print",label:"Imprimir"}})],1)])])},i=[],l=a("2f62"),c={name:"NavSectores",computed:{},methods:{...Object(l["d"])("sectores",["updateAgregar"])}},n=c,d=a("2877"),u=a("9c40"),m=a("eebe"),p=a.n(m),f=Object(d["a"])(n,r,i,!1,null,"3ed73da1",null),b=f.exports;p()(f,"components",{QBtn:u["a"]});var q=function(){var e=this,t=e._self._c;return t("q-dialog",{attrs:{persistent:"","full-height":e.$q.screen.lt.sm,"full-width":e.$q.screen.lt.sm},model:{value:e._detallesSector,callback:function(t){e._detallesSector=t},expression:"_detallesSector"}},[t("q-card",{staticClass:"bg-white text-dark",staticStyle:{width:"700px","max-width":"80vw"}},[t("q-toolbar",{staticClass:"bg-negative text-white q-mb-md",attrs:{dark:""}},[t("q-toolbar-title",{attrs:{shrink:""}},[t("div",{staticClass:"text-h6"},[t("q-icon",{staticClass:"q-mr-md",attrs:{name:"article"}}),e._v("Detalles Sector\n        ")],1)]),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ml-auto",attrs:{dense:"",flat:"",icon:"close"}},[t("q-tooltip",{attrs:{"content-class":"bg-dark text-white"}},[e._v("Cerrar")])],1)],1),t("q-card-section",{staticClass:"q-pt-none"},[t("detalles-sector")],1)],1)],1)},h=[],v=a("7ec5"),g={name:"DialogDetallesSector",components:{DetallesSector:v["default"]},data(){return{}},computed:{...Object(l["c"])("sectores",["detalles"]),_detallesSector:{get(){return this.detalles},set(e){this.updateDetalles(e)}}},methods:{...Object(l["d"])("sectores",["updateDetalles"])}},S=g,_=a("24e8"),C=a("f09f"),Q=a("65c6"),w=a("6ac5"),x=a("0016"),k=a("05c0"),j=a("a370"),y=a("7f67"),M=Object(d["a"])(S,q,h,!1,null,"479f9d00",null),O=M.exports;p()(M,"components",{QDialog:_["a"],QCard:C["a"],QToolbar:Q["a"],QToolbarTitle:w["a"],QIcon:x["a"],QBtn:u["a"],QTooltip:k["a"],QCardSection:j["a"]}),p()(M,"directives",{ClosePopup:y["a"]});var T=function(){var e=this,t=e._self._c;return t("q-table",{staticClass:"q-mt-md",attrs:{grid:e.$q.screen.xs,"visible-columns":e.visibleColumns,title:"Sectores",data:e.sectores,columns:e.columns,"row-key":"id",filter:e.filter,loading:e.cargandoSectores,"no-data-label":"Sin registro de sectores"},scopedSlots:e._u([{key:"loading",fn:function(){return[t("q-inner-loading",{attrs:{showing:"",color:"negative"}})]},proxy:!0},{key:"top-right",fn:function(){return[t("q-select",{staticClass:"q-mr-md",staticStyle:{"min-width":"150px"},attrs:{multiple:"","label-color":"negative",color:"negative",dense:"","options-dense":"","display-value":e.$q.lang.table.columns,"emit-value":"","map-options":"",options:e.columns,"option-value":"name","options-cover":""},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),t("q-input",{attrs:{dense:"",debounce:"300",placeholder:"Buscar"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"header",fn:function(a){return[t("q-tr",{attrs:{props:a}},[e._l(a.cols,(function(o){return t("q-th",{key:o.name,attrs:{props:a}},[e._v(e._s(o.label))])})),t("q-th",{attrs:{"auto-width":""}})],2)]}},{key:"body",fn:function(a){return[t("q-tr",{attrs:{props:a}},[e._l(a.cols,(function(o){return t("q-td",{key:o.name,attrs:{props:a}},[e._v(e._s(o.value))])})),t("q-td",{attrs:{"auto-width":""}},[t("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"more_vert"},on:{click:function(t){return e.updateSector(a.row)}}},[t("menu-registros")],1)],1)],2)]}},{key:"item",fn:function(a){return[t("div",{staticClass:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:a.selected?"transform: scale(0.95);":""},[t("q-card",[t("q-card-section",[t("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"more_horiz"},on:{click:function(t){return e.updateSector(a.row)}}},[t("menu-registros")],1)],1),t("q-separator"),t("q-list",{attrs:{dense:""}},e._l(a.cols.filter((e=>"desc"!==e.name)),(function(a){return t("q-item",{key:a.name},[t("q-item-section",[t("q-item-label",[e._v(e._s(a.label))])],1),t("q-item-section",{attrs:{side:""}},[t("q-item-label",{attrs:{caption:""}},[e._v(e._s(a.value))])],1)],1)})),1)],1)],1)]}}])})},D=[],I=(a("14d9"),a("0a45")),J={name:"TablaSectores",components:{MenuRegistros:I["a"]},data(){return{filter:"",visibleColumns:["nombre","estado","municipio","parroquia","jefe"],columns:[{name:"nombre",label:"Nombre",field:"nombre"},{name:"estado",label:"Estado",field:"estado"},{name:"municipio",label:"Municipio",field:"municipio"},{name:"parroquia",label:"Parroquia",field:"parroquia"},{name:"jefe",label:"Jefe de Calle",field:e=>e.jefe?this.buscarJefe(e.jefe).nombreCompleto():"Sin jefe de calle asingado"},{name:"id",label:"Identificador",field:"id"},,{name:"nucleos",label:"nucleos",field:e=>{const t=[];return e.nucleos.forEach((e=>{const a=this.buscarNucleo(e);t.push(a.nombre)})),t}}]}},methods:{...Object(l["d"])("sectores",["updateSector"])},computed:{...Object(l["c"])("sectores",["sectores","sector","cargandoSectores"]),...Object(l["c"])("personas",["buscarJefe","buscarNucleo"])}},N=J,$=a("eaac"),B=a("74f7"),P=a("ddd8"),A=a("27f9"),E=a("bd08"),L=a("357e"),R=a("db86"),z=a("eb85"),F=a("1c1c"),G=a("66e5"),H=a("4074"),K=a("0170"),U=Object(d["a"])(N,T,D,!1,null,null,null),V=U.exports;p()(U,"components",{QTable:$["a"],QInnerLoading:B["a"],QSelect:P["a"],QInput:A["a"],QIcon:x["a"],QTr:E["a"],QTh:L["a"],QTd:R["a"],QBtn:u["a"],QCard:C["a"],QCardSection:j["a"],QSeparator:z["a"],QList:F["a"],QItem:G["a"],QItemSection:H["a"],QItemLabel:K["a"]});var W=function(){var e=this,t=e._self._c;return t("q-dialog",{attrs:{persistent:"","full-height":e.$q.screen.lt.sm,"full-width":e.$q.screen.lt.sm},on:{show:e.cargarSector,hide:e.resetear},model:{value:e._modificarSector,callback:function(t){e._modificarSector=t},expression:"_modificarSector"}},[t("q-card",{staticClass:"bg-white text-dark",staticStyle:{width:"700px","max-width":"80vw"}},[t("q-toolbar",{staticClass:"bg-negative text-white",attrs:{dark:""}},[t("q-toolbar-title",{attrs:{shrink:""}},[t("div",{staticClass:"text-h6"},[t("q-icon",{staticClass:"q-mr-md",attrs:{name:"edit"}}),e._v("Modificar Sector\n        ")],1)]),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ml-auto",attrs:{dense:"",flat:"",icon:"close"}},[t("q-tooltip",{attrs:{"content-class":"bg-dark text-white"}},[e._v("Cerrar")])],1)],1),t("q-card-section",{staticClass:"q-ma-none"},[t("modificar-sector")],1)],1)],1)},X=[],Y=a("ebf5"),Z={name:"DialogModificarSector",components:{ModificarSector:Y["default"]},data(){return{}},computed:{...Object(l["c"])("sectores",["modificar","sector"]),_modificarSector:{get(){return this.modificar},set(){this.updateModificar()}}},methods:{...Object(l["d"])("sectores",["updateModificar","updateSector","updateEstadoMod","updateMunicipioMod","updateParroquiaMod","updateNombreMod"]),...Object(l["d"])("personas",["updateJefeSector"]),cargarSector(){this.updateJefeSector(this.sector.jefe?[this.buscarJefe(this.sector.jefe)]:[])},confirmacion(){this.$q.dialog({title:"Confirme",message:"¿Seguro que quiere modificar este sector",cancel:!0,persistent:!0}).onOk((()=>{this.guardarSector()}))},resetear(){this.updateSector(null),this.updateEstadoMod(null),this.updateMunicipioMod(null),this.updateParroquiaMod(null),this.updateNombreMod(""),this.updateJefeSector([])}}},ee=Z,te=Object(d["a"])(ee,W,X,!1,null,"ed01e9fa",null),ae=te.exports;p()(te,"components",{QDialog:_["a"],QCard:C["a"],QToolbar:Q["a"],QToolbarTitle:w["a"],QIcon:x["a"],QBtn:u["a"],QTooltip:k["a"],QCardSection:j["a"]}),p()(te,"directives",{ClosePopup:y["a"]});var oe=a("ee3b"),se={name:"Registros",components:{NavSectores:b,DialogDetallesSector:O,TablaSectores:V,DialogModificarSector:ae,FBA:oe["a"]}},re=se,ie=Object(d["a"])(re,o,s,!1,null,"a91fd9cc",null);t["default"]=ie.exports}}]);