import Vue from 'vue'
import VueRouter from 'vue-router'
import bookHome from '../views/book/home'
 import oidcRoutes from './oidcRouter'
 import bookRoutes from './bookRoute'
 import adminRoutes from './AdminRoute'

import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'
import store from '../store/index.js'

import Test from '../views/Test.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'bookHome',
    component: bookHome
  },
  {path:'/test',name:'Test',component:Test}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    ...routes,
    ...oidcRoutes,
    ...bookRoutes,
    ...adminRoutes
  ]
 
})

// router.beforeEach((to,from,next)=>{
//   console.log(to);
//   vuexOidcCreateRouterMiddleware(store, 'oidcStore');
//   next();
//   });


export default router
