import type { App } from 'vue'
import { BoldIcon as _BoldIcon } from './bold'

const BoldIcon = {
  install: (app: App) => {
    app.component('BoldIcon', _BoldIcon)
  }
}

export default BoldIcon
