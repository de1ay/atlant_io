const routes = [
  {
    path: '/',
    redirect: { name: 'TradingTerminal' },
  }, {
    path: '/trading_terminal',
    name: 'TradingTerminal',
    component: () => import('@/views/TradingTerminal.vue'),
  }, {
    path: '/blockchain_watcher',
    name: 'BlockchainWatcher',
    component: () => import('@/views/BlockchainWatcher.vue'),
  },
];

export default routes;