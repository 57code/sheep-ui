import type { App } from 'vue'
import { CompassIcon as _CompassIcon } from './compass'

const CompassIcon = {
  install: (app: App) => {
    app.component('CompassIcon', _CompassIcon)
  }
}

export default CompassIcon
