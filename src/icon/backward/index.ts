import type { App } from 'vue'
import { BackwardIcon as _BackwardIcon } from './backward'

const BackwardIcon = {
  install: (app: App) => {
    app.component('BackwardIcon', _BackwardIcon)
  }
}

export default BackwardIcon
