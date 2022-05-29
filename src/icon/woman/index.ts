import type { App } from 'vue'
import { WomanIcon as _WomanIcon } from './woman'

const WomanIcon = {
  install: (app: App) => {
    app.component('WomanIcon', _WomanIcon)
  }
}

export default WomanIcon
