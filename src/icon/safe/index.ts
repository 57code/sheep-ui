import type { App } from 'vue'
import { SafeIcon as _SafeIcon } from './safe'

const SafeIcon = {
  install: (app: App) => {
    app.component('SafeIcon', _SafeIcon)
  }
}

export default SafeIcon
