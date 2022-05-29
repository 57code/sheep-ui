import type { App } from 'vue'
import { QqCircleFillIcon as _QqCircleFillIcon } from './qq-circle-fill'

const QqCircleFillIcon = {
  install: (app: App) => {
    app.component('QqCircleFillIcon', _QqCircleFillIcon)
  }
}

export default QqCircleFillIcon
