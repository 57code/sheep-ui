import { IInnerTreeNode, ITreeNode } from './tree-type'

export function generateInnerTree(
  tree: ITreeNode[],
  level = 0, // 节点层级
  parentNode = {} as IInnerTreeNode
): IInnerTreeNode[] {
  level++
  return tree.reduce((prev, cur) => {
    // 创建一个新节点
    const o = { ...cur } as IInnerTreeNode
    // 设置层级
    o.level = level
    // 如果层级比父节点层级高则是子级，设置父级parentId
    if (level > 1 && parentNode.level && level > parentNode.level) {
      o.parentId = parentNode.id
    }
    if (o.children) {
      // 如果存在children，则递归处理这些子节点
      const children = generateInnerTree(o.children, level, o)
      // 处理完删除多余children属性
      delete o.children
      // 将新构造的节点o和已拍平数据拼接起来
      return prev.concat(o, children)
    } else {
      // 叶子节点的情况:
      // 如果是懒加载，isLeaf会被设置为false，则不需要设置
      // 如果没有初始化，则默认设置为true
      if (o.isLeaf === undefined) {
        o.isLeaf = true
      }
      // 将新构造的节点o和已拍平数据拼接起来
      return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])
}
