import type { App } from 'vue'
import { SortIcon as _SortIcon } from './sort'

const SortIcon = {
  install: (app: App) => {
    app.component('SortIcon', _SortIcon)
  }
}

export default SortIcon
