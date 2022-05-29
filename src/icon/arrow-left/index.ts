import type { App } from 'vue'
import { ArrowLeftIcon as _ArrowLeftIcon } from './arrow-left'

const ArrowLeftIcon = {
  install: (app: App) => {
    app.component('ArrowLeftIcon', _ArrowLeftIcon)
  }
}

export default ArrowLeftIcon
