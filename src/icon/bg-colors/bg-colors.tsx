import { getComponentCls } from '../../_utils/global-config'
import { isNumber } from '../../_utils/is'
interface IconProps {
  size?: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin?: boolean
}
export const BgColorsIcon = (props: IconProps) => {
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
  let classes = `${prefixCls} ${prefixCls}-bg-colors`

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
        d="m9.442 25.25 10.351 10.765a1 1 0 0 0 1.428.014L32 25.25H9.442Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M19 5.25 22.75 9m0 0 12.043 12.043a1 1 0 0 1 0 1.414L32 25.25M22.75 9 8.693 23.057a1 1 0 0 0-.013 1.4l.762.793m0 0 10.351 10.765a1 1 0 0 0 1.428.014L32 25.25m-22.558 0H32M6 42h36" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40.013 29.812 37.201 27l-2.812 2.812a4 4 0 1 0 5.624 0Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}
