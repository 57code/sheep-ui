import { ExtractPropTypes } from 'vue'

export const baseSelectionBoxProps = {
  onClick: {
    type: Function,
    required: true
  }
} as const
export type BaseSelectionBoxProps = ExtractPropTypes<
  typeof baseSelectionBoxProps
>
