import type { App } from 'vue'
import { PauseCircleFillIcon as _PauseCircleFillIcon } from './pause-circle-fill'

const PauseCircleFillIcon = {
  install: (app: App) => {
    app.component('PauseCircleFillIcon', _PauseCircleFillIcon)
  }
}

export default PauseCircleFillIcon
