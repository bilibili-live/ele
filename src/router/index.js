import Vue from 'vue'
import VueRouter from 'vue-router'

import { routerUtils } from '@/utils'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    component: routerUtils.build('layout/index', false),
    children: [
      {
        path: 'store',
        name: 'store',
        component: routerUtils.build('index')
      }
    ]
  },
  {
    path: '/home',
    component: routerUtils.build('index')
  }
]


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next)=> {
  next()
})

export default router
