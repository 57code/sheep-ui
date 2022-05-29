import type { App } from 'vue'
import { ArrowRightIcon as _ArrowRightIcon } from './arrow-right'

const ArrowRightIcon = {
  install: (app: App) => {
    app.component('ArrowRightIcon', _ArrowRightIcon)
  }
}

export default ArrowRightIcon
