import type { App } from 'vue'
import { SyncIcon as _SyncIcon } from './sync'

const SyncIcon = {
  install: (app: App) => {
    app.component('SyncIcon', _SyncIcon)
  }
}

export default SyncIcon
