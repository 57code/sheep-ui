import type { App } from 'vue'
import { HeartFillIcon as _HeartFillIcon } from './heart-fill'

const HeartFillIcon = {
  install: (app: App) => {
    app.component('HeartFillIcon', _HeartFillIcon)
  }
}

export default HeartFillIcon
