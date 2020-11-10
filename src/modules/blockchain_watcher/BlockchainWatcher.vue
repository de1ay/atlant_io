<template lang="pug">
  div.blockchain_watcher
    div.blockchain_watcher-content
      BlockchainWatcherControl
      BlockchainWatcherTransactions
</template>

<script>
import { mapMutations } from 'vuex';

import store from './store';
import mutationNames from './store/constants/mutationNames';
import webSocketConnection from './services/webSocket';

import BlockchainWatcherControl from './components/BlockchainWatcherControl.vue';
import BlockchainWatcherTransactions from './components/BlockchainWatcherTransactions.vue';

export default {
  name: 'BlockchainWatcher',
  components: {
    BlockchainWatcherControl,
    BlockchainWatcherTransactions,
  },
  beforeCreate() {
    if (!this.$store.state.blockchainWatcher) {
      this.$store.registerModule('blockchainWatcher', store);
    }
    webSocketConnection.connect();
  },
  created() {
    this.initializeStore();
  },
  destroyed() {
    if (this.$store.state.blockchainWatcher) {
      this.$store.unregisterModule('blockchainWatcher');
    }
    webSocketConnection.close();
  },
  methods: {
    ...mapMutations('blockchainWatcher', {
      initializeStore: mutationNames.initializeStore,
    }),
  },
};
</script>

<style lang="scss" scoped>
.blockchain_watcher {
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;

  &-content {
    width: 1200px;
  }

}
</style>
