<template lang="pug">
  div.blockchain-transactions
    div.transactions-summary
      span.summary-text
    BlockchainWatcherTransactionsTable
</template>

<script>
import BlockchainWatcherTransactionsTable from './BlockchainWatcherTransactionsTable.vue';

export default {
  name: 'BlockchainWatcherTransactions',
  components: {
    BlockchainWatcherTransactionsTable,
  },
};
</script>

<style lang="scss" scoped>

</style>
