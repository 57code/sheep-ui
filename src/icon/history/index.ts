import type { App } from 'vue'
import { HistoryIcon as _HistoryIcon } from './history'

const HistoryIcon = {
  install: (app: App) => {
    app.component('HistoryIcon', _HistoryIcon)
  }
}

export default HistoryIcon
