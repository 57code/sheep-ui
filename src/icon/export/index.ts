import type { App } from 'vue'
import { ExportIcon as _ExportIcon } from './export'

const ExportIcon = {
  install: (app: App) => {
    app.component('ExportIcon', _ExportIcon)
  }
}

export default ExportIcon
