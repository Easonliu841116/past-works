(function(e){function n(n){for(var o,i,u=n[0],s=n[1],a=n[2],l=0,d=[];l<u.length;l++)i=u[l],r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(n);while(d.length)d.shift()();return c.push.apply(c,a||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,i=1;i<t.length;i++){var u=t[i];0!==r[u]&&(o=!1)}o&&(c.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},i={app:0},r={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-01e6b012":"fd36bab7","chunk-5a26fb3a":"64c3b69a","chunk-4c30197c":"c93f0882","chunk-508149d6":"ac1e99bb","chunk-d7711a22":"a45bbef3"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-01e6b012":1,"chunk-4c30197c":1,"chunk-508149d6":1,"chunk-d7711a22":1};i[e]?n.push(i[e]):0!==i[e]&&t[e]&&n.push(i[e]=new Promise(function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-01e6b012":"ae09e5ad","chunk-5a26fb3a":"31d6cfe0","chunk-4c30197c":"6bb655d7","chunk-508149d6":"9820be5d","chunk-d7711a22":"0947cec1"}[e]+".css",r=s.p+o,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var a=c[u],l=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(l===o||l===r))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){a=d[u],l=a.getAttribute("data-href");if(l===o||l===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete i[e],f.parentNode.removeChild(f),t(c)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){i[e]=0}));var o=r[e];if(0!==o)if(o)n.push(o[2]);else{var c=new Promise(function(n,t){o=r[e]=[n,t]});n.push(o[2]=c);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e),a=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");c.type=o,c.request=i,t[1](c)}r[e]=void 0}};var d=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=n,a=a.slice();for(var d=0;d<a.length;d++)n(a[d]);var f=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],c=(t("5c0b"),t("2877")),u={},s=Object(c["a"])(u,i,r,!1,null,null,null),a=s.exports,l=t("8c4f");o["a"].use(l["a"]);var d=new l["a"]({routes:[{path:"*",redirect:"/"},{path:"/",component:function(){return Promise.all([t.e("chunk-5a26fb3a"),t.e("chunk-4c30197c")]).then(t.bind(null,"86d6"))},children:[{path:"/",name:"TodoList",component:function(){return Promise.all([t.e("chunk-5a26fb3a"),t.e("chunk-508149d6")]).then(t.bind(null,"a7b9"))}},{path:"analytics",name:"Analytics",component:function(){return t.e("chunk-01e6b012").then(t.bind(null,"41f2"))}},{path:"ringtone",name:"Ringtone",component:function(){return t.e("chunk-d7711a22").then(t.bind(null,"69bc"))}}]}]}),f=(t("ac6a"),t("2f62")),p=t("5935");o["a"].use(f["a"]);var h=new f["a"].Store({strict:!0,state:{newMission:"",missions:[],tempMissions:[],cacheMission:{},doingMission:[],cacheMissionTitle:"",alertSound:{workAlert:"default",breakAlert:"default"},pomodoroQty:0},getters:{missions:function(e){return e.missions},cacheMissionTitle:function(e){return e.cacheMissionTitle},cacheMission:function(e){return e.cacheMission},doingMission:function(e){return e.doingMission},getField:p["a"]},mutations:{MISSION:function(e){var n=e.newMission.trim();if(n){var t={missionTitle:n,id:Math.floor(Date.now()),completed:!1,pomodoros:0};e.missions.push(t)}e.newMission=""},COMPLETED:function(e,n){n.completed=!n.completed},DELETEDOINGMISSION:function(e,n){n.completed=!0,e.missions.push(n),e.doingMission.splice(0,1)},DELETEMISSION:function(e,n){var t="";e.missions.forEach(function(e,o){return n.id===e.id&&(t=o),t}),e.missions.splice(t,1)},EDITMISSION:function(e,n){e.cacheMission=n,e.cacheMissionTitle=n.missionTitle},FINISHEDIT:function(e,n){n.missionTitle=e.cacheMissionTitle,e.cacheMission={},e.cacheMissionTitle=""},DOINGMISSION:function(e,n){var t="";e.missions.forEach(function(e,o){return n.id===e.id&&(t=o),t}),e.missions.splice(t,1),e.doingMission.push(n)},COUNTCONTROLLER:function(e){e.timer.isPaused=!e.timer.isPaused},SOUND:function(e,n){var t=n.el,o=n.type;1===o&&(e.alertSound.workAlert=t),2===o&&(e.alertSound.breakAlert=t)},POMODORO:function(e,n){n.pomodoros+=1,e.pomodoroQty+=1},updateField:p["c"]},actions:{addMission:function(e){e.commit("MISSION")},toggleCompleted:function(e,n){e.commit("COMPLETED",n)},deleteDoingMission:function(e,n){e.commit("DELETEDOINGMISSION",n)},deleteMission:function(e,n){e.commit("DELETEMISSION",n)},editMission:function(e,n){setTimeout(function(){e.commit("EDITMISSION",n)},1)},finishEdit:function(e,n){e.commit("FINISHEDIT",n)},addToDoing:function(e,n){e.commit("DOINGMISSION",n)},changeSound:function(e,n){var t=n.el,o=n.type;e.commit("SOUND",{el:t,type:o})},addPomodoro:function(e,n){e.commit("POMODORO",n)}}});o["a"].prototype.$bus=new o["a"],o["a"].config.productionTip=!1,new o["a"]({store:h,router:d,render:function(e){return e(a)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var o=t("5e27"),i=t.n(o);i.a},"5e27":function(e,n,t){}});
//# sourceMappingURL=app.1f9acc98.js.map