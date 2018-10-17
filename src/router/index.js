import Vue from 'vue'
import Router from 'vue-router'
import Elements from '@/components/view/Elements.vue'
import Default from '@/components/view/Default.vue'
import Generic from '@/components/view/Generic.vue'

import Login from '@/components/view/Auth/Login.vue';
import Register from '@/components/view/Auth/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/elements',
      name: 'Elements',
      component: Elements
    },
    {
      path: '/',
      name: 'Default',
      component: Default
    },
    {
      path: '/generic',
      name: 'Generic',
      component: Generic
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
    }
  ]
})
