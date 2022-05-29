import type { App } from 'vue'
import { FileVideoIcon as _FileVideoIcon } from './file-video'

const FileVideoIcon = {
  install: (app: App) => {
    app.component('FileVideoIcon', _FileVideoIcon)
  }
}

export default FileVideoIcon
