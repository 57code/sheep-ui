import type { App } from 'vue'
import { StorageIcon as _StorageIcon } from './storage'

const StorageIcon = {
  install: (app: App) => {
    app.component('StorageIcon', _StorageIcon)
  }
}

export default StorageIcon
