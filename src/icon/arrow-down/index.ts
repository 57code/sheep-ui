import type { App } from 'vue'
import { ArrowDownIcon as _ArrowDownIcon } from './arrow-down'

const ArrowDownIcon = {
  install: (app: App) => {
    app.component('ArrowDownIcon', _ArrowDownIcon)
  }
}

export default ArrowDownIcon
