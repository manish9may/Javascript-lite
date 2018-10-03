import Vue from 'vue';
import App from './components/app.vue';
import Router from 'vue-router';

import Home from './components/home.vue'
import About from './components/about.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});

new Vue({
  el: '#root',
  router,
  render: h => h(App)
});