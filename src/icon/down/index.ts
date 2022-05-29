import type { App } from 'vue'
import { DownIcon as _DownIcon } from './down'

const DownIcon = {
  install: (app: App) => {
    app.component('DownIcon', _DownIcon)
  }
}

export default DownIcon
