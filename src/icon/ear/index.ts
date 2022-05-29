import type { App } from 'vue'
import { EarIcon as _EarIcon } from './ear'

const EarIcon = {
  install: (app: App) => {
    app.component('EarIcon', _EarIcon)
  }
}

export default EarIcon
