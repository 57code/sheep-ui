import type { App } from 'vue'
import { MinusIcon as _MinusIcon } from './minus'

const MinusIcon = {
  install: (app: App) => {
    app.component('MinusIcon', _MinusIcon)
  }
}

export default MinusIcon
