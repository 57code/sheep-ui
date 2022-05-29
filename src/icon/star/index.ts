import type { App } from 'vue'
import { StarIcon as _StarIcon } from './star'

const StarIcon = {
  install: (app: App) => {
    app.component('StarIcon', _StarIcon)
  }
}

export default StarIcon
