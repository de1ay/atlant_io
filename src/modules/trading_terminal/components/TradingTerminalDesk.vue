<template lang="pug">
  div#trading_terminal-desk
    TradingTerminalDeskTile.desk-tile(
      v-for="(deskTile, index) in deskTiles" :key="deskTile.uuid"
      :zIndex="index"
      :tileData="deskTile"
    )
</template>

<script>
import { mapGetters } from 'vuex';

import TradingTerminalDeskTile from './TradingTerminalDeskTile.vue';

export default {
  name: 'TradingTerminalDesk',
  components: {
    TradingTerminalDeskTile,
  },
  computed: {
    ...mapGetters('tradingTerminal', ['deskTiles']),
  },
};
</script>

<style lang="scss" scoped>

</style>
