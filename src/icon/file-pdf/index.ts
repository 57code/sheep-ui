import type { App } from 'vue'
import { FilePdfIcon as _FilePdfIcon } from './file-pdf'

const FilePdfIcon = {
  install: (app: App) => {
    app.component('FilePdfIcon', _FilePdfIcon)
  }
}

export default FilePdfIcon
