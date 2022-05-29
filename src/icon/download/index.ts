import type { App } from 'vue'
import { DownloadIcon as _DownloadIcon } from './download'

const DownloadIcon = {
  install: (app: App) => {
    app.component('DownloadIcon', _DownloadIcon)
  }
}

export default DownloadIcon
