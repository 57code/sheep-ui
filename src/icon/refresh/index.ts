import type { App } from 'vue'
import { RefreshIcon as _RefreshIcon } from './refresh'

const RefreshIcon = {
  install: (app: App) => {
    app.component('RefreshIcon', _RefreshIcon)
  }
}

export default RefreshIcon
