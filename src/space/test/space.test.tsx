import { mount } from '@vue/test-utils'
import { createCommentVNode } from 'vue'
import SSpace from '../src/space'

describe('s-space', async () => {
  it('should work with on demand', () => {
    const wrapper = mount(SSpace)
    wrapper.exists()
  })

  it('render empty children', () => {
    const wrapper = mount({
      render() {
        return <SSpace />
      }
    })

    expect(wrapper.find('.s-space')).not.toBe(null)
  })

  it('render space string size', () => {
    const wrapper = mount({
      render() {
        return (
          <SSpace size="large">
            {{
              default: () => (
                <>
                  <div class="haha">111</div>
                  <div class="haha">222</div>
                </>
              )
            }}
          </SSpace>
        )
      }
    })
    expect(wrapper.find('.s-space-item').attributes('style')).equal(
      'margin-right: 28px;'
    )
  })

  it('render space number size', () => {
    const wrapper = mount({
      render() {
        return (
          <SSpace size={45}>
            {{
              default: () => (
                <>
                  <div class="haha">111</div>
                  <div class="haha">222</div>
                </>
              )
            }}
          </SSpace>
        )
      }
    })
    expect(wrapper.find('.s-space-item').attributes('style')).equal(
      'margin-right: 45px;'
    )
  })

  it('render vertical space', () => {
    const wrapper = mount({
      render() {
        return (
          <SSpace size={45} direction="vertical">
            {{
              default: () => (
                <>
                  <div class="haha">111</div>
                  <div class="haha">222</div>
                </>
              )
            }}
          </SSpace>
        )
      }
    })
    expect(wrapper.find('.s-space').classes()).toContain('s-space-vertical')
  })

  it('render text space', () => {
    const wrapper = mount({
      render() {
        return (
          <SSpace size={45} direction="vertical">
            {{
              default: () => (
                <>
                  <div class="haha">111</div>
                  xxx
                  <div class="haha">222</div>
                </>
              )
            }}
          </SSpace>
        )
      }
    })
    expect(wrapper.findAll('.s-space-item').length).toBe(3)
  })

  it('not render comment', () => {
    const wrapper = mount({
      render() {
        return (
          <SSpace size={45} direction="vertical">
            {{
              default: () => createCommentVNode('栾晗霄大好人')
            }}
          </SSpace>
        )
      }
    })
    expect(wrapper.findAll('.s-space-item').length).toBe(0)
  })
})
