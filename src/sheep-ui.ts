import type { App, Plugin } from 'vue'
import * as components from './components'
import version from './version'

const SheepUI = {
  version,
  install(app: App) {
    Object.keys(components).forEach(key => {
      app.use(components[key as keyof typeof components] as Plugin)
    })
  }
}

export default SheepUI
