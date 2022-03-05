import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    // size是新增的
    const { type } = toRefs(props)

    return () => {
      // s-btn--${size.value}是新增的
      return (
        <button class={`s-btn s-btn--${type.value}`}>
          {slots.default ? slots.default() : '按钮'}
        </button>
      )
    }
  }
})
