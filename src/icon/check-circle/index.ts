import type { App } from 'vue'
import { CheckCircleIcon as _CheckCircleIcon } from './check-circle'

const CheckCircleIcon = {
  install: (app: App) => {
    app.component('CheckCircleIcon', _CheckCircleIcon)
  }
}

export default CheckCircleIcon
