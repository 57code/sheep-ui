import type { App } from 'vue'
import { QqIcon as _QqIcon } from './qq'

const QqIcon = {
  install: (app: App) => {
    app.component('QqIcon', _QqIcon)
  }
}

export default QqIcon
