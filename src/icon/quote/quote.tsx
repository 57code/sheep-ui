import { getComponentCls } from '../../_utils/global-config'
import { isNumber } from '../../_utils/is'
interface IconProps {
  size?: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin?: boolean
}
export const QuoteIcon = (props: IconProps) => {
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
  let classes = `${prefixCls} ${prefixCls}-quote`

  if (props.spin) classes += ` ${prefixCls}-spin`

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      class={classes}
      stroke-width={strokeWidth}
      style={sizeStyle}
      stroke-linecap={strokeLinecap}
      stroke-linejoin={strokeLinejoin}
    >
      <path
        d="M18.08 33.093a6 6 0 0 1-12 0c-.212-3.593 2.686-6 6-6a6 6 0 0 1 6 6ZM39.08 33.093a6 6 0 0 1-12 0c-.212-3.593 2.686-6 6-6a6 6 0 0 1 6 6Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M6.08 33.093a6 6 0 1 0 6-6c-3.314 0-6.212 2.407-6 6Zm0 0c-.5-8.5 1-25.5 15-24m6 24a6 6 0 1 0 6-6c-3.314 0-6.212 2.407-6 6Zm0 0c-.5-8.5 1-25.5 15-24" />
    </svg>
  )
}
