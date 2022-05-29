import type { App } from 'vue'
import { PublicIcon as _PublicIcon } from './public'

const PublicIcon = {
  install: (app: App) => {
    app.component('PublicIcon', _PublicIcon)
  }
}

export default PublicIcon
