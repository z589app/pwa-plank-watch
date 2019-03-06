import Vue from 'vue'
import Router from 'vue-router'
import StopWatch from '@/components/StopWatch'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:title(.*)',
      name: 'StopWatch',
      component: StopWatch
    }
  ]
})
