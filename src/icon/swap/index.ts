import type { App } from 'vue'
import { SwapIcon as _SwapIcon } from './swap'

const SwapIcon = {
  install: (app: App) => {
    app.component('SwapIcon', _SwapIcon)
  }
}

export default SwapIcon
