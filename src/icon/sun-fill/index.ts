import type { App } from 'vue'
import { SunFillIcon as _SunFillIcon } from './sun-fill'

const SunFillIcon = {
  install: (app: App) => {
    app.component('SunFillIcon', _SunFillIcon)
  }
}

export default SunFillIcon
