<template lang="pug">
  div.tile(:style="tileStyles")
    div.tile-header
    div.tile-body
      slot
</template>

<script>
export default {
  name: 'TradingTerminalTile',
  props: {
    zIndex: {
      type: Number,
      required: true,
    },
    top: {
      type: Number,
      required: true,
      validator: (val) => val >= 0,
    },
    left: {
      type: Number,
      required: true,
      validator: (val) => val >= 0,
    },
    width: {
      type: Number,
      required: true,
      validator: (val) => val > 0,
    },
    height: {
      type: Number,
      required: true,
      validator: (val) => val > 0,
    },
  },
  computed: {
    tileStyles() {
      return {
        'z-index': this.$props.zIndex,
        top: `${this.$props.top}px`,
        left: `${this.$props.left}px`,
        width: `${this.$props.width}px`,
        height: `${this.$props.height}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
