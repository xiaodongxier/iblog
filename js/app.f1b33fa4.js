(function(t){function e(e){for(var s,i,r=e[0],d=e[1],c=e[2],h=0,f=[];h<r.length;h++)i=r[h],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var d=a[r];0!==n[d]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0952":function(t,e,a){},"12ae":function(t,e,a){},"1c39":function(t,e,a){"use strict";a("58a3")},"1d48":function(t,e,a){},"21df":function(t,e,a){"use strict";a("6dff")},3464:function(t,e,a){"use strict";a("84ba")},"35ee":function(t,e,a){"use strict";a("c6fe")},"3ada":function(t,e,a){},"42e7":function(t,e,a){"use strict";a("1d48")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HomePage",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dream-theme"},[e("div",{staticClass:"dream-theme-wrapper"},[e("a-tabs",{attrs:{type:"line","default-active-key":"mark"},on:{change:t.callback}},[e("a-tab-pane",{key:"todo",attrs:{tab:"待办事项"}},[e("div",{staticClass:"dream-theme-card"},[e("TodoList")],1)]),e("a-tab-pane",{key:"notes",attrs:{tab:"文章笔记"}},[e("div",{staticClass:"dream-theme-card"},[e("NoteList")],1)]),e("a-tab-pane",{key:"news",attrs:{tab:"全网热搜"}},[e("div",{staticClass:"dream-theme-card"},[e("HotList")],1)]),e("a-tab-pane",{key:"theme",attrs:{tab:"主题记录"}},[e("div",{staticClass:"dream-theme-card"},[e("Theme")],1)]),e("a-tab-pane",{key:"mark",attrs:{tab:"书签"}},[e("div",{staticClass:"dream-theme-card"},[e("Mark")],1)]),e("a-tab-pane",{key:"about",attrs:{tab:"关于"}},[e("div",{staticClass:"dream-theme-card"},[e("About")],1)]),e("template",{slot:"tabBarExtraContent"},[e("a-row",{attrs:{gutter:[5,0]}},[e("a-col",{attrs:{span:12}},[e("a-button",{attrs:{size:"small"}},[t._v("刷新")])],1),e("a-col",{attrs:{span:12}},[e("a-button",{attrs:{size:"small"}},[t._v("刷新")])],1)],1)],1)],2)],1)])},r=[],d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"todo-content markdown-body"},[e("a-row",{attrs:{gutter:[8,4]}},[e("a-col",{attrs:{span:6}},[e("a-spin",{attrs:{tip:"Loading...",spinning:t.loading}},[e("div",{staticClass:"life-todo todo-card"},[e("div",{staticClass:"todo-title"},[t._v(" 生活相关 ")]),e("div",{staticClass:"todo-body"},[e("VueMarkdown",{attrs:{source:t.lifeInfo}})],1)])])],1),e("a-col",{attrs:{span:6}},[e("a-spin",{attrs:{tip:"Loading...",spinning:t.loading}},[e("div",{staticClass:"work-todo todo-card"},[e("div",{staticClass:"todo-title"},[t._v(" 工作相关 ")]),e("div",{staticClass:"todo-body"},[e("VueMarkdown",{attrs:{source:t.workInfo}})],1)])])],1),e("a-col",{attrs:{span:6}},[e("a-spin",{attrs:{tip:"Loading...",spinning:t.loading}},[e("div",{staticClass:"study-todo todo-card"},[e("div",{staticClass:"todo-title"},[t._v(" 学习相关 ")]),e("div",{staticClass:"todo-body"},[e("VueMarkdown",{attrs:{source:t.studyInfo}})],1)])])],1),e("a-col",{attrs:{span:6}},[e("a-spin",{attrs:{tip:"Loading...",spinning:t.loading}},[e("div",{staticClass:"other-todo todo-card"},[e("div",{staticClass:"todo-title"},[t._v(" other相关 ")]),e("div",{staticClass:"todo-body"},[e("VueMarkdown",{attrs:{source:t.otherInfo}})],1)])])],1)],1)],1)},c=[],l=a("9ce6"),h=a.n(l),f={name:"TodoList",data(){return{description:"代办列表",loading:!0,lifeInfo:"",workInfo:"",studyInfo:"",otherInfo:""}},components:{VueMarkdown:h.a},created(){this.getTodoDta()},mounted(){},destroyed(){},methods:{getTodoDta(){let t=sessionStorage.getItem("dream_todo_info"),e=JSON.parse(t);if(e){const t=e,a=t.split("\x3c!-- 分割线 --\x3e");this.lifeInfo=a[1],this.workInfo=a[2],this.studyInfo=a[3],this.otherInfo=a[4],this.loading=!1}else this.$http.get("https://raw.gitmirror.com/xiaodongxier/my_web_content/dream_data/TodoList/index.md").then(t=>{if(t.data){const e=t.data,a=e.split("\x3c!-- 分割线 --\x3e");this.lifeInfo=a[1],this.workInfo=a[2],this.studyInfo=a[3],this.otherInfo=a[4],this.loading=!1,sessionStorage.setItem("dream_todo_info",JSON.stringify(t.data))}})}}},u=f,m=(a("3464"),a("2877")),g=Object(m["a"])(u,d,c,!1,null,"7c52c651",null),p=g.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"note-content"},[e("a-row",{attrs:{gutter:8}},[e("a-col",{attrs:{span:7}},[e("div",{staticClass:"note-list note-card"},[e("div",{attrs:{clas:"note-body"}},[e("a-table",{attrs:{columns:t.columns,"data-source":t.noteList,pagination:!1,scroll:t.scroll,showHeader:!1,loading:t.listLoading,"row-key":"name"},scopedSlots:t._u([{key:"name",fn:function(a,s){return e("div",{},[t._v(" "+t._s(t.getFileName(s.name))+" ")])}},{key:"action",fn:function(a,s){return e("div",{},[e("a",{on:{click:function(e){return t.viewNote(s.path,s.name)}}},[t._v("阅读")]),e("a-divider",{attrs:{type:"vertical"}}),e("a",{attrs:{href:t.viewEdit(s.html_url),target:"_blank"}},[t._v("编辑")])],1)}}])})],1)])]),e("a-col",{attrs:{span:17}},[e("a-spin",{attrs:{tip:"文章加载中...",spinning:t.viewLoading}},[e("div",{staticClass:"list-content note-card"},[e("div",{staticClass:"content-body markdown-body"},[t.noteItemInfo?e("VueMarkdown",{attrs:{source:t.noteItemInfo}}):e("div",{staticClass:"note-view-default"},[t._v("阅读区域")])],1)])])],1)],1)],1)},v=[],_=a("1487"),j=a.n(_),k={name:"NoteList",data(){return{description:"文章列表",listLoading:!0,scroll:{y:"calc(100vh - 30px)"},columns:[{title:"标题",dataIndex:"name",key:"name",align:"center",scopedSlots:{customRender:"name"}},{title:"操作",dataIndex:"Action",key:"action",width:130,scopedSlots:{customRender:"action"},align:"center"}],noteList:[],noteItemInfo:"",viewLoading:!1}},components:{VueMarkdown:h.a},created(){this.getDta()},watch:{viewLoading(t,e){this.$nextTick((function(){this.mdHighLight()})),console.log("md渲染是否完成,执行code高亮程序，新值为：",t,"旧值为：",e)}},mounted(){},methods:{getDta(){this.listLoading=!0;let t=sessionStorage.getItem("dream_notes_list_info"),e=JSON.parse(t);e?(this.noteList=e,this.listLoading=!1):this.$http.get("https://api.github.com/repos/xiaodongxier/my_web_content/contents/NoteList?ref=dream_data",{}).then(t=>{if(t.data){const e=t.data.filter(t=>t.name.endsWith(".md"));this.noteList=e,this.listLoading=!1,sessionStorage.setItem("dream_notes_list_info",JSON.stringify(e))}})},getFileName(t){const e=t.split(".");return t.split(".")[e.length-2]},getFileType(t){const e=t.split(".");return t.split(".")[e.length-1]},viewNote(t,e){this.viewLoading=!0,this.noteItemInfo="";let a=sessionStorage.getItem("dream_notes_content_info_"+e);if(a)this.noteItemInfo=a,this.viewLoading=!1,console.log(e,"加载成功,打开的为缓存文件,加载速度快,体验好,0等待");else{let a="https://raw.githubusercontent.com/xiaodongxier/my_web_content/dream_data/"+t;this.$http.get(a,{}).then(t=>{t.data&&(this.noteItemInfo=t.data,this.viewLoading=!1,sessionStorage.setItem("dream_notes_content_info_"+e,t.data))})}this.$nextTick((function(){this.mdHighLight()}))},viewEdit(t){const e=t.replace("github.com","github.dev");return e},mdHighLight(){this.$el.querySelectorAll("pre code").forEach(t=>{j.a.highlightBlock(t)})}}},y=k,w=(a("de0e"),Object(m["a"])(y,b,v,!1,null,"03b43c50",null)),I=w.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hot-content"},[e("a-row",{attrs:{gutter:[10,1]}},[e("a-col",{attrs:{span:5}},[e("a-spin",{attrs:{tip:"数据加载中...",spinning:t.loading}},[e("div",{staticClass:"hot-card baidu-card"},[e("h3",[t._v("百度热搜")]),e("ul",t._l(t.baiduData,(function(a){return e("li",{key:a.title},[e("span",[t._v(t._s(a.index)+".")]),e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title)+" ")])])})),0)])])],1),e("a-col",{attrs:{span:5}},[e("a-spin",{attrs:{tip:"数据加载中...",spinning:t.loading}},[e("div",{staticClass:"hot-card weibo-card"},[e("h3",[t._v("微博热搜")]),e("ul",t._l(t.weiboData,(function(a){return e("li",{key:a.title},[e("span",[t._v(t._s(a.index)+".")]),e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title)+" ")])])})),0)])])],1),e("a-col",{attrs:{span:5}},[e("a-spin",{attrs:{tip:"数据加载中...",spinning:t.loading}},[e("div",{staticClass:"hot-card douyin-card"},[e("h3",[t._v("抖音热搜")]),e("ul",t._l(t.douyinData,(function(a){return e("li",{key:a.title},[e("span",[t._v(t._s(a.index)+".")]),e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title)+" ")])])})),0)])])],1),e("a-col",{attrs:{span:9}},[e("a-spin",{attrs:{tip:"数据加载中...",spinning:t.loading}},[e("div",{staticClass:"hot-card zhihu-card"},[e("h3",[t._v("知乎热搜")]),e("ul",t._l(t.zhihuData,(function(a){return e("li",{key:a.title},[e("span",[t._v(t._s(a.index)+".")]),e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(" "+t._s(a.title)+" ")]),a.desc?e("p",[t._v(" "+t._s(a.desc)+" ")]):t._e()])})),0)])])],1)],1)],1)},C=[],S={name:"HotList",data(){return{loading:!0,description:"热搜",baiduData:[],weiboData:[],douyinData:[],zhihuData:[]}},created(){this.getBdidu(),this.getWeibo(),this.getDouyin(),this.getZhihu()},mounted(){},methods:{getBdidu(){this.$http.get("https://api.vvhan.com/api/hotlist?type=baiduRD").then(t=>{this.loading=!1,this.baiduData=t.data.data}).catch(t=>{console.error(t),this.loading=!1})},getWeibo(){this.$http.get("https://api.vvhan.com/api/hotlist?type=wbHot").then(t=>{this.loading=!1,this.weiboData=t.data.data}).catch(t=>{console.error(t),this.loading=!1})},getDouyin(){this.$http.get("https://api.vvhan.com/api/hotlist?type=douyinHot").then(t=>{this.loading=!1,this.douyinData=t.data.data}).catch(t=>{console.error(t),this.loading=!1})},getZhihu(){this.$http.get("https://api.vvhan.com/api/hotlist?type=zhihuHot").then(t=>{this.loading=!1,this.zhihuData=t.data.data}).catch(t=>{console.error(t),this.loading=!1})}}},T=S,L=(a("35ee"),Object(m["a"])(T,x,C,!1,null,"30dd4fd1",null)),D=L.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-content"},[e("a-row",{attrs:{gutter:[10,1]}},[e("a-col",{attrs:{span:8}},[e("ThemePlan")],1),e("a-col",{attrs:{span:8}},[e("ThemeLog")],1),e("a-col",{attrs:{span:8}},[e("ThemeDoc")],1)],1)],1)},M=[],z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"log-content"},[e("a-spin",{attrs:{tip:"数据加载中...",spinning:t.loading}},[e("div",{staticClass:"log-list"},[e("a-row",{attrs:{type:"flex",justify:"center"}},[e("a-col",{attrs:{span:20}},[e("a-timeline",{attrs:{mode:"alternate",pending:"持续开发中...",reverse:t.reverse}},t._l(t.logInfo,(function(a,s){return e("a-timeline-item",{key:s,attrs:{color:a.setting[3]}},[e("a-icon",{staticStyle:{"font-size":"16px"},attrs:{slot:a.setting[0],type:a.setting[1],spin:a.setting[2]},slot:a.setting[0]}),e("h4",[t._v(t._s(a.time))]),e("VueMarkdown",{attrs:{source:a.content}})],1)})),1)],1)],1)],1)])],1)},$=[],H=(a("14d9"),{name:"ThemeLog",data(){return{description:"主题时间轴",reverse:!0,loading:!0,logInfo:[],noteItemInfo:"# ces"}},components:{VueMarkdown:h.a},created(){this.getData()},mounted(){},methods:{getData(){this.loading=!0;let t=sessionStorage.getItem("dream_theme_log_info"),e=JSON.parse(t);e?(this.logInfo=e,this.loading=!1):this.$http.get("https://raw.gitmirror.com/xiaodongxier/my_web_content/dream_data/Theme/ThemeLog.md",{}).then(t=>{if(t.data){const e=this.removeComments(t.data),a=e.split("####");for(let t=1;t<a.length;t++){const e=a[t].split("><"),s=/{%(.*?)%}/,n=e[1].match(s),o=e[1].replace(/{%[\s\S]*?%}/g,"");this.logInfo.push({time:e[0],setting:JSON.parse(n[1]),content:o}),sessionStorage.setItem("dream_theme_log_info",JSON.stringify(this.logInfo)),this.loading=!1}}})},removeComments(t){return t.replace(/<!--[\s\S]*?-->/g,"")},removeBlank(t){return t.replace(/\s+/g,"")}}}),A=H,N=(a("c4d8"),Object(m["a"])(A,z,$,!1,null,"d1de9c98",null)),P=N.exports,V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"plan-content markdown-body"},[e("a-spin",{attrs:{tip:"数据加载中...",spinning:t.loading}},[e("div",{staticClass:"plan-list"},[e("VueMarkdown",{ref:"mdContent",attrs:{source:t.planInfo}})],1)])],1)},E=[],J={name:"ThemePlan",data(){return{description:"项目信息",loading:!0,planInfo:"",renderedMarkdown:"",toc:[]}},components:{VueMarkdown:h.a},computed:{},created(){this.getData()},mounted(){},watch:{loading(t,e){this.$nextTick((function(){this.mdHighLight()})),console.log("md渲染是否完成,执行code高亮程序，新值为：",t,"旧值为：",e)}},methods:{getData(){this.loading=!0;let t=sessionStorage.getItem("dream_theme_plan_info");t?(this.planInfo=t,this.loading=!1):this.$http.get("https://raw.gitmirror.com/xiaodongxier/my_web_content/dream_data/Theme/ThemePlan.md",{}).then(t=>{t.data&&(this.planInfo=t.data,this.loading=!1)})},mdHighLight(){this.$el.querySelectorAll("pre code").forEach(t=>{j.a.highlightBlock(t)})}}},B=J,q=(a("fb2d"),Object(m["a"])(B,V,E,!1,null,"42a44f2a",null)),W=q.exports,F=function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-content markdown-body"},[e("a-spin",{attrs:{tip:"数据加载中...",spinning:t.loading}},[e("div",{staticClass:"doc-list"},[e("VueMarkdown",{ref:"mdContent",attrs:{source:t.planInfo,toc:!0,highlight:!0}})],1)])],1)},U=[],R={name:"ThemePlan",data(){return{description:"项目信息",loading:!0,planInfo:"",renderedMarkdown:"",toc:[]}},components:{VueMarkdown:h.a},computed:{},created(){this.getData()},mounted(){},watch:{loading(t,e){this.$nextTick((function(){this.mdHighLight()})),console.log("md渲染是否完成,执行code高亮程序，新值为：",t,"旧值为：",e)}},methods:{getData(){this.loading=!0;let t=sessionStorage.getItem("dream_theme_plan_info");t?(this.planInfo=t,this.loading=!1):this.$http.get("https://raw.gitmirror.com/xiaodongxier/my_web_content/dream_data/Theme/ThemeDoc.md",{}).then(t=>{t.data&&(this.planInfo=t.data,this.loading=!1)})},mdHighLight(){this.$el.querySelectorAll("pre code").forEach(t=>{j.a.highlightBlock(t)})}}},Z=R,Y=(a("42e7"),Object(m["a"])(Z,F,U,!1,null,"24cb4d1c",null)),G=Y.exports,K={name:"Theme",components:{ThemeLog:P,ThemePlan:W,ThemeDoc:G},data(){return{description:"程序历史",reverse:!1}}},Q=K,X=Object(m["a"])(Q,O,M,!1,null,"18ae75d6",null),tt=X.exports,et=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mark-content"},[e("a-spin",{attrs:{tip:"数据加载中...",spinning:t.loading}},[e("a-row",{attrs:{gutter:8}},[e("a-col",{attrs:{span:3}},[e("div",{staticClass:"mark-nav mark-card"},[e("a-anchor",{attrs:{affix:!1,"get-current-anchor":t.getCurrentAnchor}},[e("a-anchor-link",{attrs:{href:"#AI",title:"AI"}}),e("a-anchor-link",{attrs:{href:"#Web",title:"Web"}}),e("a-anchor-link",{attrs:{href:"#vscode",title:"vscode"}}),e("a-anchor-link",{attrs:{href:"#webTools",title:"webTools"}}),e("a-anchor-link",{attrs:{href:"#openSource",title:"openSource"}}),e("a-anchor-link",{attrs:{href:"#UI",title:"UI"}}),e("a-anchor-link",{attrs:{href:"#win",title:"win"}}),e("a-anchor-link",{attrs:{href:"#Mac",title:"Mac"}})],1)],1)]),e("a-col",{attrs:{span:21}},[e("div",{staticClass:"mark-info mark-card"},[e("div",{staticClass:"mark-body"},t._l(t.info,(function(a){return e("div",{key:a.title,staticClass:"mark-item"},[e("a-divider",{staticClass:"section",attrs:{orientation:"left",id:a.description}},[t._v(" "+t._s(a.title)+" ")]),e("a-row",{attrs:{gutter:[8,8]}},t._l(a.children,(function(t){return e("a-col",{key:t.title,attrs:{span:4}},[e("a-card",{class:{vpn:t.vpn},attrs:{hoverable:!0}},[e("a",{attrs:{href:t.url,target:"_blank"}},[e("a-card-meta",{attrs:{title:t.title,description:t.description}},[t.vpn?e("a-avatar",{attrs:{slot:"avatar",src:t.bg},slot:"avatar"}):e("a-avatar",{attrs:{slot:"avatar",src:t.avatar},slot:"avatar"})],1)],1)])],1)})),1)],1)})),0)])])],1)],1)],1)},at=[],st={name:"HotList",data(){return{loading:!0,description:"热搜",info:[],selectedHref:""}},created(){this.getMarkData()},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{getMarkData(){let t=sessionStorage.getItem("dream_mark_info"),e=JSON.parse(t);e?(this.info=e,this.loading=!1):this.$http.get("https://raw.gitmirror.com/xiaodongxier/my_web_content/dream_data/Mark/Mark.json").then(t=>{t.data&&(this.info=t.data.data,console.log(t.data),this.loading=!1,sessionStorage.setItem("dream_mark_info",JSON.stringify(t.data.data)))})},handleScroll(){const t=document.querySelectorAll(".section"),e=document.documentElement.scrollTop||document.body.scrollTop;let a="";t.forEach(t=>{const s=t.offsetTop,n=t.offsetTop+t.offsetHeight;e>=s&&e<n&&(a="#"+t.id)}),this.selectedHref=a}}},nt=st,ot=(a("946c"),Object(m["a"])(nt,et,at,!1,null,"f82ce370",null)),it=ot.exports,rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-content"},[e("a-row",{attrs:{gutter:[10,1]}},[e("a-col",{attrs:{span:6}},[e("AboutMe")],1),e("a-col",{attrs:{span:6}},[e("AboutDevice")],1),e("a-col",{attrs:{span:6}},[e("AboutWish")],1)],1)],1)},dt=[],ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-content markdown-body"},[e("a-spin",{attrs:{tip:"数据加载中...",spinning:t.loading}},[e("div",{staticClass:"doc-list"},[t._v(" 关于我 "),t._e()],1)])],1)},lt=[],ht={name:"ThemePlan",data(){return{description:"项目信息",loading:!0,planInfo:"",renderedMarkdown:"",toc:[]}},components:{VueMarkdown:h.a},computed:{},created(){this.getData()},mounted(){},watch:{loading(t,e){this.$nextTick((function(){this.mdHighLight()})),console.log("md渲染是否完成,执行code高亮程序，新值为：",t,"旧值为：",e)}},methods:{getData(){this.loading=!0;let t=sessionStorage.getItem("dream_theme_plan_info");t?(this.planInfo=t,this.loading=!1):this.$http.get("https://raw.gitmirror.com/xiaodongxier/my_web_content/dream_data/Theme/ThemeDoc.md",{}).then(t=>{t.data&&(this.planInfo=t.data,this.loading=!1)})},mdHighLight(){this.$el.querySelectorAll("pre code").forEach(t=>{j.a.highlightBlock(t)})}}},ft=ht,ut=(a("21df"),Object(m["a"])(ft,ct,lt,!1,null,"6872e6f6",null)),mt=ut.exports,gt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-content markdown-body"},[e("a-spin",{attrs:{tip:"数据加载中...",spinning:t.loading}},[e("div",{staticClass:"doc-list"},[t._v(" 我的设备 "),t._e()],1)])],1)},pt=[],bt={name:"ThemePlan",data(){return{description:"项目信息",loading:!0,planInfo:"",renderedMarkdown:"",toc:[]}},components:{VueMarkdown:h.a},computed:{},created(){this.getData()},mounted(){},watch:{loading(t,e){this.$nextTick((function(){this.mdHighLight()})),console.log("md渲染是否完成,执行code高亮程序，新值为：",t,"旧值为：",e)}},methods:{getData(){this.loading=!0;let t=sessionStorage.getItem("dream_theme_plan_info");t?(this.planInfo=t,this.loading=!1):this.$http.get("https://raw.gitmirror.com/xiaodongxier/my_web_content/dream_data/Theme/ThemeDoc.md",{}).then(t=>{t.data&&(this.planInfo=t.data,this.loading=!1)})},mdHighLight(){this.$el.querySelectorAll("pre code").forEach(t=>{j.a.highlightBlock(t)})}}},vt=bt,_t=(a("b416"),Object(m["a"])(vt,gt,pt,!1,null,"6f73f87b",null)),jt=_t.exports,kt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-content markdown-body"},[e("a-spin",{attrs:{tip:"数据加载中...",spinning:t.loading}},[e("div",{staticClass:"doc-list"},[t._v(" 愿望清单 "),t._e()],1)])],1)},yt=[],wt={name:"ThemePlan",data(){return{description:"项目信息",loading:!0,planInfo:"",renderedMarkdown:"",toc:[]}},components:{VueMarkdown:h.a},computed:{},created(){this.getData()},mounted(){},watch:{loading(t,e){this.$nextTick((function(){this.mdHighLight()})),console.log("md渲染是否完成,执行code高亮程序，新值为：",t,"旧值为：",e)}},methods:{getData(){this.loading=!0;let t=sessionStorage.getItem("dream_theme_plan_info");t?(this.planInfo=t,this.loading=!1):this.$http.get("https://raw.gitmirror.com/xiaodongxier/my_web_content/dream_data/Theme/ThemeDoc.md",{}).then(t=>{t.data&&(this.planInfo=t.data,this.loading=!1)})},mdHighLight(){this.$el.querySelectorAll("pre code").forEach(t=>{j.a.highlightBlock(t)})}}},It=wt,xt=(a("1c39"),Object(m["a"])(It,kt,yt,!1,null,"58e6aecc",null)),Ct=xt.exports,St={name:"Theme",components:{AboutMe:mt,AboutDevice:jt,AboutWish:Ct},data(){return{description:"程序历史",reverse:!1}}},Tt=St,Lt=Object(m["a"])(Tt,rt,dt,!1,null,"7a570b70",null),Dt=Lt.exports,Ot={name:"DreamTheme",data(){return{description:"项目主页",info:[]}},components:{TodoList:p,NoteList:I,HotList:D,Theme:tt,Mark:it,About:Dt},created(){this.sysSettingInfo()},mounted(){},methods:{sysSettingInfo(){let t=sessionStorage.getItem("dream_sys_setting_info"),e=JSON.parse(t);e?this.info=e:this.$http.get("/api/json.json").then(t=>{t.data&&(this.info=t.data,sessionStorage.setItem("dream_sys_setting_info",JSON.stringify(t.data)))})},callback(t){console.log(t)},getDate(){}}},Mt=Ot,zt=(a("85de"),Object(m["a"])(Mt,i,r,!1,null,"5f2d1219",null)),$t=zt.exports,Ht={name:"App",components:{HomePage:$t}},At=Ht,Nt=(a("ba3f"),Object(m["a"])(At,n,o,!1,null,null,null)),Pt=Nt.exports,Vt=a("cee4"),Et=a("f23d"),Jt=(a("202f"),a("050d"),a("e4cbc"),a("b056"));a("4798");s["b"].use(Jt["a"]),s["b"].prototype.$http=Vt["a"],s["b"].use(Et["a"]),s["b"].config.productionTip=!1,new s["b"]({render:t=>t(Pt)}).$mount("#app")},"58a3":function(t,e,a){},"6dff":function(t,e,a){},"84ba":function(t,e,a){},"85de":function(t,e,a){"use strict";a("a1b9")},"8f5d":function(t,e,a){},"946c":function(t,e,a){"use strict";a("3ada")},a1b9:function(t,e,a){},b416:function(t,e,a){"use strict";a("0952")},ba3f:function(t,e,a){"use strict";a("e8be")},c4d8:function(t,e,a){"use strict";a("8f5d")},c6fe:function(t,e,a){},d6b8:function(t,e,a){},de0e:function(t,e,a){"use strict";a("d6b8")},e8be:function(t,e,a){},fb2d:function(t,e,a){"use strict";a("12ae")}});
//# sourceMappingURL=app.f1b33fa4.js.map