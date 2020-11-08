const routes = [
  {
    path: 'trading_terminal',
    name: 'TradingTerminal',
    components: {
      default: () => import('../TradingTerminal.vue'),
      navbar_actions: () => import('../components/TheNavbarActions.vue'),
    },
  },
];

export default routes;
