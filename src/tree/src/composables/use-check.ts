import { Ref } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCheck, IUseCore, IUseToggle } from './use-tree-type'

export function useCheck(
  innerData: Ref<IInnerTreeNode[]>,
  { getChildren, getParent }: IUseCore
): IUseCheck {
  const toggleCheckNode = (treeNode: IInnerTreeNode) => {
    // 父节点可能一开始没有设置checked
    // 这里手动设置一下
    treeNode.checked = !treeNode.checked

    // 获取所有子节点，设置它们checked跟父节点一致
    getChildren(treeNode).forEach(child => {
      child.checked = treeNode.checked
    })
    setChecked(treeNode)
  }
  // 子-父联动 并且设置父节点选中内容
  const setChecked = (node: IInnerTreeNode) => {
    // 获取父节点
    const parentNode = getParent(node)
    // 如果没有父节点，则没必要处理子到父的联动
    if (!parentNode) return
    // 获取兄弟节点：相当于获取 parentNode 的直接子节点
    const siblingNodes = getChildren(parentNode, true)
    // 兄弟节点是否全部选中状态
    const siblingCheckStatus = siblingNodes.every(sibling => sibling.checked)
    // 所有兄弟节点均选中，父节点应该被选中
    parentNode.checked = siblingCheckStatus
    const siblingIncheckedStatus = siblingNodes.some(child => child.checked)
    if (siblingCheckStatus) {
      // 全部选中
      parentNode.inChecked = false
    } else if (siblingIncheckedStatus) {
      // 兄弟节点中存在选中的节点
      parentNode.inChecked = true
    } else {
      parentNode.inChecked = false
    }
    if (parentNode.parentId) setChecked(parentNode)
  }
  return {
    toggleCheckNode
  }
}
