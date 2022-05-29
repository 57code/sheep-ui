import type { App } from 'vue'
import { SubscribeIcon as _SubscribeIcon } from './subscribe'

const SubscribeIcon = {
  install: (app: App) => {
    app.component('SubscribeIcon', _SubscribeIcon)
  }
}

export default SubscribeIcon
