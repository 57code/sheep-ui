import { getComponentCls } from '../../_utils/global-config'
import { isNumber } from '../../_utils/is'
interface IconProps {
  size?: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin?: boolean
}
export const LarkColorIcon = (props: IconProps) => {
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
  let classes = `${prefixCls} ${prefixCls}-lark-color`

  if (props.spin) classes += ` ${prefixCls}-spin`

  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      class={classes}
      stroke-width={strokeWidth}
      style={sizeStyle}
      stroke-linecap={strokeLinecap}
      stroke-linejoin={strokeLinejoin}
    >
      <path
        d="M996.51 28.744 752.955 291.958a7.764 7.764 0 0 0-1.928 6.828 47.632 47.632 0 0 1-80.946 42.73L475.975 535.569l19.163 256.386 217.95 217.894L996.51 28.744z"
        fill="#007FFF"
      />
      <path
        d="M993.591 35.352 752.68 295.702a7.82 7.82 0 0 0-1.927 6.884 47.081 47.081 0 0 1-80.12 42.18L479.884 535.513a3.855 3.855 0 0 0-1.101 2.974l18.832 251.815 485.79-732.869 10.186-22.026z"
        fill="#0069FF"
      />
      <path
        d="m986.653 18.888-263.213 243.5a7.764 7.764 0 0 1-6.884 1.982 47.632 47.632 0 0 0-42.676 80.946L479.774 539.423l-256.33-19.273L5.494 302.255l981.16-283.367z"
        fill="#00EED4"
      />
      <path
        d="m980.045 21.806-260.46 240.912a7.764 7.764 0 0 1-6.773 1.927 47.081 47.081 0 0 0-42.18 80.12L479.829 535.514a3.855 3.855 0 0 1-3.028 1.101l-251.815-18.832L957.909 31.993l22.026-10.187z"
        fill="#00D3B4"
      />
    </svg>
  )
}
