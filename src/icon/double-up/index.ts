import type { App } from 'vue'
import { DoubleUpIcon as _DoubleUpIcon } from './double-up'

const DoubleUpIcon = {
  install: (app: App) => {
    app.component('DoubleUpIcon', _DoubleUpIcon)
  }
}

export default DoubleUpIcon
