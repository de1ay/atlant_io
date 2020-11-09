<template lang="pug">
  div.tile(
      :style="tileStyles"
      ref="tileElement"
    )
    div.tile-header(ref="tileHeaderElement")
      div.header-title {{ tileData.uuid }}
      unicon.header-action(
        name="times-circle"
        width="16px"
        height="16px"
        @click="stashTile(index)"
      )
    div.tile-body
      slot
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import { Draggable } from 'gsap/Draggable';

import mutationNames from '../store/constants/mutationNames';

export default {
  name: 'TradingTerminalDeskTile',
  props: {
    boundsObjectID: {
      type: String,
      required: true,
    },
    index: {
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
  data() {
    return {
      draggableInstance: null,
    };
  },
  computed: {
    ...mapGetters('tradingTerminal', [
      'gridResolution',
    ]),
    tileStyles() {
      return {
        'z-index': this.index,
        width: `${this.tileData.width}px`,
        height: `${this.tileData.height}px`,
        transform: `translate(${this.tileData.translateX}px, ${this.tileData.translateY}px)`,
      };
    },
  },
  mounted() {
    [this.draggableInstance] = Draggable.create(this.$refs.tileElement, {
      zIndexBoost: false,
      inertia: false,
      dragResistance: 0,
      bounds: `#${this.boundsObjectID}`,
      trigger: this.$refs.tileHeaderElement,
      force3D: false,
      liveSnap: this.liveSnap,
      onPress: () => this.moveTileToTop(this.index),
      onDragEnd: () => this.onDragEnd(),
      cursor: 'move',
    });
  },
  beforeDestroy() {
    this.draggableInstance.kill();
  },
  methods: {
    ...mapMutations('tradingTerminal', {
      moveTileToTop: mutationNames.moveTileToTop,
      updateTileTranslate: mutationNames.updateDeskTileTranslate,
      stashTile: mutationNames.stashTile,
    }),
    liveSnap(value) {
      return Math.round(value / this.gridResolution) * this.gridResolution;
    },
    onDragEnd() {
      if (this.draggableInstance.endX !== this.tileData.translateX
        || this.draggableInstance.endY !== this.tileData.translateY
      ) {
        this.updateTileTranslate({
          deskTileIndex: this.index,
          translate: {
            x: this.draggableInstance.endX,
            y: this.draggableInstance.endY,
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$tile-headerHeight: 25px;

.tile {
  position: absolute;
  background-color: $color-surface;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);

  &-header {
    padding: 0 5px;
    height: $tile-headerHeight;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    background-color: $color-primary;
    border-radius: 5px 5px 0 0;
    user-select: none;

    .header {

      &-title {
        color: $color-surface;
        font-family: $font-firaSansCondensed;
        font-size: 14px;
        line-height: $tile-headerHeight;
      }

      &-action {
        @include hoverableIcon($color-surface, $color-secondary);
      }

    }

  }

}
</style>
