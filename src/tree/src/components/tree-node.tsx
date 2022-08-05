import { defineComponent, inject, toRefs } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { TreeNodeProps, treeNodeProps } from './tree-node-type'

// 节点高度
const NODE_HEIGHT = 32

// 节点缩进大小
const NODE_INDENT = 24

type TreeUtils = {
  toggleNode: (treeNode: IInnerTreeNode) => void
  toggleCheckNode: (treeNode: IInnerTreeNode) => void
  getChildrenExpanded: (treeNode: IInnerTreeNode) => IInnerTreeNode[]
}

export default defineComponent({
  name: 'STreeNode',
  props: treeNodeProps,
  setup(props: TreeNodeProps, { slots }) {
    const { lineable, checkable, treeNode } = toRefs(props)
    const { toggleNode, toggleCheckNode, getChildrenExpanded } = inject(
      'TREE_UTILS'
    ) as TreeUtils
    return () => (
      <div
        class="relative leading-8 hover:bg-slate-300"
        style={{
          paddingLeft: `${NODE_INDENT * (treeNode.value.level - 1)}px`
        }}
      >
        {/* 连接线 */}
        {!treeNode.value.isLeaf && treeNode.value.expanded && lineable.value && (
          <span
            class="s-tree-node__vline absolute w-px bg-slate-300"
            style={{
              height: `${
                NODE_HEIGHT * getChildrenExpanded(treeNode.value).length
              }px`,
              left: `${NODE_INDENT * (treeNode.value.level - 1) + 12}px`,
              top: `${NODE_HEIGHT}px`
            }}
          ></span>
        )}
        {/* 如果是叶子节点则放一个空白占位元素，否则放一个三角形反馈图标 */}
        {treeNode.value.isLeaf ? (
          <span
            style={{
              display: 'inline-block',
              width: '25px'
            }}
          />
        ) : (
          slots.icon!()
        )}
        {/* 复选框 */}
        {checkable.value && (
          <input
            type="checkbox"
            v-model={treeNode.value.checked}
            class="relative top-[2px] mr-1"
            onClick={() => {
              toggleCheckNode(treeNode.value)
            }}
          />
        )}

        {/* 节点文本 */}
        {slots.content!()}
      </div>
    )
  }
})
