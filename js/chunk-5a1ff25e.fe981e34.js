(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a1ff25e"],{"30c5":function(t,s,a){t.exports=a.p+"img/index-jumbo-4.234e0065.jpg"},"3ef3":function(t,s,a){t.exports=a.p+"img/index-jumbo-2.7f4533b9.jpg"},"402e":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Loading",{attrs:{isloading:t.isloading}}),t._m(0),t._m(1),a("section",{staticClass:"container mt-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h3",{staticClass:"text-info"},[a("b",[t._v("精選淺中培")]),a("router-link",{staticClass:"more_look",attrs:{to:"/index/products"}},[t._v("查看更多")])],1)])]),a("ProductCard",{attrs:{filterCategory:t.filterCategory,loadingItem:t.status.loadingItem},on:{getProduct:t.getProduct,addtoCart:t.addtoCart}}),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-12"},[a("h3",{staticClass:"text-info"},[a("b",[t._v("精選中淺培")]),a("router-link",{staticClass:"more_look",attrs:{to:"/index/products"}},[t._v("查看更多")])],1)])]),a("ProductCard",{attrs:{filterCategory:t.filterCategory2,loadingItem:t.status.loadingItem},on:{getProduct:t.getProduct,addtoCart:t.addtoCart}})],1),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content "},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("\n            "+t._s(t.product.title)+"\n          ")]),t._m(2)]),a("div",{staticClass:"modal-body text-center"},[a("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:""}}),a("blockquote",{staticClass:"blockquote mt-3"},[a("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),a("footer",{staticClass:"blockquote-footer text-left"},[t._v(t._s(t.product.description))])]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price?t._e():a("div",{staticClass:"h4"},[t._v("原價 "+t._s(t.product.origin_price)+" 元")]),t.product.price?a("del",{staticClass:"h6"},[t._v("原價 "+t._s(t.product.origin_price)+" 元")]):t._e(),t.product.price?a("div",{staticClass:"h4 text-danger"},[t._v("現在只要 "+t._s(t.product.price)+" 元")]):t._e()]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){var s="_value"in t?t._value:t.value;return s});t.$set(t.product,"num",s.target.multiple?a:a[0])}}},t._l(10,function(s){return a("option",{key:s,attrs:{selected:"selected"},domProps:{value:s}},[t._v("\n                選購 "+t._s(s)+" "+t._s(t.product.unit)+"\n            ")])}))]),a("div",{staticClass:"modal-footer"},[t.product.num?a("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v("\n            小計\n            "),a("strong",[t._v(t._s(t.product.num*t.product.price))]),t._v(" 元\n          ")]):t._e(),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){t.addtoCart(t.product.id,t.product.num)}}},[t.product.id===t.status.loadingItem?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n            加到購物車\n          ")])])])])])],1)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"container"},[i("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[i("div",{staticClass:"carousel-inner"},[i("div",{staticClass:"carousel-item active"},[i("img",{staticClass:"d-block w-100",attrs:{src:a("f666"),alt:"First slide"}})]),i("div",{staticClass:"carousel-item"},[i("img",{staticClass:"d-block w-100",attrs:{src:a("3ef3"),alt:"Second slide"}})]),i("div",{staticClass:"carousel-item"},[i("img",{staticClass:"d-block w-100",attrs:{src:a("cd5a"),alt:"Third slide"}})]),i("div",{staticClass:"carousel-item"},[i("img",{staticClass:"d-block w-100",attrs:{src:a("30c5"),alt:"Third slide"}})])]),i("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[i("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"sr-only"},[t._v("Previous")])]),i("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[i("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"sr-only"},[t._v("Next")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"container mt-4"},[a("div",{staticClass:"bg-gray px-3"},[a("i",{staticClass:"text-danger mr-2"},[t._v("HOT!!")]),a("b",[a("i",[t._v("淺焙豆火熱開賣中~")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],o=(a("cadf"),a("551c"),a("097d"),a("1157")),c=a.n(o),r=a("e915"),n={components:{ProductCard:r["a"]},data:function(){return{isloading:!1,islogin:!1,carts:[],products:[],product:{},status:{loadingItem:""}}},computed:{filterCategory:function(){var t=this;return t.products.filter(function(t,s){return"淺中焙"===t.category&&s%10<=3})},filterCategory2:function(){var t=this;return t.products.filter(function(t,s){return"中淺焙"===t.category})}},methods:{signOut:function(){var t="".concat("https://vue-course-api.hexschool.io","/logout"),s=this;this.axios.post(t).then(function(t){t.data.success&&(s.$router.push("/index"),s.islogin=!1)})},addtoCart:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/cart"),i=this;i.status.loadingItem=t;var e={product_id:t,qty:s};this.axios.post(a,{data:e}).then(function(t){t.data.success&&(c()("#productModal").modal("hide"),i.getCarts()),i.status.loadingItem=""})},getCarts:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/cart"),s=this;s.isloading=!0,this.axios.get(t).then(function(t){t.data.success&&(s.carts=t.data.data.carts,s.isloading=!1)})},getProducts:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/products/all"),s=this;s.isloading=!0,this.axios.get(t).then(function(t){t.data.success&&(s.products=t.data.products,s.isloading=!1)})},getProduct:function(t){var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/product/").concat(t),a=this;a.status.loadingItem=t,this.axios.get(s).then(function(t){t.data.success&&(a.product=t.data.product,a.$set(a.product,"num",1),c()("#productModal").modal("show")),a.status.loadingItem=""})},checkLogin:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/user/check"),s=this;this.axios.post(t).then(function(t){t.data.success?s.islogin=!0:s.islogin=!1})}},created:function(){this.getCarts(),this.checkLogin(),this.getProducts()}},l=n,d=a("2877"),u=Object(d["a"])(l,i,e,!1,null,null,null);u.options.__file="Home.vue";s["default"]=u.exports},cd5a:function(t,s,a){t.exports=a.p+"img/index-jumbo-3.b4a78b90.jpg"},e915:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},t._l(t.filterCategory,function(s,i){return a("div",{key:i,staticClass:"col-md-6 col-lg-4 mb-4"},[a("div",{staticClass:"card shadow-sm h-100"},[a("div",{staticStyle:{height:"200px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+s.imageUrl+")"}}),a("div",{staticClass:"card-body"},[a("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(s.category))]),a("h5",{staticClass:"card-title"},[a("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(s.title))])]),a("p",{staticClass:"card-text"},[t._v(t._s(s.content))])]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline px-3"},[s.price?t._e():a("div",{staticClass:"h5"},[t._v("原價 "+t._s(s.origin_price))]),s.price?a("del",{staticClass:"h6"},[t._v("原價 "+t._s(s.origin_price))]):t._e(),s.price?a("div",{staticClass:"h5 text-danger"},[t._v("現在只要 "+t._s(s.price))]):t._e()]),a("div",{staticClass:"card-footer d-flex"},[a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(a){t.getProduct(s.id)}}},[s.id===t.loadingItem?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n          查看更多\n        ")]),a("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(a){t.addtoCart(s.id)}}},[s.id===t.loadingItem?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n          加到購物車\n        ")])])])])}))},e=[],o={props:["filterCategory","loadingItem"],methods:{getProduct:function(t){this.$emit("getProduct",t)},addtoCart:function(t){this.$emit("addtoCart",t)}}},c=o,r=a("2877"),n=Object(r["a"])(c,i,e,!1,null,null,null);n.options.__file="ProductCard.vue";s["a"]=n.exports},f666:function(t,s,a){t.exports=a.p+"img/index-jumbo-1.ad63c965.jpg"}}]);
//# sourceMappingURL=chunk-5a1ff25e.fe981e34.js.map