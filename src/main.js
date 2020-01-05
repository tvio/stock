import Vue from 'vue'
import App from './App.vue'
import VueRouter from  'vue-router';
import VueResource from 'vue-resource';

import {routes} from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

// dodat url
Vue.http.options.root = 'https://stock-7d391.firebaseio.com/stocks';

Vue.filter('mena',(value)=>{
  return  value.toLocaleString() + ' Kč';
})

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
