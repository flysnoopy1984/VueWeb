import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/cchttp.js'

Vue.prototype.$api = api
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
