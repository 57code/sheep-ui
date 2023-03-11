import { defineComponent, inject, Ref, toRefs } from 'vue'

export interface ColumnContext {
  field?: string
  header?: string
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
    }
  },
  setup(props) {
    const { field, header } = toRefs(props)

    // 将列数据传给Table组件
    const columnData = inject<Ref<ColumnContext[]>>('column-data')
    columnData!.value.push({
      field: field.value,
      header: header.value
    })

    return () => <th>{header.value}</th>
  }
})
