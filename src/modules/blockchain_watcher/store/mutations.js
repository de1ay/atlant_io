import mutationNames from './constants/mutationNames';

const mutations = {
  [mutationNames.initializeStore](state) {
    state.transactions = [];
    state.totalAmount = 0;
    state.isSubscribed = false;
  },
  [mutationNames.setIsSubscribed](state, isSubscribed) {
    state.isSubscribed = isSubscribed;
  },
  [mutationNames.addTransaction](state, transaction) {
    state.transactions.push(transaction);
    state.totalAmount += transaction.amount;
  },
  [mutationNames.clearTransactions](state) {
    state.transactions = [];
    state.totalAmount = 0;
  },
};

export default mutations;
