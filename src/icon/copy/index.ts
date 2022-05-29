import type { App } from 'vue'
import { CopyIcon as _CopyIcon } from './copy'

const CopyIcon = {
  install: (app: App) => {
    app.component('CopyIcon', _CopyIcon)
  }
}

export default CopyIcon
