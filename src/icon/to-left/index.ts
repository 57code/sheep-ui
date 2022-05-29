import type { App } from 'vue'
import { ToLeftIcon as _ToLeftIcon } from './to-left'

const ToLeftIcon = {
  install: (app: App) => {
    app.component('ToLeftIcon', _ToLeftIcon)
  }
}

export default ToLeftIcon
