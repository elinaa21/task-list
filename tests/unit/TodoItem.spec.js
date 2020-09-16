import { mount } from '@vue/test-utils';
import AddItem from '@/components/AddItem/AddItem';

describe('Task component unit tests', () => {
  it('is a Vue instance', () => {
    const task = {
      id: 99988894,
      title: 'meeting',
      completed: false
    };
    const wrapper = mount(AddItem, {
      propsData: { task }
    });
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
