import type { App } from 'vue'
import { ShakeIcon as _ShakeIcon } from './shake'

const ShakeIcon = {
  install: (app: App) => {
    app.component('ShakeIcon', _ShakeIcon)
  }
}

export default ShakeIcon
