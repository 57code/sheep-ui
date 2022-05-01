import { PropType } from 'vue'
export type SpaceSize = 'mini' | 'small' | 'medium' | 'large'
export const spaceProps = {
  align: {
    type: String as PropType<'start' | 'end' | 'center' | 'baseline'>
  },
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal'
  },
  size: {
    type: [Number, String] as PropType<number | SpaceSize | string>,
    default: 'small'
  },
  wrap: {
    type: Boolean
  },
  fill: {
    type: Boolean
  }
}
