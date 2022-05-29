import type { App } from 'vue'
import { EmptyIcon as _EmptyIcon } from './empty'

const EmptyIcon = {
  install: (app: App) => {
    app.component('EmptyIcon', _EmptyIcon)
  }
}

export default EmptyIcon
