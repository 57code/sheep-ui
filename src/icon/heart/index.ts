import type { App } from 'vue'
import { HeartIcon as _HeartIcon } from './heart'

const HeartIcon = {
  install: (app: App) => {
    app.component('HeartIcon', _HeartIcon)
  }
}

export default HeartIcon
