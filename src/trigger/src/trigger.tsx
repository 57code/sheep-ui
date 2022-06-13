import {
  computed,
  CSSProperties,
  defineComponent,
  nextTick,
  onMounted,
  ref,
  Teleport,
  toRef,
  Transition,
  watch,
  onUpdated,
  onBeforeUnmount
} from 'vue'
import basicProps from './trigger-type'
import { getComponentCls } from '../../_utils/global-config'
import { mergeFirstChild } from '../../_utils/vue-utils'
import { useFirstElement } from '../../_hooks/useFirstElement'
import { getElementScrollRect, genPopupStyle } from './helper'
import { off, on } from '../../_utils/dom'

export default defineComponent({
  name: 'Trigger',
  props: basicProps,
  emits: ['update:popupVisible', 'change', 'show', 'hide'],
  setup(props, { emit, slots }) {
    // const children: { value?: VNode[] } = {}
    const prefixCls = getComponentCls('trigger')

    const { defaultSlot, firstElement } = useFirstElement(slots)
    const popupContainer = toRef(props, 'popupContainer')
    const popupVisible = ref(props.defaultPopupVisible)
    // const triggerMethods = computed(()=>)
    const getVisible = computed(() => props.popupVisible ?? popupVisible.value)

    const containerRef = ref(popupContainer.value ?? 'body')
    const teleportContainer = popupContainer.value ?? 'body'

    const popupRef = ref<HTMLElement>()
    const innerPopupStyle = ref<CSSProperties>({})

    const getPopupStyle = computed(() => ({
      ...props.popupStyle,
      ...innerPopupStyle.value
    }))
    // TODO 暂时写死
    const zIndex = ref(500)
    let outsideListener = false

    console.log('setuped')

    // dynamically calculate the style if popup
    const updatePopupStyle = () => {
      if (!firstElement.value || !containerRef.value || !popupRef.value) return
      const containerRect = document.body.getBoundingClientRect()
      const triggerRect = getElementScrollRect(
        firstElement.value,
        containerRect
      )
      const popupRect = getElementScrollRect(popupRef.value, containerRect)
      const style = genPopupStyle(containerRect, triggerRect, popupRect)

      innerPopupStyle.value = { ...style, zIndex: zIndex.value }
    }
    const updateVisible = (newVisible: boolean) => {
      if (newVisible === getVisible.value) return
      popupVisible.value = newVisible
      emit('update:popupVisible', newVisible)
      emit('change', newVisible)

      if (newVisible) {
        nextTick(() => {
          updatePopupStyle()
        })
      }
    }
    const handleClick = (e: MouseEvent) => {
      if (props.disabled || props.trigger !== 'click') return
      updateVisible(!getVisible.value)
    }
    const handleMouseEnter = (e: MouseEvent) => {
      if (props.disabled || props.trigger !== 'hover') return
      updateVisible(true)
    }
    const handleMouseLeave = (e: MouseEvent) => {
      if (props.disabled || props.trigger !== 'hover') return
      updateVisible(false)
    }
    const handleShow = () => getVisible.value && emit('show')
    const handleHide = () => {
      if (!getVisible.value) {
        emit('hide')
      }
    }
    const handleOutsideClick = (e: Event) => {
      if (
        firstElement.value?.contains(e.target as HTMLElement) ||
        popupRef.value?.contains(e.target as HTMLElement)
      ) {
        return
      }
      updateVisible(false)
    }
    watch(
      () => getVisible.value,
      value => {
        if (!props.clickOutsideToClose) return
        if (value && !outsideListener) {
          on(document.documentElement, 'mousedown', handleOutsideClick)
          outsideListener = true
        } else {
          off(document.documentElement, 'mousedown', handleOutsideClick)
          outsideListener = false
        }
      },
      { immediate: true }
    )
    onMounted(() => {
      if (getVisible.value) {
        updatePopupStyle()
      }
    })

    onUpdated(() => {
      if (getVisible.value) {
        updatePopupStyle()
      }
    })

    onBeforeUnmount(() => {
      if (outsideListener) {
        off(document.documentElement, 'mousedown', handleOutsideClick)
        outsideListener = false
      }
    })
    mergeFirstChild(defaultSlot, {
      onClick: handleClick,
      onMouseenter: handleMouseEnter,
      onMouseleave: handleMouseLeave
    })
    return () => {
      // children.value =
      console.log('render')
      // const children = slots.default?.() ?? []

      return (
        <>
          {defaultSlot}
          <Teleport to={teleportContainer} disabled={!props.renderToBody}>
            {(!props.unmountOnClose || getVisible.value) && (
              <div
                ref={popupRef}
                onMouseenter={handleMouseEnter}
                onMouseleave={handleMouseLeave}
                class={[`${prefixCls}-popup`]}
                style={{ ...getPopupStyle.value }}
              >
                <Transition
                  name={props.animationName}
                  duration={props.duration}
                  appear
                  onAfterEnter={handleShow}
                  onAfterLeave={handleHide}
                >
                  <div
                    class={`${prefixCls}-popup-content__wrapper`}
                    v-show={getVisible.value}
                  >
                    <div
                      class={`${prefixCls}-popup-content`}
                      style={props.contentStyle}
                    >
                      {slots.content?.()}
                    </div>
                  </div>
                </Transition>
              </div>
            )}
          </Teleport>
        </>
      )
    }
  }
})
