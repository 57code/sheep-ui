import type { App } from 'vue'
import { PlusCircleIcon as _PlusCircleIcon } from './plus-circle'

const PlusCircleIcon = {
  install: (app: App) => {
    app.component('PlusCircleIcon', _PlusCircleIcon)
  }
}

export default PlusCircleIcon
