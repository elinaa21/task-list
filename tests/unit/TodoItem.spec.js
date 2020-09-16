import { mount } from '@vue/test-utils';
import TodoItem from '@/components/TodoItem/TodoItem';

describe('Task component unit tests', () => {
  it('is a Vue instance', () => {
    const todo = {
      id: 99988894,
      title: 'meeting',
      completed: false
    };
    const wrapper = mount(TodoItem, {
      propsData: { todo }
    });
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('renders the title of task', () => {
    const title = 'meeting';
    const todo = {
      id: 99988894,
      title,
      completed: false
    };
    const wrapper = mount(TodoItem, {
      propsData: { todo }
    });
    expect(wrapper.html()).toContain(title);
  });
});
