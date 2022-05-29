import type { App } from 'vue'
import { DoubleLeftIcon as _DoubleLeftIcon } from './double-left'

const DoubleLeftIcon = {
  install: (app: App) => {
    app.component('DoubleLeftIcon', _DoubleLeftIcon)
  }
}

export default DoubleLeftIcon
