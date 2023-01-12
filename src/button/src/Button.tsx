// button/src/button.tsx
import { defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import './button.scss'

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    const blockClass = block.value ? 's-btn--block' : '' // 新增
    return () => {
      return (
        <button
          class={`s-btn ${blockClass} s-btn--${type.value} s-btn--${size.value}`}
          disabled={disabled.value}
        >
          {slots.default ? slots.default() : '按钮'}
        </button>
      )
    }
  }
})
