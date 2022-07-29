import { defineComponent, toRefs } from 'vue'
import { TreeProps, treeProps } from './tree-type'

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    // 获取data
    const { data: innerData } = toRefs(props)
    return () => {
      return (
        <div class="s-tree">
          {
            // 循环输出节点
            innerData.value.map(treeNode => treeNode.label)
          }
        </div>
      )
    }
  }
})
