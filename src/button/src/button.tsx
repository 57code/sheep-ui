import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size } = toRefs(props)
    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return (
        <button class={`s-btn s-btn--${type.value} s-btn--${size.value}`}>
          {defaultSlot}
        </button>
      )
    }
  }
})
