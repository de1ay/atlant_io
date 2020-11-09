const routes = [
  {
    path: 'trading_terminal',
    name: 'TradingTerminal',
    components: {
      default: () => import(
        /* webpackChunkName: "trading-terminal" */
        '../TradingTerminal.vue'
      ),
      navbar_actions: () => import(
        /* webpackChunkName: "trading-terminal" */
        '../components/TheNavbarActions.vue'
      ),
    },
  },
];

export default routes;
