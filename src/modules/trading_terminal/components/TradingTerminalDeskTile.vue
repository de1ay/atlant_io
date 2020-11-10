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
    div.tile-resizer(ref="tileResizerElement")
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import { Draggable } from 'gsap/Draggable';

import scssVariables from '@/assets/scss/_variables.scss';

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
      tileDraggableInstance: null,
      tileResizerDraggableInstance: null,
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
    [this.tileDraggableInstance] = Draggable.create(this.$refs.tileElement, {
      zIndexBoost: false,
      inertia: false,
      dragResistance: 0,
      bounds: `#${this.boundsObjectID}`,
      trigger: this.$refs.tileHeaderElement,
      liveSnap: this.gridLiveSnap,
      onPress: () => this.moveTileToTop(this.index),
      onDragEnd: () => this.onTileDragEnd(),
      cursor: 'move',
    });
    [this.tileResizerDraggableInstance] = Draggable.create(this.$refs.tileResizerElement, {
      type: 'top, left',
      zIndexBoost: false,
      inertia: false,
      dragResistance: 0,
      bounds: this.computeTileResizerBounds(),
      liveSnap: this.gridLiveSnap,
      onPress: () => this.moveTileToTop(this.index),
      onDrag: () => this.onTileResizerDrag(),
      cursor: 'nw-resize',
    });
  },
  beforeDestroy() {
    this.tileDraggableInstance.kill();
    this.tileResizerDraggableInstance.kill();
  },
  methods: {
    ...mapMutations('tradingTerminal', {
      moveTileToTop: mutationNames.moveTileToTop,
      updateTileSize: mutationNames.updateDeskTileSize,
      updateTileTranslate: mutationNames.updateDeskTileTranslate,
      stashTile: mutationNames.stashTile,
    }),
    gridLiveSnap(value) {
      return Math.round(value / this.gridResolution) * this.gridResolution;
    },
    onTileDragEnd() {
      if (this.tileDraggableInstance.endX !== this.tileData.translateX
        || this.tileDraggableInstance.endY !== this.tileData.translateY
      ) {
        this.updateTileTranslate({
          deskTileIndex: this.index,
          translate: {
            x: this.tileDraggableInstance.endX,
            y: this.tileDraggableInstance.endY,
          },
        });
        this.$nextTick(this.updateTileResizerBounds());
      }
    },
    onTileResizerDrag() {
      this.updateTileSize({
        deskTileIndex: this.index,
        size: {
          width: this.tileResizerDraggableInstance.x,
          height: this.tileResizerDraggableInstance.y,
        },
      });
    },
    computeTileResizerBounds() {
      const navbarHeight = Number(scssVariables.navbarHeight);
      const minWidth = 150;
      const minHeight = 100;
      const tileResizerTranslate = 15; // translate(-15px, -15px)
      return {
        top: minHeight - tileResizerTranslate,
        left: minWidth - tileResizerTranslate,
        width: window.outerWidth - this.tileData.translateX - minWidth + tileResizerTranslate,
        height: window.outerHeight - navbarHeight
          - this.tileData.translateY - minHeight + tileResizerTranslate,
      };
    },
    updateTileResizerBounds() {
      this.tileResizerDraggableInstance.applyBounds(this.computeTileResizerBounds());
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
        overflow: hidden;
      }

      &-action {
        @include hoverableIcon($color-surface, $color-secondary);
      }

    }

  }

  &-resizer {
    position: absolute;
    width: 10px;
    height: 10px;
    right: -10px;
    bottom: -10px;
    overflow: hidden;
    transform: translate(-15px, -15px); // for easy tile size update

    &:after {
      content: '';
      position: absolute;
      width: 150%;
      height: 150%;
      background-color: $color-primary;
      transition: background-color .2 ease-in-out;
      transform: rotate(45deg) translate(30%, 0);
    }

    &:hover {

      &:after {
        background-color: $color-primaryDark;
      }

    }

  }

}
</style>
