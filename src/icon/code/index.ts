import type { App } from 'vue'
import { CodeIcon as _CodeIcon } from './code'

const CodeIcon = {
  install: (app: App) => {
    app.component('CodeIcon', _CodeIcon)
  }
}

export default CodeIcon
