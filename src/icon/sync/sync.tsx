import { getComponentCls } from '../../_utils/global-config'
import { isNumber } from '../../_utils/is'
interface IconProps {
  size?: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin?: boolean
}
export const SyncIcon = (props: IconProps) => {
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
  let classes = `${prefixCls} ${prefixCls}-sync`

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
        d="m33.193 11.98 1.414-1.414 1.414-1.415h-2.828v2.829ZM14.812 36.018l-1.415 1.414-1.414 1.414h2.829v-2.828Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="m34.607 10.566 1.414-1.415h-2.828v2.829l1.414-1.414Zm0 0 1.414 1.414c6.64 6.639 6.64 17.403 0 24.042a16.922 16.922 0 0 1-8.942 4.7m-13.682-3.29-1.414 1.414h2.829v-2.828l-1.415 1.414Zm0 0-1.414-1.414c-6.639-6.639-6.639-17.403 0-24.042a16.922 16.922 0 0 1 8.942-4.7" />
    </svg>
  )
}
