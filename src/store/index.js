import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topbar: {
      show: true,
      title: '',
      left: '返回',
      bg: '',
    }
  }
})