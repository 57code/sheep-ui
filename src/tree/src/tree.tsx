import { defineComponent, toRefs } from 'vue'
import useTree from './composables/use-tree'
import { IInnerTreeNode, TreeProps, treeProps } from './tree-type'

// 节点高度
const NODE_HEIGHT = 32

// 节点缩进大小
const NODE_INDENT = 24

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps, { slots }) {
    // 获取data
    const { data, lineable, checkable } = toRefs(props)
    const { toggleNode, expendedTree, getChildrenExpanded, toggleCheckNode } =
      useTree(data.value)

    return () => {
      return (
        <div class="s-tree">
          {
            // 循环输出节点
            expendedTree.value.map((treeNode: IInnerTreeNode) => (
              <div
                class="relative leading-8 hover:bg-slate-300"
                style={{
                  paddingLeft: `${NODE_INDENT * (treeNode.level - 1)}px`
                }}
              >
                {/* 连接线 */}
                {!treeNode.isLeaf && treeNode.expanded && lineable.value && (
                  <span
                    class="s-tree-node__vline absolute w-px bg-slate-300"
                    style={{
                      height: `${
                        NODE_HEIGHT * getChildrenExpanded(treeNode).length
                      }px`,
                      left: `${NODE_INDENT * (treeNode.level - 1) + 12}px`,
                      top: `${NODE_HEIGHT}px`
                    }}
                  ></span>
                )}
                {/* 如果是叶子节点则放一个空白占位元素，否则放一个三角形反馈图标 */}
                {treeNode.isLeaf ? (
                  <span
                    style={{
                      display: 'inline-block',
                      width: '25px'
                    }}
                  />
                ) : slots.icon ? (
                  slots.icon({ nodeData: treeNode, toggleNode })
                ) : (
                  <svg
                    style={{
                      width: '25px',
                      height: '16px',
                      display: 'inline-block',
                      transform: treeNode.expanded ? 'rotate(90deg)' : ''
                    }}
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => toggleNode(treeNode)}
                  >
                    <path
                      fill="currentColor"
                      d="M384 192v640l384-320.064z"
                    ></path>
                  </svg>
                )}
                {/* 复选框 */}
                {checkable.value && (
                  <input
                    type="checkbox"
                    v-model={treeNode.checked}
                    class="relative top-[2px] mr-1"
                    onClick={() => {
                      toggleCheckNode(treeNode)
                    }}
                  />
                )}

                {/* 节点文本 */}
                {slots.content ? slots.content(treeNode) : treeNode.label}
              </div>
            ))
          }
        </div>
      )
    }
  }
})
