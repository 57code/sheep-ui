import type { App } from 'vue'
import { StrikethroughIcon as _StrikethroughIcon } from './strikethrough'

const StrikethroughIcon = {
  install: (app: App) => {
    app.component('StrikethroughIcon', _StrikethroughIcon)
  }
}

export default StrikethroughIcon
