import type { App } from 'vue'
import { ArrowUpIcon as _ArrowUpIcon } from './arrow-up'

const ArrowUpIcon = {
  install: (app: App) => {
    app.component('ArrowUpIcon', _ArrowUpIcon)
  }
}

export default ArrowUpIcon
