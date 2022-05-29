import type { App } from 'vue'
import { ToRightIcon as _ToRightIcon } from './to-right'

const ToRightIcon = {
  install: (app: App) => {
    app.component('ToRightIcon', _ToRightIcon)
  }
}

export default ToRightIcon
