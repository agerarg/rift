import Vue from 'vue'
import Router from 'vue-router'
import ContentMid from '@/components/main/ContentMid.vue';
import ContentLeft from '@/components/main/ContentLeft.vue';
import ContentRight from '@/components/main/ContentRight.vue';
//Profile
import PerfilMid from '@/components/profile/PerfilMid.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "Home",
      components: { 
       left: ContentLeft,
       mid: ContentMid,
       right: ContentRight
      }
    },
    {
      path: '/profile',
      name: "Profile",
      components: { 
      left: ContentLeft,
       mid: PerfilMid,
       right: ContentRight      
      }
    }  
  ]
})
