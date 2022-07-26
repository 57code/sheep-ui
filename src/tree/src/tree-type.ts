import { ExtractPropTypes, PropType } from 'vue'

export const buttonProps = {
  type: {
    type: String as PropType<unknown>,
    default: 'defaultvalue'
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

