import { defineComponent, ref, toRefs, computed } from 'vue'
import { IInnerTreeNode, TreeProps, treeProps } from './tree-type'
import { generateInnerTree } from './utils'

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    // 获取data
    const { data } = toRefs(props)
    // 将用户传入数据拍平
    const innerData = ref(generateInnerTree(data.value))
    // 增加toggleNode方法
    const toggleNode = (node: IInnerTreeNode) => {
      const cur = innerData.value.find(item => item.id === node.id)
      if (cur) cur.expanded = !cur.expanded
    }
    // 获取那些展开的节点列表
    const getExpendedTree = computed(() => {
      let excludeNodes: IInnerTreeNode[] = []
      const result = []

      for (const item of innerData.value) {
        // 如果遍历的节点在排除列表中，跳过本次循环
        if (excludeNodes.map(node => node.id).includes(item.id)) {
          continue
        }
        // 当前节点收起，它的子节点应该被排除掉
        if (item.expanded !== true) {
          excludeNodes = getChildren(item)
        }
        result.push(item)
      }

      return result
    })

    // 获取指定节点的子节点
    const getChildren = (node: IInnerTreeNode): IInnerTreeNode[] => {
      const result = []
      // 找到传入节点在列表中的索引
      const startIndex = innerData.value.findIndex(item => item.id === node.id)
      // 找到它后面所有的子节点(level比指定节点大)
      for (
        let i = startIndex + 1;
        i < innerData.value.length && node.level < innerData.value[i].level;
        i++
      ) {
        result.push(innerData.value[i])
      }
      return result
    }

    return () => {
      return (
        <div class="s-tree">
          {
            // 循环输出节点
            getExpendedTree.value.map(treeNode => (
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
