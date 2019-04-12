webpackJsonp([1],[,,,function(t,e,n){"use strict";e.a={name:"app"}},function(t,e,n){"use strict";var i=n(18),s=(n.n(i),n(19)),r=n.n(s),a=n(23),o=n.n(a);e.a={name:"StopWatch",components:{RadialProgressBar:r.a},data:function(){return{times:[],animateFrame:0,nowTime:0,diffTime:0,startTime:0,isRunning:!1,durationTime:0,completedSteps:10,totalSteps:100,menu:[],noSleep:null}},created:function(){this.loadMenu(),this.noSleep=new o.a},methods:{setSubtractStartTime:function(t){var e=t||0;this.startTime=Math.floor(performance.now()-e)},startTimer:function(){var t=this;t.setSubtractStartTime(t.diffTime),this.noSleep.enable(),function e(){t.nowTime=Math.floor(performance.now()),t.diffTime=t.nowTime-t.startTime,t.animateFrame=requestAnimationFrame(e)}(),t.isRunning=!0},stopTimer:function(){this.isRunning=!1,cancelAnimationFrame(this.animateFrame),this.noSleep.disable()},toggleTimer:function(){this.isRunning?this.stopTimer():this.startTimer()},pushTime:function(){this.times.push({hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliSeconds:this.milliSeconds})},clearAll:function(){this.startTime=0,this.nowTime=0,this.diffTime=0,this.times=[],this.stopTimer(),this.animateFrame=0,this.noSleep.disable()},addItem:function(){var t="N"+this.menu.length.toString();this.menu.push({name:t,sec:10})},removeItem:function(t){this.menu.splice(t,1)},loadQueryMenu:function(){if(this.$route.query&&this.$route.query.names){var t=this.$route.query.names.split(","),e=[];return this.$route.query.secs&&(e=this.$route.query.secs.split(",")),this.menu=[],t.forEach(function(t,n){this.menu.push({name:t,sec:parseInt(e[n]||10)})},this),!0}return!1},loadDefaultMenu:function(){this.menu=[{name:"フルプランク",sec:60},{name:"エルボープランク",sec:30},{name:"脚上げプランク右",sec:30},{name:"脚上げプランク左",sec:30},{name:"レフトサイドプランク",sec:30},{name:"ライトサイドプランク",sec:30},{name:"フルプランク",sec:30},{name:"エルボープランク",sec:60}]},saveStorageMenu:function(){i.createInstance({drive:i.LOCALSTORAGE,name:"MyLocal",storeName:"pwa-plank-watch",version:1}).setItem("item",this.menu).then(function(){}).catch(function(t){console.log(t)})},saveQueryMenu:function(){var t=[],e=[];this.menu.forEach(function(n){t.push(n.name),e.push(n.sec)});var n=t.join(","),i=e.join(",");this.$router.push({query:{names:n,secs:i}})},saveMenu:function(){this.saveStorageMenu(),this.saveQueryMenu()},loadMenu:function(){this.loadQueryMenu()||this.loadStorageMenu()||this.loadDefaultMenu()},loadStorageMenu:function(){var t=this;return i.createInstance({drive:i.LOCALSTORAGE,name:"MyLocal",storeName:"pwa-plank-watch",version:1}).getItem("item").then(function(e){if(e)return t.menu=e,!0}).catch(function(t){console.log(t)}),!1}},computed:{msg:function(){var t=Math.ceil(this.diffTime/1e3),e="おつかれ～";this.$route.query&&this.$route.query.end_message&&(e=this.$route.query.end_message);for(var n=0;n<this.menu.length;n++){var i=this.menu[n];if(t<=i.sec){e=i.name,this.durationTime=i.sec-t,this.completedSteps=i.sec-t,this.totalSteps=i.sec;break}t-=i.sec}return e},duration:function(){return this.durationTime},hours:function(){return Math.floor(this.diffTime/1e3/60/60)},minutes:function(){return Math.floor(this.diffTime/1e3/60)%60},seconds:function(){return Math.floor(this.diffTime/1e3)%60},milliSeconds:function(){return Math.floor(this.diffTime%1e3)},prog:function(){return 10}},filters:{zeroPad:function(t,e){var n=e||2;return t.toString().padStart(n,"0")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{diameter:{type:Number,required:!1,default:200},totalSteps:{type:Number,required:!0,default:10},completedSteps:{type:Number,required:!0,default:0},startColor:{type:String,required:!1,default:"#bbff42"},stopColor:{type:String,required:!1,default:"#429321"},strokeWidth:{type:Number,required:!1,default:10},animateSpeed:{type:Number,required:!1,default:1e3},innerStrokeColor:{type:String,required:!1,default:"#323232"},fps:{type:Number,required:!1,default:60},timingFunc:{type:String,required:!1,default:"linear"}},data:function(){return{gradient:{fx:.99,fy:.5,cx:.5,cy:.5,r:.65},gradientAnimation:null,currentAngle:0,strokeDashoffset:0}},computed:{radius:function(){return this.diameter/2},circumference:function(){return Math.PI*this.innerCircleDiameter},stepSize:function(){return 0===this.totalSteps?0:100/this.totalSteps},finishedPercentage:function(){return this.stepSize*this.completedSteps},circleSlice:function(){return 2*Math.PI/this.totalSteps},animateSlice:function(){return this.circleSlice/this.totalPoints},innerCircleDiameter:function(){return this.diameter-2*this.strokeWidth},innerCircleRadius:function(){return this.innerCircleDiameter/2},totalPoints:function(){return this.animateSpeed/this.animationIncrements},animationIncrements:function(){return 1e3/this.fps},hasGradient:function(){return this.startColor!==this.stopColor},containerStyle:function(){return{height:this.diameter+"px",width:this.diameter+"px"}},progressStyle:function(){return{height:this.diameter+"px",width:this.diameter+"px",strokeWidth:this.strokeWidth+"px",strokeDashoffset:this.strokeDashoffset,transition:"stroke-dashoffset "+this.animateSpeed+"ms "+this.timingFunc}},strokeStyle:function(){return{height:this.diameter+"px",width:this.diameter+"px",strokeWidth:this.strokeWidth+"px"}},innerCircleStyle:function(){return{width:this.innerCircleDiameter+"px"}}},methods:{getStopPointsOfCircle:function(t){for(var e=[],n=0;n<t;n++){var i=this.circleSlice*n;e.push(this.getPointOfCircle(i))}return e},getPointOfCircle:function(t){return{x:.5+.5*Math.cos(t),y:.5+.5*Math.sin(t)}},gotoPoint:function(){var t=this.getPointOfCircle(this.currentAngle);this.gradient.fx=t.x,this.gradient.fy=t.y},changeProgress:function(t){var e=this,n=t.isAnimate,i=void 0===n||n;if(this.strokeDashoffset=(100-this.finishedPercentage)/100*this.circumference,this.gradientAnimation&&clearInterval(this.gradientAnimation),!i)return void this.gotoNextStep();var s=(this.completedSteps-1)*this.circleSlice,r=(this.currentAngle-s)/this.animateSlice,a=Math.abs(r-this.totalPoints)/this.totalPoints,o=r<this.totalPoints;this.gradientAnimation=setInterval(function(){if(o&&r>=e.totalPoints||!o&&r<e.totalPoints)return void clearInterval(e.gradientAnimation);e.currentAngle=s+e.animateSlice*r,e.gotoPoint(),r+=o?a:-a},this.animationIncrements)},gotoNextStep:function(){this.currentAngle=this.completedSteps*this.circleSlice,this.gotoPoint()}},watch:{totalSteps:function(){this.changeProgress({isAnimate:!0})},completedSteps:function(){this.changeProgress({isAnimate:!0})},diameter:function(){this.changeProgress({isAnimate:!0})},strokeWidth:function(){this.changeProgress({isAnimate:!0})}},created:function(){this.changeProgress({isAnimate:!1})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=n(10),r=n(14);i.a.config.productionTip=!1,new i.a({el:"#app",router:r.a,template:"<App/>",components:{App:s.a}})},,,,function(t,e,n){"use strict";function i(t){n(11)}var s=n(3),r=n(13),a=n(1),o=i,c=a(s.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e){},,function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("span",[t._v(" "+t._s(t.$route.params.title.replace("pwa-plank-watch/","")||"PWA"))])]),t._v(" "),n("main",[n("router-view")],1)])},s=[],r={render:i,staticRenderFns:s};e.a=r},function(t,e,n){"use strict";var i=n(2),s=n(15),r=n(16);i.a.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"/:title(.*)",name:"StopWatch",component:r.a}]})},,function(t,e,n){"use strict";function i(t){n(17)}var s=n(4),r=n(25),a=n(1),o=i,c=a(s.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e){},,,function(t,e,n){"use strict";function i(t){n(21)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(5),r=n.n(s);for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);var o=n(22),c=n(1),u=i,l=c(r.a,o.a,!1,u,null,null);e.default=l.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"radial-progress-container",style:t.containerStyle},[n("div",{staticClass:"radial-progress-inner",style:t.innerCircleStyle},[t._t("default")],2),t._v(" "),n("svg",{staticClass:"radial-progress-bar",attrs:{width:t.diameter,height:t.diameter,version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("defs",[n("radialGradient",{attrs:{id:"radial-gradient"+t._uid,fx:t.gradient.fx,fy:t.gradient.fy,cx:t.gradient.cx,cy:t.gradient.cy,r:t.gradient.r}},[n("stop",{attrs:{offset:"30%","stop-color":t.startColor}}),t._v(" "),n("stop",{attrs:{offset:"100%","stop-color":t.stopColor}})],1)],1),t._v(" "),n("circle",{style:t.strokeStyle,attrs:{r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:t.innerStrokeColor,"stroke-dasharray":t.circumference,"stroke-dashoffset":"0","stroke-linecap":"round"}}),t._v(" "),n("circle",{style:t.progressStyle,attrs:{transform:"rotate(270, "+t.radius+","+t.radius+")",r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:"url(#radial-gradient"+t._uid+")","stroke-dasharray":t.circumference,"stroke-dashoffset":t.circumference,"stroke-linecap":"round"}})])])},s=[],r={render:i,staticRenderFns:s};e.a=r},,,function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui text container",attrs:{id:"app"}},[n("div",{staticClass:"center aligned"},[n("div",{staticClass:"column"},[n("h2",{staticClass:"h2 text-center"},[n("p",{staticClass:"class_msg"},[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),n("p",{attrs:{align:"center"},on:{click:t.toggleTimer}},[n("radial-progress-bar",{attrs:{diameter:200,strokeWidth:15,animateSpeed:1e3,"completed-steps":t.completedSteps,"total-steps":t.totalSteps}},[n("h2",{staticClass:"h2 text-cente"},[t._v(" "+t._s(t.duration)+" ")])])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.hours)+" :\n        "+t._s(t._f("zeroPad")(t.minutes))+" :\n        "+t._s(t._f("zeroPad")(t.seconds))+" :\n        "+t._s(t._f("zeroPad")(t.milliSeconds,3)))]),t._v(" "),t.isRunning?n("button",{staticClass:"btn btn-outline-primary btn-lg",on:{click:t.stopTimer}},[t._v("STOP")]):n("button",{staticClass:"btn btn-outline-primary btn-lg",on:{click:t.startTimer}},[t._v("START")]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-lg",attrs:{disabled:!t.isRunning},on:{click:t.pushTime}},[t._v("LAP")]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-lg",on:{click:t.clearAll}},[t._v("CLEAR")]),t._v(" "),n("table",{staticClass:"table table-striped table-bordered menu-table",attrs:{align:"center"}},t._l(t.menu,function(e,i){return n("tr",{key:i,staticStyle:{}},[n("th",{staticClass:"th-pad1 menu-name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"mn.name"}],staticClass:"form-control menu-name",attrs:{type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}})]),t._v(" "),n("th",{staticClass:"th-pad1 menu-sec"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.sec,expression:"mn.sec"}],staticClass:"form-control menu-sec",attrs:{type:"number",placeholder:"integer seconds"},domProps:{value:e.sec},on:{input:function(n){n.target.composing||t.$set(e,"sec",n.target.value)}}})]),t._v(" "),n("th",{staticClass:"th-pad1 menu-batu"},[n("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(e){return t.removeItem(i)}}},[t._v("x")])])])}),0),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:"Add Item"},on:{click:t.addItem}},[t._v("ADD")]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:"Save items"},on:{click:t.saveMenu}},[t._v("SAVE")]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:"Load items"},on:{click:t.loadStorageMenu}},[t._v("LOAD")]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:"Load default"},on:{click:t.loadDefaultMenu}},[t._v("DEFAULT")]),t._v(" "),t.times.length?n("ul",t._l(t.times,function(e){return n("li",{key:e},[t._v("\n          "+t._s(e.hours)+" :\n          "+t._s(t._f("zeroPad")(e.minutes))+" :\n          "+t._s(t._f("zeroPad")(e.seconds))+" :\n          "+t._s(t._f("zeroPad")(e.milliSeconds,3))+"\n        ")])}),0):t._e()])])])},s=[],r={render:i,staticRenderFns:s};e.a=r}],[6]);
//# sourceMappingURL=app.fbb0f6967b83e9dbf665.js.map