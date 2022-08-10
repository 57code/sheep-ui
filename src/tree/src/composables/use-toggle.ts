import { Ref, SetupContext } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCore, IUseLazyLoad, IUseToggle } from './use-tree-type'

export function useToggle(
  innerData: Ref<IInnerTreeNode[]>,
  core: IUseCore,
  context: SetupContext,
  lazyLoad: IUseLazyLoad
): IUseToggle {
  const { lazyLoadNodes } = lazyLoad
  const toggleNode = (node: IInnerTreeNode) => {
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur) {
      cur.expanded = !cur.expanded

      if (cur.expanded) {
        // 节点懒加载
        lazyLoadNodes(cur)
      }
    }
  }
  return {
    toggleNode
  }
}
