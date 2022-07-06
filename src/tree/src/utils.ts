import { IInnerTreeNode, ITreeNode } from './tree-type'

export function generateInnerTree(
  tree: ITreeNode[],
  level = 0,
  parentNode = {} as IInnerTreeNode // 标识递归过程的路径，用来标识
): IInnerTreeNode[] {
  level++
  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode
    o.level = level
    if (level > 1 && parentNode) {
      o.parentId = parentNode.id
    }
    // 判断 cur 是否存在 children，如果存在则递归遍历
    if (o.children) {
      const children = generateInnerTree(o.children, level, o)
      delete o.children
      return prev.concat(o, children)
    } else {
      // 叶子节点
      o.isLeaf = true
      return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])
}
