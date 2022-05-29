import type { App } from 'vue'
import { SkipPreviousIcon as _SkipPreviousIcon } from './skip-previous'

const SkipPreviousIcon = {
  install: (app: App) => {
    app.component('SkipPreviousIcon', _SkipPreviousIcon)
  }
}

export default SkipPreviousIcon
