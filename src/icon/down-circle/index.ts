import type { App } from 'vue'
import { DownCircleIcon as _DownCircleIcon } from './down-circle'

const DownCircleIcon = {
  install: (app: App) => {
    app.component('DownCircleIcon', _DownCircleIcon)
  }
}

export default DownCircleIcon
