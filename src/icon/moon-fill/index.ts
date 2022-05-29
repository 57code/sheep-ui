import type { App } from 'vue'
import { MoonFillIcon as _MoonFillIcon } from './moon-fill'

const MoonFillIcon = {
  install: (app: App) => {
    app.component('MoonFillIcon', _MoonFillIcon)
  }
}

export default MoonFillIcon
