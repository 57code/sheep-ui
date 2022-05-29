import type { App } from 'vue'
import { ExclamationIcon as _ExclamationIcon } from './exclamation'

const ExclamationIcon = {
  install: (app: App) => {
    app.component('ExclamationIcon', _ExclamationIcon)
  }
}

export default ExclamationIcon
