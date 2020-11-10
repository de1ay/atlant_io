<template lang="pug">
  table.tansactions-table
    thead
      tr
        th from
        th to
        th sum
    tbody
      tr(v-for="(transaction, index) in transactions" :key="index")
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BlockchainWatcherTransactionsTable',
  computed: {
    ...mapState('blockchainWatcher', ['transactions']),
  },
};
</script>

<style lang="scss" scoped>

</style>
