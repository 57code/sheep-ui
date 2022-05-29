import { getComponentCls } from '../../_utils/global-config'
import { isNumber } from '../../_utils/is'
interface IconProps {
  size?: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin?: boolean
}
export const QqCircleFillIcon = (props: IconProps) => {
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
  let classes = `${prefixCls} ${prefixCls}-qq-circle-fill`

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
        d="M24.007 1C11.281 1 1 11.281 1 24.007c0 13.23 11.216 23.87 24.733 22.936 11.288-.791 20.49-9.994 21.21-21.354C47.877 12.144 37.237 1 24.007 1Zm11.36 29.262s-.79 2.23-2.3 4.242c0 0 2.66.935 2.444 3.236 0 0 .072 2.66-5.68 2.444 0 0-4.026-.287-5.248-2.013h-1.079c-1.222 1.726-5.248 2.013-5.248 2.013-5.752.216-5.68-2.444-5.68-2.444-.216-2.373 2.444-3.236 2.444-3.236-1.51-2.013-2.3-4.241-2.3-4.241-3.596 5.895-3.236-.791-3.236-.791.647-3.955 3.523-6.543 3.523-6.543-.431-3.595 1.078-4.242 1.078-4.242.216-11.072 9.707-10.929 9.922-10.929.216 0 9.707-.215 9.994 10.929 0 0 1.51.647 1.079 4.242 0 0 2.876 2.588 3.523 6.543 0 0 .36 6.686-3.236.79Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}
