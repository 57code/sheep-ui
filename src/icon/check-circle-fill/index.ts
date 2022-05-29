import type { App } from 'vue'
import { CheckCircleFillIcon as _CheckCircleFillIcon } from './check-circle-fill'

const CheckCircleFillIcon = {
  install: (app: App) => {
    app.component('CheckCircleFillIcon', _CheckCircleFillIcon)
  }
}

export default CheckCircleFillIcon
