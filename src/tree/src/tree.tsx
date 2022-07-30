import { defineComponent, toRefs } from 'vue'
import useTree from './composables/use-tree'
import { IInnerTreeNode, TreeProps, treeProps } from './tree-type'

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    // 获取data
    const { data } = toRefs(props)
    const { toggleNode, expendedTree } = useTree(data.value)

    return () => {
      return (
        <div class="s-tree">
          {
            // 循环输出节点
            expendedTree.value.map((treeNode: IInnerTreeNode) => (
              <div
                style={{
                  paddingLeft: `${24 * (treeNode.level - 1)}px`
                }}
              >
                {/* 如果是叶子节点则放一个空白占位元素，否则放一个三角形反馈图标 */}
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
