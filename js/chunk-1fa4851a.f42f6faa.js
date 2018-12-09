(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fa4851a"],{1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre},on:{click:function(a){a.preventDefault(),t.changePage(t.pagination.current_page-1)}}},[t._m(0)]),t._l(t.pagination.total_pages,function(a,s){return e("li",{key:s,staticClass:"page-item",class:{active:a===t.pagination.current_page},on:{click:function(e){e.preventDefault(),t.changePage(a)}}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(a))])])}),e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next},on:{click:function(a){a.preventDefault(),t.changePage(t.pagination.current_page+1)}}},[t._m(1)])],2)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),e("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),e("span",{staticClass:"sr-only"},[t._v("Next")])])}],o={props:["pagination"],methods:{changePage:function(t){this.$emit("changePage",t)}}},r=o,n=e("2877"),c=Object(n["a"])(r,s,i,!1,null,null,null);c.options.__file="Pagination.vue";a["a"]=c.exports},2621:function(t,a){a.f=Object.getOwnPropertySymbols},"2b21":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Loading",{attrs:{isloading:t.isloading}}),e("div",{staticClass:"text-right mt-4"},[e("button",{staticClass:"btn btn-primary",on:{click:function(a){t.openModal(!0)}}},[t._v("建立新產品")])]),e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.products,function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.category))]),e("td",[t._v(t._s(a.title))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.origin_price)))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.price)))]),e("td",[a.is_enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",{staticClass:"text-danger"},[t._v("未啟用")])]),e("td",[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(e){t.openModal(!1,a)}}},[t._v("編輯")]),e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){t.openDelModal(a)}}},[t._v("刪除")])])])])}))]),e("Pagination",{attrs:{pagination:t.pagination},on:{changePage:t.getProducts}}),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"imageUrl",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片\n                  "),t.status.fileUploading?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),e("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),e("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imageUrl,alt:""}})]),e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("標題")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"title",a.target.value)}}})]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"category"}},[t._v("分類")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"category",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"price"}},[t._v("單位")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"unit",a.target.value)}}})])]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"origin_price"}},[t._v("原價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"origin_price",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"price"}},[t._v("售價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"price",a.target.value)}}})])]),e("hr"),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"description"}},[t._v("產品描述")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"description",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"content"}},[t._v("說明內容")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"content",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(a){var e=t.tempProduct.is_enabled,s=a.target,i=s.checked?1:0;if(Array.isArray(e)){var o=null,r=t._i(e,o);s.checked?r<0&&t.$set(t.tempProduct,"is_enabled",e.concat([o])):r>-1&&t.$set(t.tempProduct,"is_enabled",e.slice(0,r).concat(e.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",i)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                    是否啟用\n                  ")])])])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v("\n          是否刪除 "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。\n        ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){t.delProduct(t.tempProduct.id)}}},[t._v("確認刪除")])])])])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"120"}},[t._v("分類")]),e("th",[t._v("產品名稱")]),e("th",{attrs:{width:"120"}},[t._v("原價")]),e("th",{attrs:{width:"120"}},[t._v("售價")]),e("th",{attrs:{width:"100"}},[t._v("是否啟用")]),e("th",{attrs:{width:"120"}},[t._v("編輯")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("新增產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=(e("f751"),e("cadf"),e("551c"),e("097d"),e("1157")),r=e.n(o),n=e("1799"),c={components:{Pagination:n["a"]},data:function(){return{products:[],tempProduct:{},isNew:!1,isloading:!1,status:{fileUploading:!1},pagination:{}}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/admin/products?page=").concat(t),e=this;e.isloading=!0,this.axios.get(a).then(function(t){t.data.success&&(e.products=t.data.products,e.pagination=t.data.pagination,e.isloading=!1)})},updateProduct:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/admin/product"),a="post",e=this;e.isNew||(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/admin/product/").concat(e.tempProduct.id),a="put"),this.axios[a](t,{data:e.tempProduct}).then(function(t){t.data.success?(r()("#productModal").modal("hide"),e.getProducts()):e.$bus.$emit("message:push","新增失敗","warning")})},delProduct:function(t){var a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/admin/product/").concat(t);this.axios.delete(e).then(function(t){t.data.success&&(r()("#delProductModal").modal("hide"),a.getProducts())})},openModal:function(t,a){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object.assign({},a),this.isNew=!1),r()("#productModal").modal("show")},openDelModal:function(t){this.tempProduct=Object.assign({},t),r()("#delProductModal").modal("show")},uploadFile:function(){var t=this.$refs.files.files[0],a="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/admin/upload"),e=this,s=new FormData;e.status.fileUploading=!0,s.append("file-to-upload",t),this.axios.post(a,s,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){t.data.success?(e.$set(e.tempProduct,"imageUrl",t.data.imageUrl),e.status.fileUploading=!1):(e.$bus.$emit("message:push",t.data.message,"danger"),e.status.fileUploading=!1)})}},created:function(){this.getProducts()}},l=c,d=e("2877"),u=Object(d["a"])(l,s,i,!1,null,null,null);u.options.__file="Products.vue";a["default"]=u.exports},7333:function(t,a,e){"use strict";var s=e("0d58"),i=e("2621"),o=e("52a7"),r=e("4bf8"),n=e("626a"),c=Object.assign;t.exports=!c||e("79e5")(function(){var t={},a={},e=Symbol(),s="abcdefghijklmnopqrst";return t[e]=7,s.split("").forEach(function(t){a[t]=t}),7!=c({},t)[e]||Object.keys(c({},a)).join("")!=s})?function(t,a){var e=r(t),c=arguments.length,l=1,d=i.f,u=o.f;while(c>l){var p,m=n(arguments[l++]),v=d?s(m).concat(d(m)):s(m),g=v.length,f=0;while(g>f)u.call(m,p=v[f++])&&(e[p]=m[p])}return e}:c},f751:function(t,a,e){var s=e("5ca1");s(s.S+s.F,"Object",{assign:e("7333")})}}]);
//# sourceMappingURL=chunk-1fa4851a.f42f6faa.js.map