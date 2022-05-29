import type { App } from 'vue'
import { BugIcon as _BugIcon } from './bug'

const BugIcon = {
  install: (app: App) => {
    app.component('BugIcon', _BugIcon)
  }
}

export default BugIcon
