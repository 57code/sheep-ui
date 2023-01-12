import { defineComponent, inject } from 'vue'
import { FormItemContext } from '../../form/src/form-item-type'
import { InputProps, inputProps } from './input-type'
import './input.scss'

export default defineComponent({
  name: 'SInput',
  props: inputProps,
  emits: ['update:modelValue'],
  setup(props: InputProps, { emit }) {
    // 注入校验方法
    const formItem = inject('FORM_ITEM_CTX') as FormItemContext

    const onInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      emit('update:modelValue', val)
      formItem.validate()
    }

    return () => (
      <div class="s-input__wrapper">
        <input
          class="s-input__input"
          value={props.modelValue}
          onInput={onInput}
          type={props.type}
        ></input>
      </div>
    )
  }
})
