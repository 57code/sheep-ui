import type { App } from 'vue'
import { CheckIcon as _CheckIcon } from './check'

const CheckIcon = {
  install: (app: App) => {
    app.component('CheckIcon', _CheckIcon)
  }
}

export default CheckIcon
