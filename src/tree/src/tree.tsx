import { defineComponent, toRefs } from 'vue'
import { IInnerTreeNode, TreeProps, treeProps } from './tree-types'
import useTree from '../hooks/useTree'
import '../style/tree.scss'
const NODE_HEIGHT = 28
const NODE_INDENT = 24
export default defineComponent({
  name: 'Tree',
  props: treeProps,
  setup(props: TreeProps) {
    // 获取data
    const { data } = toRefs(props)
    const { toggleNode, getExpendedTree, getChildren } = useTree(data)
    const spanStyle = (treeNode: IInnerTreeNode) => {
      return {
        height: `${NODE_HEIGHT * getChildren(treeNode).length}px`,
        left: `${NODE_INDENT * (treeNode.level - 1) + 11}px`,
        top: `${NODE_HEIGHT}px`
      }
    }
    return () => {
      return (
        <div class="s-tree">
          {
            // 循环输出节点
            getExpendedTree.value.map(treeNode => (
              <div
                class="s-tree-node hover:bg-slate-100 relative leading-8"
                style={{
                  paddingLeft: `${NODE_HEIGHT * (treeNode.level - 1)}px`
                }}
              >
                {/* 连接线 */}
                {!treeNode.isLeaf && treeNode.expanded && (
                  <span
                    class="s-tree-node__vline absolute w-px bg-gray-400"
                    style={spanStyle(treeNode)}
                  ></span>
                )}

                {treeNode.isLeaf ? (
                  <span
                    style={{
                      display: 'inline-block',
                      width: '25px'
                    }}
                  />
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
                {treeNode.label}
              </div>
            ))
          }
        </div>
      )
    }
  }
})
