import { CSSProperties, PropType } from 'vue'

const TRIGGER_EVENT = ['hover', 'click', 'focus']
type TriggerEvent = typeof TRIGGER_EVENT[number]

export const basicProps = {
  popupVisible: {
    type: Boolean as PropType<boolean>,
    default: undefined
  },
  defaultPopupVisible: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  trigger: {
    type: String as PropType<TriggerEvent>,
    default: 'hover'
  },
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>
  },
  renderToBody: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  popupStyle: {
    type: Object as PropType<CSSProperties>
  },
  contentStyle: {
    type: Object as PropType<CSSProperties>
  },
  unmountOnClose: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  animationName: {
    type: String as PropType<string>,
    default: 'fade-in'
  },
  clickOutsideToClose: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  duration: {
    type: [Number, Object] as PropType<
      | number
      | {
          enter: number
          leave: number
        }
    >
  }
}

export default basicProps
