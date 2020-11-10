import mutationNames from './constants/mutationNames';

const mutations = {
  [mutationNames.setIsSubscribed](state, isSubscribed) {
    state.isSubscribed = isSubscribed;
  },
  [mutationNames.addTransaction](state, transaction) {
    state.transactions.push(transaction);
  },
  [mutationNames.clearTransactions](state) {
    state.transactions = [];
  },
};

export default mutations;
