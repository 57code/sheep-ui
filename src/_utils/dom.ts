import { isString } from './is'

export const NOOP = () => {
  return undefined
}

export const isServerRendering = (() => {
  try {
    return !(typeof window !== 'undefined' && document !== undefined)
  } catch (error) {
    return true
  }
})()

export function getElement(
  target: string | HTMLElement,
  container = document
): HTMLElement | undefined {
  if (isString(target)) {
    return container.querySelector<HTMLElement>(target) ?? undefined
  }
  return target
}

export const on = (() => {
  if (isServerRendering) return NOOP

  return (
    element: HTMLElement | Window,
    event: keyof HTMLElementEventMap,
    handler: EventListenerOrEventListenerObject,
    options: boolean | AddEventListenerOptions = false
  ) => {
    element.addEventListener(event, handler, options)
  }
})()

export const off = (() => {
  if (isServerRendering) return NOOP

  return (
    element: HTMLElement | Window,
    event: keyof HTMLElementEventMap,
    handler: EventListenerOrEventListenerObject,
    options: boolean | AddEventListenerOptions = false
  ) => {
    element.removeEventListener(event, handler, options)
  }
})()
