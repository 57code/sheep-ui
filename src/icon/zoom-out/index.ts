import type { App } from 'vue'
import { ZoomOutIcon as _ZoomOutIcon } from './zoom-out'

const ZoomOutIcon = {
  install: (app: App) => {
    app.component('ZoomOutIcon', _ZoomOutIcon)
  }
}

export default ZoomOutIcon
