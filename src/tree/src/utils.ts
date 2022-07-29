import { ITreeNode, IInnerTreeNode } from './tree-type'

export function generateInnerTree(tree: ITreeNode[]): IInnerTreeNode[] {
  return tree.reduce((prev, cur) => {
    if (cur.children) {
      return prev.concat(cur as IInnerTreeNode, generateInnerTree(cur.children))
    } else {
      return prev.concat(cur as IInnerTreeNode)
    }
  }, [] as IInnerTreeNode[])
}
