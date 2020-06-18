import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OidcCallback from '../components/Oidc/OidcCallback.vue'
import OidcPopupCallback from '../components/Oidc/OidcPopupCallback.vue'
import OidcCallbackError from '../components/Oidc/OidcCallbackError.vue'
import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isPublic: true
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {path:'/Book/list',name:'booklist',component: () => import('../views/Book/list.vue')},

  {
    path:'/oidc-callback',name:'oidcCallback',component:OidcCallback
  },
  {
    path:'/oidc-callback-error',name:'oidcCallbackError',component:OidcCallbackError
  },
  {
    path: '/oidc-popup-callback', // Needs to match popupRedirectUri in you oidcSettings
    name: 'oidcPopupCallback',
    component: OidcPopupCallback
  },
  

]

const router = new VueRouter({
  mode: 'history',
  routes
})

//router.beforeEach(vuexOidcCreateRouterMiddleware(store, 'oidcStore'))

export default router
