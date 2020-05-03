import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App.vue'
import store from './store'
import router from './router'

import '@/plugins/ui'
import Click from 'vue-spark'

Vue.config.productionTip = false

Vue.directive('click', Click)

try {
  FastClick.attach(document.body)
} catch(err) {
  throw new Error(err)
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
