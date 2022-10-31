import { defineComponent, watch, PropType, ref, toRefs, nextTick } from 'vue'
import BasePopover from '../base-popover/base-popover'
import { Placement } from '@floating-ui/dom'

import './popover.scss'

export default defineComponent({
  name: 'SPopover',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    host: {
      type: Object as PropType<HTMLElement>,
      default: () => null
    },
    title: {
      type: String,
      default: ''
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom'
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots }) {
    // 获取属性中关键值
    const { modelValue, title } = toRefs(props)

    // 宿主元素
    // const hostRef = ref()

    // 浮动元素
    const overlayRef = ref()

    return () => (
      <>
        {modelValue.value && (
          <BasePopover class="s-popover" {...props}>
            <h4 class="s-popover__title">{title.value}</h4>
            {slots.default?.()}
          </BasePopover>
        )}
      </>
    )
  }
})
