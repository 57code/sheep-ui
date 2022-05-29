import type { App } from 'vue'
import { CodeSandboxIcon as _CodeSandboxIcon } from './code-sandbox'

const CodeSandboxIcon = {
  install: (app: App) => {
    app.component('CodeSandboxIcon', _CodeSandboxIcon)
  }
}

export default CodeSandboxIcon
