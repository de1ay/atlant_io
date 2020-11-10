<template lang="pug">
  div.watcher-control
    button.control-button.control-button--subscribe(
      :disabled="isSubscribed"
      @click="subscribe"
    ) subscribe
    button.control-button.control-button--unsubscribe(
      :disabled="!isSubscribed"
      @click="unsubscribe"
    ) unsubscribe
    button.control-button.control-button--clear(
      :disabled="isTransactionsEmpty"
      @click="clearTransactions"
    ) clear
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

import mutationNames from '../store/constants/mutationNames';
import webSocketConnection from '../services/webSocket';

export default {
  name: 'BlockchainWatherControl',
  computed: {
    ...mapState('blockchainWatcher', ['isSubscribed']),
    ...mapGetters('blockchainWatcher', ['isTransactionsEmpty']),
  },
  mounted() {
    webSocketConnection.addEventListener(webSocketConnection.wsEvents.message,
      this.onMessage.bind(this));
  },
  methods: {
    ...mapMutations('blockchainWatcher', {
      setIsSubscribed: mutationNames.setIsSubscribed,
      addTransaction: mutationNames.addTransaction,
      clearTransactions: mutationNames.clearTransactions,
    }),
    onMessage(msg) {
      let { data } = msg;
      data = JSON.parse(data);
      if (data && data.op === 'utx' && data.x) {
        const transaction = this.parseTransaction(data.x);
        this.addTransaction(transaction);
      }
    },
    parseTransaction(rawTransaction) {
      const transaction = {
        from: [],
        to: [],
        amount: 0,
      };

      transaction.from = rawTransaction.inputs.map((from) => from.prev_out.addr);
      rawTransaction.out.forEach((out) => {
        if (!out.addr && out.value === 0) {
          return;
        }
        transaction.to.push(out.addr);
        transaction.amount += out.value / 100000000;
      });

      return transaction;
    },
    subscribe() {
      webSocketConnection.subscribe();
      this.setIsSubscribed(true);
    },
    unsubscribe() {
      webSocketConnection.unsubscribe();
      this.setIsSubscribed(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.watcher-control {
  padding: 20px;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  .control-button {
    height: 30px;
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: $font-firaSansCondensed;
    font-size: 16px;
    text-transform: capitalize;
    outline: none;

    &--subscribe {
      @include hoverableButton($color-success, $color-surface);
    }

    &--unsubscribe {
      @include hoverableButton($color-secondary, $color-surface);
    }

    &--clear {
      @include hoverableButton($color-primary, $color-surface);
    }

    &:disabled {
      color: $color-neutralDarker;
      background-color: $color-neutralDark;
      border-color: $color-neutralDark;

      &:hover {
        color: $color-neutralDarker;
        background-color: $color-neutralDark;
        border-color: $color-neutralDark;
        cursor: not-allowed;
      }

    }

  }

}
</style>
