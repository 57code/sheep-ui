import { computed, defineComponent, PropType } from 'vue'
import { EmitType } from '../types'
import { getComponentCls } from '../_utils/global-config'
import { call } from '../_utils/call'

export default defineComponent({
  name: 'HoverIcon',
  props: {
    prefix: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: [Function, Array] as PropType<EmitType<(e: MouseEvent) => void>>,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
    }
  },
  setup(props, { slots }) {
    const prefixCls = getComponentCls('hover-icon')
    const classes = computed(() => [
      prefixCls,
      `${props.prefix}-hover-icon`,
      props.disabled && `${prefixCls}-disabled`
    ])
    const handleClick = (e: MouseEvent) => {
      if (props.onClick) call(props.onClick, e)
    }
    return () => {
      return (
        <span class={classes.value} onClick={handleClick}>
          {slots.default?.()}
        </span>
      )
    }
  }
})
