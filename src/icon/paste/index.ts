import type { App } from 'vue'
import { PasteIcon as _PasteIcon } from './paste'

const PasteIcon = {
  install: (app: App) => {
    app.component('PasteIcon', _PasteIcon)
  }
}

export default PasteIcon
