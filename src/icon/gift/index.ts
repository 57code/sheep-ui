import type { App } from 'vue'
import { GiftIcon as _GiftIcon } from './gift'

const GiftIcon = {
  install: (app: App) => {
    app.component('GiftIcon', _GiftIcon)
  }
}

export default GiftIcon
