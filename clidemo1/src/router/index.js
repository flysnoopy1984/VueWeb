import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import demo1 from '../views/Demo1.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'Home',component: Home},
  {path:'/demo1',name:'demo1',component:demo1},
  {path:'/demo2',name:'demo2',component:() => import('../views/Demo2.vue') },
  {
    path: '/FormVux',
    name: 'Formvux',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormVux.vue')
  },
  {
    path:'/Login',component:() => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
