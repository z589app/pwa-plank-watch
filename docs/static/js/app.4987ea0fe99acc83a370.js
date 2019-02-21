webpackJsonp([1],[,,,function(t,e,n){"use strict";e.a={name:"app"}},function(t,e,n){"use strict";e.a={name:"StopWatch",data:function(){return{times:[],animateFrame:0,nowTime:0,diffTime:0,startTime:0,isRunning:!1,menu:[{name:"フルプランク",sec:60},{name:"エルボープランク",sec:30},{name:"脚上げプランク右",sec:30},{name:"脚上げプランク左",sec:30},{name:"レフトサイドプランク",sec:30},{name:"ライトサイドプランク",sec:30},{name:"フルプランク",sec:30},{name:"エルボープランク",sec:60}]}},methods:{setSubtractStartTime:function(t){var e=void 0!==t?t:0;this.startTime=Math.floor(performance.now()-e)},startTimer:function(){var t=this;t.setSubtractStartTime(t.diffTime),function e(){t.nowTime=Math.floor(performance.now()),t.diffTime=t.nowTime-t.startTime,t.animateFrame=requestAnimationFrame(e)}(),t.isRunning=!0},stopTimer:function(){this.isRunning=!1,cancelAnimationFrame(this.animateFrame)},pushTime:function(){this.times.push({hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliSeconds:this.milliSeconds})},clearAll:function(){this.startTime=0,this.nowTime=0,this.diffTime=0,this.times=[],this.stopTimer(),this.animateFrame=0}},computed:{msg:function(){for(var t=this.diffTime/1e3,e="おつかれ～",n=this.menu,i=0;i<n.length;i++){var s=n[i];if(t<=s.sec){e=s.name;break}t-=s.sec}return e},hours:function(){return Math.floor(this.diffTime/1e3/60/60)},minutes:function(){return Math.floor(this.diffTime/1e3/60)%60},seconds:function(){return Math.floor(this.diffTime/1e3)%60},milliSeconds:function(){return Math.floor(this.diffTime%1e3)}},filters:{zeroPad:function(t,e){var n=void 0!==e?e:2;return t.toString().padStart(n,"0")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=n(9),a=n(13);i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})},,,,function(t,e,n){"use strict";function i(t){n(10)}var s=n(3),a=n(12),r=n(2),o=i,c=r(s.a,a.a,!1,o,null,null);e.a=c.exports},function(t,e){},,function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),n("main",[n("router-view")],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("span",[t._v("Vue.js PWA")])])}],a={render:i,staticRenderFns:s};e.a=a},function(t,e,n){"use strict";var i=n(1),s=n(14),a=n(15);i.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"StopWatch",component:a.a}]})},,function(t,e,n){"use strict";var i=n(4),s=n(16),a=n(2),r=a(i.a,s.a,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui text container",attrs:{id:"app"}},[n("div",{staticClass:"center aligned row"},[n("div",{staticClass:"column"},[n("h1",[t._v("\n        "+t._s(t.msg)+"\n      ")]),t._v(" "),n("p",[t._v("\n        "+t._s(t.hours)+" :\n        "+t._s(t._f("zeroPad")(t.minutes))+" :\n        "+t._s(t._f("zeroPad")(t.seconds))+" :\n        "+t._s(t._f("zeroPad")(t.milliSeconds,3)))]),t._v(" "),t.isRunning?n("button",{staticClass:"ui secondary button",on:{click:t.stopTimer}},[t._v("STOP")]):n("button",{staticClass:"ui secondary button",on:{click:t.startTimer}},[t._v("START")]),t._v(" "),n("button",{staticClass:"ui button",attrs:{disabled:!t.isRunning},on:{click:t.pushTime}},[t._v("LAP")]),t._v(" "),n("button",{staticClass:"ui basic button",on:{click:t.clearAll}},[t._v("CLEAR")]),t._v(" "),t._l(t.menu,function(e){return n("li",{key:e,staticClass:"mn"},[t._v("\n          "+t._s(e.name)+" :\n          "+t._s(e.sec)+"\n        ")])}),t._v(" "),t.times.length?n("ul",{staticClass:"ui bulleted list"},t._l(t.times,function(e){return n("li",{key:e,staticClass:"item"},[t._v("\n          "+t._s(e.hours)+" :\n          "+t._s(t._f("zeroPad")(e.minutes))+" :\n          "+t._s(t._f("zeroPad")(e.seconds))+" :\n          "+t._s(t._f("zeroPad")(e.milliSeconds,3))+"\n        ")])}),0):t._e()],2)])])},s=[],a={render:i,staticRenderFns:s};e.a=a}],[5]);
//# sourceMappingURL=app.4987ea0fe99acc83a370.js.map