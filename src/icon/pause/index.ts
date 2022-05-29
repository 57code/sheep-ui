import type { App } from 'vue'
import { PauseIcon as _PauseIcon } from './pause'

const PauseIcon = {
  install: (app: App) => {
    app.component('PauseIcon', _PauseIcon)
  }
}

export default PauseIcon
