import type { App } from 'vue'
import { StopIcon as _StopIcon } from './stop'

const StopIcon = {
  install: (app: App) => {
    app.component('StopIcon', _StopIcon)
  }
}

export default StopIcon
