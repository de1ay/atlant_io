<template lang="pug">
  nav.navbar
    router-link.navbar-link(:to="{ name: 'TradingTerminal' }")  Terminal
    router-link.navbar-link(:to="{ name: 'BlockchainWatcher' }") Bitcoin Transactions
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

  &-link {
    color: $color-text;
    font-family: $font-montserrat;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 10px;
    }

  }

}
</style>
