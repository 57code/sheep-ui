import type { App } from 'vue'
import { ExclamationCircleIcon as _ExclamationCircleIcon } from './exclamation-circle'

const ExclamationCircleIcon = {
  install: (app: App) => {
    app.component('ExclamationCircleIcon', _ExclamationCircleIcon)
  }
}

export default ExclamationCircleIcon
