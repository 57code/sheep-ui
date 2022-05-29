import type { App } from 'vue'
import { ArrowRiseIcon as _ArrowRiseIcon } from './arrow-rise'

const ArrowRiseIcon = {
  install: (app: App) => {
    app.component('ArrowRiseIcon', _ArrowRiseIcon)
  }
}

export default ArrowRiseIcon
