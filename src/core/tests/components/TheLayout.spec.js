import { expect } from 'chai';
import { mount } from '@vue/test-utils';

import TheLayout from '../../components/TheLayout.vue';
import TheNavbar from '../../components/TheNavbar.vue';

describe('TheLayout.vue', () => {
  const build = () => {
    const wrapper = mount(TheLayout, {
      stubs: ['router-link', 'router-view'],
    });

    return {
      wrapper,
      theNavbar: () => wrapper.findComponent(TheNavbar),
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
});
