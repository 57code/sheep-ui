// composables/use-tree.ts
import { ref, Ref, SetupContext, unref } from 'vue'
import { ITreeNode, TreeProps } from '../tree-type'
import { generateInnerTree } from '../utils'
import { useCheck } from './use-check'
import { useCore } from './use-core'
import { useDragdrop } from './use-dragdrop'
import { useLazyLoad } from './use-lazy-load'
import { useOperate } from './use-operate'
import { useToggle } from './use-toggle'
import { TreeUtils } from './use-tree-type'

export default function useTree(
  tree: ITreeNode[] | Ref<ITreeNode[]>,
  treeProps: TreeProps,
  context: SetupContext
): TreeUtils {
  const data = unref(tree)
  const innerData = ref(generateInnerTree(data))

  const core = useCore(innerData)
  const plugins = [useToggle, useCheck, useOperate]
  const lazyLoad = useLazyLoad(innerData, core, context)
  const dragdropPlugin = useDragdrop(treeProps.dragdrop, innerData, core)
  // 聚合插件
  const pluginMetheds = plugins.reduce((acc, plugin) => {
    return { ...acc, ...plugin(innerData, core, context, lazyLoad) }
  }, {})

  return {
    ...pluginMetheds,
    ...core,
    ...dragdropPlugin,
    treeData: innerData
  } as TreeUtils
}
