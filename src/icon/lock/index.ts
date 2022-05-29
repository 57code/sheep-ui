import type { App } from 'vue'
import { LockIcon as _LockIcon } from './lock'

const LockIcon = {
  install: (app: App) => {
    app.component('LockIcon', _LockIcon)
  }
}

export default LockIcon
