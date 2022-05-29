import type { App } from 'vue'
import { CloudDownloadIcon as _CloudDownloadIcon } from './cloud-download'

const CloudDownloadIcon = {
  install: (app: App) => {
    app.component('CloudDownloadIcon', _CloudDownloadIcon)
  }
}

export default CloudDownloadIcon
