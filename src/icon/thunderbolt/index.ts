import type { App } from 'vue'
import { ThunderboltIcon as _ThunderboltIcon } from './thunderbolt'

const ThunderboltIcon = {
  install: (app: App) => {
    app.component('ThunderboltIcon', _ThunderboltIcon)
  }
}

export default ThunderboltIcon
