interface IconProps {
  size?: number | string
  color?: string
}
export const ArrowDownIcon = (props: IconProps) => {
  const size = props.size
    ? typeof props.size === 'number'
      ? `${props.size}px`
      : props.size
    : undefined

  const color = props.color ? props.color : 'black'

  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-arrow-down"
      style={{ width: size, height: size, fill: color, stroke: color }}
    >
      <path d="m11.27 27.728 12.727 12.728 12.728-12.728M24 5v34.295" />
    </svg>
  )
}
