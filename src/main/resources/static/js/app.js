!function(i){function e(e){for(var t,a,n=e[0],r=e[1],o=e[2],s=0,l=[];s<n.length;s++)a=n[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(i[t]=r[t]);for(p&&p(e);l.length;)l.shift()();return d.push.apply(d,o||[]),u()}function u(){for(var e,t=0;t<d.length;t++){for(var a=d[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==c[o]&&(n=!1)}n&&(d.splice(t--,1),e=s(s.s=a[0]))}return e}var a={},c={0:0},d=[];function s(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=i,s.c=a,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var p=n;d.push([115,1]),u()}({108:function(e,t,a){"use strict";var n=a(16);a.n(n).a},111:function(e,t,a){window&&window.location&&7070==window.location.port&&a(112)()},112:function(e,t,a){var n=a(113);e.exports=function(){n.setup({timeout:"120-2000"}),n.mock(/data\/list/,function(){return n.mock({"rows|1-10":[{"boolean|1":!0,"double|100-999.4":1,"float|1-100.2":1,"integer|1-999":1,"long|100-999999":1,"uuid|1-20":"@character"}]}).rows}),n.mock(/data\/save/,function(e){var t=e&&e.body?JSON.parse(e.body):null;if(t){console.log("提交的请求体内容:",t);var a=parseInt(t.id);if(+a===a)return"success"}return"failure"})}},115:function(e,t,a){"use strict";a.r(t);function n(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",[r("Card",{staticClass:"card"},[r("h1",{attrs:{slot:"title"},slot:"title"},[n._v("Hello World!")]),n._v(" "),r("a",{attrs:{slot:"extra",href:"#"},on:{click:function(e){return e.preventDefault(),n.handleExtraClick(e)}},slot:"extra"},[n._v("say hi to me!")]),n._v(" "),r("div",{staticClass:"container"},[r("Tabs",{attrs:{value:n.tab.value},on:{"on-click":n.handleTabClick}},[r("TabPane",{attrs:{label:"简述",name:"intro"}},[r("div",{staticClass:"intro"},[r("p",[n._v("前端涉猎的内容有：")]),n._v(" "),r("ol",[r("li",[n._v("webpack")]),n._v(" "),r("li",[n._v("vue")]),n._v(" "),r("li",[n._v("view-design(前身是 iview)")]),n._v(" "),r("li",[n._v("axios+mockjs")])]),n._v(" "),r("p",[n._v("后端涉猎的内容有：")]),n._v(" "),r("ol",[r("li",[n._v("springboot")])])])]),n._v(" "),r("TabPane",{attrs:{label:"接口测试",name:"api"}},[r("Tooltip",{attrs:{content:"点击此处刷新列表",placement:"top",transfer:""}},[r("Button",{attrs:{type:"primary",icon:"ios-refresh"},on:{click:n.handleRefresh}})],1),n._v(" "),r("Tooltip",{attrs:{content:"点击此处测试表单数据提交",placement:"top",transfer:""}},[r("Button",{attrs:{type:"primary"},on:{click:function(e){n.modal.visible=!0}}},[n._v("POST")])],1),n._v(" "),r("div",{staticClass:"table-container"},[n.table.loading?r("Spin",{attrs:{size:"large",fix:""}},[n._v("加载中...")]):n._e(),n._v(" "),r("Table",{attrs:{border:"",columns:n.table.columns,data:n.table.data}})],1)],1)],1),n._v(" "),r("div",{staticClass:"aboutme"},[r("div",{staticClass:"description"},[n._v("该项目为简单的示例项目仅供学习！")]),n._v(" "),r("p",[r("img",{attrs:{src:a(53)}}),r("a",{attrs:{href:"mailto:"+n.author}},[n._v(n._s(n.author))])]),n._v(" "),r("p",[r("a",{attrs:{href:n.url,target:"_blank"}},[n._v(n._s(n.url))])])])],1)]),n._v(" "),r("Modal",{attrs:{width:"60%",title:"模拟表单数据提交"},model:{value:n.modal.visible,callback:function(e){n.$set(n.modal,"visible",e)},expression:"modal.visible"}},[r("div",{staticClass:"modal-form-container"},[r("Form",{ref:"formDynamic",attrs:{model:n.modal.form,"label-width":90}},[n._l(n.modal.form.items,function(t,a){return r("FormItem",{key:a,attrs:{label:"field-"+a,prop:"items."+a,rules:n.modal.rules}},[r("Row",[r("Col",{attrs:{span:"10"}},[r("Input",{attrs:{type:"text",placeholder:"enter key here..."},on:{"on-enter":n.handleSubmit},model:{value:t.key,callback:function(e){n.$set(t,"key",e)},expression:"item.key"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[n._v("Key:")])])],1),n._v(" "),r("Col",{attrs:{span:"10",offset:"1"}},[r("Input",{attrs:{type:"text",placeholder:"enter value here..."},on:{"on-enter":n.handleSubmit},model:{value:t.value,callback:function(e){n.$set(t,"value",e)},expression:"item.value"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[n._v("Value:")])])],1),n._v(" "),r("Col",{staticStyle:{"text-align":"center"},attrs:{span:"3"}},[r("Button",{attrs:{size:"small"},on:{click:function(e){return n.handleRemoveModalFormItem(a)}}},[n._v("Delete")])],1)],1)],1)}),n._v(" "),r("FormItem",[r("Row",[r("Col",{attrs:{span:"24"}},[r("Button",{attrs:{type:"dashed",long:"",icon:"md-add"},on:{click:n.handleAddModalFormItem}},[n._v("Add item")])],1)],1)],1)],2)],1),n._v(" "),r("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{type:"primary",loading:n.modal.pending},on:{click:n.handleSubmit}},[n._v("提交")]),n._v(" "),r("Button",{on:{click:function(e){n.modal.visible=!1}}},[n._v("取消")])],1)])],1)}var r=a(9),o=a.n(r);n._withStripped=!0;var s=a(49),l=a.n(s),i=a(50),u=a.n(i),c=a(28),d=a.n(c);function p(e,t,a,n){if(t=t||"GET",a=a||{},n=n||"QueryString",!e)return new l.a(function(e,t){t("Unable to parse the address of the request")});var r={headers:{"X-Requested-With":"XMLHttpRequest"},method:t,url:e,withCredentials:!0};return"PUT"==t.toUpperCase()||"POST"==t.toUpperCase()||"PATCH"==t.toUpperCase()?"FORMDATA"==n.toUpperCase()?(r.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",r.transformRequest=[function(e){return d.a.stringify(a)}]):r.data=a:"DELETE"==t.toUpperCase()?(r.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",r.transformRequest=[function(e){return d.a.stringify(a)}]):r.params=a,u()(r)}var f=function(e){return p("/data/list","GET",e,"QueryString")},m=function(e){return p("/data/save","POST",e,"RequestPayload")},v={data:function(){return{tab:{value:"intro"},table:{loading:!1,columns:[{key:"boolean",title:"boolean"},{key:"double",title:"double"},{key:"float",title:"float"},{key:"integer",title:"integer"},{key:"long",title:"long"},{key:"uuid",title:"string"}],data:[]},modal:{form:{items:[{key:null,value:null}]},rules:[{required:!0,message:"此项不允许为空"},{required:!0,validator:function(e,t,a){t&&(t.key?/^([a-zA-Z]*)$/i.test(t.key)||a(new Error("key必须全部是字母")):a(new Error("key为必填项"))),a()}}],pending:!1,visible:!1},author:"marvelousness@foxmail.com",url:"https://github.com/marvelousness/vue-view-design"}},computed:{length:{get:function(){return this.modal.form.items.length}}},mounted:function(){},methods:{handleExtraClick:function(){this.$Message.info("Hi")},handleTabClick:function(e){"api"==e?this.handleRefresh():this.table.data=[]},handleAddModalFormItem:function(){9<this.length?this.$Message.error("已达上限！"):this.modal.form.items.push({value:null})},handleRemoveModalFormItem:function(e){-1<e&&e<this.length&&this.modal.form.items.splice(e,1)},handleRefresh:function(){var t=this;t.table.data=[],t.table.loading=!0,f({size:100}).then(function(e){t.table.data=e.data,t.table.loading=!1}).catch(function(e){e?e.response&&e.response.data?t.$Message.error(e.response.data):e.message?t.$Message.error(e.message):t.$Message.error("发生未经处理的异常！"):t.$Message.error("服务器异常！"),t.table.loading=!1})},handleSubmit:function(){var s=this;s.modal.pending?s.$Message.info("数据正在处理中，请稍后再试！"):this.$refs.formDynamic.validate(function(e){if(e){for(var t={},a=s.modal.form.items,n=0;n<a.length;n++){var r=a[n].key,o=a[n].value;/^([a-zA-Z]*)$/i.test(r)&&o&&(t[r]=o)}s.modal.pending=!0,m(t).then(function(e){e&&"success"==e.data?s.$Message.success("操作成功！"):s.$Message.warning("操作失败！"),s.modal.pending=!1}).catch(function(e){e?e.response&&e.response.data?s.$Message.error(e.response.data):e.message?s.$Message.error(e.message):s.$Message.error("发生未经处理的异常！"):s.$Message.error("服务器异常！"),s.modal.pending=!1})}else s.$Message.error("表单信息异常!")})}}},h=(a(108),a(51)),g=Object(h.a)(v,n,[],!1,null,null,null);g.options.__file="src/App.vue";var b=g.exports,y=a(52),_=a.n(y);a(111),a(114);o.a.config.devtools=!0,o.a.use(_.a),new o.a(b).$mount("#app")},16:function(e,t,a){},53:function(e,t){e.exports="/statics/images/logo.jpg"}});