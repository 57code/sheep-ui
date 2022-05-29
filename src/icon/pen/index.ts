import type { App } from 'vue'
import { PenIcon as _PenIcon } from './pen'

const PenIcon = {
  install: (app: App) => {
    app.component('PenIcon', _PenIcon)
  }
}

export default PenIcon
