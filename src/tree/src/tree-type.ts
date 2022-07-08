import { ExtractPropTypes, PropType } from 'vue'

export interface ITreeNode {
  label: string
  id?: string
  children?: ITreeNode[]

  selected?: boolean // 点击选中
  checked?: boolean // 勾选
  expanded?: boolean // 展开
  inChecked?: boolean // 待选中

  disableSelect?: boolean
  disableCheck?: boolean
  disableToggle?: boolean
}

export interface IInnerTreeNode extends ITreeNode {
  parentId?: string // 父节点ID
  level: number // 父节点层级
  isLeaf?: boolean // 是否叶子节点
}

export const treeProps = {
  data: {
    type: Object as PropType<Array<ITreeNode>>,
    required: true
  },
  // 是否显示 checkbox
  checkable: {
    type: Boolean,
    default: false
  },
  // 是否显示参考线
  lineable: {
    type: Boolean,
    default: false
  }
} as const

export type TreeProps = ExtractPropTypes<typeof treeProps>
