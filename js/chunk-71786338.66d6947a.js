(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71786338"],{"30c5":function(t,a,s){t.exports=s.p+"img/index-jumbo-4.234e0065.jpg"},"3ef3":function(t,a,s){t.exports=s.p+"img/index-jumbo-2.7f4533b9.jpg"},cd5a:function(t,a,s){t.exports=s.p+"img/index-jumbo-3.b4a78b90.jpg"},e915:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},t._l(t.filterCategory,function(a,i){return s("div",{key:i,staticClass:"col-md-6 col-lg-4 mb-4"},[s("div",{staticClass:"card shadow-sm h-100"},[s("div",{staticStyle:{height:"200px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),s("div",{staticClass:"card-body"},[s("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(a.category))]),s("h5",{staticClass:"card-title"},[s("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(a.title))])]),s("p",{staticClass:"card-text"},[t._v(t._s(a.content))])]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline px-3"},[a.price?t._e():s("div",{staticClass:"h5"},[t._v("原價 "+t._s(a.origin_price))]),a.price?s("del",{staticClass:"h6"},[t._v("原價 "+t._s(a.origin_price))]):t._e(),a.price?s("div",{staticClass:"h5 text-danger"},[t._v("現在只要 "+t._s(a.price))]):t._e()]),s("div",{staticClass:"card-footer d-flex"},[s("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(s){t.getProduct(a.id)}}},[a.id===t.loadingItem?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n          查看更多\n        ")]),s("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(s){t.addtoCart(a.id)}}},[a.id===t.loadingItem?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n          加到購物車\n        ")])])])])}))},e=[],o={props:["filterCategory","loadingItem"],methods:{getProduct:function(t){this.$emit("getProduct",t)},addtoCart:function(t){this.$emit("addtoCart",t)}}},r=o,l=s("2877"),c=Object(l["a"])(r,i,e,!1,null,null,null);c.options.__file="ProductCard.vue";a["a"]=c.exports},edad:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Loading",{attrs:{isloading:t.isloading}}),t._m(0),s("section",{staticClass:"container my-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3 mb-3"},[s("div",{staticClass:"list-group",attrs:{id:"list-tab",role:"tablist"}},[s("a",{staticClass:"list-group-item list-group-item-action active",attrs:{id:"list-home-list","data-toggle":"list",href:"#list-home",role:"tab","aria-controls":"home"},on:{click:function(a){t.category="淺中焙"}}},[t._v("淺中焙")]),s("a",{staticClass:"list-group-item list-group-item-action",attrs:{id:"list-profile-list","data-toggle":"list",href:"#list-profile",role:"tab","aria-controls":"profile"},on:{click:function(a){t.category="中淺焙"}}},[t._v("中淺焙")]),s("a",{staticClass:"list-group-item list-group-item-action",attrs:{id:"list-messages-list","data-toggle":"list",href:"#list-messages",role:"tab","aria-controls":"messages"},on:{click:function(a){t.category="中焙"}}},[t._v("中焙")]),s("a",{staticClass:"list-group-item list-group-item-action",attrs:{id:"list-settings-list","data-toggle":"list",href:"#list-settings",role:"tab","aria-controls":"settings"},on:{click:function(a){t.category="中深焙"}}},[t._v("中深焙")])])]),s("div",{staticClass:"col-md-9"},[s("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"list-home",role:"tabpanel","aria-labelledby":"list-home-list"}},[s("ProductCard",{attrs:{filterCategory:t.filterCategory,loadingItem:t.status.loadingItem},on:{getProduct:t.getProduct,addtoCart:t.addtoCart}})],1),s("div",{staticClass:"tab-pane fade",attrs:{id:"list-profile",role:"tabpanel","aria-labelledby":"list-profile-list"}},[s("ProductCard",{attrs:{filterCategory:t.filterCategory,loadingItem:t.status.loadingItem},on:{getProduct:t.getProduct,addtoCart:t.addtoCart}})],1),s("div",{staticClass:"tab-pane fade",attrs:{id:"list-messages",role:"tabpanel","aria-labelledby":"list-messages-list"}},[s("ProductCard",{attrs:{filterCategory:t.filterCategory,loadingItem:t.status.loadingItem},on:{getProduct:t.getProduct,addtoCart:t.addtoCart}})],1),s("div",{staticClass:"tab-pane fade",attrs:{id:"list-settings",role:"tabpanel","aria-labelledby":"list-settings-list"}},[s("ProductCard",{attrs:{filterCategory:t.filterCategory,loadingItem:t.status.loadingItem},on:{getProduct:t.getProduct,addtoCart:t.addtoCart}})],1)])])])]),s("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content "},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("\n            "+t._s(t.product.title)+"\n          ")]),t._m(1)]),s("div",{staticClass:"modal-body text-center"},[s("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:""}}),s("blockquote",{staticClass:"blockquote mt-3"},[s("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),s("footer",{staticClass:"blockquote-footer text-left"},[t._v(t._s(t.product.description))])]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price?t._e():s("div",{staticClass:"h4"},[t._v("原價 "+t._s(t.product.origin_price)+" 元")]),t.product.price?s("del",{staticClass:"h6"},[t._v("原價 "+t._s(t.product.origin_price)+" 元")]):t._e(),t.product.price?s("div",{staticClass:"h4 text-danger"},[t._v("現在只要 "+t._s(t.product.price)+" 元")]):t._e()]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.$set(t.product,"num",a.target.multiple?s:s[0])}}},t._l(10,function(a){return s("option",{key:a,domProps:{value:a}},[t._v("\n                選購 "+t._s(a)+" "+t._s(t.product.unit)+"\n            ")])}))]),s("div",{staticClass:"modal-footer"},[t.product.num?s("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v("\n            小計\n            "),s("strong",[t._v(t._s(t.product.num*t.product.price))]),t._v(" 元\n          ")]):t._e(),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){t.addtoCart(t.product.id,t.product.num)}}},[t.product.id===t.status.loadingItem?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n            加到購物車\n          ")])])])])])],1)},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{staticClass:"container"},[i("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[i("div",{staticClass:"carousel-inner"},[i("div",{staticClass:"carousel-item active"},[i("img",{staticClass:"d-block w-100",attrs:{src:s("f666"),alt:"First slide"}})]),i("div",{staticClass:"carousel-item"},[i("img",{staticClass:"d-block w-100",attrs:{src:s("3ef3"),alt:"Second slide"}})]),i("div",{staticClass:"carousel-item"},[i("img",{staticClass:"d-block w-100",attrs:{src:s("cd5a"),alt:"Third slide"}})]),i("div",{staticClass:"carousel-item"},[i("img",{staticClass:"d-block w-100",attrs:{src:s("30c5"),alt:"Third slide"}})])]),i("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[i("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"sr-only"},[t._v("Previous")])]),i("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[i("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"sr-only"},[t._v("Next")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],o=s("1157"),r=s.n(o),l=s("e915"),c={components:{ProductCard:l["a"]},data:function(){return{isloading:!1,carts:[],products:[],product:{},status:{loadingItem:""},category:"淺中焙"}},computed:{filterCategory:function(){var t=this;return t.products.filter(function(a){return t.category===a.category})}},methods:{addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/cart"),i=this;i.status.loadingItem=t;var e={product_id:t,qty:a};this.axios.post(s,{data:e}).then(function(t){t.data.success&&(r()("#productModal").modal("hide"),i.getCarts()),i.status.loadingItem=""})},getCarts:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/cart"),a=this;a.isloading=!0,this.axios.get(t).then(function(t){t.data.success&&(a.carts=t.data.data.carts,a.isloading=!1)})},getProducts:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/products/all"),a=this;a.isloading=!0,this.axios.get(t).then(function(t){t.data.success&&(a.products=t.data.products,a.isloading=!1)})},getProduct:function(t){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/product/").concat(t),s=this;s.status.loadingItem=t,this.axios.get(a).then(function(t){t.data.success&&(s.product=t.data.product,r()("#productModal").modal("show")),s.status.loadingItem=""})}},created:function(){this.getCarts(),this.getProducts()}},n=c,d=s("2877"),u=Object(d["a"])(n,i,e,!1,null,null,null);u.options.__file="FrontProducts.vue";a["default"]=u.exports},f666:function(t,a,s){t.exports=s.p+"img/index-jumbo-1.ad63c965.jpg"}}]);
//# sourceMappingURL=chunk-71786338.66d6947a.js.map