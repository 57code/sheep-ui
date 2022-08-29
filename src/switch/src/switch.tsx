import { defineComponent, computed, ref, watch } from 'vue'
import { switchProps, SwitchProps, emits } from './switch-type'
import { addUnit } from '../../_utils/style'
import type { CSSProperties } from 'vue'
import { LoadingIcon } from '../../icon/loading/loading'
// !inline-prompt 后续修复一下active-text 和 inactive-text显示问题
export default defineComponent({
  name: 'Switch',
  props: switchProps,
  emits,
  setup(props: SwitchProps, { emit }) {
    const coreStyle = computed<CSSProperties>(() => ({
      width: addUnit(props.width)
    }))
    const isControlled = ref(props.modelValue !== false)
    watch(
      () => props.modelValue,
      () => (isControlled.value = true)
    )
    watch(
      () => props.value,
      () => (isControlled.value = false)
    )
    const actualValue = computed(() => {
      return isControlled.value ? props.modelValue : props.value
    })
    const checked = computed(() => actualValue.value === props.activeValue)
    return () => {
      const disabledClass = [props.disabled, props.loading].includes(true)
        ? 'is-disabled'
        : ''
      const val = checked.value ? props.inactiveValue : props.activeValue
      const checkedClass = val ? 'is-checked' : ''
      const toggleSwitch = () => {
        if ([props.disabled, props.loading].includes(true)) return
        emit('change', val)
        emit('update:modelValue', val)
      }
      const renderSvg = () => {
        return (
          <i class="s-icon is-loading">
            <LoadingIcon />
          </i>
        )
      }
      const renderPrompt = () => {
        return (
          <div class={`s-switch__inner`}>
            {props.activeIcon || props.inactiveIcon ? <s-icon></s-icon> : ''}
            <div
              class={`is-text ${
                val && props.inlinePrompt ? 'is-show' : 'is-hide'
              }`}
            >
              {props.activeText}
            </div>
            <div
              class={`is-text ${
                !val && props.inlinePrompt ? 'is-show' : 'is-hide'
              }`}
            >
              {props.inactiveText}
            </div>
          </div>
        )
      }
      return (
        <span
          class={`s-switch s-switch--${props.size} ${disabledClass} ${checkedClass}`}
          onClick={toggleSwitch}
        >
          <input
            type="checkbox"
            class="s-switch__input"
            checked={Boolean(val)}
            disabled={props.disabled || props.loading}
            onInput={toggleSwitch}
          />
          <span
            class={`s-switch__core`}
            style={{ width: `${coreStyle.value}` }}
          >
            <div class={`s-switch__action`}>
              {props.loading ? renderSvg() : null}
            </div>
            {props.inlinePrompt ? renderPrompt() : null}
          </span>
        </span>
      )
    }
  }
})
