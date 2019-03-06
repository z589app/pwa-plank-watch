// import Vue from 'vue'
import StopWatch from '@/components/StopWatch.vue'

describe('StopWatch.vue', () => {
  it('has a created hook', () => {
    expect(typeof StopWatch.created).toBe('function')
  })

//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(StopWatch)
//     const vm = new Constructor().$mount('#app')
//     expect(vm.$el.querySelector('.class_msg').textContent)
//       .to.equal('PWA')
//   })
})
