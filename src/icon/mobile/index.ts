import type { App } from 'vue'
import { MobileIcon as _MobileIcon } from './mobile'

const MobileIcon = {
  install: (app: App) => {
    app.component('MobileIcon', _MobileIcon)
  }
}

export default MobileIcon
