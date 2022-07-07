import { setGlobalConfig } from './_utils/global-config'
import type { SheepUIOptions } from './_utils/global-config'
import type { App } from 'vue'

type ComponentType = any

export function installComponent(
  app: App,
  component: ComponentType,
  options?: SheepUIOptions
) {
  console.log(component.name)
  const registered = app.component(component.name)

  if (!registered) {
    setGlobalConfig(app, options)
    app.component(component.name, component)
  }
}
