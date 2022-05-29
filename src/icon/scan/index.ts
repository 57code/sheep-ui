import type { App } from 'vue'
import { ScanIcon as _ScanIcon } from './scan'

const ScanIcon = {
  install: (app: App) => {
    app.component('ScanIcon', _ScanIcon)
  }
}

export default ScanIcon
