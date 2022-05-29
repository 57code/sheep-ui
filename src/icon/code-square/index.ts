import type { App } from 'vue'
import { CodeSquareIcon as _CodeSquareIcon } from './code-square'

const CodeSquareIcon = {
  install: (app: App) => {
    app.component('CodeSquareIcon', _CodeSquareIcon)
  }
}

export default CodeSquareIcon
