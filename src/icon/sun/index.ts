import type { App } from 'vue'
import { SunIcon as _SunIcon } from './sun'

const SunIcon = {
  install: (app: App) => {
    app.component('SunIcon', _SunIcon)
  }
}

export default SunIcon
