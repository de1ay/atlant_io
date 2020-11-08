import TheLayout from '@/core/components/TheLayout.vue';

import TradingTerminalRoutes from '@/modules/trading_terminal/routes';
import BlockchainWatcherRoutes from '@/modules/blockchain_watcher/routes';

const routes = [
  {
    path: '/',
    component: TheLayout,
    redirect: { name: 'TradingTerminal' },
    children: [
      ...TradingTerminalRoutes,
      ...BlockchainWatcherRoutes,
    ],
  },
];

export default routes;
