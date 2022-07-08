import { defineComponent, toRefs } from 'vue'
import { useTree } from './componsables/use-tree'
import { treeProps, TreeProps } from './tree-type'
export default defineComponent({
  name: 'Tree',
  props: treeProps,
  setup(props: TreeProps, { slots }) {
    const { data, checkable, lineable } = toRefs(props)

    // 节点宽度
    const NODE_INDENT = 24

    // 节点高度
    const NODE_HEIGHT = 28

    const { expandedTree, toggleNode, getChildrenExpanded, toggleCheckNode } =
      useTree(data)
    return () => {
      return (
        <div class="s-tree">
          {expandedTree.value.map(treeNode => {
            const { level, isLeaf, expanded } = treeNode
            return (
              <div
                class="s-tree-node hover:bg-slate-300 relative leading-8 flex items-center"
                style={{
                  paddingLeft: `${NODE_INDENT * (level - 1)}px`
                }}
              >
                {/** 连接线 */}
                {!isLeaf && expanded && lineable && (
                  <span
                    class="s-tree-node__vine absolute w-px bg-slate-300"
                    style={{
                      height: `${
                        NODE_HEIGHT * getChildrenExpanded(treeNode).length
                      }px`,
                      left: `${NODE_INDENT * (level - 1) + 8}px`,
                      top: `${NODE_HEIGHT}px`
                    }}
                  ></span>
                )}
                {/** 折叠图标 */}
                {/** 判断当前节点是否为叶子节点 */}
                {isLeaf ? (
                  <span
                    style={{ display: 'inline-block', width: '18px' }}
                  ></span>
                ) : slots.icon ? (
                  slots.icon({ nodeData: treeNode, toggleNode })
                ) : (
                  <svg
                    onClick={() => toggleNode(treeNode)}
                    style={{
                      width: '18px',
                      height: '18px',
                      display: 'inline-block',
                      transform: expanded ? 'rotate(90deg)' : ''
                    }}
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M384 192v640l384-320.064z"
                    ></path>
                  </svg>
                )}
                {/** 复选框 */}
                {checkable.value && (
                  <span class={`relative ${treeNode.inChecked ? 's-tree__inChecked' : ''}`}>
                    {treeNode.inChecked && <span class="s-tree-checkbox__inner cursor-pointer" onClick={() => toggleCheckNode(treeNode)}>-</span>}
                    <input
                      type="checkbox"
                      style={{ marginRight: '8px' }}
                      v-model={treeNode.checked}
                      onClick={() => toggleCheckNode(treeNode)}
                    ></input>
                  </span>
                )}
                {/** 标签 */}
                {slots.content ? slots.content(treeNode) : treeNode.label}
              </div>
            )
          })}
        </div>
      )
    }
  }
})
