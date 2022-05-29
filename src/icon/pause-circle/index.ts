import type { App } from 'vue'
import { PauseCircleIcon as _PauseCircleIcon } from './pause-circle'

const PauseCircleIcon = {
  install: (app: App) => {
    app.component('PauseCircleIcon', _PauseCircleIcon)
  }
}

export default PauseCircleIcon
