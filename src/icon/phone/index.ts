import type { App } from 'vue'
import { PhoneIcon as _PhoneIcon } from './phone'

const PhoneIcon = {
  install: (app: App) => {
    app.component('PhoneIcon', _PhoneIcon)
  }
}

export default PhoneIcon
