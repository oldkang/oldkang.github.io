(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{1617:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{SkelttionType:{type:String,default:"index"}},data:function(){return{}},methods:{}};e.default=n},"1d55":function(t,e,i){"use strict";i.r(e);var n=i("4392"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"1f5f":function(t,e,i){"use strict";var n=i("8eea"),o=i.n(n);o.a},"20a7":function(t,e,i){"use strict";i.r(e);var n=i("5df6"),o=i("1d55");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("c105");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"417f76c6",null,!1,n["a"],r);e["default"]=c.exports},4392:function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("9c51")),a={data:function(){return{SkelttionType:"index",IsSkelttion:!1}},components:{easySkeleton:o.default},onLoad:function(){},methods:{CutFun:function(t){var e=this;console.log(t),uni.showLoading({title:"请求中..."}),e.SkelttionType=t,e.IsSkelttion=!0,setTimeout((function(){uni.hideLoading(),uni.showToast({title:"请求完成",icon:"none"}),e.IsSkelttion=!1}),2e3)}}};e.default=a},"5df6":function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.IsSkelttion,expression:"IsSkelttion"}]},[i("easy-skeleton",{attrs:{SkelttionType:t.SkelttionType}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.IsSkelttion,expression:"!IsSkelttion"}],staticClass:"CutButtonsBox"},[i("v-uni-view",{staticClass:"btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.CutFun("index")}}},[t._v("首页")]),i("v-uni-view",{staticClass:"btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.CutFun("prouct")}}},[t._v("详情页")]),i("v-uni-view",{staticClass:"btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.CutFun("member")}}},[t._v("个人中心")]),i("v-uni-view",{staticClass:"btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.CutFun("classify")}}},[t._v("商品分类")])],1)],1)},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"6b34":function(t,e,i){var n=i("d139a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("aa85b77a",n,!0,{sourceMap:!1,shadowMode:!1})},"8eea":function(t,e,i){var n=i("a322");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("bad80ffc",n,!0,{sourceMap:!1,shadowMode:!1})},9576:function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"SkelttionBox"},["index"==t.SkelttionType?i("v-uni-view",{staticClass:"SkelttionIndexBox"},[i("v-uni-view",{staticClass:"IndexBoxBanner"}),i("v-uni-view",{staticClass:"IndexBoxMenu"},t._l(2,(function(e,n){return i("v-uni-view",{key:n,staticClass:"IndexBoxMenuList"},t._l(5,(function(t,e){return i("v-uni-view",{key:e,staticClass:"MenuItemBox"},[i("v-uni-view",{staticClass:"MenuItem"}),i("v-uni-view",{staticClass:"MenuName"})],1)})),1)})),1),i("v-uni-view",{staticClass:"IndexBoxMain"})],1):"prouct"==t.SkelttionType?i("v-uni-view",{staticClass:"SkelttionProuctBox"},[i("v-uni-view",{staticClass:"ProuctBanner"},[i("v-uni-view",{staticClass:"ProuctNav"},[i("v-uni-view",{staticClass:"NavItem"}),i("v-uni-view",{staticClass:"NavItem"})],1)],1),i("v-uni-view",{staticClass:"ProuctInfo"}),i("v-uni-view",{staticClass:"ProuctPrice"},[i("v-uni-view",{staticClass:"PriceLeft"}),i("v-uni-view",{staticClass:"PriceCenter"}),i("v-uni-view",{staticClass:"PriceRight"})],1),i("v-uni-view",{staticClass:"Concessions"},[i("v-uni-view",{staticClass:"ConcessionsItem"})],1),i("v-uni-view",{staticClass:"CommentBox"},[i("v-uni-view",{staticClass:"CommentList"},[i("v-uni-view",{staticClass:"UserLogo"}),i("v-uni-view",{staticClass:"UsrtInfo"},[i("v-uni-view",{staticClass:"UserName"}),i("v-uni-view",{staticClass:"UserComment"})],1)],1)],1)],1):"member"==t.SkelttionType?i("v-uni-view",{staticClass:"SkelttionMember"},[i("v-uni-view",{staticClass:"MemberBox"},[i("v-uni-view",{staticClass:"UserBox"},[i("v-uni-view",{staticClass:"UserInfoBox"},[i("v-uni-view",{staticClass:"UserLogo"}),i("v-uni-view",{staticClass:"UserName"})],1),i("v-uni-view",{staticClass:"UserSet"})],1)],1),i("v-uni-view",{staticClass:"OrderBox"}),i("v-uni-view",{staticClass:"UserSetBox"})],1):"classify"==t.SkelttionType?i("v-uni-view",{staticClass:"SkelttionClassify"},[i("v-uni-view",{staticClass:"ClassifyLeft"}),i("v-uni-view",{staticClass:"ClassifyRight"},t._l(2,(function(e,n){return i("v-uni-view",{key:n,staticClass:"ClassifyList"},[i("v-uni-view",{staticClass:"ClassifyListName"}),i("v-uni-view",{staticClass:"ClassifyItemBox"},t._l(4*(n+2),(function(t,e){return i("v-uni-view",{key:e,staticClass:"ItemBox"},[i("v-uni-view",{staticClass:"ItemLogo"}),i("v-uni-view",{staticClass:"ItemName"})],1)})),1)],1)})),1)],1):t._e()],1)},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"9c51":function(t,e,i){"use strict";i.r(e);var n=i("9576"),o=i("a044");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("1f5f");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"7c502c0f",null,!1,n["a"],r);e["default"]=c.exports},a044:function(t,e,i){"use strict";i.r(e);var n=i("1617"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},a322:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.SkelttionBox[data-v-7c502c0f], .SkelttionProuctBox[data-v-7c502c0f], .SkelttionMember[data-v-7c502c0f]{width:100vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff}.SkelttionIndexBox[data-v-7c502c0f]{width:92vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;margin-top:%?20?%}.SkelttionIndexBox .IndexBoxBanner[data-v-7c502c0f]{width:100%;height:%?280?%;background:#f3f4f6;-webkit-border-radius:%?10?%;border-radius:%?10?%}.SkelttionIndexBox .IndexBoxMenu[data-v-7c502c0f]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.SkelttionIndexBox .IndexBoxMenu .IndexBoxMenuList[data-v-7c502c0f]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?20?%}.SkelttionIndexBox .IndexBoxMenu .MenuItemBox[data-v-7c502c0f]{width:%?120?%;height:%?160?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.SkelttionIndexBox .IndexBoxMenu .MenuItem[data-v-7c502c0f]{width:%?120?%;height:%?120?%;background:#f3f4f6;-webkit-border-radius:100%;border-radius:100%}.SkelttionIndexBox .IndexBoxMenu .MenuName[data-v-7c502c0f]{width:%?80?%;height:%?20?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;background:#f3f4f6;margin-top:%?12?%}.SkelttionIndexBox .IndexBoxMain[data-v-7c502c0f]{width:100%;height:%?380?%;border-top:%?20?% solid #f3f4f6;border-bottom:%?20?% solid #f3f4f6;margin-top:%?60?%}.SkelttionProuctBox .ProuctBanner[data-v-7c502c0f]{width:100vw;height:%?640?%;background:#f3f4f6}.SkelttionProuctBox .ProuctBanner .ProuctNav[data-v-7c502c0f]{width:100%;height:%?120?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?30?%}.SkelttionProuctBox .ProuctBanner .ProuctNav .NavItem[data-v-7c502c0f]{width:%?80?%;height:%?80?%;background:#82848a;-webkit-border-radius:100%;border-radius:100%;opacity:.2}.SkelttionProuctBox .ProuctInfo[data-v-7c502c0f]{width:92vw;height:%?100?%;background:#f3f4f6;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-top:%?20?%}.SkelttionProuctBox .ProuctPrice[data-v-7c502c0f]{width:92vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?20?%}.SkelttionProuctBox .ProuctPrice .PriceLeft[data-v-7c502c0f], .SkelttionProuctBox .ProuctPrice .PriceCenter[data-v-7c502c0f], .SkelttionProuctBox .ProuctPrice .PriceRight[data-v-7c502c0f]{width:%?160?%;height:%?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#f3f4f6}.SkelttionProuctBox .Concessions[data-v-7c502c0f]{width:100%;height:%?100?%;margin-top:%?40?%;border-top:%?20?% solid #f3f4f6;border-bottom:%?20?% solid #f3f4f6;margin-top:%?30?%}.SkelttionProuctBox .CommentBox[data-v-7c502c0f]{width:92vw;height:%?140?%;margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.SkelttionProuctBox .CommentBox .CommentList[data-v-7c502c0f]{display:-webkit-box;display:-webkit-flex;display:flex}.SkelttionProuctBox .CommentBox .CommentList .UserLogo[data-v-7c502c0f]{width:%?100?%;height:%?100?%;-webkit-border-radius:100%;border-radius:100%;background:#f3f4f6;margin-right:%?20?%}.SkelttionProuctBox .CommentBox .CommentList .UsrtInfo[data-v-7c502c0f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?100?%}.SkelttionProuctBox .CommentBox .CommentList .UsrtInfo .UserName[data-v-7c502c0f]{width:%?160?%;height:%?20?%;background:#f3f4f6;-webkit-border-radius:%?20?%;border-radius:%?20?%}.SkelttionProuctBox .CommentBox .CommentList .UsrtInfo .UserComment[data-v-7c502c0f]{width:%?360?%;height:%?20?%;background:#f3f4f6;-webkit-border-radius:%?20?%;border-radius:%?20?%;margin-top:%?20?%}.SkelttionMember .MemberBox[data-v-7c502c0f]{width:100%;height:%?340?%;background:#f3f4f6;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.SkelttionMember .MemberBox .UserBox[data-v-7c502c0f]{width:92vw;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.SkelttionMember .MemberBox .UserBox .UserInfoBox[data-v-7c502c0f]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.SkelttionMember .MemberBox .UserBox .UserInfoBox .UserLogo[data-v-7c502c0f]{width:%?100?%;height:%?100?%;background:#c8c9cc;opacity:.8;-webkit-border-radius:100%;border-radius:100%}.SkelttionMember .MemberBox .UserBox .UserInfoBox .UserName[data-v-7c502c0f]{margin-left:%?10?%}.SkelttionMember .MemberBox .UserBox .UserSet[data-v-7c502c0f], .SkelttionMember .MemberBox .UserBox .UserName[data-v-7c502c0f]{width:%?100?%;height:%?20?%;-webkit-border-radius:%?16?%;border-radius:%?16?%;background:#c8c9cc;opacity:.8}.SkelttionMember .OrderBox[data-v-7c502c0f]{width:92vw;height:%?120?%;background:#f3f4f6;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-top:%?20?%}.SkelttionMember .UserSetBox[data-v-7c502c0f]{width:92vw;height:%?480?%;background:#f3f4f6;margin-top:%?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.SkelttionClassify[data-v-7c502c0f]{width:100vw;height:100vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.SkelttionClassify .ClassifyLeft[data-v-7c502c0f]{width:20vw;height:100%;background:#f3f4f6}.SkelttionClassify .ClassifyRight[data-v-7c502c0f]{width:77vw;height:100%;background:rgba(244,244,245,.4);-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?40?% %?20?%}.SkelttionClassify .ClassifyRight .ClassifyList[data-v-7c502c0f]{margin-bottom:%?40?%}.SkelttionClassify .ClassifyRight .ClassifyListName[data-v-7c502c0f]{width:%?200?%;height:%?18?%;background:rgba(200,201,204,.6);-webkit-border-radius:%?10?%;border-radius:%?10?%}.SkelttionClassify .ClassifyRight .ClassifyItemBox[data-v-7c502c0f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.SkelttionClassify .ClassifyRight .ItemBox[data-v-7c502c0f]{margin-top:%?20?%;width:%?120?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.SkelttionClassify .ClassifyRight .ItemLogo[data-v-7c502c0f]{width:100%;height:%?120?%;background:rgba(200,201,204,.6);-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-bottom:%?10?%}.SkelttionClassify .ClassifyRight .ItemName[data-v-7c502c0f]{width:%?80?%;height:%?16?%;background:rgba(200,201,204,.6);-webkit-border-radius:%?10?%;border-radius:%?10?%}',""]),t.exports=e},c105:function(t,e,i){"use strict";var n=i("6b34"),o=i.n(n);o.a},d139a:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.CutButtonsBox[data-v-417f76c6]{width:100vw;height:90vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff}.CutButtonsBox .btns[data-v-417f76c6]{margin-bottom:%?20?%;width:%?160?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background:#2979ff;-webkit-border-radius:%?10?%;border-radius:%?10?%;font-size:%?28?%;line-height:%?16?%}',""]),t.exports=e}}]);