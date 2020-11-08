<template lang="pug">
  nav.navbar
    div.navbar-menu
      router-link.menu-item(:to="{ name: 'TradingTerminal' }")  Terminal
      router-link.menu-item(:to="{ name: 'BlockchainWatcher' }") Bitcoin Transactions
    div.navbar-actions
      slot
</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &-menu {

    .menu-item {
      color: $color-text;
      font-family: $font-montserratAlternates;
      text-decoration: none;

      &:not(:last-child) {
        margin-right: 10px;
      }

    }

  }

}
</style>
