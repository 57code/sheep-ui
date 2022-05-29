import type { App } from 'vue'
import { FolderDeleteIcon as _FolderDeleteIcon } from './folder-delete'

const FolderDeleteIcon = {
  install: (app: App) => {
    app.component('FolderDeleteIcon', _FolderDeleteIcon)
  }
}

export default FolderDeleteIcon
