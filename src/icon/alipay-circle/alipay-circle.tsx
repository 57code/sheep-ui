import { getComponentCls } from '../../_utils/global-config'
import { isNumber } from '../../_utils/is'
interface IconProps {
  size?: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin?: boolean
}
export const AlipayCircleIcon = (props: IconProps) => {
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
  let classes = `${prefixCls} ${prefixCls}-alipay-circle`

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
        d="M10.8 27.025c-.566.456-1.174 1.122-1.35 1.968-.24 1.156-.05 2.604 1.065 3.739 1.352 1.376 3.405 1.753 4.292 1.818 2.41.174 4.978-1.02 6.913-2.384.759-.535 2.058-1.61 3.3-3.268-2.783-1.437-6.257-3.026-9.97-2.87-1.898.079-3.256.472-4.25.997Zm35.29 6.354A23.872 23.872 0 0 0 48 24C48 10.767 37.234 0 24 0S0 10.767 0 24c0 13.234 10.766 24 24 24 7.987 0 15.07-3.925 19.436-9.943a2688.801 2688.801 0 0 0-15.11-7.467c-1.999 2.277-4.953 4.56-8.29 5.554-2.097.623-3.986.86-5.963.457-1.956-.4-3.397-1.317-4.237-2.235-.428-.469-.92-1.064-1.275-1.773.033.09.056.143.056.143s-.204-.353-.361-.914a4.03 4.03 0 0 1-.157-.85 4.383 4.383 0 0 1-.009-.612 4.409 4.409 0 0 1 .078-1.128c.197-.948.601-2.054 1.649-3.08 2.3-2.251 5.38-2.372 6.976-2.363 2.363.014 6.47 1.048 9.928 2.27.958-2.04 1.573-4.221 1.97-5.676H14.31v-1.555h7.384V15.72h-8.938v-1.555h8.938v-3.108c0-.427.084-.778.777-.778h3.498v3.886h9.717v1.555H25.97v3.11h7.773s-.78 4.35-3.221 8.64c5.416 1.934 13.037 4.914 15.568 5.91Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}
