import type { App } from 'vue'
import { FolderIcon as _FolderIcon } from './folder'

const FolderIcon = {
  install: (app: App) => {
    app.component('FolderIcon', _FolderIcon)
  }
}

export default FolderIcon
