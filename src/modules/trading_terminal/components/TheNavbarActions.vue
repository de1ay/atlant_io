<template lang="pug">
  div.navbar-actions
    unicon.actions-icon(name="box")
    unicon.actions-icon(name="setting")
</template>

<script>
export default {
  name: 'TheNavbarActions',
};
</script>

<style lang="scss" scoped>
.navbar-actions {
  margin-right: 10px;
  height: $ui-navbarHeight;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: stretch;

  .actions-icon {
    width: $ui-navbarHeight;
    height: $ui-navbarHeight;
    display: flex;
    justify-content: center;
    align-items: center;
    fill: $color-text;
    transition: fill .2s ease-in-out;

    &:hover {
      fill: $color-primary;
      cursor: pointer;
    }

  }

}
</style>
