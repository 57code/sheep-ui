// button/src/button-type.ts
import { PropType, ExtractPropTypes } from 'vue'

export type IButtonType = 'primary' | 'secondary'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'primary'
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
