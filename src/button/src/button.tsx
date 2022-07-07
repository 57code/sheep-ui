import { computed, defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'
import { getComponentCls } from '../../_utils/global-config'
import { call } from '../../_utils/call'
export default defineComponent({
  name: 'SButton',
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

    const handleClick = (e: MouseEvent) => {
      if (props.loading || props.disabled) return
      if (props.onClick) call(props.onClick, e)
    }
    return () => {
      const { tag: Component, loading } = props
      const defaultSlot = slots.default ? slots.default() : '按钮'
      // block
      //   const blockCls = block.value ? 's-btn--block' : ''
      return (
        <Component
          disabled={disabled.value}
          class={classes.value}
          onClick={handleClick}
        >
          {loading && <svg class="animate-spin" viewBox="0 0 24 24"></svg>}
          {slots.icon && slots.icon()}
          {defaultSlot}
        </Component>
      )
    }
  }
})
