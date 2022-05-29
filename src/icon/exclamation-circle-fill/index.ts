import type { App } from 'vue'
import { ExclamationCircleFillIcon as _ExclamationCircleFillIcon } from './exclamation-circle-fill'

const ExclamationCircleFillIcon = {
  install: (app: App) => {
    app.component('ExclamationCircleFillIcon', _ExclamationCircleFillIcon)
  }
}

export default ExclamationCircleFillIcon
