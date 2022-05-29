import type { App } from 'vue'
import { DoubleDownIcon as _DoubleDownIcon } from './double-down'

const DoubleDownIcon = {
  install: (app: App) => {
    app.component('DoubleDownIcon', _DoubleDownIcon)
  }
}

export default DoubleDownIcon
