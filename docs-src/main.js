import Vue from 'vue'
import App from './App.vue'
import feather from '../dist/index.es'

Vue.use(feather)

new Vue({
  el: '#app',
  render: h => h(App)
})
