import type { App } from 'vue'
import { ImportIcon as _ImportIcon } from './import'

const ImportIcon = {
  install: (app: App) => {
    app.component('ImportIcon', _ImportIcon)
  }
}

export default ImportIcon
