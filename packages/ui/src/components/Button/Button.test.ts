// @vitest-environment jsdom
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Button from './Button.vue';

describe('Button', () => {
  it('renders label', () => {
    const wrapper = mount(Button, { props: { label: 'Test Label' } });
    expect(wrapper.text()).toContain('Test Label');
  });

  it('applies primary class', () => {
    const wrapper = mount(Button, { props: { primary: true } });
    expect(wrapper.find('button').classes()).toContain('primary');
  });
});
