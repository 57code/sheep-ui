import type { App } from 'vue'
import { ZoomInIcon as _ZoomInIcon } from './zoom-in'

const ZoomInIcon = {
  install: (app: App) => {
    app.component('ZoomInIcon', _ZoomInIcon)
  }
}

export default ZoomInIcon
