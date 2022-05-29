import { getComponentCls } from '../../_utils/global-config'
import { isNumber } from '../../_utils/is'
interface IconProps {
  size?: number | string
  strokeWidth?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  spin?: boolean
}
export const WeiboIcon = (props: IconProps) => {
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
  let classes = `${prefixCls} ${prefixCls}-weibo`

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
        d="M31.82 5.6c-1.445.635-1.776 2.144-.727 3.192.515.516.993.608 3.11.608 2.952 0 4.94.781 6.448 2.53 1.84 2.079 2.052 2.714 2.052 6.513 0 3.377 0 3.441.782 3.892 1.812 1.021 3.017-.24 3.44-3.616.544-4.397-2.078-9.531-6.025-11.877-2.595-1.509-7.029-2.116-9.08-1.242Zm-14.831 5.612c-3.376 1.205-6.633 3.524-10.13 7.268-8.288 8.804-7.746 17.186 1.39 21.648 9.494 4.636 22.282 3.1 29.247-3.533 5.216-4.94 4.581-11.16-1.353-13.267-1.058-.358-1.389-.634-1.232-.966.542-1.324.726-2.86.423-3.772-.939-2.86-4.343-3.523-9.403-1.812l-2.024.69.184-2.024c.212-2.383-.303-3.68-1.72-4.398-1.187-.588-3.45-.524-5.382.166Zm8.381 11.666c4.49 1.232 7.231 3.946 7.231 7.176 0 3.588-3.192 6.817-8.38 8.528-2.77.902-7.931 1.086-10.461.396-4.793-1.353-7.507-4.012-7.507-7.416 0-1.867.81-3.496 2.594-5.152 1.656-1.564 2.926-2.318 5.364-3.137 3.689-1.242 7.636-1.389 11.16-.395Zm-9.494 2.925c-3.045 1.417-4.674 3.588-4.674 6.302 0 2.475 1.086 4.159 3.469 5.428 1.84.994 5.216.902 7.268-.147 2.622-1.39 4.342-3.947 4.342-6.45-.028-2.05-1.84-4.489-3.984-5.363-1.72-.736-4.609-.616-6.421.23Zm2.199 5.667c.211.212.358.727.358 1.178 0 1.509-2.53 2.742-3.56 1.72-.57-.57-.423-1.987.24-2.65.662-.662 2.391-.818 2.962-.248Zm14.26-19.688c-1.39 1.39-.451 3.046 1.748 3.046 1.895 0 2.741.966 2.741 3.137 0 1.352.12 1.748.663 2.107 1.628 1.15 2.953-.12 2.953-2.806 0-3.285-2.355-5.76-5.695-5.999-1.509-.12-1.868-.027-2.41.515Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}
