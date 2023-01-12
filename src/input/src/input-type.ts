import type { PropType, ExtractPropTypes } from 'vue'

export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  }
} as const
export type InputProps = ExtractPropTypes<typeof inputProps>
