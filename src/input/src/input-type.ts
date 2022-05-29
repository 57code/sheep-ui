import { PropType } from 'vue'
import { EmitType } from '../../types'
export const SIZES = ['mini', 'small', 'medium', 'large'] as const
export type Size = typeof SIZES[number]

const basicProps = {
  modelValue: {
    type: String as PropType<string>
  },
  defaultValue: {
    type: String as PropType<string>,
    default: ''
  },
  size: {
    type: String as PropType<Size>,
    default: 'medium'
  },
  allowClear: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  placeholder: {
    type: String as PropType<string>
  },
  // for JSX
  onInput: {
    type: [Function, Array] as PropType<
      EmitType<(value: string, e: Event) => void>
    >
  },
  onChange: {
    type: [Function, Array] as PropType<
      EmitType<(value: string, e: Event) => void>
    >
  },
  onClear: {
    type: [Function, Array] as PropType<EmitType<(e: Event) => void>>
  }
} as const

export const emits = ['update:modelValue', 'input', 'change', 'clear', 'focus']
export default basicProps
