import Switch from '../src/switch'
import { mount } from '@vue/test-utils'
describe('switch', () => {
  it('size', () => {
    const wrapper = mount(() => <Switch size="large" />)
    expect(wrapper.find('.s-switch--large').exists()).toBe(true)
  })
})
