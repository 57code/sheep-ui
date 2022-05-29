import type { App } from 'vue'
import { CopyrightIcon as _CopyrightIcon } from './copyright'

const CopyrightIcon = {
  install: (app: App) => {
    app.component('CopyrightIcon', _CopyrightIcon)
  }
}

export default CopyrightIcon
