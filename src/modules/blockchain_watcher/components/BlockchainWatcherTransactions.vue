<template lang="pug">
  div.blockchain-transactions
    div.transactions-total
      span.total-title total amount -
      span.total-value {{ totalAmountDisplay }}
    BlockchainWatcherTransactionsTable
</template>

<script>
import { mapState } from 'vuex';

import BlockchainWatcherTransactionsTable from './BlockchainWatcherTransactionsTable.vue';

export default {
  name: 'BlockchainWatcherTransactions',
  components: {
    BlockchainWatcherTransactionsTable,
  },
  computed: {
    ...mapState('blockchainWatcher', ['totalAmount']),
    totalAmountDisplay() {
      return `${this.totalAmount.toFixed(5)} BTC`;
    },
  },
};
</script>

<style lang="scss" scoped>
.blockchain-transactions {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  .transactions-total {
    height: 30px;
    align-self: flex-start;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;

    > span {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .total {

      &-title {
        font-family: $font-montserratAlternates;
        font-weight: bold;
        text-transform: capitalize;
      }

      &-value {
        margin-left: 5px;
        padding: 0 10px;
        background-color: $color-surface;
        font-family: $font-firaSansCondensed;
        border-radius: 5px;
      }

    }

  }

}
</style>
