import type { App } from 'vue'
import { UploadIcon as _UploadIcon } from './upload'

const UploadIcon = {
  install: (app: App) => {
    app.component('UploadIcon', _UploadIcon)
  }
}

export default UploadIcon
