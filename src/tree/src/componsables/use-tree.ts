import { computed, ref, Ref, unref } from 'vue'
import { IInnerTreeNode, ITreeNode } from '../tree-type'
import { generateInnerTree } from '../utils'

export function useTree(node: Ref<ITreeNode[]> | ITreeNode[]) {
  const innerData = ref(generateInnerTree(unref(node)))
  const toggleNode = (node: IInnerTreeNode) => {
    // 在原始列表中获取该节点
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur) {
      cur.expanded = !cur.expanded
    }
  }
  // 获取那些展开的节点列表
  const expandedTree = computed(() => {
    let excludedNodes: IInnerTreeNode[] = []
    const result = []

    // 循环列表，找出那些 非 !expanded
    for (const item of innerData.value) {
      // 如果遍历节点在排除列表中，直接跳出本次循环
      if (excludedNodes.includes(item)) {
        continue
      }
      // 当前节点处于折叠状态，它的子节点应该被排除
      if (item.expanded !== true) {
        excludedNodes = getChildren(item)
      }
      result.push(item)
    }
    return result
  })
  const getChildren = (node: IInnerTreeNode, recursive = true) => {
    const result = []
    // 找到node 在列表中的索引
    const startIndex = innerData.value.findIndex(item => item.id === node.id)
    // 找到它后面所有子节点（level 比当前节点大）
    for (
      let i = startIndex + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      if (recursive) {
        result.push(innerData.value[i])
      } else if (node.level === innerData.value[i].level - 1) {
        // 直接子节点
        result.push(innerData.value[i])
      }
    }
    return result
  }
  // 子-父联动 并且设置父节点选中内容
  const setChecked = (node: IInnerTreeNode) => {
    // 获取父节点
    const parentNode = innerData.value.find(item => item.id === node.parentId)
    if (!parentNode) return
    // 获取兄弟节点：相当于获取 parentNode 的直接子节点
    const siblingNodes = getChildren(parentNode, false)
    // 兄弟节点是否全部选中状态
    const siblingCheckStatus = siblingNodes.every(sibling => sibling.checked)
    parentNode.checked = siblingCheckStatus
    if (parentNode.parentId) setChecked(parentNode)
  }
  // checkBox click 事件
  const toggleCheckNode = (node: IInnerTreeNode) => {
    // 避免初始化的时候 node 中没有 checked 设置
    node.checked = !node.checked
    // 父 => 联动
    // 获取子节点，并同步他们的选中状态和父节点一致
    getChildren(node).forEach(child => {
      child.checked = node.checked
    })
    setChecked(node)
  }
  // 计算参考线高度
  const getChildrenExpanded = (
    node: IInnerTreeNode,
    result: IInnerTreeNode[] = []
  ) => {
    // 获取当前节点的直接子节点
    const childrenNodes = getChildren(node, false)
    result.push(...childrenNodes)
    childrenNodes.forEach(item => {
      if (item.expanded) {
        getChildrenExpanded(item, result)
      }
    })
    return result
  }
  return {
    innerData,
    toggleNode,
    expandedTree,
    getChildren,
    toggleCheckNode,
    getChildrenExpanded
  }
}
