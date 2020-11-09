<template lang="pug">
  div.navbar-actions
    unicon.actions-icon(
      name="box"
      :class="stashIconClasses"
      @click="switchStashSidebarState"
    )
    unicon.actions-icon(name="setting")
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import mutationNames from '../store/constants/mutationNames';

export default {
  name: 'TheNavbarActions',
  computed: {
    ...mapState('tradingTerminal', ['isStashSidebarOpen']),
    stashIconClasses() {
      return {
        'actions-icon--active': this.isStashSidebarOpen,
      };
    },
  },
  methods: {
    ...mapMutations('tradingTerminal', {
      switchStashSidebarState: mutationNames.uiSwitchStashSdiebarState,
    }),
  },
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
    @include hoverableIcon($color-text, $color-primary);
    width: $ui-navbarHeight;
    height: $ui-navbarHeight;

    &--active {
      fill: $color-primary;
    }

  }

}
</style>
