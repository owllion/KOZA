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
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  // {
  //   path: '/products/:category',
  //   name: 'Products',
  //   component: () => import('../views/Products.vue')
  // },
  {
    path: '/userprofile',
    name: 'UserProfile',
    meta: {
     requireAuth: true
    },
    component: () => import('../views/UserProfile.vue')
   },
   {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue')
  },
   {
    path: '/cart',
    name: 'Cart',
    meta: {
     requireAuth: true
    },
    component: () => import('../views/Cart.vue')
   },
   {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
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
  linkActiveClass:'active',
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
