import type { App } from 'vue'
import { FileIcon as _FileIcon } from './file'

const FileIcon = {
  install: (app: App) => {
    app.component('FileIcon', _FileIcon)
  }
}

export default FileIcon
