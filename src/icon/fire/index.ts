import type { App } from 'vue'
import { FireIcon as _FireIcon } from './fire'

const FireIcon = {
  install: (app: App) => {
    app.component('FireIcon', _FireIcon)
  }
}

export default FireIcon
