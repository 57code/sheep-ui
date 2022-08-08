// composables/use-tree.ts
import { ref, computed, Ref, unref } from 'vue'
import { randomId } from '../../../shared/utils'
import { IInnerTreeNode, ITreeNode } from '../tree-type'
import { generateInnerTree } from '../utils'

export default function useTree(tree: ITreeNode[] | Ref<ITreeNode[]>) {
  const data = unref(tree)
  const innerData = ref(generateInnerTree(data))

  const toggleNode = (node: IInnerTreeNode) => {
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur) cur.expanded = !cur.expanded
  }
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

  const getIndex = (node: IInnerTreeNode) => {
    if (!node) return -1
    return innerData.value.findIndex(item => item.id === node.id)
  }

  const append = (parent: IInnerTreeNode, node: IInnerTreeNode) => {
    // console.log('node-operate append', parent, node)
    // 1.获取parent最后一个子节点
    const children = getChildren(parent, false)
    const lastChild = children[children.length - 1]

    // 2.确定未来插入新节点未知索引
    // 默认在parent后面
    let insertedIndex = getIndex(parent) + 1

    if (lastChild) {
      insertedIndex = getIndex(lastChild) + 1
    }

    // 保证parent是展开、非叶子节点状态
    // 这样保证看到新增节点
    parent.expanded = true
    parent.isLeaf = false

    // 新增节点初始化
    const currentNode = ref({
      ...node,
      level: parent.level + 1,
      parentId: parent.id,
      isLeaf: true
    })

    // 设置新增节点ID
    if (currentNode.value.id === undefined) {
      currentNode.value.id = randomId()
    }

    // 插入新增节点
    innerData.value.splice(insertedIndex, 0, currentNode.value)
  }

  const remove = (node: IInnerTreeNode) => {
    // console.log('node-operate remove', node)
    const childrentIds = getChildren(node).map(nodeItem => nodeItem.id)
    // 过滤掉node和其子节点之外的节点
    innerData.value = innerData.value.filter(
      item => item.id !== node.id && !childrentIds.includes(item.id)
    )
  }

  return {
    expendedTree,
    toggleNode,
    getChildren,
    getChildrenExpanded,
    toggleCheckNode,
    append,
    remove
  }
}
