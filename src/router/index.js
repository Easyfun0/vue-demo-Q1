import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/pages/Login'
import Products from '@/components/pages/Products'
import Locations from '@/components/pages/Locations'
import Menu from '@/components/pages/menu'
import position1 from '@/components/pages/position1'
// import position2 from '@/components/pages/position2'
// import position3 from '@/components/pages/position3'
import Abnormal from '@/components/pages/Abnormal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/login',
      name: '首頁',
      component: Login
    },
    {
      path: '/admin',
      name: '控制板',
      component: Dashboard,
      children: [
        {
          path: 'location',
          component: Locations,
          components: {
            default: Locations,
            menu: Menu
          },
          children: [
            {
              name: '地點1',
              path: '',
              component: position1
            }
          ]
        }
      ]
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/',
      component: Dashboard,
      name: Dashboard,
      children: [
        {
          path: 'abnormal',
          name: 'Abnormal',
          component: Abnormal
        }
      ]
    }
  ]
})
