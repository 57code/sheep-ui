import type { App } from 'vue'
import { ObliqueLineIcon as _ObliqueLineIcon } from './oblique-line'

const ObliqueLineIcon = {
  install: (app: App) => {
    app.component('ObliqueLineIcon', _ObliqueLineIcon)
  }
}

export default ObliqueLineIcon
