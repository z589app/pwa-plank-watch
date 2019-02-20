<template>
<div id="app" class="ui text container">
  <div class="center aligned row">
    <div class="column">
      <h1>
        {{ msg }}
      </h1>
      <p>
        {{ hours }} :
        {{ minutes | zeroPad }} :
        {{ seconds | zeroPad }} :
        {{ milliSeconds | zeroPad(3) }}</p>
      <button class="ui secondary button" @click="startTimer" v-if="!isRunning">START</button>
      <button class="ui secondary button" @click="stopTimer" v-else>STOP</button>
      <button class="ui button" @click="pushTime" :disabled="!isRunning">LAP</button>
      <button class="ui basic button" @click="clearAll">CLEAR</button>
        <li class="mn" v-for="mn in menu" v-bind:key="mn">
          {{ mn.name  }} :
          {{ mn.sec  }}
        </li>
      <ul class="ui bulleted list" v-if="times.length">
        <li class="item" v-for="itm in times" v-bind:key="itm">
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

<script>
export default {
  name: 'StopWatch',
  data () {
    return {
      times: [],
      animateFrame: 0,
      nowTime: 0,
      diffTime: 0,
      startTime: 0,
      isRunning: false,
      menu: [
        {name: 'フルプランク', sec: 60},
        {name: 'エルボープランク', sec: 30},
        {name: '脚上げプランク右', sec: 30},
        {name: '脚上げプランク左', sec: 30},
        {name: 'レフトサイドプランク', sec: 30},
        {name: 'ライトサイドプランク', sec: 30},
        {name: 'フルプランク', sec: 30},
        {name: 'エルボープランク', sec: 60}
      ]
    }
  },
  methods: {
    // 現在時刻から引数に渡した数値を startTime に代入
    setSubtractStartTime: function (time) {
      var t = typeof time !== 'undefined' ? time : 0
      this.startTime = Math.floor(performance.now() - t)
    },
    // タイマーをスタートさせる
    startTimer: function () {
      // loop()内で this の値が変更されるので退避
      var vm = this
      vm.setSubtractStartTime(vm.diffTime);
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
    }
  },
  computed: {
    msg: function () {
      var tSec = this.diffTime / 1000
      var message = 'おつかれ～'
      var menu = this.menu
      for (var i = 0; i < menu.length; i++) {
        var item = menu[i]
        if (tSec <= item.sec) {
          message = item.name
          break
        } else {
          tSec -= item.sec
        }
      }
      return message
    },
    // 時間を計算
    hours: function () {
      return Math.floor(this.diffTime / 1000 / 60 / 60)
    },
    // 分数を計算 (60分になったら0分に戻る)
    minutes: function () {
      return Math.floor(this.diffTime / 1000 / 60) % 60
    },
    // 秒数を計算 (60秒になったら0秒に戻る)
    seconds: function () {
      return Math.floor(this.diffTime / 1000) % 60
    },
    // ミリ数を計算 (1000ミリ秒になったら0ミリ秒に戻る)
    milliSeconds: function () {
      return Math.floor(this.diffTime % 1000)
    }
  },
  filters: {
    // ゼロ埋めフィルタ 引数に桁数を入力する
    // ※ String.prototype.padStart() は IEじゃ使えない
    zeroPad: function (value, num) {
      var n = typeof num !== 'undefined' ? num : 2
      return value.toString().padStart(n, '0')
    }
  }
}
</script>
