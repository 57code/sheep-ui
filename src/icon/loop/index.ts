import type { App } from 'vue'
import { LoopIcon as _LoopIcon } from './loop'

const LoopIcon = {
  install: (app: App) => {
    app.component('LoopIcon', _LoopIcon)
  }
}

export default LoopIcon
