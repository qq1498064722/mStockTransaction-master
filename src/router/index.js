import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/qrcode',
    name:'qrcode',
    component: () => import('../views/Qrcode.vue') ,
  },
  {
    path:'/join',
    name:'join',
    component: () => import('../views/content/Join.vue')
  },
  {
    path:'/login',
    name:'login',
    component:() => import('../views/content/Login.vue')
  },
  {
    path:'/mine',
    name:'mine',
    component:() => import('../views/content/Mine.vue')
  },
  {
    path:'/info',
    name:'info',
    component:() => import('../views/content/perfectInfo.vue')
  },
  {
    path:'/inactivity',
    name:'inactivity',
    component:() => import('../views/content/inActivity.vue')
  },
  {
    path:'/signup',
    name:'signup',
    component:() => import('../views/content/Signup.vue')
  },
  {
    path:'/div',
    name:'div',
    component:() => import('../components/Success.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
