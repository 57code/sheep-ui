import type { App } from 'vue'
import { EraserIcon as _EraserIcon } from './eraser'

const EraserIcon = {
  install: (app: App) => {
    app.component('EraserIcon', _EraserIcon)
  }
}

export default EraserIcon
