import Vue from 'vue';

import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

import Unicon from 'vue-unicons';
import { uniSetting, uniTimesCircle, uniBox } from 'vue-unicons/src/icons';

import App from './core/App.vue';
import router from './core/router';
import store from './core/store';

gsap.registerPlugin(Draggable);

Unicon.add([uniSetting, uniTimesCircle, uniBox]);
Vue.use(Unicon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
