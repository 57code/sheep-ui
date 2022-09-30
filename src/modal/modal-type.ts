import type { PropType, ExtractPropTypes } from 'vue'

export const modalProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
} as const
export type ModalProps = ExtractPropTypes<typeof modalProps>
