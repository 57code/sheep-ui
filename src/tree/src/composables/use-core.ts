import { computed, Ref } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCore } from './use-tree-type'

export function useCore(innerData: Ref<IInnerTreeNode[]>): IUseCore {
  // 获取那些展开的节点列表
  const expendedTree = computed(() => {
    let excludeNodes: IInnerTreeNode[] = []
    const result = []

    for (const item of innerData.value) {
      // 如果遍历的节点在排除列表中，跳过本次循环
      if (excludeNodes.map(node => node.id).includes(item.id)) {
        continue
      }
      // 当前节点收起，它的子节点应该被排除掉
      if (item.expanded !== true) {
        excludeNodes = getChildren(item)
      }
      result.push(item)
    }

    return result
  })

  // 获取指定节点的子节点
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

  const getIndex = (node: IInnerTreeNode) => {
    if (!node) return -1
    return innerData.value.findIndex(item => item.id === node.id)
  }

  const getNode = (node: IInnerTreeNode) => {
    return innerData.value.find(item => item.id === node.id)
  }

  const getParent = (node: IInnerTreeNode) => {
    return innerData.value.find(item => item.id === node.parentId)
  }

  return {
    expendedTree,
    getChildren,
    getChildrenExpanded,
    getIndex,
    getNode,
    getParent
  }
}
