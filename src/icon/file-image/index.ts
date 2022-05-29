import type { App } from 'vue'
import { FileImageIcon as _FileImageIcon } from './file-image'

const FileImageIcon = {
  install: (app: App) => {
    app.component('FileImageIcon', _FileImageIcon)
  }
}

export default FileImageIcon
