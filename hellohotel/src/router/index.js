import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/administrator',
    name: 'administrator',
    component: () => import('../components/administrator/admin-main')
  },
  {
    path: '/client',
    name: 'client',
    component: () => import('../components/client/client-main')
  },
  {
    path: '/admin-rooms',
    name: 'admin-rooms',
    component: () => import('../components/administrator/admin-rooms')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
