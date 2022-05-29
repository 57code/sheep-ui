import type { App } from 'vue'
import { DoubleRightIcon as _DoubleRightIcon } from './double-right'

const DoubleRightIcon = {
  install: (app: App) => {
    app.component('DoubleRightIcon', _DoubleRightIcon)
  }
}

export default DoubleRightIcon
