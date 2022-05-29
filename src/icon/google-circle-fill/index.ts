import type { App } from 'vue'
import { GoogleCircleFillIcon as _GoogleCircleFillIcon } from './google-circle-fill'

const GoogleCircleFillIcon = {
  install: (app: App) => {
    app.component('GoogleCircleFillIcon', _GoogleCircleFillIcon)
  }
}

export default GoogleCircleFillIcon
