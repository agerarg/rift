import Vue from 'vue'
import Router from 'vue-router'
import ContentMid from '@/components/main/ContentMid.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: ContentMid
    }
  ]
})
