import type { App } from 'vue'
import { BulbIcon as _BulbIcon } from './bulb'

const BulbIcon = {
  install: (app: App) => {
    app.component('BulbIcon', _BulbIcon)
  }
}

export default BulbIcon
