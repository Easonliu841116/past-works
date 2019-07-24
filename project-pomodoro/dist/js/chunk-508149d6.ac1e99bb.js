(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-508149d6"],{"776c":function(t,s,i){"use strict";var e=i("ae08"),n=i.n(e);n.a},a7b9:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("form",{staticClass:"mission-input-container"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newMission,expression:"newMission"}],staticClass:"mission-input",class:{"font-color-secondary":2===t.subTimeData.mode},attrs:{type:"text",placeholder:"ADD A NEW MISSION…"},domProps:{value:t.newMission},on:{"keyup:enter":function(s){return s.preventDefault(),t.addMission(s)},input:function(s){s.target.composing||(t.newMission=s.target.value)}}}),i("button",{staticClass:"btn-add-mission",class:{"font-color-secondary btnSecondHover":2===t.subTimeData.mode},on:{click:function(s){return s.preventDefault(),t.addMission(s)}}},[t._v("+")])]),i("ul",{staticClass:"mission-list-container"},[i("li",{staticClass:"mission-title"},[i("span",[t._v("TO-DO")]),i("a",{staticClass:"btn-dropdown",attrs:{href:"#",id:"btn-todo-dropdown"},on:{click:function(s){return s.preventDefault(),t.todoMissionDropToggle(s)}}})]),i("div",{attrs:{id:"todo-missions"}},[i("draggable",{attrs:{handle:".btn-drag"},model:{value:t.missions,callback:function(s){t.missions=s},expression:"missions"}},t._l(t.missions,function(s,e){return i("li",{directives:[{name:"show",rawName:"v-show",value:!s.completed,expression:"!item.completed"}],key:e,staticClass:"missions"},[i("input",{staticClass:"mission-selector",attrs:{id:s.id,name:"mission-selector",type:"checkbox"}}),s.id!==t.cacheMission.id?i("label",{staticClass:"mission-text",class:{"line-through":s.completed},attrs:{for:s.id},on:{click:function(i){return t.toggleComplete(s)}}},[i("span"),t._v("\n            "+t._s(s.missionTitle)+"\n          ")]):t._e(),s.id===t.cacheMission.id?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.cacheMissionTitle,expression:"cacheMissionTitle"}],staticClass:"btn-missionEdit",attrs:{type:"text"},domProps:{value:t.cacheMissionTitle},on:{blur:function(i){return t.finishEdit(s)},input:function(s){s.target.composing||(t.cacheMissionTitle=s.target.value)}}}),i("span",{staticClass:"edit-hint"},[t._v("點擊周遭完成編輯")])]):t._e(),i("div",{staticClass:"btn-group"},[i("a",{staticClass:"btn-drag mission-btn btn-hide",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}}),i("a",{staticClass:"btn-edit mission-btn btn-hide",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.editMission(s)}}}),i("a",{staticClass:"btn-delete mission-btn btn-hide",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.deleteMission(s)}}},[t._v("×")]),i("a",{staticClass:"btn-start-count mission-btn",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.addToDoing(s)}}})])])}),0)],1)]),i("ul",{staticClass:"mission-list-container"},[i("li",{staticClass:"mission-title"},[i("span",[t._v("DONE")]),i("a",{staticClass:"btn-dropdown",attrs:{href:"#",id:"btn-done-dropdown"},on:{click:function(s){return s.preventDefault(),t.doneMissionDropToggle(s)}}})]),i("div",{attrs:{id:"done-missions"}},[i("draggable",{attrs:{handle:".btn-drag"},model:{value:t.missions,callback:function(s){t.missions=s},expression:"missions"}},t._l(t.missions,function(s,e){return i("li",{directives:[{name:"show",rawName:"v-show",value:s.completed,expression:"item.completed"}],key:e,staticClass:"missions"},[i("input",{staticClass:"mission-selector",attrs:{id:s.id,name:"mission-selector",type:"checkbox"}}),s.id!==t.cacheMission.id?i("label",{staticClass:"mission-text",class:{"line-through":s.completed},attrs:{for:s.id},on:{click:function(i){return t.toggleComplete(s)}}},[i("span",{class:{"fake-checked":!0===s.completed}}),t._v("\n            "+t._s(s.missionTitle)+"\n          ")]):t._e(),s.id===t.cacheMission.id?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.cacheMissionTitle,expression:"cacheMissionTitle"}],staticClass:"btn-missionEdit",attrs:{type:"text"},domProps:{value:t.cacheMissionTitle},on:{blur:function(i){return t.finishEdit(s)},input:function(s){s.target.composing||(t.cacheMissionTitle=s.target.value)}}}),i("span",{staticClass:"edit-hint"},[t._v("點擊周遭完成編輯")])]):t._e(),i("div",t._l(s.pomodoros,function(e,n){return i("div",{key:n,staticClass:"pomodoro-qty"},[t._v("\n                "+t._s(s.pomodoros)+"\n            ")])}),0)])}),0)],1)])])},n=[],o=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),a=i("5935"),c=i("2f62"),r=i("1157"),l=i.n(r),d=i("310e"),u=i.n(d);function p(t){for(var s=1;s<arguments.length;s++)if(s%2){var i=null!=arguments[s]?arguments[s]:{},e=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.forEach(function(s){Object(o["a"])(t,s,i[s])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[s]));return t}var m={props:{subTimeData:{type:Object,default:function(){return{}}}},computed:p({},Object(a["b"])(["newMission","cacheMission","cacheMissionTitle","missions","doingMission"])),methods:p({},Object(c["b"])(["addMission"]),{toggleComplete:function(t){this.$store.dispatch("toggleCompleted",t)},deleteMission:function(t){this.$store.dispatch("deleteMission",t)},editMission:function(t){this.$store.dispatch("editMission",t),setTimeout(function(){l()(".btn-missionEdit").focus()},2)},finishEdit:function(t){this.$store.dispatch("finishEdit",t)},todoMissionDropToggle:function(){l()("#todo-missions").fadeToggle(),l()("#btn-todo-dropdown").toggleClass("turn-opposite")},doneMissionDropToggle:function(){l()("#done-missions").fadeToggle(),l()("#btn-done-dropdown").toggleClass("turn-opposite")},addToDoing:function(t){this.$bus.$emit("addToDoing",t)}}),components:{draggable:u.a}},f=m,b=(i("776c"),i("2877")),h=Object(b["a"])(f,e,n,!1,null,"440e28d5",null);s["default"]=h.exports},ae08:function(t,s,i){}}]);
//# sourceMappingURL=chunk-508149d6.ac1e99bb.js.map