import { defineComponent, provide, ref, toRefs } from 'vue'
import { ColumnContext } from './column'
import './table.scss'

export default defineComponent({
  name: 'STable',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { slots }) {
    const { data } = toRefs(props)

    // 获取 Column 组件中的列数据
    const columnData = ref([])
    provide('column-data', columnData)

    return () => (
      <table class="s-table">
        <thead>
          <tr>{slots.default?.()}</tr>
        </thead>
        <tbody>
          {data.value.map((row: any) => {
            return (
              <tr>
                {columnData.value.map((column: ColumnContext) => {
                  return <td>{row[column.field!]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
})
