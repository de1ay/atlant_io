import Vue from 'vue';
import Vuex from 'vuex';

import tradingTerminal from '@/modules/trading_terminal/store';

Vue.use(Vuex);

const store = {
  state: {},
  modules: {
    tradingTerminal,
  },
};

export default new Vuex.Store(store);
