import type { App } from 'vue'
import { ArrowFallIcon as _ArrowFallIcon } from './arrow-fall'

const ArrowFallIcon = {
  install: (app: App) => {
    app.component('ArrowFallIcon', _ArrowFallIcon)
  }
}

export default ArrowFallIcon
