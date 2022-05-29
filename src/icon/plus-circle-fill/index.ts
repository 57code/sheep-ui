import type { App } from 'vue'
import { PlusCircleFillIcon as _PlusCircleFillIcon } from './plus-circle-fill'

const PlusCircleFillIcon = {
  install: (app: App) => {
    app.component('PlusCircleFillIcon', _PlusCircleFillIcon)
  }
}

export default PlusCircleFillIcon
