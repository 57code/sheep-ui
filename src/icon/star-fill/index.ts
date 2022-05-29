import type { App } from 'vue'
import { StarFillIcon as _StarFillIcon } from './star-fill'

const StarFillIcon = {
  install: (app: App) => {
    app.component('StarFillIcon', _StarFillIcon)
  }
}

export default StarFillIcon
