import { upperFirst } from './utils'

export default function genTypesTemplate(name: string) {
  const propsTypeName = upperFirst(name) + 'Props'
  const propsName = name + 'Props'
  return `\
import type { PropType, ExtractPropTypes } from 'vue'

export const ${propsName} = {} as const

export type ${propsTypeName} = ExtractPropTypes<typeof ${propsName}>
`
}
