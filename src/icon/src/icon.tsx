import { defineComponent, PropType, computed } from 'vue'

export default defineComponent({
  name: 'SIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: 'icon'
    },
    size: {
      type: [String, Number] as PropType<string | number>,
      default: 'inherit'
    },
    color: {
      type: String,
      default: 'inherit'
    },
    component: {
      type: String,
      default: null
    }
  },
  setup(props, { attrs }) {
    // 获取尺寸
    const iconSize = computed(() => {
      return typeof props.size === 'number' ? `${props.size}px` : props.size
    })

    // 如果是远程资源，使用图片显示
    const imgIcon = (
      <img
        src={props.name}
        style={{
          width: iconSize.value,
          verticalAlign: 'middle'
        }}
        {...attrs}
      ></img>
    )
    // 否则用span的class显示字体图标
    const fontIcon = (
      <span
        class={[props.prefix, props.prefix + '-' + props.name]}
        style={{ fontSize: iconSize.value, color: props.color }}
      ></span>
    )

    // svg显示
    const svgIcon = (
      <svg
        class="icon"
        style={{
          width: iconSize.value,
          height: iconSize.value
        }}
      >
        <use
          xlinkHref={`#${props.prefix}-${props.component}`}
          fill={props.color}
        ></use>
      </svg>
    )

    const icon = props.component
      ? svgIcon
      : /http|https/.test(props.name)
      ? imgIcon
      : fontIcon
    return () => icon
  }
})
