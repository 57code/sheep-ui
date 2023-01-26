import { defineComponent } from 'vue'
import { BaseSelectAllProps, baseSelectAllProps } from './base-select-all-type'
import '../../styles/index.scss'
import '../style/base-select-all.scss' // 全选

export default defineComponent({
  name: 'SBaseSelectAll',
  props: baseSelectAllProps,
  setup(props: BaseSelectAllProps) {
    return () => (
      <label class="s-base-select-all is-checked">
        <span class="s-base-select-all__input is-checked">
          <span class="s-base-select-all__inner" />
          <input
            type="checkbox"
            aria-hidden="false"
            class="s-base-select-all__original"
            value=""
            tabindex="-1"
            onClick={() => {
              props.onClick()
            }}
          />
        </span>
      </label>
    )
  }
})
