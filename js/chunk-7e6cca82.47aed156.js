(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e6cca82"],{1799:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre},on:{click:function(a){a.preventDefault(),t.changePage(t.pagination.current_page-1)}}},[t._m(0)]),t._l(t.pagination.total_pages,function(a,o){return e("li",{key:o,staticClass:"page-item",class:{active:a===t.pagination.current_page},on:{click:function(e){e.preventDefault(),t.changePage(a)}}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(a))])])}),e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next},on:{click:function(a){a.preventDefault(),t.changePage(t.pagination.current_page+1)}}},[t._m(1)])],2)])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),e("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),e("span",{staticClass:"sr-only"},[t._v("Next")])])}],s={props:["pagination"],methods:{changePage:function(t){this.$emit("changePage",t)}}},i=s,l=e("2877"),c=Object(l["a"])(i,o,n,!1,null,null,null);c.options.__file="Pagination.vue";a["a"]=c.exports},"2d6c":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Loading",{attrs:{isloading:t.isloading}}),e("div",{staticClass:"text-right mt-4"},[e("button",{staticClass:"btn btn-primary mt-2",on:{click:function(a){a.preventDefault(),t.openModal(!0)}}},[t._v("建立新的優惠劵")])]),e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.coupons,function(a,o){return e("tr",{key:o},[e("td",[t._v(t._s(a.title))]),e("td",[t._v(t._s(a.percent))]),e("td",[t._v(t._s(a.due_date))]),e("td",[a.is_enabled?e("span",{staticClass:"text-success"},[t._v("已啟用")]):e("span",{staticClass:"text-danger"},[t._v("未啟用")])]),e("td",[e("div",{staticClass:"btn-group btn-group-toggle"},[e("label",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(e){t.openModal(!1,a)}}},[t._v("\n              編輯\n            ")]),e("label",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){t.openDelModal(a)}}},[t._v("\n              刪除\n            ")])])])])}))]),e("Pagination",{attrs:{pagination:t.pagination},on:{changePage:t.getCoupons}}),e("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("標題")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempCoupon.title},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"title",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"coupon"}},[t._v("優惠碼")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"coupon",placeholder:"Code"},domProps:{value:t.tempCoupon.code},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"code",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"dateline"}},[t._v("到期日")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.due_date,expression:"tempCoupon.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"dateline"},domProps:{value:t.tempCoupon.due_date},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"due_date",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"percent"}},[t._v("折扣百分比")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"percent",placeholder:"請輸入1-100"},domProps:{value:t.tempCoupon.percent},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"percent",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(a){var e=t.tempCoupon.is_enabled,o=a.target,n=o.checked?1:0;if(Array.isArray(e)){var s=null,i=t._i(e,s);o.checked?i<0&&t.$set(t.tempCoupon,"is_enabled",e.concat([s])):i>-1&&t.$set(t.tempCoupon,"is_enabled",e.slice(0,i).concat(e.slice(i+1)))}else t.$set(t.tempCoupon,"is_enabled",n)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                  是否啟用\n                ")])])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.upCoupon}},[t._v("更新優惠卷")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delCouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v("\n          是否刪除\n          "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempCoupon.title))]),t._v(" 優惠券(刪除後將無法恢復)。\n        ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.removeCoupon}},[t._v("確認刪除")])])])])])],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("名稱")]),e("th",{attrs:{width:"190"}},[t._v("折扣百分比")]),e("th",{attrs:{width:"150"}},[t._v("到期日")]),e("th",{attrs:{width:"150"}},[t._v("是否啟用")]),e("th",{attrs:{width:"130"}},[t._v("編輯")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("優惠劵")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除優惠券")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],s=e("1799"),i=e("1157"),l=e.n(i),c={components:{Pagination:s["a"]},data:function(){return{pagination:{},coupons:[],isNew:!1,tempCoupon:{},isloading:!1}},methods:{getCoupons:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/admin/coupons?page=").concat(t);a.isloading=!0,this.axios.get(e).then(function(t){t.data.success&&(a.coupons=t.data.coupons,a.pagination=t.data.pagination),a.isloading=!1})},openModal:function(t,a){var e=this;t?(e.tempCoupon={},e.isNew=!0):(e.tempCoupon=a,e.isNew=!1),l()("#couponModal").modal("show")},upCoupon:function(){var t=this,a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/admin/coupon"),o="post";a.isNew||(e="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/admin/coupon/").concat(a.tempCoupon.id),o="put"),this.axios[o](e,{data:a.tempCoupon}).then(function(e){e.data.success?(l()("#couponModal").modal("hide"),t.getCoupons()):a.$bus.$emit("message:push","修改失敗","warning")})},openDelModal:function(t){var a=this;a.tempCoupon=t,l()("#delCouponModal").modal("show")},removeCoupon:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("royal","/admin/coupon/").concat(this.tempCoupon.id);this.axios.delete(a).then(function(a){l()("#delCouponModal").modal("hide"),t.getCoupons()})}},created:function(){this.getCoupons()}},r=c,p=e("2877"),d=Object(p["a"])(r,o,n,!1,null,null,null);d.options.__file="Coupon.vue";a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-7e6cca82.47aed156.js.map