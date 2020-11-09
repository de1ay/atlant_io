<template lang="pug">
  div.stash
    div.stash-tiles
      TradingTerminalStashTile.stash-tile(
        v-for="(stashTile, index) in stashTiles" :key="`stashTile-${stashTile.uuid}`"
        :index="index"
        :tileData="stashTile"
      )
</template>

<script>
import { mapGetters } from 'vuex';

import TradingTerminalStashTile from './TradingTerminalStashTile.vue';

export default {
  name: 'TradingTerminalStash',
  components: {
    TradingTerminalStashTile,
  },
  computed: {
    ...mapGetters('tradingTerminal', ['stashTiles']),
  },
};
</script>

<style lang="scss" scoped>
.stash {
  z-index: 1000;
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: $color-surface;

  &-tiles {
    box-sizing: content-box;
    padding: 10px;
    min-width: calc(100% - 20px);
    min-height: calc(100% - 20px);
    max-width: calc(100% - 20px);
    max-height: calc(100% - 20px);
    overflow-x: hidden;
    overflow-y: scroll;

    .stash-tile:not(:first-child) {
      margin-top: 10px;
    }

  }

}
</style>
