import type { App } from 'vue'
import { FolderAddIcon as _FolderAddIcon } from './folder-add'

const FolderAddIcon = {
  install: (app: App) => {
    app.component('FolderAddIcon', _FolderAddIcon)
  }
}

export default FolderAddIcon
