<template lang="pug">
  div(:id="tradingTerminalDeskID")
    TradingTerminalDeskTile.desk-tile(
      v-for="(deskTile, index) in deskTiles" :key="`deskTile-${deskTile.uuid}`"
      :boundsObjectID="tradingTerminalDeskID"
      :index="index"
      :tileData="deskTile"
    )
</template>

<script>
import { mapGetters } from 'vuex';

import TradingTerminalDeskTile from './TradingTerminalDeskTile.vue';

export default {
  name: 'TradingTerminalDesk',
  data() {
    return {
      tradingTerminalDeskID: 'trading_terminal-desk',
    };
  },
  components: {
    TradingTerminalDeskTile,
  },
  computed: {
    ...mapGetters('tradingTerminal', ['deskTiles']),
  },
};
</script>

<style lang="scss" scoped>
#trading_terminal-desk {
  width: 100%;
  height: 100%;
}
</style>
