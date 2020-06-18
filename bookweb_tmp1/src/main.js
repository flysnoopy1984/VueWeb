import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ccApi from './utility/ccApi.js'

Vue.config.productionTip = false
Vue.prototype.$ccApi = ccApi

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
