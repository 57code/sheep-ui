import type { ITreeNode, IInnerTreeNode } from '../src/tree-types'
import { reactive, Ref, unref, computed } from 'vue'
import { generateInnerTree } from '../src/utils'
export default function useTree(node: Ref<ITreeNode[]> | ITreeNode[]) {
  const innerData: IInnerTreeNode[] = reactive(generateInnerTree(unref(node)))
  const toggleNode = (node: IInnerTreeNode) => {
    // 在原始的列表中获取该节点
    const cur = innerData.find(item => item.id === node.id)
    if (cur) cur.expanded = !cur.expanded
  }
  // 获取那些展开的节点列表
  const getChildren = (node: IInnerTreeNode): IInnerTreeNode[] => {
    const result: IInnerTreeNode[] = []
    const startIndex = innerData.findIndex(item => item.id === node.id)
    //找到它后面所有的子节点
    for (
      let i = startIndex + 1;
      i < innerData.length && node.level < innerData[i].level;
      i++
    ) {
      result.push(innerData[i])
    }
    return result
  }
  // 获取那些展开的节点列表
  const getExpendedTree = computed(() => {
    // 收起的节点
    let excludeNodes: IInnerTreeNode[] = []
    const result: IInnerTreeNode[] = []

    for (const item of innerData) {
      // 如果遍历的节点在排除列表中，跳过本次循环
      if (excludeNodes.map(node => node.id).includes(item.id)) {
        continue
      }
      // 当前节点收起，它的子节点应该被排除掉
      if (item.expanded !== true) {
        excludeNodes = getChildren(item)
        console.log(excludeNodes)
      }
      result.push(item)
    }
    console.log('result:', result)
    return result
  })
  return {
    innerData,
    toggleNode,
    getChildren,
    getExpendedTree
  }
}
