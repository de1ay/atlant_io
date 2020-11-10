<template lang="pug">
  div.trading_terminal
    transition(name="stash-slide")
      TradingTerminalStash.terminal-stash(v-if="isStashSidebarOpen")
    TradingTerminalDesk.terminal-desk
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import store from './store';
import mutationNames from './store/constants/mutationNames';

import TradingTerminalDesk from './components/TradingTerminalDesk.vue';
import TradingTerminalStash from './components/TradingTerminalStash.vue';

export default {
  name: 'TradingTerminal',
  components: {
    TradingTerminalDesk,
    TradingTerminalStash,
  },
  computed: {
    ...mapState('tradingTerminal', ['isStashSidebarOpen']),
  },
  beforeCreate() {
    if (!this.$store.state.tradingTerminal) {
      this.$store.registerModule('tradingTerminal', store);
    }
  },
  mounted() {
    this.initializeStore();
  },
  destroyed() {
    if (this.$store.state.tradingTerminal) {
      this.$store.unregisterModule('tradingTerminal');
    }
  },
  methods: {
    ...mapMutations('tradingTerminal', {
      initializeStore: mutationNames.initializeStore,
    }),
  },
};
</script>

<style lang="scss" scoped>
.trading_terminal {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .stash-slide-enter-active, .stash-slide-leave-active {
    transition: transform .2s ease;
  }

  .stash-slide-enter, .stash-slide-leave-to {
    transform: translateX(300px);
  }

}
</style>
