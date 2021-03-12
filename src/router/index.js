import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/products/:category',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path:'/error',
    name:'error',
    component:() => import('../views/Error.vue')
  },
  {
    path:'*',
    redirect:'/error'
  }
 ]

const router = new VueRouter({
  routes,
  linkActiveClass:'active'
})

export default router
