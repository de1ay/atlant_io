<template lang="pug">
  div.layout
    TheNavbar.navbar
    div.content
      slot
</template>

<script>
import TheNavbar from './TheNavbar.vue';

export default {
  name: 'TheLayout',
  components: { TheNavbar },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}
</style>
