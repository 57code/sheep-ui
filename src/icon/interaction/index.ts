import type { App } from 'vue'
import { InteractionIcon as _InteractionIcon } from './interaction'

const InteractionIcon = {
  install: (app: App) => {
    app.component('InteractionIcon', _InteractionIcon)
  }
}

export default InteractionIcon
