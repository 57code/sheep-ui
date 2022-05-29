import type { App } from 'vue'
import { SkipPreviousFillIcon as _SkipPreviousFillIcon } from './skip-previous-fill'

const SkipPreviousFillIcon = {
  install: (app: App) => {
    app.component('SkipPreviousFillIcon', _SkipPreviousFillIcon)
  }
}

export default SkipPreviousFillIcon
