import type { App } from 'vue'
import { DriveFileIcon as _DriveFileIcon } from './drive-file'

const DriveFileIcon = {
  install: (app: App) => {
    app.component('DriveFileIcon', _DriveFileIcon)
  }
}

export default DriveFileIcon
