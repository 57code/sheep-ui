import type { App } from 'vue'
import { EditIcon as _EditIcon } from './edit'

const EditIcon = {
  install: (app: App) => {
    app.component('EditIcon', _EditIcon)
  }
}

export default EditIcon
