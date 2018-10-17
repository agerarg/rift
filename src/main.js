// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuelidate from 'vuelidate';
import VueResource from 'vue-resource';
Vue.config.productionTip = false

Vue.use(VueResource);

Vue.http.options.root="http://localhost/ociorift/";
Vue.http.interceptors.push((request,next)=>{

  request.url =  request.url+"&auth=123456";
  next();
});


Vue.use(Vuelidate);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
