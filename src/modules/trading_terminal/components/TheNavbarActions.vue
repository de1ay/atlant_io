<template lang="pug">
  div.navbar-actions
    transition(name="action-stash")
      unicon.actions-icon.action-stash(
        v-if="isAnyTileStashed"
        name="box"
        :class="stashIconClasses"
        @click="switchStashSidebarState"
      )
    unicon.actions-icon(name="setting")
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

import mutationNames from '../store/constants/mutationNames';

export default {
  name: 'TheNavbarActions',
  computed: {
    ...mapState('tradingTerminal', ['isStashSidebarOpen']),
    ...mapGetters('tradingTerminal', ['isAnyTileStashed']),
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

  .action-stash-enter, .action-stash-leave-to {
    transform: scale(0.1);
  }

  .actions-icon {
    @include hoverableIcon($color-text, $color-primary);
    width: $ui-navbarHeight;
    height: $ui-navbarHeight;
    transition: fill      .2s ease-in-out,
                transform .1s ease-in-out;

    &--active {
      fill: $color-primary;
    }

  }

}
</style>
