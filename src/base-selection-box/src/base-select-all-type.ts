import { ExtractPropTypes } from 'vue'

export const baseSelectAllProps = {
  onClick: {
    type: Function,
    required: true
  }
} as const
export type BaseSelectAllProps = ExtractPropTypes<typeof baseSelectAllProps>
