import { mount } from '@vue/test-utils';
import AddItem from '@/components/AddItem/AddItem';

describe('AddItem component unit tests', () => {
  it('calls addItem when the button is clicked', () => {
    const wrapper = mount(AddItem);
    const addItem = jest.fn();

    wrapper.setMethods({ addItem });

    wrapper.find('button').trigger('click');
    expect(addItem).toHaveBeenCalled();
  });
});
