import type { App } from 'vue'
import { ComputerIcon as _ComputerIcon } from './computer'

const ComputerIcon = {
  install: (app: App) => {
    app.component('ComputerIcon', _ComputerIcon)
  }
}

export default ComputerIcon
