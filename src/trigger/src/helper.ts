import { CSSProperties } from 'vue'

export function getElementScrollRect(
  element: HTMLElement,
  containerRect: DOMRect
) {
  const rect = element.getBoundingClientRect()
  return {
    top: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    right: rect.right,
    scrollTop: rect.top - containerRect.top,
    scrollBottom: rect.bottom - containerRect.top,
    scrollLeft: rect.left - containerRect.left,
    scrollRight: rect.right - containerRect.left,
    width: element.offsetWidth ?? element.clientWidth,
    height: element.offsetHeight ?? element.clientHeight
  } as unknown as DOMRect
}

export function genPopupStyle(
  containerRect: DOMRect,
  triggerRect: DOMRect,
  popupRect: DOMRect
): CSSProperties {
  const popupPositon = genPopupOffset(triggerRect, popupRect)
  const style = {
    top: popupPositon.top + 'px',
    left: popupPositon.left + 'px'
  }
  return style
}

function genPopupOffset(triggerRect: DOMRect, popupRect: DOMRect) {
  // 默认从底部弹出
  console.log(triggerRect, popupRect)
  return {
    top: triggerRect.bottom,
    left: triggerRect.left + triggerRect.width / 2 - popupRect.width / 2
  }
}
