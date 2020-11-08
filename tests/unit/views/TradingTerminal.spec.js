import { expect } from 'chai';
import { mount } from '@vue/test-utils';

import TradingTerminal from '@/views/TradingTerminal.vue';

describe('TradingTerminal.vue', () => {
  const build = () => {
    const wrapper = mount(TradingTerminal);
    return {
      wrapper,
    };
  };

  it('should render', () => {
    const { wrapper } = build();
    expect(wrapper.find('div.trading_terminal').exists()).to.be.true;
  });
});
