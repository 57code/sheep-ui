import type { App } from 'vue'
import { MinusCircleFillIcon as _MinusCircleFillIcon } from './minus-circle-fill'

const MinusCircleFillIcon = {
  install: (app: App) => {
    app.component('MinusCircleFillIcon', _MinusCircleFillIcon)
  }
}

export default MinusCircleFillIcon
