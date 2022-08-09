import { Ref } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCore, IUseToggle } from './use-tree-type'

export function useToggle(
  innerData: Ref<IInnerTreeNode[]>,
  core: IUseCore
): IUseToggle {
  const toggleNode = (node: IInnerTreeNode) => {
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur) cur.expanded = !cur.expanded
  }
  return {
    toggleNode
  }
}
