import Vue from 'vue'
import fActivity from './plugins/icons/activity'
// import airplay from './plugins/icons/airplay'
// import alertCircle from './plugins/icons/alert-circle'
import { fAlertCircle } from './plugins/main'
import fiv from './plugins/main'
import App from './App.vue'

Vue.use(fiv)
Vue.use(fActivity)
// Vue.use(fAirplay)
Vue.use(fAlertCircle)

new Vue({
  el: '#app',
  render: h => h(App)
})
