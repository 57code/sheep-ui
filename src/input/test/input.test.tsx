import { mount } from '@vue/test-utils'
import { vi } from 'vitest'
import Input from '../src/input'

describe('input', () => {
  it('should work with import on demand', () => {
    mount(Input)
  })

  it('should call input callbacks', async () => {
    const wrapper = mount(Input)
    const input = wrapper.find('input')
    await input.setValue('just so so')
    expect(input.element.value).toBe('just so so')
  })

  it('should work with `clearable` prop', () => {
    const wrapper = mount(Input, {
      props: { allowClear: true, defaultValue: 'haha' }
    })
    expect(wrapper.findComponent({ name: 'HoverIcon' }).exists()).toBe(true)
  })

  it('should work with `placeholder` prop', async () => {
    const wrapper = mount(Input, {
      props: {
        placeholder: 'Please Input'
      }
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Please Input')
    await wrapper.setProps({
      placeholder: 'test-placeholder'
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe(
      'test-placeholder'
    )
    wrapper.unmount()
  })

  it('should work with `on-focus` prop', async () => {
    const onFocus = vi.fn()

    const wrapper = mount(Input, {
      props: { onFocus: onFocus }
    })
    await wrapper.find('input').trigger('focus')
    expect(onFocus).toHaveBeenCalled()
    wrapper.unmount()
  })
})
