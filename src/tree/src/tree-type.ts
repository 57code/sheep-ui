import { ExtractPropTypes, PropType } from 'vue'

export const treeProps = {} as const
export type TreeProps = ExtractPropTypes<typeof treeProps>
