import { defineComponent, toRefs, ref } from 'vue'
import { TreeProps, treeProps } from './tree-type'

import { generateTreeData } from './utils'

export default defineComponent({
  name: 'Tree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props)
    // let data = [
    //   {
    //     id: '1',
    //     label: 'js',
    //     children: [
    //       {id: '1001', label: 'vue', children: [
    //         {id: '100101', label: 'vue2'},
    //         {id: '100102', label: 'vue3'},
    //       ]},
    //       {id: '1002', label: 'react'}
    //     ]
    //   },
    //   {
    //     id: '2',
    //     label: 'webpack'
    //   },
    //   {
    //     id: '3',
    //     label: 'css',
    //     children: [
    //       {id: '3001', label: 'scss'},
    //       {id: '3002', label: 'less'},
    //       {id: '3003', label: 'stylus'}
    //     ]
    //   }
    // ]
    const innerData = ref(generateTreeData(data.value))
    return () => {
      return (
        <div class="s-tree">
          {innerData.value.map(treeNode => {
            return (
              <div
                class="s-tree-node"
                style={{ paddingLeft: `${24 * (treeNode.level - 1)}px` }}
              >
                {treeNode.label}
              </div>
            )
          })}
        </div>
      )
    }
  }
})
