import type { App } from 'vue'
import { EyeIcon as _EyeIcon } from './eye'

const EyeIcon = {
  install: (app: App) => {
    app.component('EyeIcon', _EyeIcon)
  }
}

export default EyeIcon
