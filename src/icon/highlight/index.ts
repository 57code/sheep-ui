import type { App } from 'vue'
import { HighlightIcon as _HighlightIcon } from './highlight'

const HighlightIcon = {
  install: (app: App) => {
    app.component('HighlightIcon', _HighlightIcon)
  }
}

export default HighlightIcon
