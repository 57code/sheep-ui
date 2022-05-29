import type { App } from 'vue'
import { SortAscendingIcon as _SortAscendingIcon } from './sort-ascending'

const SortAscendingIcon = {
  install: (app: App) => {
    app.component('SortAscendingIcon', _SortAscendingIcon)
  }
}

export default SortAscendingIcon
