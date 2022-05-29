import type { App } from 'vue'
import { PlusIcon as _PlusIcon } from './plus'

const PlusIcon = {
  install: (app: App) => {
    app.component('PlusIcon', _PlusIcon)
  }
}

export default PlusIcon
