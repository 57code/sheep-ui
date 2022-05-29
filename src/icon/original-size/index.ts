import type { App } from 'vue'
import { OriginalSizeIcon as _OriginalSizeIcon } from './original-size'

const OriginalSizeIcon = {
  install: (app: App) => {
    app.component('OriginalSizeIcon', _OriginalSizeIcon)
  }
}

export default OriginalSizeIcon
