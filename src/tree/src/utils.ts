import { ITreeNode, IInnerTreeNode } from './tree-type'
export function generateTreeData(
  data: ITreeNode[],
  level = 0,
  path = [] as IInnerTreeNode[]
): IInnerTreeNode[] {
  // [{id: '1', label: 'js', children: [{id: '1001', label: 'vue'}, {id: '1002', label: 'react'}]}]
  // 转为 [{id: '1', label: 'js', level: 1}, {id: '1001', label: 'vue', level: 2, parentId: '1'}, {id: '1002', label: 'react', level: 2, parentId: '1'}]
  // level 通过遍历次数来计算
  level++
  return data.reduce((prev, cur) => {
    const tempNode = { ...cur } as IInnerTreeNode
    tempNode.level = level
    if (path.length > 0 && path[path.length - 1].level >= level) {
      // 子 =》父的过程
      while (path.length && path[path.length - 1].level >= level) {
        // 当一个子节点递归结束之后 清空同一级别的调用栈
        path.pop()
      }
    }
    // 父 =》 子
    path.push(tempNode)

    // 获取parentNode
    const parentNode = path[path.length - 2]
    if (parentNode) {
      tempNode.parentId = parentNode.id
    }
    if (tempNode.children) {
      const children = generateTreeData(tempNode.children, level, path)
      delete tempNode.children
      return prev.concat(tempNode, children)
    } else {
      // 没有children说明是叶子节点
      tempNode.isLeaf = true
      return prev.concat(tempNode)
    }
  }, [] as IInnerTreeNode[])
}
