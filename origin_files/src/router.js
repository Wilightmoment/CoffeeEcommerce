import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'index/home'
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('./views/Index.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('./components/pages/Home')
        },
        {
          path: 'products',
          name: 'FrontProducts',
          component: () => import('./components/pages/FrontProducts')
        },
        {
          path: 'cartpaid',
          name: 'CartPaid',
          component: () => import('./components/pages/CartPaid')
        },
        {
          path: 'cartpaid',
          name: 'CartPaid',
          component: () => import('./components/pages/CartPaid')
        },
        {
          path: 'checkout/:orderId',
          name: 'CheckOut',
          component: () => import('./components/pages/CheckOutComplete')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('./views/Dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('./components/pages/Products'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: () => import('./components/pages/Coupon'),
          meta: { requiresAuth: true }
        },
        {
          path: 'orders',
          name: 'Orders',
          component: () => import('./components/pages/Orders'),
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
