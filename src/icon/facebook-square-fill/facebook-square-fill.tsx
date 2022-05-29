import { getComponentCls } from '../../_utils/global-config'
import { isNumber } from '../../_utils/is'
interface IconProps {
  size?: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin?: boolean
}
export const FacebookSquareFillIcon = (props: IconProps) => {
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
  let classes = `${prefixCls} ${prefixCls}-facebook-square-fill`

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
        d="M43.125 2.475c.6 0 1.2.225 1.688.713.524.487.75 1.012.75 1.612v38.363c0 .6-.263 1.2-.75 1.612-.526.488-1.088.713-1.688.713H32.138V28.913h5.625l.825-6.563h-6.45v-4.275c0-2.137 1.087-3.225 3.3-3.225h3.374V9.263c-1.2-.225-2.85-.338-5.024-.338-2.513 0-4.5.75-6.038 2.25-1.538 1.5-2.288 3.675-2.288 6.375v4.8h-5.625v6.563h5.625v16.575h-20.7c-.6 0-1.2-.225-1.612-.713-.487-.487-.712-1.012-.712-1.612V4.8c0-.6.224-1.2.712-1.612.488-.488 1.012-.713 1.613-.713h38.362Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}
