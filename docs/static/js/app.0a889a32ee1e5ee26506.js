webpackJsonp([1],[,,,function(t,e,n){"use strict";e.a={name:"app"}},function(t,e,n){"use strict";var i=n(17);n.n(i);e.a={name:"StopWatch",data:function(){return{times:[],animateFrame:0,nowTime:0,diffTime:0,startTime:0,isRunning:!1,durationTime:0,menu:[]}},created:function(){this.loadMenu(),document.title=this.$route.query.title||"PWA"},methods:{setSubtractStartTime:function(t){var e=void 0!==t?t:0;this.startTime=Math.floor(performance.now()-e)},startTimer:function(){var t=this;t.setSubtractStartTime(t.diffTime),function e(){t.nowTime=Math.floor(performance.now()),t.diffTime=t.nowTime-t.startTime,t.animateFrame=requestAnimationFrame(e)}(),t.isRunning=!0},stopTimer:function(){this.isRunning=!1,cancelAnimationFrame(this.animateFrame)},pushTime:function(){this.times.push({hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliSeconds:this.milliSeconds})},clearAll:function(){this.startTime=0,this.nowTime=0,this.diffTime=0,this.times=[],this.stopTimer(),this.animateFrame=0},addItem:function(){var t="N"+this.menu.length.toString();this.menu.push({name:t,sec:10})},removeItem:function(t){this.menu.splice(t,1)},loadQueryMenu:function(){if(this.$route.query&&this.$route.query.names){var t=this.$route.query.names.split(","),e=[];this.$route.query.secs&&(e=this.$route.query.secs.split(",")),this.menu=[];for(var n=0;n<t.length;n++)this.menu.push({name:t[n],sec:parseInt(e[n]||10)});return!0}return!1},loadDefaultMenu:function(){this.menu=[{name:"フルプランク",sec:60},{name:"エルボープランク",sec:30},{name:"脚上げプランク右",sec:30},{name:"脚上げプランク左",sec:30},{name:"レフトサイドプランク",sec:30},{name:"ライトサイドプランク",sec:30},{name:"フルプランク",sec:30},{name:"エルボープランク",sec:60}]},saveStorageMenu:function(){i.createInstance({drive:i.LOCALSTORAGE,name:"MyLocal",storeName:"pwa-plank-watch",version:1}).setItem("item",this.menu).then(function(){}).catch(function(t){console.log(t)})},saveQueryMenu:function(){for(var t=[],e=[],n=0;n<this.menu.length;n++)t.push(this.menu[n].name),e.push(this.menu[n].sec);var i=t.join(","),a=e.join(",");console.log(e),this.$router.push({query:{names:i,secs:a}})},saveMenu:function(){this.saveStorageMenu(),this.saveQueryMenu()},loadMenu:function(){this.loadQueryMenu()||this.loadStorageMenu()||this.loadDefaultMenu()},loadStorageMenu:function(){var t=this;return i.createInstance({drive:i.LOCALSTORAGE,name:"MyLocal",storeName:"pwa-plank-watch",version:1}).getItem("item").then(function(e){if(e)return t.menu=e,!0}).catch(function(t){console.log(t)}),!1}},computed:{msg:function(){for(var t=Math.ceil(this.diffTime/1e3),e=this.$route.query.end_message||"おつかれ～",n=this.menu,i=0;i<n.length;i++){var a=n[i];if(t<=a.sec){e=a.name,this.durationTime=a.sec-t;break}t-=a.sec}return e},duration:function(){return this.durationTime},hours:function(){return Math.floor(this.diffTime/1e3/60/60)},minutes:function(){return Math.floor(this.diffTime/1e3/60)%60},seconds:function(){return Math.floor(this.diffTime/1e3)%60},milliSeconds:function(){return Math.floor(this.diffTime%1e3)}},filters:{zeroPad:function(t,e){var n=void 0!==e?e:2;return t.toString().padStart(n,"0")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n(9),s=n(13);i.a.config.productionTip=!1,new i.a({el:"#app",router:s.a,template:"<App/>",components:{App:a.a}})},,,,function(t,e,n){"use strict";function i(t){n(10)}var a=n(3),s=n(12),o=n(2),r=i,u=o(a.a,s.a,!1,r,null,null);e.a=u.exports},function(t,e){},,function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("span",[t._v(" "+t._s(t.$route.query.title||"PWA"))])]),t._v(" "),n("main",[n("router-view")],1)])},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var i=n(1),a=n(14),s=n(15);i.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"StopWatch",component:s.a}]})},,function(t,e,n){"use strict";function i(t){n(16)}var a=n(4),s=n(18),o=n(2),r=i,u=o(a.a,s.a,!1,r,null,null);e.a=u.exports},function(t,e){},,function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui text container",attrs:{id:"app"}},[n("div",{staticClass:"center aligned"},[n("div",{staticClass:"column"},[n("h2",{staticClass:"h2 text-center"},[t._v("\n        "+t._s(t.msg)+"\n        "),n("br"),t._v("\n        "+t._s(t.duration)+"\n      ")]),t._v(" "),n("p",[t._v("\n        "+t._s(t.hours)+" :\n        "+t._s(t._f("zeroPad")(t.minutes))+" :\n        "+t._s(t._f("zeroPad")(t.seconds))+" :\n        "+t._s(t._f("zeroPad")(t.milliSeconds,3)))]),t._v(" "),t.isRunning?n("button",{staticClass:"btn btn-outline-primary btn-lg",on:{click:t.stopTimer}},[t._v("STOP")]):n("button",{staticClass:"btn btn-outline-primary btn-lg",on:{click:t.startTimer}},[t._v("START")]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-lg",attrs:{disabled:!t.isRunning},on:{click:t.pushTime}},[t._v("LAP")]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-lg",on:{click:t.clearAll}},[t._v("CLEAR")]),t._v(" "),n("table",{staticClass:"table table-striped table-bordered menu-table",attrs:{align:"center"}},t._l(t.menu,function(e,i){return n("tr",{key:i,staticStyle:{}},[n("th",{staticClass:"th-pad1 menu-name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"mn.name"}],staticClass:"form-control menu-name",attrs:{type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}})]),t._v(" "),n("th",{staticClass:"th-pad1 menu-sec"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.sec,expression:"mn.sec"}],staticClass:"form-control menu-sec",attrs:{type:"number",placeholder:"integer seconds"},domProps:{value:e.sec},on:{input:function(n){n.target.composing||t.$set(e,"sec",n.target.value)}}})]),t._v(" "),n("th",{staticClass:"th-pad1 menu-batu"},[n("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(e){return t.removeItem(i)}}},[t._v("🞭")])])])}),0),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:"Add Item"},on:{click:t.addItem}},[t._v("ADD")]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:"Save items"},on:{click:t.saveMenu}},[t._v("SAVE")]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:"Load items"},on:{click:t.loadStorageMenu}},[t._v("LOAD")]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:"Load default"},on:{click:t.loadDefaultMenu}},[t._v("DEFAULT")]),t._v(" "),t.times.length?n("ul",t._l(t.times,function(e){return n("li",{key:e},[t._v("\n          "+t._s(e.hours)+" :\n          "+t._s(t._f("zeroPad")(e.minutes))+" :\n          "+t._s(t._f("zeroPad")(e.seconds))+" :\n          "+t._s(t._f("zeroPad")(e.milliSeconds,3))+"\n        ")])}),0):t._e()])])])},a=[],s={render:i,staticRenderFns:a};e.a=s}],[5]);
//# sourceMappingURL=app.0a889a32ee1e5ee26506.js.map