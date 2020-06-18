import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/cchttp.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.prototype.$api = api
Vue.config.productionTip = false


var mianVue = new Vue({
  router,
  store,
  render: h => h(App)
});
mianVue.$mount('#app');
