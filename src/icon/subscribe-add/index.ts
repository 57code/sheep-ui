import type { App } from 'vue'
import { SubscribeAddIcon as _SubscribeAddIcon } from './subscribe-add'

const SubscribeAddIcon = {
  install: (app: App) => {
    app.component('SubscribeAddIcon', _SubscribeAddIcon)
  }
}

export default SubscribeAddIcon
