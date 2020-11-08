import { expect } from 'chai';
import { mount, RouterLinkStub } from '@vue/test-utils';

import TheLayout from '@/components/TheLayout.vue';
import TheNavbar from '@/components/TheNavbar.vue';

describe('TheLayout.vue', () => {
  const build = (slots) => {
    const wrapper = mount(TheLayout, {
      slots,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    return {
      wrapper,
      theNavbar: () => wrapper.findComponent(TheNavbar),
      defaultSlotWrapper: () => wrapper.find('div.content'),
    };
  };

  it('should render', () => {
    const { wrapper } = build();
    expect(wrapper.find('div.layout').exists()).to.be.true;
  });

  it('should render TheNavbar component', () => {
    const { theNavbar } = build();
    expect(theNavbar().exists()).to.be.true;
  });

  it('should render slot content', () => {
    const slots = {
      default: 'slot-test',
    };

    const { defaultSlotWrapper } = build(slots);
    expect(defaultSlotWrapper().element.innerHTML).to.equal(slots.default);
  });
});
