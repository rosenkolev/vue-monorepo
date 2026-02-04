// @vitest-environment jsdom
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from './App.vue';
import PrimeVue from 'primevue/config';

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [PrimeVue],
        stubs: {
          // By default usage of components from @repo/ui should work if resolved
        },
      },
    });
    expect(wrapper.text()).toContain('Portal');
    expect(wrapper.text()).toContain('Input');
    expect(wrapper.text()).toContain('Checkbox List');
  });
});
