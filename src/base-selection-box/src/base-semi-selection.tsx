import { defineComponent } from 'vue'
import {
  BaseSemiSelectionProps,
  baseSemiSelectionProps
} from './base-semi-selection-type'
import '../../styles/index.scss'
import '../style/base-semi-selection.scss' // 半选

export default defineComponent({
  name: 'SBaseSemiSelection',
  props: baseSemiSelectionProps,
  setup(props: BaseSemiSelectionProps) {
    return () => (
      <label class="s-base-semi-selection" aria-controls="undefined">
        <span
          class="s-base-semi-selection__input is-indeterminate"
          tabindex="0"
          role="checkbox"
          aria-checked="mixed"
        >
          <span class="s-base-semi-selection__inner" />
          <input
            type="checkbox"
            aria-hidden="true"
            class="s-base-semi-selection__original"
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
