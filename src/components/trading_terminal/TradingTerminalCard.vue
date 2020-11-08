<template lang="pug">
  div.card(:style="cardStyles")
    div.card-header
    div.card-body
      slot
</template>

<script>
export default {
  name: 'TradingTerminalCard',
  props: {
    zIndex: {
      type: Number,
      required: true,
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
    cardStyles() {
      return {
        'z-index': this.$props.zIndex,
        width: `${this.$props.width}px`,
        height: `${this.$props.height}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
