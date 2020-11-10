<template lang="pug">
  table.tansactions-table
    thead
      tr
        th.cell--text from
        th.cell--text to
        th.cell--number amount
    tbody
      tr(v-for="(transaction, index) in transactions" :key="index")
        td.cell--text
          div
            span(
              v-for="(from, index) in transaction.from"
              :key="`${index}-from-${from}`"
            ) - {{ from }}
        td.cell--text
          div
            span(
              v-for="(to, index) in transaction.to"
              :key="`${index}-to-${to}`"
            ) - {{ to }}
        td.cell--number
          span {{ getAmountDisplay(transaction.amount) }}

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BlockchainWatcherTransactionsTable',
  computed: {
    ...mapState('blockchainWatcher', ['transactions']),
  },
  methods: {
    getAmountDisplay(amount) {
      return `${amount.toFixed(5)} BTC`;
    },
  },
};
</script>

<style lang="scss" scoped>
.tansactions-table {
  box-sizing: content-box;
  margin-top: 20px;
  max-width: 100%;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  overflow: hidden;

  th, td {
    padding: 10px 20px;

    &.cell--text {
      text-align: left;
    }

    &.cell--number {
      text-align: right;
    }

  }

  thead {

    tr {

      th {
        color: $color-surface;
        background-color: $color-primary;
        font-family: $font-montserratAlternates;
        text-transform: capitalize;
      }

      th:first-child {
        border-radius: 5px 0 0 5px;
      }

      th:last-child {
        border-radius: 0 5px 5px 0;
      }

    }

  }

  tbody {

    tr {

      td {
        font-family: $font-firaSansCondensed;
        font-size: 14px;
        vertical-align: top;

        > div {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;

          > span {
            overflow: hidden;
            white-space: pre-wrap;
            word-wrap: break-word;
            text-overflow: ellipsis;

            &:not(:last-child) {
              margin-bottom: 10px;
            }

          }

        }

      }

      &:not(:last-child) {

        td {
          border-bottom: 1px solid $color-primary;
        }

      }

    }

  }

}
</style>
