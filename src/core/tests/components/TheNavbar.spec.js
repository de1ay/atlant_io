import { expect } from 'chai';
import { mount, RouterLinkStub } from '@vue/test-utils';

import TheNavbar from '../../components/TheNavbar.vue';

describe('TheNavbar.vue', () => {
  const build = (slots) => {
    const wrapper = mount(TheNavbar, {
      slots,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    return {
      wrapper,
      routerLinks: () => wrapper.findAllComponents(RouterLinkStub),
    };
  };

  it('should render', () => {
    const { wrapper } = build();
    expect(wrapper.find('nav.navbar').exists()).to.be.true;
  });

  it('should render 2 router-link components', () => {
    const { routerLinks } = build();
    expect(routerLinks().length).to.equal(2);
  });
});
