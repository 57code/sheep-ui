import { computed, defineComponent, toRefs, ref, toRef, nextTick } from 'vue'
import { CloseIcon } from '../../icon/close/close'
import HoverIcon from '../../_components/hover-icon'
import basicProps, { emits } from './input-type'
import { getComponentCls } from '../../_utils/global-config'

export default defineComponent({
  name: 'Input',
  props: basicProps,
  emits,
  setup(props, { emit, slots }) {
    const inputRef = ref<HTMLInputElement>()
    const { size } = toRefs(props)
    const prefixCls = getComponentCls('input')
    const uncontrolledValue = ref(props.defaultValue)
    // const controlledValue = toRef(props, 'modelValue')
    const getValue = computed(() => props.modelValue ?? uncontrolledValue.value)
    // console.log(controlledValue.value, controlledValue.value === undefined)
    // record initial Value to compare with current value
    let preValue = getValue.value

    const focused = ref(false)

    const getShowClear = computed(
      () => props.allowClear && !props.disabled && getValue.value
    )
    // input'class
    const classes = computed(() => [
      prefixCls,
      `${prefixCls}-size-${size.value}`
    ])
    const wrapperCls = computed(() => [
      `${prefixCls}-wrapper`,
      focused.value && `${prefixCls}-wrapper--focus`
    ])

    const updateValue = (value: string) => {
      // TODO word length limit need to be considered

      uncontrolledValue.value = value
      emit('update:modelValue', value)
    }

    const handleInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value
      updateValue(value)
      emit('input', value, e)

      nextTick(() => {
        if (inputRef.value && inputRef.value.value !== getValue.value) {
          inputRef.value.value = getValue.value
        }
      })
    }

    const handleClear = (e: Event) => {
      updateValue('')
      emit('clear', e)
    }

    const handleFocus = (e: FocusEvent) => {
      focused.value = true
      emit('focus', e)
    }

    //only emit when blur or  onPressEnter
    const handleChange = (currentValue: string, e: Event) => {
      if (currentValue !== preValue) {
        preValue = currentValue
        emit('change', currentValue, e)
      }
    }
    const handleBlur = (e: FocusEvent) => {
      focused.value = false
      handleChange(getValue.value, e)
      emit('blur', e)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const keyCode = e.key || e.code
      if (keyCode === 'Enter') {
        handleChange(getValue.value, e)
        emit('pressEnter', e)
      }
    }

    return () => {
      return (
        <span class={wrapperCls.value}>
          {slots.prefix && (
            <span class={`${prefixCls}-prefix`}>{slots.prefix()}</span>
          )}
          <input
            ref={inputRef}
            class={classes.value}
            placeholder={props.placeholder}
            value={getValue.value}
            onInput={handleInput}
            onFocus={handleFocus}
            onKeydown={handleKeyDown}
            onBlur={handleBlur}
          />
          {getShowClear.value && (
            <HoverIcon
              prefix={prefixCls}
              onClick={handleClear}
              class={`${prefixCls}-clear-btn`}
            >
              <CloseIcon />
            </HoverIcon>
          )}
          {slots.suffix && (
            <span class={`${prefixCls}-suffix`}>{slots.suffix()}</span>
          )}
        </span>
      )
    }
  }
})
