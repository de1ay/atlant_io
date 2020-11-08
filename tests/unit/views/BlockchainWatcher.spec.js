import { expect } from 'chai';
import { mount } from '@vue/test-utils';

import BlockchainWatcher from '@/views/BlockchainWatcher.vue';

describe('BlockchainWatcher.vue', () => {
  const build = () => {
    const wrapper = mount(BlockchainWatcher);
    return {
      wrapper,
    };
  };

  it('should render', () => {
    const { wrapper } = build();
    expect(wrapper.find('div.blockchain_watcher').exists()).to.be.true;
  });
});
