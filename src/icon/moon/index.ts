import type { App } from 'vue'
import { MoonIcon as _MoonIcon } from './moon'

const MoonIcon = {
  install: (app: App) => {
    app.component('MoonIcon', _MoonIcon)
  }
}

export default MoonIcon
