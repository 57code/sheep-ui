import type { App } from 'vue'
import { SkinIcon as _SkinIcon } from './skin'

const SkinIcon = {
  install: (app: App) => {
    app.component('SkinIcon', _SkinIcon)
  }
}

export default SkinIcon
