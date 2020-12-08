// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios'
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';


import VueAxios from 'vue-axios'
import router from './router';
import './bus'
import currencyFilter from './filter/currency';

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

// 全域
Vue.component('Loading',Loading);
Vue.filter('currency',currencyFilter);

axios.defaults.withCredentials=true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
    console.log(response.data);
    if(response.data.success){
      next();
    }else{
      next({
        path:'/login'
      })
    }
})
  }else{
    next();
  }
  
})