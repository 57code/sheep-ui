import { PropType, ExtractPropTypes } from 'vue'
// import { iconPropType } from '../../utils/types'
export type ISwitchSize = 'small' | 'medium' | 'large'
export const switchProps = {
  size: {
    type: String as PropType<ISwitchSize>,
    default: 'medium'
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  modelValue: {
    type: [Boolean, String] as PropType<boolean | string>,
    default: false
  },
  activeValue: {
    type: [Boolean, String, Number] as PropType<boolean | string | number>,
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number] as PropType<boolean | string | number>,
    default: false
  },
  value: {
    type: [Boolean, String, Number] as PropType<boolean | string | number>,
    default: false
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  validateEvent: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  inlinePrompt: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  activeIcon: {
    type: String,
    default: ''
  },
  inactiveIcon: {
    type: String,
    default: ''
  },
  activeText: {
    type: String,
    default: ''
  },
  inactiveText: {
    type: String,
    default: ''
  }
} as const
export const emits = ['change', 'update:modelValue']
export type SwitchProps = ExtractPropTypes<typeof switchProps>
