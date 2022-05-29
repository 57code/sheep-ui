import type { App } from 'vue'
import { QrcodeIcon as _QrcodeIcon } from './qrcode'

const QrcodeIcon = {
  install: (app: App) => {
    app.component('QrcodeIcon', _QrcodeIcon)
  }
}

export default QrcodeIcon
