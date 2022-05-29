import type { App } from 'vue'
import { ForwardIcon as _ForwardIcon } from './forward'

const ForwardIcon = {
  install: (app: App) => {
    app.component('ForwardIcon', _ForwardIcon)
  }
}

export default ForwardIcon
