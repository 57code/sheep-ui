import { getComponentCls } from '../../src/_utils/global-config'
import { isNumber } from '../../src/_utils/is'
interface IconProps {
  size: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin: boolean
}
export const Icon = (props: IconProps) => {
  const {
    strokeWidth = 4,
    strokeLinecap = 'butt',
    strokeLinejoin = 'miter'
  } = props
  if (['butt', 'round', 'square'].indexOf(strokeLinecap) === -1) {
    console.warn(
      `Invalid prop: type check failed for prop strokeLinecap. 
      Expected strokeLinecap with value butt | round | square, got with value ${strokeLinecap}`
    )
  }
  if (
    ['arcs', 'bevel', 'miter', 'miter-clip', 'round'].indexOf(
      strokeLinejoin
    ) === -1
  ) {
    console.warn(
      `Invalid prop: type check failed for prop strokeLinejoin. 
      Expected strokeLinecap with value butt | round | square, got with value ${strokeLinejoin}`
    )
  }

  const prefixCls = getComponentCls('icon')
  const sizeStyle = props.size
    ? isNumber(props.size)
      ? `${props.size}px`
      : props.size
    : undefined
  let classes = `${prefixCls} ${prefixCls}-${'woman-icon'.replace('-icon', '')}`

  if (props.spin) classes += ` ${prefixCls}-spin`

  return (
    <svg
      viewBox="0 0 48 48"
      style={{ fontSize: sizeStyle }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      //@ts-ignore
      class={classes}
      stroke-width={strokeWidth}
      stroke-linecap={strokeLinecap}
      stroke-linejoin={strokeLinejoin as any}
    >
      <path d="M24 29c6.075 0 11-4.925 11-11S30.075 7 24 7s-11 4.925-11 11 4.925 11 11 11Zm0 0v15M15 36h18" />
    </svg>
  )
}
