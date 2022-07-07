import { IInnerTreeNode, ITreeNode } from './tree-types'

export function generateInnerTree(
  tree: ITreeNode[],
  level = 0, // 表示当前节点的层级
  path = [] as IInnerTreeNode[] //表示递归过程的路径，用来判断父节点的id
): IInnerTreeNode[] {
  // 逐层增加等级 记录嵌套的等级
  level++
  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode // 扩展解构出来
    o.level = level
    // 记录当前调用栈
    if (path.length > 0 && path[path.length - 1].level >= level) {
      // 子-父 弹出栈
      while (path[path.length - 1]?.level >= level) {
        // 子 -> 父时，应该将栈顶元素弹出去
        path.pop()
      }
    }
    //记录 父 -》子
    path.push(o)
    //获取parentNode
    const parentNode = path[path.length - 2]
    if (parentNode) {
      // 给当前的结点增加parentId
      o.parentId = parentNode.id
    }
    //判断cur是否存在children，如果存在递归调用
    if (o.children) {
      const children = generateInnerTree(o.children, level, path)
      // 已经获取到了children的结点，就删除之前的children
      delete o.children
      return prev.concat(o, children)
    } else {
      // 叶子结点
      o.isLeaf = true
      return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])
}
