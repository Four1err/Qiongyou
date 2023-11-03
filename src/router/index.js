import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../views/layout/Layout.vue'
import Login from '../views/login/Login.vue'
const About =() => import('../views/AboutView.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component:About,
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component: Login
  }
]

const router = new VueRouter({
  mode:"history",
  base:process.env.BASE_URL,
  routes,
});


export default router
