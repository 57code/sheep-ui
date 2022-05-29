import type { App } from 'vue'
import { DeleteIcon as _DeleteIcon } from './delete'

const DeleteIcon = {
  install: (app: App) => {
    app.component('DeleteIcon', _DeleteIcon)
  }
}

export default DeleteIcon
