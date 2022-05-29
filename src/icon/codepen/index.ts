import type { App } from 'vue'
import { CodepenIcon as _CodepenIcon } from './codepen'

const CodepenIcon = {
  install: (app: App) => {
    app.component('CodepenIcon', _CodepenIcon)
  }
}

export default CodepenIcon
