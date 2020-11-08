import { expect } from 'chai';
import { mount, RouterLinkStub } from '@vue/test-utils';

import TheNavbar from '@/components/TheNavbar.vue';

describe('TheNavbar.vue', () => {
  const build = () => {
    const wrapper = mount(TheNavbar, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    return {
      wrapper,
      routerLink: () => wrapper.findComponent(RouterLinkStub),
    };
  };

  it('should render', () => {
    const { wrapper } = build();
    expect(wrapper.find('nav.navbar').exists()).to.be.true;
  });

  it('should render router-link component', () => {
    const { routerLink } = build();
    expect(routerLink().exists()).to.be.true;
  });
});
