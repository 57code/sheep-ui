import type { App } from 'vue'
import { ManIcon as _ManIcon } from './man'

const ManIcon = {
  install: (app: App) => {
    app.component('ManIcon', _ManIcon)
  }
}

export default ManIcon
