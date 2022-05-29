import type { App } from 'vue'
import { PushpinIcon as _PushpinIcon } from './pushpin'

const PushpinIcon = {
  install: (app: App) => {
    app.component('PushpinIcon', _PushpinIcon)
  }
}

export default PushpinIcon
