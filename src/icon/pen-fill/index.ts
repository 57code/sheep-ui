import type { App } from 'vue'
import { PenFillIcon as _PenFillIcon } from './pen-fill'

const PenFillIcon = {
  install: (app: App) => {
    app.component('PenFillIcon', _PenFillIcon)
  }
}

export default PenFillIcon
