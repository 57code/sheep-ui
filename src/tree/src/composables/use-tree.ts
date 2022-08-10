// composables/use-tree.ts
import { ref, Ref, SetupContext, unref } from 'vue'
import { ITreeNode } from '../tree-type'
import { generateInnerTree } from '../utils'
import { useCheck } from './use-check'
import { useCore } from './use-core'
import { useLazyLoad } from './use-lazy-load'
import { useOperate } from './use-operate'
import { useToggle } from './use-toggle'
import { TreeUtils } from './use-tree-type'

export default function useTree(
  tree: ITreeNode[] | Ref<ITreeNode[]>,
  context: SetupContext
): TreeUtils {
  const data = unref(tree)
  const innerData = ref(generateInnerTree(data))

  const core = useCore(innerData)
  const plugins = [useToggle, useCheck, useOperate]
  const lazyLoad = useLazyLoad(innerData, core, context)
  // 聚合插件
  const pluginMetheds = plugins.reduce((acc, plugin) => {
    return { ...acc, ...plugin(innerData, core, context, lazyLoad) }
  }, {})

  return {
    ...pluginMetheds,
    ...core,
    treeData: innerData
  } as TreeUtils
}
