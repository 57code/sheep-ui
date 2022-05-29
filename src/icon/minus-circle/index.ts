import type { App } from 'vue'
import { MinusCircleIcon as _MinusCircleIcon } from './minus-circle'

const MinusCircleIcon = {
  install: (app: App) => {
    app.component('MinusCircleIcon', _MinusCircleIcon)
  }
}

export default MinusCircleIcon
