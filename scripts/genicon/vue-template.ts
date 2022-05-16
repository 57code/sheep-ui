/**
 *
 * @param param0
 * @returns 返回生成的 src/icon/align-center/align-center.tsx
 */
export const getIconTsx = ({
  name,
  componentName,
  svgHtml
}: {
  name: string
  componentName: string
  svgHtml: string
}) => `import { getComponentCls } from '../../_utils/global-config'
import { isNumber } from '../../_utils/is'
interface IconProps {
  size: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin: boolean
}
export const ${componentName} = (props: IconProps) => {
  const {
    strokeWidth = 4,
    strokeLinecap = 'butt',
    strokeLinejoin = 'miter'
  } = props
  if (['butt', 'round', 'square'].indexOf(strokeLinecap) === -1) {
    console.warn(
      \`Invalid prop: type check failed for prop strokeLinecap. 
      Expected strokeLinecap with value butt | round | square, got with value \${strokeLinecap}\`
    )
  }
  if (
    ['arcs', 'bevel', 'miter', 'miter-clip', 'round'].indexOf(
      strokeLinejoin
    ) === -1
  ) {
    console.warn(
      \`Invalid prop: type check failed for prop strokeLinejoin. 
      Expected strokeLinecap with value butt | round | square, got with value \${strokeLinejoin}\`
    )
  }

  const prefixCls = getComponentCls('icon')
  const sizeStyle = props.size
    ? isNumber(props.size)
      ? \`\${props.size}px\`
      : props.size
    : undefined
  let classes = \`\${prefixCls} \${prefixCls}-${name.replace('-icon', '')}\`

  if (props.spin) classes += \` \${prefixCls}-spin\`

  return (
    ${svgHtml}
  )
}`

/**
 *
 * @param  name: icon 目录 componentName 具体组件名字
 * @returns 返回生成的 src/icon/align-center/index.ts
 */
export const getIconIndex = ({
  name,
  componentName
}: {
  name: string
  componentName: string
}) => `import type { App } from 'vue'
import { ${componentName} as _${componentName} } from './${name}'

const ${componentName} = {
  install: (app: App) => {
    app.component('${componentName}', _${componentName})
  }
}

export default ${componentName}
`

export const getSheepVueIcon = ({
  imports,
  components
}: {
  imports: string[]
  components: string[]
}) => `import type { App, Plugin } from 'vue'
${imports.join('\n')}

const icons: Record<string, Plugin> = {
  ${components.join(',\n  ')}
}

const install = (app: App) => {
  for (const value of Object.values(icons)) {
    app.use(value)
  }
}

const SheepIcon = {
  ...icons,
  install
}

export default SheepIcon`

export const getIndex = (
  exports: string[]
) => `export { default } from './sheep-vue-icon'
${exports.join('\n')}
`
