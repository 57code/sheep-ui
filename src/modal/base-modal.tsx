import { defineComponent } from 'vue'
import './base-modal.scss'

export default defineComponent({
  name: 'SBaseModal',
  // props: props,
  setup(props, { slots }) {
    return () => (
      <div class="s-base-modal">
        {/* 透明遮罩 */}
        <div className="s-base-modal__mask"></div>
        {/* 具体内容 */}
        {slots.default?.()}
      </div>
    )
  }
})
