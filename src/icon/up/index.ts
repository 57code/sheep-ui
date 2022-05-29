import type { App } from 'vue'
import { UpIcon as _UpIcon } from './up'

const UpIcon = {
  install: (app: App) => {
    app.component('UpIcon', _UpIcon)
  }
}

export default UpIcon
