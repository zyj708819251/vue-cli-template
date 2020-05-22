import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
	  path: '/',
	  name: '主页',
    redirect: '/Home',
	},{
    path: '/Home',
    name: 'Home',
    component: () => import('@views/Home.vue'),
    redirect: '/Home/Index1',
    children: [{
        path: 'Index1',
        component: () => import('@com/Content/index1.vue'),
      },
      {
        path: 'Index2',
        component: () => import('@com/Content/index2.vue'),
      }
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@views/Login.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
