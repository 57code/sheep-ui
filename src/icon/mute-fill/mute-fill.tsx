import { getComponentCls } from '../../_utils/global-config'
import { isNumber } from '../../_utils/is'
interface IconProps {
  size?: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin?: boolean
}
export const MuteFillIcon = (props: IconProps) => {
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
  let classes = `${prefixCls} ${prefixCls}-mute-fill`

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
        d="M5.931 13.001A2 2 0 0 0 4 15v18a2 2 0 0 0 2 2h7.37l9.483 6.639A2 2 0 0 0 26 40v-6.93L5.931 13.001ZM35.27 28.199l-3.311-3.313a7.985 7.985 0 0 0-1.96-6.107.525.525 0 0 1 .011-.718l2.122-2.122a.485.485 0 0 1 .7.008c3.125 3.393 3.938 8.15 2.439 12.252ZM41.13 34.059l-2.936-2.937c3.07-5.89 2.226-13.288-2.531-18.348a.513.513 0 0 1 .004-.713l2.122-2.122a.492.492 0 0 1 .703.006c6.322 6.64 7.202 16.56 2.639 24.114ZM26 18.928l-8.688-8.688 5.541-3.878A2 2 0 0 1 26 8v10.928Z"
        fill="currentColor"
        stroke="none"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m7.012 4.184 35.272 35.272-2.828 2.828L4.184 7.012l2.828-2.828Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}
