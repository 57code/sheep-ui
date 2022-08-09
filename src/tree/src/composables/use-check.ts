import { Ref } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCheck, IUseCore, IUseToggle } from './use-tree-type'

export function useCheck(
  innerData: Ref<IInnerTreeNode[]>,
  { getChildren }: IUseCore
): IUseCheck {
  const toggleCheckNode = (treeNode: IInnerTreeNode) => {
    // 父节点可能一开始没有设置checked
    // 这里手动设置一下
    treeNode.checked = !treeNode.checked

    // 获取所有子节点，设置它们checked跟父节点一致
    getChildren(treeNode).forEach(child => {
      child.checked = treeNode.checked
    })

    // 子-父联动
    // 获取父节点
    const parentNode = innerData.value.find(
      item => item.id === treeNode.parentId
    )
    // 如果没有父节点，则没必要处理子到父的联动
    if (!parentNode) return
    // 获取兄弟节点：只是一个特殊的getChildren，仅获取父节点直接子节点，需要改造getChildren
    const siblingNodes = getChildren(parentNode, false)
    const checkedSiblingNodes = siblingNodes.filter(item => item.checked)

    if (checkedSiblingNodes.length === siblingNodes.length) {
      // 如果所有兄弟节点都被勾选，则设置父节点的checked属性为true
      parentNode.checked = true
    } else if (checkedSiblingNodes.length === 0) {
      // 否则设置父节点的checked属性为false
      parentNode.checked = false
    }
  }
  return {
    toggleCheckNode
  }
}
