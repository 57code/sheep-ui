import type { App } from 'vue'
import { ToTopIcon as _ToTopIcon } from './to-top'

const ToTopIcon = {
  install: (app: App) => {
    app.component('ToTopIcon', _ToTopIcon)
  }
}

export default ToTopIcon
