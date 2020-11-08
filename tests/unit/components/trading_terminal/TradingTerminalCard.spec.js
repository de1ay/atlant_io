import { expect } from 'chai';
import { mount } from '@vue/test-utils';

import TradingTerminalCard from '@/components/trading_terminal/TradingTerminalCard.vue';

describe('TradingTerminalCard.vue', () => {
  const defaultPropsData = {
    zIndex: 6,
    top: 10,
    left: 200,
    width: 100,
    height: 150,
  };

  const build = ({ propsData = defaultPropsData, slots = undefined } = {}) => {
    const wrapper = mount(TradingTerminalCard, {
      slots,
      propsData,
    });

    return {
      wrapper,
      defaultSlotWrapper: () => wrapper.find('div.card-body'),
    };
  };

  it('should render', () => {
    const { wrapper } = build();
    expect(wrapper.find('div.card').exists()).to.be.true;
  });

  it('should render slot content', () => {
    const slots = {
      default: 'slot-test',
    };

    const { defaultSlotWrapper } = build({ slots });
    expect(defaultSlotWrapper().element.innerHTML).to.equal(slots.default);
  });

  it('should apply z-index from props', () => {
    const { wrapper } = build();
    expect(wrapper.element.style.zIndex).to.equal(defaultPropsData.zIndex.toString());
  });

  it('should apply position from props', () => {
    const { wrapper } = build();
    expect(wrapper.element.style.top).to.equal(`${defaultPropsData.top}px`);
    expect(wrapper.element.style.left).to.equal(`${defaultPropsData.left}px`);
  });

  it('should apply size from props', () => {
    const { wrapper } = build();
    expect(wrapper.element.style.width).to.equal(`${defaultPropsData.width}px`);
    expect(wrapper.element.style.height).to.equal(`${defaultPropsData.height}px`);
  });
});
