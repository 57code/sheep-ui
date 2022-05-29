import type { App } from 'vue'
import { RedoIcon as _RedoIcon } from './redo'

const RedoIcon = {
  install: (app: App) => {
    app.component('RedoIcon', _RedoIcon)
  }
}

export default RedoIcon
