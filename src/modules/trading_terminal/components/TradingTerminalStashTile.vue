<template lang="pug">
  div.tile(@click="unstashTile(index)")
    span.tile-title {{ tileData.uuid }}
</template>

<script>
import { mapMutations } from 'vuex';

import mutationNames from '../store/constants/mutationNames';

export default {
  name: 'TradingTerminalStashTile',
  props: {
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
  methods: {
    ...mapMutations('tradingTerminal', {
      unstashTile: mutationNames.unstashTile,
    }),
  },
};
</script>

<style lang="scss" scoped>
.tile {
  position: relative;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-neutralLightest;
  border-radius: 5px;
  user-select: none;

  &-title {
    font-family: $font-firaSansCondensed;
    font-size: 14px;
  }

  &:before {
    content: 'click to restore';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-surface;
    background-color: $color-primary;
    font-family: $font-firaSansCondensed;
    font-size: 14px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
  }

  &:hover {
    cursor: pointer;

    &:before {
      opacity: 1;
    }

  }

}
</style>
