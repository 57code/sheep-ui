import { defineComponent, ref, toRefs } from 'vue'
import { TreeProps, treeProps } from './tree-type'
import { generateInnerTree } from './utils'

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    // 获取data
    const { data } = toRefs(props)
    // 将用户传入数据拍平
    const innerData = ref(generateInnerTree(data.value))
    return () => {
      return (
        <div class="s-tree">
          {
            // 循环输出节点
            innerData.value.map(treeNode => (
              <div
                style={{
                  paddingLeft: `${24 * (treeNode.level - 1)}px`
                }}
              >
                {treeNode.label}
              </div>
            ))
          }
        </div>
      )
    }
  }
})
