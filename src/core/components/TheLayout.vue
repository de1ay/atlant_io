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
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}
</style>
