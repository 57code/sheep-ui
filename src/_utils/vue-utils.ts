import { Fragment, Comment } from 'vue'
import type { VNode } from 'vue'

export const enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1,
  STATEFUL_COMPONENT = 1 << 2,
  TEXT_CHILDREN = 1 << 3,
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}

export const isTextNode = (vnode: VNode) =>
  vnode && vnode.shapeFlag & ShapeFlags.TEXT_CHILDREN

export const isComponent = (vnode: VNode) =>
  vnode && vnode.shapeFlag & ShapeFlags.COMPONENT

export const isElement = (vnode: VNode) =>
  vnode && vnode.shapeFlag & ShapeFlags.ELEMENT

export const isSlot = (vnode: VNode) =>
  vnode && vnode.shapeFlag & ShapeFlags.SLOTS_CHILDREN
export const isArrayNode = (vnode: VNode) =>
  vnode && vnode.shapeFlag & ShapeFlags.ARRAY_CHILDREN
export const isFragment = (vnode: VNode) => vnode && vnode.type === Fragment
export function getAllElements(children: VNode[] | undefined) {
  const result: VNode[] = []

  for (const item of children ?? []) {
    // vue 会渲染comment
    if (item.type === Comment) continue

    if (isTextNode(item) || isComponent(item) || isElement(item)) {
      result.push(item)
    } else if (Array.isArray(item)) {
      result.push(...getAllElements(item))
    } else if (isFragment(item)) {
      if (item.children && Array.isArray(item.children)) {
        result.push(...getAllElements(item.children as VNode[]))
      }
    }
  }

  return result
}
