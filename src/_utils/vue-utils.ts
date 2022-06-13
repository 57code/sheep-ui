import { Fragment, Comment, cloneVNode } from 'vue'
import type { VNode } from 'vue'
import { isArray, isFunction } from './is'

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
type Data = Record<string, any>

export const isTextNode = (vnode: VNode) =>
  vnode && vnode.shapeFlag & ShapeFlags.TEXT_CHILDREN

export const isComponent = (vnode: VNode) =>
  vnode && vnode.shapeFlag & ShapeFlags.COMPONENT

export const isElement = (vnode: VNode) =>
  vnode && vnode.shapeFlag & ShapeFlags.ELEMENT

export const isSlot = (vnode: VNode) =>
  vnode && vnode.shapeFlag & ShapeFlags.SLOTS_CHILDREN
export const isArrayChildrenNode = (vnode: VNode) =>
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

export const mergeFirstChild = (
  children: VNode[] | undefined,
  extraProps: Data | ((vnode?: VNode) => Data)
): boolean => {
  if (!children?.length) return false

  for (let i = 0; i < children.length; i++) {
    const vnode = children[i]
    if (isElement(vnode) || isComponent(vnode)) {
      const props = isFunction(extraProps) ? extraProps(vnode) : extraProps
      children[i] = cloneVNode(vnode, props, true)
      return true
    }
    const _children = getArrayChildren(vnode)
    if (_children && _children.length) {
      const result = mergeFirstChild(_children, extraProps)
      if (result) return result
    }
  }

  return false
}

function getArrayChildren(vnode: VNode): VNode[] | undefined {
  if (isArrayChildrenNode(vnode)) return vnode.children as VNode[]
  if (isArray(vnode)) return vnode

  return undefined
}

export function getFirstElementFromChildren(children: VNode[]) {
  for (const child of children) {
    const element = getFirstElementFromVnode(child)
    if (element) return element
  }
  return undefined
}

export const getFirstElementFromVnode = (
  vnode: VNode
): HTMLElement | undefined => {
  if (isElement(vnode)) return vnode.el as HTMLElement

  if (isComponent(vnode)) {
    if ((vnode.el as Node).nodeType === Node.ELEMENT_NODE)
      return vnode.el as HTMLElement

    if (vnode.component?.subTree) {
      const element = getFirstElementFromVnode(vnode.component?.subTree)
      if (element) return element
    }
  } else {
    const children = getArrayChildren(vnode)
    if (children) return getFirstElementFromChildren(children)
  }
  return undefined
}
