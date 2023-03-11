import { defineComponent, provide, ref, toRefs, watch } from 'vue'
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
  emits: ['selection-change'],
  setup(props, { slots, emit }) {
    const { data } = toRefs(props)

    // 获取 Column 组件中的列数据
    const columnData = ref([])
    provide('column-data', columnData)

    // check变化事件处理
    watch(
      data,
      (newData: any) => {
        const checkedRows = newData.filter((row: any) => row.checked)

        if (checkedRows.length === data.value.length) {
          // 全选
          allChecked.value = true
          isIndeterminate.value = false
        } else if (checkedRows.length === 0) {
          // 全部未选中
          allChecked.value = false
          isIndeterminate.value = false
        } else {
          isIndeterminate.value = true
        }

        emit('selection-change', checkedRows)
      },
      { deep: true }
    )

    const allChecked = ref(data.value.every((row: any) => row.checked))
    provide('all-checked', allChecked)

    watch(allChecked, newVal => {
      data.value.forEach((row: any) => {
        row.checked = newVal
      })
    })

    const isIndeterminate = ref(
      data.value.some((row: any) => row.checked && !allChecked.value)
    )
    provide('is-indeterminate', isIndeterminate)

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
                    return (
                      <td>
                        {column.field ? (
                          row[column.field!]
                        ) : column.type === 'selection' ? (
                          <input type="checkbox" v-model={row.checked}></input>
                        ) : (
                          ''
                        )}
                      </td>
                    )
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
