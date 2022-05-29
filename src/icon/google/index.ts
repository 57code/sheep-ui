import type { App } from 'vue'
import { GoogleIcon as _GoogleIcon } from './google'

const GoogleIcon = {
  install: (app: App) => {
    app.component('GoogleIcon', _GoogleIcon)
  }
}

export default GoogleIcon
