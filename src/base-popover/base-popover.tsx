import {
  defineComponent,
  watch,
  PropType,
  ref,
  toRefs,
  nextTick,
  onUnmounted
} from 'vue'
import {
  computePosition,
  arrow,
  offset,
  Placement,
  autoPlacement
} from '@floating-ui/dom'
import './base-popover.scss'

export default defineComponent({
  name: 'SBasePopover',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    host: {
      type: Object as PropType<HTMLElement>,
      default: () => null
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom'
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots, attrs }) {
    // 获取属性中关键值
    const { host: hostRef, modelValue, showArrow, placement } = toRefs(props)

    // 箭头元素
    const arrowRef = ref()

    // 浮动元素
    const overlayRef = ref()

    // 计算定位
    const updatePosition = () => {
      const middleware = []
      if (showArrow.value) {
        middleware.push(offset(8))
        middleware.push(arrow({ element: arrowRef.value }))
      }

      // 如果用户没有指定placement，则自动调整定位
      if (!placement.value) {
        middleware.push(autoPlacement())
      }

      computePosition(hostRef.value, overlayRef.value, {
        middleware,
        placement: placement.value || 'bottom'
      }).then(({ x, y, middlewareData, placement }) => {
        Object.assign(overlayRef.value.style, {
          left: x + 'px',
          top: y + 'px'
        })

        if (showArrow.value) {
          const { x: arrowX, y: arrowY } = middlewareData.arrow!

          // 首先获取当前所在边 例如top-end
          const currentSide = placement.split('-')[0]
          const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right'
          }[currentSide]

          const SIDE = ['top', 'right', 'bottom', 'left']

          const prevIndex = SIDE.indexOf(currentSide) - 1
          const nextSide = SIDE[prevIndex < 0 ? prevIndex + 4 : prevIndex]

          // 每次计算结束，重新计算箭头定位样式
          Object.assign(arrowRef.value.style, {
            left: arrowX + 'px',
            top: arrowY + 'px',
            [staticSide!]: '-4px',
            [`border-${currentSide}-color`]: 'transparent',
            [`border-${nextSide}-color`]: 'transparent'
          })
        }
      })
    }

    // 创建mutationobserver监听宿主元素的状态变化
    const mutationObserver = new MutationObserver(() => updatePosition())

    watch(
      modelValue,
      newVal => {
        // 当前newVal为true，即overlay需要显示时，需要重新更新位置
        if (newVal) {
          nextTick(updatePosition)

          // 监听两个事件和宿主元素尺寸、定位变化
          hostRef.value &&
            mutationObserver.observe(hostRef.value, { attributes: true })
          window.addEventListener('resize', updatePosition)
          window.addEventListener('scroll', updatePosition)
        } else {
          mutationObserver.disconnect()
          window.removeEventListener('resize', updatePosition)
          window.removeEventListener('scroll', updatePosition)
        }
      },
      {
        immediate: true
      }
    )

    onUnmounted(() => {
      mutationObserver.disconnect()
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    })

    return () => (
      <>
        {modelValue.value && (
          <div ref={overlayRef} class="s-base-popover" {...attrs}>
            {/* 弹窗内容 */}
            {slots.default?.()}

            {/* 箭头元素 */}
            {showArrow.value && (
              <div class="s-base-popover__arrow" ref={arrowRef}></div>
            )}
          </div>
        )}
      </>
    )
  }
})
