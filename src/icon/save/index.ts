import type { App } from 'vue'
import { SaveIcon as _SaveIcon } from './save'

const SaveIcon = {
  install: (app: App) => {
    app.component('SaveIcon', _SaveIcon)
  }
}

export default SaveIcon
