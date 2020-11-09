<template lang="pug">
  div.trading_terminal
    TradingTerminalStash.terminal-stash(v-if="isStashOpen")
    TradingTerminalDesk.terminal-desk
</template>

<script>
import { mapState, mapMutations } from 'vuex';

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
    ...mapState('tradingTerminal', ['isStashOpen']),
  },
  mounted() {
    this.initializeStore();
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
}
</style>
