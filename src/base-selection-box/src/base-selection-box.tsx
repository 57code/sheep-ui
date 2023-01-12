import { defineComponent } from 'vue'
import {
  BaseSelectionBoxProps,
  baseSelectionBoxProps
} from './base-selection-box-type'
import '../../styles/index.scss'
import '../style/base-selection-box.scss' // 选择框

export default defineComponent({
  name: 'SBaseSelectionBox',
  props: baseSelectionBoxProps,
  setup(props: BaseSelectionBoxProps) {
    return () => (
      <label class="s-base-selection-box">
        <span class="s-base-selection-box__input">
          <span class="s-base-selection-box__inner" />
          <input
            type="checkbox"
            aria-hidden="false"
            class="s-base-selection-box__original"
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
