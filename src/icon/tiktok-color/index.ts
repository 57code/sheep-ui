import type { App } from 'vue'
import { TiktokColorIcon as _TiktokColorIcon } from './tiktok-color'

const TiktokColorIcon = {
  install: (app: App) => {
    app.component('TiktokColorIcon', _TiktokColorIcon)
  }
}

export default TiktokColorIcon
