<template lang="pug">
  div.layout
    TheNavbar.navbar
      router-view(name="navbar_actions")
    div.content
      router-view
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
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template: $ui-navbarHeight auto / 100%;

  .content {
    background-color: $color-neutralLightest;
  }

}
</style>
