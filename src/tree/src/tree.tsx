import { defineComponent, provide, SetupContext, toRefs } from 'vue'
import useTree from './composables/use-tree'
import { IInnerTreeNode, TreeProps, treeProps } from './tree-type'
import STreeNode from './components/tree-node'
import STreeNodeToggle from './components/tree-node-toggle'
import '../style/tree.scss'
import { VirtualList } from '../../virtual-list'

export default defineComponent({
  name: 'STree',
  props: treeProps,
  emits: ['lazy-load'],
  setup(props: TreeProps, context: SetupContext) {
    // 获取data
    const { data, height, itemHeight } = toRefs(props)
    const { slots } = context
    const treeData = useTree(data.value, props, context)
    provide('TREE_UTILS', treeData)
    return () => {
      const TreeNode = (treeNode: IInnerTreeNode) => (
        <STreeNode {...props} treeNode={treeNode}>
          {{
            content: () =>
              slots.content ? slots.content(treeNode) : treeNode.label,
            icon: () =>
              slots.icon ? (
                slots.icon({
                  nodeData: treeNode,
                  toggleNode: treeData.toggleNode
                })
              ) : (
                <STreeNodeToggle
                  expanded={!!treeNode.expanded}
                  onClick={() => treeData.toggleNode(treeNode)}
                ></STreeNodeToggle>
              ),
            loading: () =>
              slots.loading ? (
                slots.loading({ nodeData: treeData })
              ) : (
                <span class="ml-1">loading...</span>
              )
          }}
        </STreeNode>
      )
      return (
        <div class="s-tree">
          {height?.value ? (
            // 如果设置了height，则添加虚拟列表
            <div style={{ height: `${height.value}px` }}>
              <VirtualList
                data={treeData.expendedTree.value}
                itemHeight={itemHeight.value}
              >
                {{
                  default: ({ item: treeNode }: { item: IInnerTreeNode }) =>
                    TreeNode(treeNode)
                }}
              </VirtualList>
            </div>
          ) : (
            // 没有height，则正常输出节点
            treeData.expendedTree.value.map((treeNode: IInnerTreeNode) =>
              TreeNode(treeNode)
            )
          )}
        </div>
      )
    }
  }
})
