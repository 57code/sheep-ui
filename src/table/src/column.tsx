import { defineComponent, inject, nextTick, ref, Ref, toRefs, watch } from 'vue'

export interface ColumnContext {
  field?: string
  header?: string
  type?: string
}

export default defineComponent({
  name: 'SColumn',
  props: {
    field: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { field, header, type } = toRefs(props)

    // 将列数据传给Table组件
    const columnData = inject<Ref<ColumnContext[]>>('column-data')
    columnData!.value.push({
      field: field.value,
      header: header.value,
      type: type.value
    })

    // 定义一个响应式变量，它的值来自父组件
    const allChecked = inject<Ref<boolean>>('all-checked')

    // 定义一个半选状态，它的值从父组件传入
    const isIndeterminate = inject<Ref<boolean>>('is-indeterminate')
    const checkboxRef = ref()

    nextTick(() => {
      if (checkboxRef.value) {
        checkboxRef.value.indeterminate = isIndeterminate!.value
      }
    })

    watch(
      isIndeterminate!,
      () => {
        if (!checkboxRef.value) {
          return
        }
        checkboxRef.value.indeterminate = isIndeterminate!.value
      },
      {
        immediate: true
      }
    )

    return () => (
      <th>
        {type.value === 'selection' ? (
          <input
            ref={checkboxRef}
            type="checkbox"
            v-model={allChecked!.value}
          />
        ) : (
          header.value
        )}
      </th>
    )
  }
})
