import { ComputedRef, Ref } from 'vue'
import { IInnerTreeNode } from '../tree-type'

export type IUseCore = {
  expendedTree: ComputedRef<IInnerTreeNode[]>
  getChildren: (node: IInnerTreeNode, recursive?: boolean) => IInnerTreeNode[]
  getChildrenExpanded: (treeNode: IInnerTreeNode) => IInnerTreeNode[]
  getIndex: (node: IInnerTreeNode) => number
}

export type IUseToggle = {
  toggleNode: (treeNode: IInnerTreeNode) => void
}

export type IUseCheck = {
  toggleCheckNode: (treeNode: IInnerTreeNode) => void
}

export type IUseOperate = {
  append: (parent: IInnerTreeNode, node: IInnerTreeNode) => void
  remove: (node: IInnerTreeNode) => void
}

export type TreeUtils = {
  treeData: Ref<IInnerTreeNode[]>
} & IUseCore &
  IUseToggle &
  IUseCheck &
  IUseOperate
