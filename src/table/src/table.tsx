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
                {columnData.value.map(
                  (column: ColumnContext, index: number) => {
                    // 如果存在默认插槽内容，则优先渲染之
                    const columnSlot = slots.default?.()[index]
                    if (columnSlot?.children) {
                      return (
                        <td>{(columnSlot?.children as any).default?.(row)}</td>
                      )
                    }
                    return <td>{column.field ? row[column.field!] : ''}</td>
                  }
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
})
