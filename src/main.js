import Vue from 'vue';

import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

import App from './core/App.vue';
import router from './core/router';
import store from './core/store';

gsap.registerPlugin(Draggable);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
