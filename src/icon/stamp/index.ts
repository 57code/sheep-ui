import type { App } from 'vue'
import { StampIcon as _StampIcon } from './stamp'

const StampIcon = {
  install: (app: App) => {
    app.component('StampIcon', _StampIcon)
  }
}

export default StampIcon
