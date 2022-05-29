import type { App } from 'vue'
import { AtIcon as _AtIcon } from './at'

const AtIcon = {
  install: (app: App) => {
    app.component('AtIcon', _AtIcon)
  }
}

export default AtIcon
