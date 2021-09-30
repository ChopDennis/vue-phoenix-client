import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Meta from 'vue-meta'

//Components
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import ForgotPassword from '../components/ForgottenPassword.vue'
import ResetPassword from '../components/ResetPassword.vue'

Vue.use(VueRouter)
Vue.use(Meta)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
