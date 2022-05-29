import type { App } from 'vue'
import { PrinterIcon as _PrinterIcon } from './printer'

const PrinterIcon = {
  install: (app: App) => {
    app.component('PrinterIcon', _PrinterIcon)
  }
}

export default PrinterIcon
