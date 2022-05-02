import { defineComponent } from 'vue'
import { getComponentCls } from '../../_utils/global-config'

export default defineComponent({
  name: 'ButtonGroup',
  setup(props, { slots }) {
    const prefixCls = getComponentCls('btn-group')

    return () => {
      return <div class={prefixCls}>{slots.default?.()}</div>
    }
  }
})
