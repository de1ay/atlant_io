import { expect } from 'chai';
import { mount } from '@vue/test-utils';

import TradingTerminalDeskTile from '../../components/TradingTerminalDeskTile.vue';

describe('TradingTerminalDeskTile.vue', () => {
  const defaultPropsData = {
    zIndex: 6,
    top: 10,
    left: 200,
    width: 100,
    height: 150,
  };

  const build = ({ propsData = defaultPropsData, slots = undefined } = {}) => {
    const wrapper = mount(TradingTerminalDeskTile, {
      slots,
      propsData,
    });

    return {
      wrapper,
      defaultSlotWrapper: () => wrapper.find('div.tile-body'),
    };
  };

  it('should render', () => {
    const { wrapper } = build();
    expect(wrapper.find('div.tile').exists()).to.be.true;
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