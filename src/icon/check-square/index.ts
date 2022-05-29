import type { App } from 'vue'
import { CheckSquareIcon as _CheckSquareIcon } from './check-square'

const CheckSquareIcon = {
  install: (app: App) => {
    app.component('CheckSquareIcon', _CheckSquareIcon)
  }
}

export default CheckSquareIcon
