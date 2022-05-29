import type { App } from 'vue'
import { BgColorsIcon as _BgColorsIcon } from './bg-colors'

const BgColorsIcon = {
  install: (app: App) => {
    app.component('BgColorsIcon', _BgColorsIcon)
  }
}

export default BgColorsIcon
