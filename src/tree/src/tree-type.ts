import { ExtractPropTypes, PropType } from 'vue'
import { IDragdrop } from './composables/use-tree-type'

export interface ITreeNode {
  label: string
  id?: string
  children?: ITreeNode[]

  selected?: boolean // 点击选中
  checked?: boolean // 勾选
  expanded?: boolean // 展开

  disableSelect?: boolean
  disableCheck?: boolean
  disableToggle?: boolean
}

export interface IInnerTreeNode extends ITreeNode {
  parentId?: string // 父节点ID
  level: number // 节点层级
  isLeaf?: boolean // 是否叶子结点
  loading?: boolean // 节点是否显示加载中
  childNodeCount?: number // 该节点子节点的数量
}

export const treeProps = {
  data: {
    type: Object as PropType<Array<ITreeNode>>,
    required: true
  },
  // 是否显示参考线
  lineable: {
    type: Boolean,
    default: false
  },
  // 是否显示复选框
  checkable: {
    type: Boolean,
    default: false
  },
  // 是否显示操作按钮
  operable: {
    type: Boolean,
    default: false
  },
  // 拖拽开关属性
  dragdrop: {
    type: [Boolean, Object] as PropType<IDragdrop>,
    default: false
  },
  height: {
    type: Number
  },
  itemHeight: {
    type: Number,
    default: 30
  }
} as const

export type TreeProps = ExtractPropTypes<typeof treeProps>
