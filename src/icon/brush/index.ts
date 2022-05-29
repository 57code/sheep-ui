import type { App } from 'vue'
import { BrushIcon as _BrushIcon } from './brush'

const BrushIcon = {
  install: (app: App) => {
    app.component('BrushIcon', _BrushIcon)
  }
}

export default BrushIcon
