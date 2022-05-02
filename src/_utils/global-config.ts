import { getCurrentInstance } from 'vue'
import type { App } from 'vue'

const CLASS_PREFIX = 's'
const GLOBAL_CONFIG_NAME = '_sheep'
const COMPONENT_PREFIX = 'S'
export interface SheepUIOptions {
  classPrefix?: string
  componentPrefix?: string
}

// 注入全局app属性
export const setGlobalConfig = (
  app: App,
  options: SheepUIOptions = { classPrefix: CLASS_PREFIX }
) => {
  app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
    ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
    classPrefix: options.classPrefix
  }
}

// 获取组件name的prefix
export const getComponentPrefix = (options?: SheepUIOptions): string =>
  options?.componentPrefix ?? COMPONENT_PREFIX

// 获取组件class
export const getComponentCls = (componentName?: string): string => {
  const instance = getCurrentInstance()
  //TODO 后期需要配合config-provider组件来获取全局prefixCls ,优先级 config.classPrefix  > options.classPrefix > CLASS_PREFIX

  const prefix =
    instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]
      ?.classPrefix ?? CLASS_PREFIX

  if (componentName) {
    return `${prefix}-${componentName}`
  }

  return prefix
}
