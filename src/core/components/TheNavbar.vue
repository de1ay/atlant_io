<template lang="pug">
  nav.navbar
    div.navbar-brand
      span.brand-text Atlant.io
    div.navbar-menu
      router-link.menu-item(
        :to="{ name: 'TradingTerminal' }"
        active-class="menu-item--active"
      )  Terminal
      router-link.menu-item(
        :to="{ name: 'BlockchainWatcher' }"
        active-class="menu-item--active"
      ) Bitcoin Transactions
    div.navbar-actions
      slot
</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>

<style lang="scss" scoped>
$brandText-fontSize: 24px;
$menuItem-fontSize: 16px;

.navbar {
  display: grid;
  grid-template-columns: 200px auto 200px;
  grid-template-rows: $ui-navbarHeight;
  grid-column-gap: 50px;

  &-brand {
    margin-left: 25px;

    .brand-text {
      color: $color-text;
      font-family: $font-firaSansCondensed;
      font-size: $brandText-fontSize;
      line-height: $ui-navbarHeight;
    }

  }

  &-menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;

    .menu-item {
      position: relative;
      padding: 0 2px;
      color: $color-text;
      font-family: $font-montserratAlternates;
      font-size: $menuItem-fontSize;
      line-height: $ui-navbarHeight;
      text-decoration: none;

      &:not(:last-child) {
        margin-right: 20px;
      }

      &:before {
        content: '';
        position: absolute;
        // Underline position - 2px under the text
        bottom: ($ui-navbarHeight - $menuItem-fontSize) / 2 - 2px;
        left: 0;
        width: 0;
        height: 1px;
        background-color: $color-text;
        transition: width .3s ease-in-out;
      }

      &:hover {

        &:before {
          width: 100%;
        }

      }

      &--active {
        color: $color-primary;

        &:before {
          width: 100%;
          background-color: $color-primary;
        }

      }

    }

  }

}
</style>
