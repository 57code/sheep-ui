import type { App } from 'vue'
import { ToBottomIcon as _ToBottomIcon } from './to-bottom'

const ToBottomIcon = {
  install: (app: App) => {
    app.component('ToBottomIcon', _ToBottomIcon)
  }
}

export default ToBottomIcon
