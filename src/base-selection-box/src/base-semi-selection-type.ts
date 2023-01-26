import { ExtractPropTypes } from 'vue'

export const baseSemiSelectionProps = {
  onClick: {
    type: Function,
    required: true
  }
} as const
export type BaseSemiSelectionProps = ExtractPropTypes<
  typeof baseSemiSelectionProps
>
