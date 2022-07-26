/* eslint-disable prettier/prettier */
import { upperFirst } from './utils'

export default function genCoreTemplate(name: string) {
  const compName = 'S' + upperFirst(name)
  const propsTypeName = upperFirst(name) + 'Props'
  const propsName = name + 'Props'
  const propsFileName = name + '-type'
  const className = 's-' + name
  return `\
import { defineComponent } from 'vue'
import { ${propsTypeName}, ${propsName} } from './${propsFileName}'

export default defineComponent({
  name: '${compName}',
  props: ${propsName},
  emits: [],
  setup(props: ${propsTypeName}, ctx) {
    return () => {
      return (<div class="${className}"></div>)
    }
  }
})
`
}
