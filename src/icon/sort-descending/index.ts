import type { App } from 'vue'
import { SortDescendingIcon as _SortDescendingIcon } from './sort-descending'

const SortDescendingIcon = {
  install: (app: App) => {
    app.component('SortDescendingIcon', _SortDescendingIcon)
  }
}

export default SortDescendingIcon
