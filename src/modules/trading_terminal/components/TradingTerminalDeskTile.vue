<template lang="pug">
  div.tile(:style="tileStyles")
    div.tile-header
      div.header-title {{ $props.tileData.uuid }}
      unicon.header-action(
        name="times-circle"
        width="15px"
        height="15px"
      )
    div.tile-body
      slot
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TradingTerminalDeskTile',
  props: {
    zIndex: {
      type: Number,
      required: true,
    },
    tileData: {
      type: Object,
      required: true,
      validator: (val) => (typeof val.uuid === 'string' && val.uuid.length === 36)
        && (typeof val.width === 'number' && val.width > 0)
        && (typeof val.height === 'number' && val.height > 0)
        && (typeof val.translateX === 'number')
        && (typeof val.translateY === 'number'),
    },
  },
  computed: {
    ...mapGetters('tradingTerminal', ['gridOrigin']),
    tileStyles() {
      return {
        'z-index': this.$props.zIndex,
        top: `${this.gridOrigin.y}px`,
        left: `${this.gridOrigin.x}px`,
        width: `${this.$props.tileData.width}px`,
        height: `${this.$props.tileData.height}px`,
        transform: `translate(${this.$props.tileData.translateX}px, ${this.$props.tileData.translateY}px)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.tile {
  position: absolute;

  &-header {

    .header {

      &-action {
        @include hoverableIcon($color-text, $color-primary);
      }

    }

  }

}
</style>
