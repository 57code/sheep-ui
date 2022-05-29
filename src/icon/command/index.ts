import type { App } from 'vue'
import { CommandIcon as _CommandIcon } from './command'

const CommandIcon = {
  install: (app: App) => {
    app.component('CommandIcon', _CommandIcon)
  }
}

export default CommandIcon
