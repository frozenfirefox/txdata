(function(t){function e(e){for(var s,l,r=e[0],o=e[1],u=e[2],c=0,p=[];c<r.length;c++)l=r[c],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);m&&m(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function l(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5d60b94c"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.src=l(t);var u=new Error;i=function(e){o.onerror=o.onload=null,clearTimeout(c);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",u.name="ChunkLoadError",u.type=s,u.request=i,a[1](u)}n[t]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"13ee":function(t,e,a){t.exports=a.p+"img/zhifubao.69d6513a.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],l=(a("034f"),a("2877")),r={},o=Object(l["a"])(r,n,i,!1,null,null,null),u=o.exports,c=(a("d3b7"),a("8c4f")),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("Scroll",{attrs:{"on-reach-bottom":t.handleReachBottom,height:t.contentScroll}},t._l(t.bangList,(function(e){return s("Card",{staticStyle:{width:"92%",margin:"5px auto","background-color":"#f7f7f7",padding:"20px"}},[s("p",{staticStyle:{color:"chocolate"},attrs:{slot:"title"},slot:"title"},[t._l(4,(function(t){return s("Icon",{key:t,staticStyle:{"text-align":"left",color:"#ffac2d"},attrs:{type:"ios-star"}})})),t._v(" top("+t._s(e[0])+") 姓名："+t._s(e[2])+" ")],2),s("a",{attrs:{slot:"extra",href:t.$tx_host+e[1],target:"_blank"},slot:"extra"},[s("Icon",{attrs:{type:"ios-man",title:"查看英雄榜"}})],1),s("ul",[s("li",{staticClass:"li"},[s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticStyle:{color:"green"}},[t._v(" 势力："+t._s(e[7]?e[7]:"暂无势力")+" ")])]),s("Col",{attrs:{span:"12"}},[s("span",[t._v(" 职业："+t._s(e[6])+" ")])])],1)],1),s("li",{staticClass:"li"},[s("Col",{attrs:{span:"12"}},[s("span",[t._v(" 修为："+t._s(e[8])+" ")])]),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",[t._v(" 装评："+t._s(e[9])+" ")])])],1)],1),s("li",{staticClass:"li"},[s("Row",[s("Col",{attrs:{span:"24"}},[s("span",[t._v(" 总修为："+t._s(e[10])+" ")])])],1)],1),s("li",{staticClass:"li"},[s("Col",{attrs:{span:"24"}},[s("span",[t._v(" 大区-服务器："+t._s(e[3])+"-"+t._s(e[4])+" ")])])],1)])])})),1),s("Affix",{staticStyle:{color:"black","padding-left":"10px"},attrs:{"offset-bottom":0}},[s("Row",[s("Col",{attrs:{span:"6"}},[s("Button",{staticStyle:{width:"100%"},attrs:{type:"warning"},on:{click:t.selectData}},[t._v("筛选")])],1),s("Col",{attrs:{span:"6"}},[s("Dropdown",{staticStyle:{width:"100%"},attrs:{trigger:"click"},on:{"on-click":t.setOrder}},[s("Button",{staticStyle:{width:"100%"},attrs:{type:"primary"}},[t._v(" "+t._s(t.orderName)+" "),s("Icon",{attrs:{type:"ios-arrow-down"}})],1),s("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[s("DropdownItem",{attrs:{name:"1"}},[t._v("默认")]),s("DropdownItem",{attrs:{name:"2"}},[t._v("最新")]),s("DropdownItem",{attrs:{name:"3"}},[t._v("修为评价")]),s("DropdownItem",{attrs:{name:"4"}},[t._v("装备评价")]),s("DropdownItem",{attrs:{name:"5"}},[t._v("总修为")])],1)],1)],1),s("Col",{attrs:{span:"6"}},[s("Button",{staticStyle:{width:"100%"},attrs:{type:"success"},on:{click:t.liveShow}},[t._v("日活统计")])],1),s("Col",{attrs:{span:"6"}},[s("Dropdown",{staticStyle:{width:"100%"},attrs:{trigger:"click"},on:{"on-click":t.toSource}},[s("Button",{staticStyle:{width:"100%"},attrs:{type:"info"}},[t._v(" 加入我们 "),s("Icon",{attrs:{type:"ios-arrow-down"}})],1),s("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[s("DropdownItem",{attrs:{name:"1"}},[t._v("账号估值")]),s("DropdownItem",{attrs:{name:"2"}},[t._v("开箱模拟")]),s("DropdownItem",{attrs:{name:"3"}},[t._v("点赞投币")]),s("DropdownItem",{attrs:{name:"4"}},[t._v("砸钻模拟")]),s("DropdownItem",{attrs:{name:"5"}},[t._v("炼化模拟")]),s("DropdownItem",{attrs:{name:"6"}},[t._v("为她充电")])],1)],1)],1)],1)],1),s("Drawer",{attrs:{title:"筛选查询",width:"100",placement:"left",closable:!1},model:{value:t.select_modal,callback:function(e){t.select_modal=e},expression:"select_modal"}},[s("Form",{ref:"formValidate",attrs:{model:t.request,rules:t.requestValidate,"label-width":80}},[s("FormItem",{attrs:{label:"角色名称",prop:"name"}},[s("Input",{attrs:{placeholder:"请输入角色名称（回眸一笑百媚生）"},model:{value:t.request.name,callback:function(e){t.$set(t.request,"name",e)},expression:"request.name"}})],1),s("FormItem",{attrs:{label:"势力名称",prop:"union_name"}},[s("Input",{attrs:{placeholder:"请输入势力名称（全服最强）"},model:{value:t.request.union_name,callback:function(e){t.$set(t.request,"union_name",e)},expression:"request.union_name"}})],1),s("FormItem",{attrs:{label:"职业",prop:"sect"}},[s("Input",{attrs:{placeholder:"请输入职业名称（例如法师、炮手等等）"},model:{value:t.request.sect,callback:function(e){t.$set(t.request,"sect",e)},expression:"request.sect"}})],1),s("FormItem",{attrs:{label:"修为"}},[s("Row",[s("Col",{attrs:{span:"11"}},[s("FormItem",{attrs:{label:"",prop:"abilities_min"}},[s("Input",{attrs:{placeholder:"请输入最小修为值（2000）"},model:{value:t.request.abilities_min,callback:function(e){t.$set(t.request,"abilities_min",e)},expression:"request.abilities_min"}})],1)],1),s("Col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[t._v("-")]),s("Col",{attrs:{span:"11"}},[s("FormItem",{attrs:{label:"",prop:"abilities_max"}},[s("Input",{attrs:{placeholder:"请输入最大修为值（2000）"},model:{value:t.request.abilities_max,callback:function(e){t.$set(t.request,"abilities_max",e)},expression:"request.abilities_max"}})],1)],1)],1)],1),s("FormItem",{attrs:{label:"大区-服务器"}},[s("Row",[s("Col",{attrs:{span:"11"}},[s("FormItem",{attrs:{label:"",prop:"section_name"}},[s("Input",{attrs:{placeholder:"请输入大区（79专区）"},model:{value:t.request.section_name,callback:function(e){t.$set(t.request,"section_name",e)},expression:"request.section_name"}})],1)],1),s("Col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[t._v("-")]),s("Col",{attrs:{span:"11"}},[s("FormItem",{attrs:{label:"",prop:"service_name"}},[s("Input",{attrs:{placeholder:"请输入服务器（飞鸿踏雪）"},model:{value:t.request.service_name,callback:function(e){t.$set(t.request,"service_name",e)},expression:"request.service_name"}})],1)],1)],1)],1),s("FormItem",{attrs:{label:"装评"}},[s("Row",[s("Col",{attrs:{span:"11"}},[s("FormItem",{attrs:{label:"",prop:"equipment_min"}},[s("Input",{attrs:{placeholder:"请输入最小装评值（2000）"},model:{value:t.request.equipment_min,callback:function(e){t.$set(t.request,"equipment_min",e)},expression:"request.equipment_min"}})],1)],1),s("Col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[t._v("-")]),s("Col",{attrs:{span:"11"}},[s("FormItem",{attrs:{label:"",prop:"equipment_max"}},[s("Input",{attrs:{placeholder:"请输入最大装评值（2000）"},model:{value:t.request.equipment_max,callback:function(e){t.$set(t.request,"equipment_max",e)},expression:"request.equipment_max"}})],1)],1)],1)],1),s("FormItem",{attrs:{label:"总修为"}},[s("Row",[s("Col",{attrs:{span:"11"}},[s("FormItem",{attrs:{label:"",prop:"all_abilities_min"}},[s("Input",{attrs:{placeholder:"请输入最小总修为值（2000）"},model:{value:t.request.all_abilities_min,callback:function(e){t.$set(t.request,"all_abilities_min",e)},expression:"request.all_abilities_min"}})],1)],1),s("Col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[t._v("-")]),s("Col",{attrs:{span:"11"}},[s("FormItem",{attrs:{label:"",prop:"all_abilities_max"}},[s("Input",{attrs:{placeholder:"请输入最大总修为值（2000）"},model:{value:t.request.all_abilities_max,callback:function(e){t.$set(t.request,"all_abilities_max",e)},expression:"request.all_abilities_max"}})],1)],1)],1)],1),s("FormItem",{staticStyle:{"text-align":"center"}},[s("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("查询")]),s("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleReset("formValidate")}}},[t._v("取消")])],1)],1)],1),s("Modal",{attrs:{title:"更新提醒"},model:{value:t.modalUpdate,callback:function(e){t.modalUpdate=e},expression:"modalUpdate"}},[s("Row",[s("Col",[t._v(" 加入我们：美女多福利多！！！ 特别鸣谢， ")])],1),s("divider"),s("Timeline",[s("TimelineItem",[s("p",{staticClass:"time"},[t._v("2020-08-25")]),s("p",{staticClass:"content"},[t._v("英雄榜搜索软件问世")])]),s("TimelineItem",[s("p",{staticClass:"time"},[t._v("2020-08-26")]),s("p",{staticClass:"content"},[t._v("更新添加，筛选大区和服务器，以及按照排序筛选")])]),s("TimelineItem",[s("p",{staticClass:"time"},[t._v("2020-08-29")]),s("p",{staticClass:"content"},[t._v("更新添加，部分角色估价系统，估值入口：加入我们>>账号估值")])]),s("TimelineItem",[s("p",{staticClass:"time"},[t._v("2020-08-31")]),s("p",{staticClass:"content"},[t._v("更新修复估值，计算多个孩子的程序bug，并且对于估价的程序性能做了质的的提升，从而使估价更加顺畅")])]),s("TimelineItem",[s("p",{staticClass:"time"},[t._v("2020-09-01")]),s("p",{staticClass:"content"},[t._v("更新1.估价新增元魂珠、灵兽的估价 2.新增日活统计")])]),s("TimelineItem",[s("p",{staticClass:"time"},[t._v("2020-09-02")]),s("p",{staticClass:"content"},[t._v("更新新增模拟天下三开箱子，娱乐为主，开箱入口：加入我们>>开箱模拟")])]),s("TimelineItem",[s("p",{staticClass:"time"},[t._v("2020-09-02")]),s("p",{staticClass:"content"},[t._v("更新新增投币按钮，投币入口：加入我们>>点赞投币")])]),s("TimelineItem",[s("p",{staticClass:"time"},[t._v("2020-09-03")]),s("p",{staticClass:"content"},[t._v("更新新增模拟砸钻，砸钻入口：加入我们>>砸钻模拟")])]),s("TimelineItem",[s("p",{staticClass:"time"},[t._v("2020-09-04")]),s("p",{staticClass:"content"},[t._v("更新模拟砸钻添加加护成功音效")])])],1)],1),s("Modal",{attrs:{fullscreen:"",title:"估价系统"},model:{value:t.modalValue,callback:function(e){t.modalValue=e},expression:"modalValue"}},[s("Row",[s("Col",{attrs:{span:"24"}},[s("Input",{attrs:{search:"","enter-button":"去估价",placeholder:"请复制英雄榜链接"},on:{"on-search":t.toValue},model:{value:t.bang_link,callback:function(e){t.bang_link=e},expression:"bang_link"}})],1)],1),s("divider"),""==t.valueData?[t.loading?s("Spin",{attrs:{fix:""}},[s("Icon",{staticClass:"demo-spin-icon-load",attrs:{type:"ios-loading",size:"18"}}),s("div",[t._v("疯狂运算中")])],1):t._e(),s("div",{staticClass:"text-center",staticStyle:{"line-height":"700px","font-size":"50px"}},[t._v(" 对这片土地爱得深沉 ")])]:t._e(),""!=t.valueData.length?[s("Row",{attrs:{"class-name":"line-height-20"}},[s("Col",{attrs:{span:"24","class-name":"font-25 text-center"}},[t._v(" 估价详情 ")])],1),s("Row",{attrs:{"class-name":"line-height-20 text-center font-18"}},[s("Col",{attrs:{span:"12","class-name":"text-right"}},[t._v(" 角色名称： ")]),s("Col",{attrs:{span:"12","class-name":"text-left"}},[t._v(" "+t._s(t.valueData.info.name)+" ")])],1),s("Row",{attrs:{"class-name":"line-height-20 font-18"}},[s("Col",{attrs:{span:"12","class-name":"text-right"}},[t._v(" 大区服务器势力： ")]),s("Col",{attrs:{span:"12","class-name":"text-left"}},[t._v(" "+t._s(t.valueData.info.section)+" ")])],1),s("Row",{attrs:{"class-name":"line-height-20 font-18"}},[s("Col",{attrs:{span:"12","class-name":"text-right"}},[t._v(" 职业： ")]),s("Col",{attrs:{span:"12","class-name":"text-left"}},[t._v(" "+t._s(t.valueData.info.zhiye)+" ")])],1),s("Row",{attrs:{"class-name":"line-height-20 font-18"}},[s("Col",{attrs:{span:"12","class-name":"text-right"}},[t._v(" 马灵化估价： ")]),s("Col",{attrs:{span:"12","class-name":"text-left"}},[t._v(" "+t._s(t.valueData.qiyaoPrice)+" ")])],1),s("Row",{attrs:{"class-name":"line-height-20 font-18"}},[s("Col",{attrs:{span:"12","class-name":"text-right"}},[t._v(" 乾元丹估价： ")]),s("Col",{attrs:{span:"12","class-name":"text-left"}},[t._v(" "+t._s(t.valueData.qianyuanPrice)+" ")])],1),s("Row",{attrs:{"class-name":"line-height-20 font-18"}},[s("Col",{attrs:{span:"12","class-name":"text-right"}},[t._v(" 元魂珠估价： ")]),s("Col",{attrs:{span:"12","class-name":"text-left"}},[t._v(" "+t._s(t.valueData.yuanhunPrice)+" ")])],1),s("Row",{attrs:{"class-name":"line-height-20 font-18"}},[s("Col",{attrs:{span:"12","class-name":"text-right"}},[t._v(" 加护和炼护估价： ")]),s("Col",{attrs:{span:"12","class-name":"text-left"}},[t._v(" "+t._s(t.valueData.zuanPrice)+" ")])],1),s("Row",{attrs:{"class-name":"line-height-20 font-18"}},[s("Col",{attrs:{span:"12","class-name":"text-right"}},[t._v(" 点化估价： ")]),s("Col",{attrs:{span:"12","class-name":"text-left"}},[t._v(" "+t._s(t.valueData.dianPrice)+" ")])],1),s("Row",{attrs:{"class-name":"line-height-20 font-18"}},[s("Col",{attrs:{span:"12","class-name":"text-right"}},[t._v(" 天书估价： ")]),s("Col",{attrs:{span:"12","class-name":"text-left"}},[t._v(" "+t._s(t.valueData.tianshuPrice)+" ")])],1),s("Row",{attrs:{"class-name":"line-height-20 font-18"}},[s("Col",{attrs:{span:"12","class-name":"text-right"}},[t._v(" 总价值（供参考）： ")]),s("Col",{attrs:{span:"12","class-name":"text-left"}},[t._v(" "+t._s(t.valueData.allPrice)+" ")])],1)]:t._e()],2),s("Drawer",{attrs:{title:"日活统计",width:"100",placement:"left",closable:!0},model:{value:t.modalLive,callback:function(e){t.modalLive=e},expression:"modalLive"}},[s("div",{staticClass:"bar",staticStyle:{width:"400px",height:"600px"},attrs:{id:"chart1"}})]),s("Drawer",{attrs:{title:"开箱子（过手瘾）",width:"100",placement:"left",closable:!0},model:{value:t.modalBox,callback:function(e){t.modalBox=e},expression:"modalBox"}},[s("Select",{staticStyle:{width:"200px"},model:{value:t.optionValue,callback:function(e){t.optionValue=e},expression:"optionValue"}},t._l(t.modeList,(function(e){return s("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.name))])})),1),s("divider"),s("div",[s("p",[t._v("开箱子只是模拟，大家切勿当真")]),s("divider"),s("Row",{staticClass:"code-row-bg",attrs:{type:"flex","class-name":"row-height-60",justify:"start"}},[s("Col",{attrs:{span:"12","class-name":"row-col-border"}},[s("Tooltip",{attrs:{"max-width":"200",placement:"right",transfer:""}},[s("Button",[t._v("月下伊人礼盒")]),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v("开启到鸿蒙玉时可选择翻倍兑换成【禁】天域声望·200")]),s("p",[t._v("打开月下伊人必得：鹊桥相会（右键点击法术防御力+10，状态持续180秒）")]),s("p",{staticClass:"black-red"},[t._v("且有机会获得：")]),s("p",[t._v("宗门秘法·日、厚土、【禁】大禹之恩·2/天域声望·2礼盒（二选一）、【封】炼化之印·5/天域声望·5礼盒（二选一）、牵牛花、太阴星光匣。")]),s("p",{staticClass:"black-red"},[t._v("更有机会获得：")]),s("p",[t._v("炼化之印（100）、尚书令、【禁】鸿蒙玉/天域声望·200礼盒（二选一）、星晖、七夕礼包半价券、军饷券·1000、军饷券·10000、六道轮回锤、【八十】白羊座·伤、乾坤诀等道具。")]),s("p",{staticClass:"black-red"},[t._v("还有机会获得：")]),s("p",[t._v("庄周梦蝶礼盒、迷蝶香宝匣、陆尘·星贯长虹、星贯映辉礼盒、秋水流光（装件）、泡弟（饰件）、星河流转宝匣等道具。")]),s("p",[t._v("必要等级：30")]),s("p",[t._v("贵重等级：30")]),s("p",[t._v("禁交易")])])],1)],1),s("Col",{attrs:{span:"3"}},[s("span",[t._v("数量：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.openNumber,expression:"openNumber"}],attrs:{disabled:t.giftDisabled,placeholder:"请输入开启数量"},domProps:{value:t.openNumber},on:{input:function(e){e.target.composing||(t.openNumber=e.target.value)}}})]),s("Col",{attrs:{span:"3"}},[s("Button",{attrs:{size:"small",type:"primary"},on:{click:t.openGift}},[t._v("开启")])],1),s("Col",{attrs:{span:"3"}},[s("Button",{attrs:{size:"small",type:"error"},on:{click:t.clearOpen}},[t._v("清除")])],1)],1),s("divider"),t._l(t.giftsGet,(function(e){return s("Row",{staticClass:"code-row-bg",attrs:{type:"flex","class-name":"row-height-60",justify:"start",align:"bottom"}},t._l(e,(function(t){return s("Col",{attrs:{span:"3","class-name":"row-col-border"}},[s("Badge",{staticStyle:{height:"60px"},attrs:{count:t.count,type:"primary"}},[s("a",{staticClass:"demo-badge",attrs:{href:"#",title:t.name}},[s("Icon",{attrs:{size:"58",type:t.icon}})],1)])],1)})),1)}))],2)],1),s("Modal",{attrs:{title:"点赞投币"},model:{value:t.modalCharge,callback:function(e){t.modalCharge=e},expression:"modalCharge"}},[s("Row",[s("Col",{attrs:{span:"24"}},[s("p",{staticClass:"font-18 red"},[t._v("tip:郑重提示。如果此次充电对您的生活造成了影响，请即刻关掉这个充电页面。")])])],1),s("divider"),s("Row",[s("Col",{attrs:{span:"24"}},[s("img",{attrs:{src:a("cda8"),width:"100%"}})])],1),s("divider"),s("Row",[s("Col",{attrs:{span:"24"}},[s("img",{attrs:{src:a("13ee"),width:"100%"}})])],1)],1),s("Modal",{attrs:{fullscreen:"",title:"砸钻体验器(切勿当真，第一版设计是比较难的希望挑战下自己)"},model:{value:t.modalJiahu,callback:function(e){t.modalJiahu=e},expression:"modalJiahu"}},[s("Select",{staticStyle:{width:"200px"},model:{value:t.zuanValue,callback:function(e){t.zuanValue=e},expression:"zuanValue"}},t._l(t.modeList,(function(e){return s("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.name))])})),1),s("divider"),s("div",{staticClass:"tianxiabg"},[s("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"start"}},[s("Col",{staticClass:"shop",attrs:{span:"8"}},[s("span",{staticClass:"ri-buy",on:{click:function(e){return t.addZuan(0)}}}),s("span",{staticClass:"zu-ri-buy",on:{click:function(e){return t.addZuanZu(0)}}},[s("Button",{attrs:{type:"primary",size:"small"}},[t._v("+20")])],1),s("span",{staticClass:"yue-buy",on:{click:function(e){return t.addZuan(1)}}}),s("span",{staticClass:"zu-yue-buy",on:{click:function(e){return t.addZuanZu(1)}}},[s("Button",{attrs:{type:"primary",size:"small"}},[t._v("+20")])],1),s("span",{staticClass:"lei-buy",on:{click:function(e){return t.addZuan(2)}}}),s("span",{staticClass:"zu-lei-buy",on:{click:function(e){return t.addZuanZu(2)}}},[s("Button",{attrs:{type:"primary",size:"small"}},[t._v("+20")])],1),s("span",{staticClass:"hong-buy",on:{click:function(e){return t.addZuan(3)}}}),s("span",{staticClass:"zu-hong-buy",on:{click:function(e){return t.addZuanZu(3)}}},[s("Button",{attrs:{type:"primary",size:"small"}},[t._v("+20")])],1)]),s("Col",{staticClass:"arm",attrs:{span:"8"}},[s("p",{staticClass:"jiahubg"},[s("span",{staticClass:"jiahuPer",style:"width: "+t.jiahuValue+"px"})])]),s("Col",{staticClass:"bag",attrs:{span:"8"}},[s("span",{staticClass:"ri-zuan",on:{click:function(e){return t.addJiahu(0)}}},[s("p",{staticClass:"xiabiao"},[t._v(t._s(t.zuanList[0].num))])]),s("span",{staticClass:"yue-zuan",on:{click:function(e){return t.addJiahu(1)}}},[s("p",{staticClass:"xiabiao"},[t._v(t._s(t.zuanList[1].num))])]),s("span",{staticClass:"lei-zuan",on:{click:function(e){return t.addJiahu(2)}}},[s("p",{staticClass:"xiabiao"},[t._v(t._s(t.zuanList[2].num))])]),s("span",{staticClass:"hong-zuan",on:{click:function(e){return t.addJiahu(3)}}},[s("p",{staticClass:"xiabiao"},[t._v(t._s(t.zuanList[3].num))])]),s("span",{staticClass:"used-money"},[t._v(" "+t._s(t.countUsed)+" ")]),s("span",{staticClass:"yuan-money"},[t._v(" "+t._s(t.countYuan)+" ")]),s("span",{staticClass:"all-money"},[t._v(" "+t._s(t.zuanMoney.allMoney)+" ")])])],1)],1)],1),s("audio",{ref:"video",attrs:{src:t.mp3Suc,id:"video"}}),s("Modal",{attrs:{fullscreen:"",title:"炼化模拟(切勿当真，第一版设计是比较难的希望挑战下自己)"},model:{value:t.modalLianhua,callback:function(e){t.modalLianhua=e},expression:"modalLianhua"}},[s("Select",{staticStyle:{width:"200px"},model:{value:t.zuanValue,callback:function(e){t.zuanValue=e},expression:"zuanValue"}},t._l(t.modeList,(function(e){return s("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.name))])})),1),s("divider"),s("div",{staticClass:"tianxiabg"},[s("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"start"}},[s("Col",{staticClass:"shop-lian",attrs:{span:"12"}},[s("span",{staticClass:"shop-lian-yin-20"}),s("span",{staticClass:"shop-lian-yin-100"}),s("span",{staticClass:"ri-buy",on:{click:function(e){return t.addZuan(0)}}}),s("span",{staticClass:"zu-ri-buy",on:{click:function(e){return t.addZuanZu(0)}}},[s("Button",{attrs:{type:"primary",size:"small"}},[t._v("+20")])],1),s("span",{staticClass:"yue-buy",on:{click:function(e){return t.addZuan(1)}}}),s("span",{staticClass:"zu-yue-buy",on:{click:function(e){return t.addZuanZu(1)}}},[s("Button",{attrs:{type:"primary",size:"small"}},[t._v("+20")])],1)]),s("Col",{staticClass:"bag-lian",attrs:{span:"12"}},[s("p",{staticClass:"jiahubg"},[s("span",{staticClass:"jiahuPer",style:"width: "+t.jiahuValue+"px"})])])],1)],1)],1)],1)},p=[],d=(a("c975"),a("fb6a"),a("b680"),a("4d63"),a("ac1f"),a("25f0"),a("1276"),a("2909")),h=(a("96cf"),a("1da1")),v=(a("94b1"),{name:"Home",data:function(){return{bangList:[],request:{orderby:"abilities desc",page:1,pageSize:10,name:"",union_name:"",sect:"",section_name:"",service_name:"",abilities_min:"",abilities_max:"",equipment_min:"",equipment_max:"",all_abilities_min:"",all_abilities_max:""},select_modal:!1,totalNumber:"",contentScroll:"",requestValidate:{name:[{required:!1,type:"string",message:"请输入正确的角色名称",trigger:"blur"}],union_name:[{required:!1,type:"string",message:"请输入正确的势力名称",trigger:"blur"}],sect:[{required:!1,type:"string",message:"请输入正确的职业名称",trigger:"blur"}],abilities_min:[{required:!1,type:"string",message:"请输入正确的最小的修为值",trigger:"blur"}],abilities_max:[{required:!1,type:"string",message:"请输入正确的最大的修为值",trigger:"blur"}],equipment_min:[{required:!1,type:"string",message:"请输入正确的最小的装评值",trigger:"blur"}],equipment_max:[{required:!1,type:"string",message:"请输入正确的最大的装评值",trigger:"blur"}],all_abilities_min:[{required:!1,type:"string",message:"请输入正确的最大的总修为值",trigger:"blur"}],all_abilities_max:[{required:!1,type:"string",message:"请输入正确的最大的总修为值",trigger:"blur"}]},orderName:"排序",modalUpdate:!0,modalValue:!1,bang_link:"",valueData:"",loading:!1,liveOption:{tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",left:10,data:[]},series:[{name:"",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"30",fontWeight:"bold"}},labelLine:{show:!1},data:[]}]},modalLive:!1,modalBox:!1,modeList:[{name:"温柔模式",rate:.8,value:1},{name:"期望模式",rate:.5,value:2},{name:"韭菜模式",rate:.2,value:3}],optionValue:1,giftList:[{name:"回灵丹",value:0,icon:"ios-baseball-outline"},{name:"宗门秘法·日",value:1,icon:"md-aperture"},{name:"厚土",value:2,icon:"ios-square"},{name:"【禁】大禹之恩·2/天域声望·2礼盒（二选一）",value:3,icon:"md-beer"},{name:"【封】炼化之印·5/天域声望·5礼盒（二选一）",value:4,icon:"ios-medkit"},{name:"七夕礼包半价券",value:5,icon:"ios-heart"},{name:"牵牛花",value:6,icon:"ios-nuclear"},{name:"炼化之印（100）",value:7,icon:"ios-egg"},{name:"尚书令",value:8,icon:"ios-book"},{name:"星晖",value:9,icon:"ios-magnet"},{name:"太阴星光匣",value:10,icon:"md-ionic"},{name:"【禁】鸿蒙玉/天域声望·200礼盒（二选一）",value:21,icon:"md-ionitron"},{name:"迷蝶香宝匣",value:22,icon:"logo-hackernews"},{name:"【八十】白羊座·伤",value:23,icon:"logo-freebsd-devil"},{name:"六道轮回锤",value:24,icon:"ios-hammer"},{name:"乾坤诀",value:25,icon:"ios-clipboard"},{name:"星河流转宝匣",value:26,icon:"md-browsers"},{name:"庄周梦蝶礼盒",value:27,icon:"ios-body"},{name:"陆尘·星贯长虹",value:28,icon:"md-star"},{name:"星贯映辉礼盒",value:29,icon:"ios-train"},{name:"秋水流光（装件）",value:30,icon:"md-transgender"},{name:"泡弟（饰件）",value:31,icon:"ios-umbrella"},{name:"军饷券·1000",value:32,icon:"logo-yahoo"},{name:"军饷券·10000",value:33,icon:"logo-yen"}],giftsGet:[],openNumber:200,giftDisabled:!1,modalCharge:!1,modalJiahu:!1,zuanList:[{name:"日钻",num:0,price:2,section:[1,2,3,4,5,6]},{name:"月钻",num:0,price:20,section:[4,5,6,7,8,9,10,11]},{name:"雷钻",num:0,price:200,section:[9,10,11,12,13,14,15,16]},{name:"红钻",num:0,price:3300,section:[14,15,16,17,18,19,20]}],jiahuValue:0,zuanMoney:{moneyInit:5e6,allMoney:5e6},zuanValue:1,mp3Suc:"",modalLianhua:!1}},mounted:function(){this.contentScroll=window.screen.height-20,this.getList(),this.liveInit()},computed:{countUsed:function(){var t=2*this.zuanList[0].num+20*this.zuanList[1].num+200*this.zuanList[2].num+3300*this.zuanList[3].num,e=this.zuanMoney.moneyInit-this.zuanMoney.allMoney;return e-t},countYuan:function(){var t=2*this.zuanList[0].num+20*this.zuanList[1].num+200*this.zuanList[2].num+3300*this.zuanList[3].num,e=this.zuanMoney.moneyInit-this.zuanMoney.allMoney;return((e-t)/10).toFixed(2)}},methods:{getList:function(t){var e=this.request;parseInt(t)>0&&(e.page=t),console.log(e);var a=this,s=this.$api_host+"getList.py";this.$axios.get(s,{params:e,paramsSerializer:function(t){return a.$qs.stringify(t,{arrayFormat:"brackets"})}}).then((function(t){if(console.log(t),200==t.status){if(a.request.page>1)for(var e in t.data.list)a.bangList.push(t.data.list[e]);else a.bangList=t.data.list;a.totalNumber=t.data.totalNumber}else a.$Message.warning("出错误了")})).catch((function(t){a.$Message.error(t)}))},handleReachBottom:function(){var t=this,e=Math.round(t.totalNumber/t.request.page),a=++this.request.page;e<a&&this.$Message.warning("我是有底线的^--^"),setTimeout((function(){t.getList(a)}),500)},selectData:function(){this.select_modal=!0},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(t){t?(e.getList(1),e.$Message.success("查询成功!"),e.select_modal=!1):e.$Message.error("fail!")}))},handleReset:function(t){this.select_modal=!1},setOrder:function(t){switch(parseInt(t)){case 5:this.request.orderby="all_abilities desc",this.orderName="总修为";break;case 4:this.request.orderby="equipment desc",this.orderName="装备评价";break;case 3:this.request.orderby="abilities desc",this.orderName="修为";break;case 2:this.request.orderby="id desc",this.orderName="最新";break;default:this.request.orderby="all_abilities desc",this.orderName="默认";break}this.bangList=[],this.getList()},toSource:function(t){switch(this.mp3Suc=a("b59d"),parseInt(t)){case 6:this.$Message.info("敬请期待");break;case 5:this.modalLianhua=!0;break;case 4:this.modalJiahu=!0;break;case 3:this.modalCharge=!0;break;case 2:this.modalBox=!0;break;default:this.modalValue=!0;break}},toValue:function(){if(!this.bang_link)return this.$Message.warning("请输入估计角色英雄榜");var t=this.bang_link.split("/"),e=t[5],a=/\d{1,2}_\d{1,10}$/,s=new RegExp(a),n=s.test(e);if(!0!==n)return this.$Message.warning("请输入正确的角色英雄榜");var i=this,l=this.$api_host+"evalueate.py",r={bang_id:e};this.valueData=[],this.loading=!0,console.log(this.loading),this.$axios.get(l,{params:r,paramsSerializer:function(t){return i.$qs.stringify(t,{arrayFormat:"brackets"})}}).then((function(t){i.loading=!1,200==t.status?(i.valueData=t.data,console.log(i.valueData)):i.$Message.warning("出错误了")})).catch((function(t){i.$Message.error("网络走丢了")}))},liveInit:function(){var t=this,e=this.$api_host+"getLiveList.py";this.$axios.get(e).then((function(e){200==e.status?t.callBackLive(e.data):t.$Message.warning("出错误了")}))},callBackLive:function(t){var e=[],a=[];for(var s in t.liveList)e.push(t.liveList[s][2]),a.push({name:t.liveList[s][2],value:t.liveList[s][15]});this.liveOption.legend.data=e,this.liveOption.series[0].data=a},liveShow:function(){this.modalLive=!0;var t=this;console.log(this.liveOption);var e=this.$echarts.init(document.getElementById("chart1"));e.setOption(t.liveOption)},openGift:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var a,s,n,i,l,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(i in a=t.giftList.length,s=[],n=t.optionValue,console.log(n,555),t.giftList){l=Math.pow(a-t.giftList[i].value,n);while(l>0)s.push(t.giftList[i].value),l--}console.log(s.length),s.sort((function(t,e){return Math.random()>.5?-1:1})),r=[];case 8:if(!(t.openNumber>0)){e.next=17;break}return o=t.randomKey(s),r.push(t.giftList[o]),t.openNumber--,t.dealOpenedGifts(r),e.next=15,t.sleep(1e3);case 15:e.next=8;break;case 17:t.giftDisabled=!1;case 18:case"end":return e.stop()}}),e)})))()},randomKey:function(t){var e=Math.floor(Math.random()*t.length),a=t.slice(e,e+1);return a[0]},sleep:function(t){return new Promise((function(e){setTimeout((function(){e()}),t)}))},dealOpenedGifts:function(t){this.giftDisabled=!0,this.giftsGet=[];var e=1;for(var a in t)if(e=1,void 0!=t[a]){for(var s in this.giftsGet)this.giftsGet[s].value==t[a].value&&(this.giftsGet[s].count+=1,e=0);1==e&&(t[a].count=1,this.giftsGet.push(t[a]))}var n=this.giftsGet,i=[];for(var l in n){var r=parseInt(l/8);void 0==i[r]&&(i[r]=[]),i[r].push(n[l])}this.giftsGet=JSON.parse(JSON.stringify(i))},clearOpen:function(){1==this.giftDisabled&&this.$Message.warning("您正在开箱过程中，请完成后再尝试"),this.giftsGet=[],this.openNumber=200},addZuan:function(t){if(this.zuanMoney.allMoney<this.zuanList[t].price)return this.$Message.warning("糟糕了，您的钱已经不够用了"),!1;this.zuanList[t].num++,this.zuanMoney.allMoney-=this.zuanList[t].price},addZuanZu:function(t){if(this.zuanMoney.allMoney<20*this.zuanList[t].price)return this.$Message.warning("糟糕了，您的钱已经不够用了"),!1;this.zuanList[t].num+=20,this.zuanMoney.allMoney-=20*this.zuanList[t].price},addJiahu:function(t){var e=parseInt(this.jiahuValue/8)+1;if(this.zuanList>=160)return this.$Message.warning("您已经达到人生巅峰了，请开启新的征程吧"),!1;if(this.zuanList[t].section.indexOf(e)<0)return this.$Message.warning("请选择合适的加护溟钻"),!1;if(this.zuanList[t].num<=0)return this.$Message.warning("请购买加护溟钻"),!1;var a=this.zuanValue;console.log(a);var s=Math.max.apply(Math,Object(d["a"])(this.zuanList[t].section))+Math.abs(a-4),n=[];for(var i in this.zuanList[t].section){var l=Math.pow(s-this.zuanList[t].section[i],a);while(l>0)n.push(this.zuanList[t].section[i]),l--}n.sort((function(t,e){return Math.random()>.5?-1:1}));var r=this.randomKey(n),o=1;switch(t){case 3:o=18;break;case 2:o=13;break;case 1:o=8;break;default:o=3;break}n[r]>=parseInt(this.jiahuValue/8)||parseInt(this.jiahuValue/8)<o?(this.jiahuValue+=8,this.$refs.video.play(),160==this.jiahuValue&&this.$Message.success("太厉害了少侠，您已经达到人生巅峰了，惊世骇俗，装备加护到了20钻，请开启新的征程吧!")):this.jiahuValue>8?this.jiahuValue-=8:this.jiahuValue=8,this.zuanList[t].num--}}}),f=v,g=(a("8f3a"),Object(l["a"])(f,m,p,!1,null,"512d1a02",null)),_=g.exports;s["default"].use(c["a"]);var b=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],y=new c["a"]({mode:"history",base:"/",routes:b}),C=y,w=a("2f62");s["default"].use(w["a"]);var x=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}}),k=a("f825"),q=a.n(k),z=(a("f8ce"),a("4328")),L=a.n(z),I=a("bc3a"),M=a.n(I),S=a("313e"),$=a.n(S);s["default"].use(q.a),s["default"].config.productionTip=!1,s["default"].prototype.$api_host="http://www.huiaxue.cn:8000/",s["default"].prototype.$tx_host="http://bang.tx3.163.com/bang/role/",s["default"].prototype.$axios=M.a,s["default"].prototype.$qs=L.a,s["default"].prototype.$echarts=$.a,new s["default"]({router:C,store:x,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,a){},"8f3a":function(t,e,a){"use strict";var s=a("d2ad"),n=a.n(s);n.a},b59d:function(t,e,a){t.exports=a.p+"media/zuan_suc.250f1215.mp3"},cda8:function(t,e,a){t.exports=a.p+"img/weixin.bc7bb1ee.jpg"},d2ad:function(t,e,a){}});
//# sourceMappingURL=app.d0db3880.js.map