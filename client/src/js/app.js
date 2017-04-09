import Vue from 'vue';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';

sync(store, router);

function initApp() {
  // Init App
  const App = Vue.extend(require('./components/app.vue'));
  new App({
    name: 'main-app',
    el: '#app',
    store,
    router
  });
}

initApp();