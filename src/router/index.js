import Vue from 'vue'
import Router from 'vue-router'
import StopWatch from '@/components/StopWatch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StopWatch',
      component: StopWatch
    }
  ]
})
