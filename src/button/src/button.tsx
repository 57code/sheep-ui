import { computed, defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'
import { getComponentCls } from '../../_utils/global-config'

export default defineComponent({
  name: 'Button',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)

    const prefixCls = getComponentCls('btn')

    const classes = computed(() => [
      prefixCls,
      `${prefixCls}--${type.value}`,
      `${prefixCls}--${size.value}`,
      {
        [`${prefixCls}--block`]: block.value
      }
    ])

    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      // block
      //   const blockCls = block.value ? 's-btn--block' : ''
      return (
        <button disabled={disabled.value} class={classes.value}>
          {defaultSlot}
        </button>
      )
    }
  }
})
