<template>
<div id="app" class="ui text container">
  <div class="center aligned">
    <div class="column">
      <h2 class="h2 text-center">
        <p class="class_msg"> {{ msg }} </p>
      </h2>
      <p align="center" @click="toggleTimer">
      <radial-progress-bar
        :diameter="200"
        :strokeWidth=15
        :animateSpeed=1000
        :completed-steps="completedSteps"
        :total-steps="totalSteps">
      <h2 class="h2 text-cente"> {{ duration }} </h2>
      </radial-progress-bar>
      </p>
      <p>
        {{ hours }} :
        {{ minutes | zeroPad }} :
        {{ seconds | zeroPad }} :
        {{ milliSeconds | zeroPad(3) }}</p>
      <button class="btn btn-outline-primary btn-lg" @click="startTimer" v-if="!isRunning">START</button>
      <button class="btn btn-outline-primary btn-lg" @click="stopTimer" v-else>STOP</button>
      <button class="btn btn-outline-primary btn-lg" @click="pushTime" :disabled="!isRunning">LAP</button>
      <button class="btn btn-outline-primary btn-lg" @click="clearAll">CLEAR</button>
      <table class="table table-striped table-bordered menu-table" align=center>
        <tr style="table-tr" v-for="(mn, index) in menu" v-bind:key="index">
          <th class="th-pad1 menu-name">
            <input class="form-control menu-name" type="text" placeholder='Name' v-model=mn.name>
          </th>
          <th class="th-pad1 menu-sec">
            <input class="form-control menu-sec" type="number" placeholder='integer seconds' v-model=mn.sec>
          </th>
          <th class="th-pad1 menu-batu">
            <button class="btn btn-outline-primary btn-sm" @click="removeItem(index)">x</button>
          </th>
        </tr>
      </table>
      <button type="button" class="btn btn-outline-primary btn-sm"
        @click="addItem" data-toggle="tooltip" data-placement="top" title="Add Item">ADD</button>
      <button type="button" class="btn btn-outline-primary btn-sm"
        @click="saveMenu" data-toggle="tooltip" data-placement="top" title="Save items">SAVE</button>
      <button type="button" class="btn btn-outline-primary btn-sm"
        @click="loadStorageMenu" data-toggle="tooltip" data-placement="top" title="Load items">LOAD</button>
      <button type="button" class="btn btn-outline-primary btn-sm"
        @click="loadDefaultMenu" data-toggle="tooltip" data-placement="top" title="Load default">DEFAULT</button>
      <ul v-if="times.length">
        <li v-for="itm in times" v-bind:key="itm">
          {{ itm.hours  }} :
          {{ itm.minutes | zeroPad }} :
          {{ itm.seconds | zeroPad }} :
          {{ itm.milliSeconds | zeroPad(3) }}
        </li>
      </ul>
    </div>
    <!-- /.column -->
  </div>
  <!-- /.center aligned row -->
</div>
</template>

<style>
.menu-table {width: 20em; }
.menu-name {width: 14em; }
.menu-sec {width: 4em; }
.menu-batu {width: 2em; }
.btn-border-black {
  border-color: black
}
th.th-pad1 {
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
}
.v-enter-active, .v-leave-active {
  transition: opacity .5s
}
.v-enter, .v-leave-to {
  opacity: 0
}
</style>

<script>
import * as localforage from 'localforage'
import RadialProgressBar from 'vue-radial-progress'

import NoSleep from 'nosleep.js'
// import * as NoSleep from 'nosleep.js'
// var noSleep = new NoSleep()

export default {
  name: 'StopWatch',
  components: {
    RadialProgressBar
  },
  data () {
    return {
      times: [],
      animateFrame: 0,
      nowTime: 0,
      diffTime: 0,
      startTime: 0,
      isRunning: false,
      durationTime: 0,
      completedSteps: 10,
      totalSteps: 100,
      menu: [],
      noSleep: null
    }
  },
  created: function () {
    this.loadMenu()
    this.noSleep = new NoSleep()
  },
  methods: {
    setSubtractStartTime: function (time) {
      var t = time || 0
      this.startTime = Math.floor(performance.now() - t)
    },
    // タイマーをスタートさせる
    startTimer: function () {
      // loop()内で this の値が変更されるので退避
      var vm = this
      vm.setSubtractStartTime(vm.diffTime)
      this.noSleep.enable();
      // ループ処理
      (function loop () {
        vm.nowTime = Math.floor(performance.now())
        vm.diffTime = vm.nowTime - vm.startTime
        vm.animateFrame = requestAnimationFrame(loop)
      }())
      vm.isRunning = true
    },
    // タイマーを停止させる
    stopTimer: function () {
      this.isRunning = false
      cancelAnimationFrame(this.animateFrame)
      this.noSleep.disable()
    },
    toggleTimer: function () {
      if (this.isRunning) {
        this.stopTimer()
      } else {
        this.startTimer()
      }
    },
    // 計測中の時間を配列に追加
    pushTime: function () {
      this.times.push({
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds,
        milliSeconds: this.milliSeconds
      })
    },
    // 初期化
    clearAll: function () {
      this.startTime = 0
      this.nowTime = 0
      this.diffTime = 0
      this.times = []
      this.stopTimer()
      this.animateFrame = 0
      this.noSleep.disable()
      // this.durationTime = 0
    },
    addItem: function () {
      var itemName = 'N' + this.menu.length.toString()
      this.menu.push({name: itemName, sec: 10})
    },
    removeItem: function (idx) {
      this.menu.splice(idx, 1)
    },
    loadQueryMenu: function () {
      if (this.$route.query && this.$route.query.names) {
        var names = this.$route.query.names.split(',')
        var secs = []
        if (this.$route.query.secs) {
          secs = this.$route.query.secs.split(',')
        }
        this.menu = []
        names.forEach(function (v, i) {
          this.menu.push({name: v, sec: parseInt(secs[i] || 10)})
        }, this)
        return true
      }
      return false
    },
    loadDefaultMenu: function () {
      this.menu = [
        {name: 'フルプランク', sec: 60},
        {name: 'エルボープランク', sec: 30},
        {name: '脚上げプランク右', sec: 30},
        {name: '脚上げプランク左', sec: 30},
        {name: 'レフトサイドプランク', sec: 30},
        {name: 'ライトサイドプランク', sec: 30},
        {name: 'フルプランク', sec: 30},
        {name: 'エルボープランク', sec: 60}
      ]
    },
    saveStorageMenu: function () {
      const myLF = localforage.createInstance({
        drive: localforage.LOCALSTORAGE,
        name: 'MyLocal',
        storeName: 'pwa-plank-watch',
        version: 1
      })
      myLF.setItem('item', this.menu)
        .then(() => {
          // pass
        })
        .catch((error) => {
          console.log(error) // pass
        })
    },
    saveQueryMenu: function () {
      // Query
      var names = []
      var secs = []
      this.menu.forEach(function (v) {
        names.push(v.name)
        secs.push(v.sec)
      })
      var queryNames = names.join(',')
      var querySecs = secs.join(',')
      this.$router.push({query: { names: queryNames, secs: querySecs }})
    },
    saveMenu: function () {
      this.saveStorageMenu()
      this.saveQueryMenu()
    },
    loadMenu: function () {
      this.loadQueryMenu() ||
      this.loadStorageMenu() ||
      this.loadDefaultMenu()
    },
    loadStorageMenu: function () {
      const myLF = localforage.createInstance({
        drive: localforage.LOCALSTORAGE,
        name: 'MyLocal',
        storeName: 'pwa-plank-watch',
        version: 1
      })
      myLF.getItem('item')
        .then((value) => {
          if (value) {
            this.menu = value
            return true
          }
        })
        .catch((error) => {
          console.log(error)
        })
      return false
    }
  },
  computed: {
    msg: function () {
      var tSec = Math.ceil(this.diffTime / 1000)
      var message = 'おつかれ～'
      if (this.$route.query && this.$route.query.end_message) {
        message = this.$route.query.end_message
      }
      for (var i = 0; i < this.menu.length; i++) {
        var item = this.menu[i]
        if (tSec <= item.sec) {
          message = item.name
          this.durationTime = item.sec - tSec
          this.completedSteps = item.sec - tSec
          this.totalSteps = item.sec
          break
        } else {
          tSec -= item.sec
        }
      }
      return message
    },
    duration: function () {
      return this.durationTime
    },
    hours: function () {
      return Math.floor(this.diffTime / 1000 / 60 / 60)
    },
    minutes: function () {
      return Math.floor(this.diffTime / 1000 / 60) % 60
    },
    seconds: function () {
      return Math.floor(this.diffTime / 1000) % 60
    },
    milliSeconds: function () {
      return Math.floor(this.diffTime % 1000)
    },
    prog: function () {
      return 10
    }
  },
  filters: {
    zeroPad: function (value, num) {
      var n = num || 2
      return value.toString().padStart(n, '0')
    }
  }
}
</script>
