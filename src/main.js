import Vue from 'vue'
import VTooltip from 'v-tooltip'
import App from './App.vue'

Vue.use(VTooltip)

new Vue({
  el: '#app',
  render: h => h(App)
})
