import type { App } from 'vue'
import { CodeBlockIcon as _CodeBlockIcon } from './code-block'

const CodeBlockIcon = {
  install: (app: App) => {
    app.component('CodeBlockIcon', _CodeBlockIcon)
  }
}

export default CodeBlockIcon
