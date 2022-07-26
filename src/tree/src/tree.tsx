import { defineComponent } from 'vue'
import { TreeProps, treeProps } from './tree-type'

export default defineComponent({
  name: 'STree',
  props: treeProps,
  emits: [],
  setup(props: TreeProps, ctx) {
    return () => {
      return (<div class="s-tree"></div>)
    }
  }
})
