import type { App } from 'vue'
import { UpCircleIcon as _UpCircleIcon } from './up-circle'

const UpCircleIcon = {
  install: (app: App) => {
    app.component('UpCircleIcon', _UpCircleIcon)
  }
}

export default UpCircleIcon
