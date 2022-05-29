import { getComponentCls } from '../../_utils/global-config'
import { isNumber } from '../../_utils/is'
interface IconProps {
  size?: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin?: boolean
}
export const GoogleCircleFillIcon = (props: IconProps) => {
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
  let classes = `${prefixCls} ${prefixCls}-google-circle-fill`

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
        d="M32.571 33.526c-2.084 1.92-4.927 3.05-8.322 3.05a12.568 12.568 0 0 1-12.572-12.577A12.58 12.58 0 0 1 24.25 11.416a12.103 12.103 0 0 1 8.414 3.277L29.061 18.3a6.787 6.787 0 0 0-4.807-1.88c-3.277 0-6.045 2.213-7.037 5.186a7.567 7.567 0 0 0-.394 2.392c0 .833.144 1.638.394 2.391.992 2.973 3.763 5.187 7.032 5.187 1.696 0 3.133-.449 4.254-1.202a5.778 5.778 0 0 0 2.513-3.8h-6.767V21.71h11.844c.15.825.227 1.682.227 2.57 0 3.835-1.371 7.055-3.749 9.246ZM24 1A23 23 0 1 0 24 47 23 23 0 0 0 24 1Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}
