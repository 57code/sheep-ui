import { Ref, ref, SetupContext } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { generateInnerTree } from '../utils'
import {
  IUseCore,
  IUseLazyLoad,
  IUseOperate,
  LazyNodeResult
} from './use-tree-type'

export function useLazyLoad(
  innerData: Ref<IInnerTreeNode[]>,
  { getNode, getIndex, getChildren }: IUseCore,
  { emit }: SetupContext
): IUseLazyLoad {
  // 接收父节点，派发事件，外部调用异步方法获取数据，传入回调函数
  const lazyLoadNodes = (node: IInnerTreeNode) => {
    const innerNode = getNode(node)
    // 判断是否需要懒加载节点
    if (innerNode && innerNode.isLeaf === false && !innerNode.childNodeCount) {
      innerNode.loading = true
      // 派发事件，让外面加载数据
      emit('lazy-load', node, dealChildNodes)
    }
  }

  // 用户获取子节点数据之后，调用该函数
  const dealChildNodes = (result: LazyNodeResult) => {
    // 获取父节点
    const node = getNode(result.node)
    if (node) {
      // 结束加载状态
      node.loading = false

      // 拍平操作
      const childNodes = ref<IInnerTreeNode[]>(
        generateInnerTree(result.treeItems, node.level)
      )

      // 处理子节点和父节点之间的关系
      setParent(node, childNodes)
      insertChildren(node, childNodes)

      // 更新父节点孩子数量
      const children = getChildren(node)
      node.childNodeCount = children.length
    }
  }

  // 设置子节点的parentId
  const setParent = (
    node: IInnerTreeNode,
    childNodes: Ref<IInnerTreeNode[]>
  ) => {
    childNodes.value.forEach(child => {
      if (child.level - 1 === node.level && !child.parentId) {
        child.parentId = node.id
      }
    })
  }

  // 追加异步获取的节点到原始数组中
  const insertChildren = (
    parent: IInnerTreeNode,
    nodes: Ref<IInnerTreeNode[]>
  ) => {
    const parentIndex = getIndex(parent)
    if (parentIndex) {
      innerData.value.splice(parentIndex + 1, 0, ...nodes.value)
    }
  }

  return {
    lazyLoadNodes
  }
}
