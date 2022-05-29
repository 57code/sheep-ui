import type { App } from 'vue'
import { FontColorsIcon as _FontColorsIcon } from './font-colors'

const FontColorsIcon = {
  install: (app: App) => {
    app.component('FontColorsIcon', _FontColorsIcon)
  }
}

export default FontColorsIcon
