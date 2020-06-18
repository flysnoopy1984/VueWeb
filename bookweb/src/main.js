import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ccApi from './utility/ccApi'
import ccUrls from './utility/ccUrls'

import mainHeader from '@/components/mainHeader'
import columnNav from '@/components/book/columnNav'
import tagArea from '@/components/book/tagArea'

import ElementUI  from 'element-ui'
import './style/main.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

Vue.config.productionTip = false
Vue.prototype.$ccApi = ccApi
Vue.prototype.$ccUrls = new ccUrls();

Vue.component("mainHeader",mainHeader);
Vue.component("columnNav",columnNav);
Vue.component("tagArea",tagArea);

Vue.use(ElementUI )

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
