import type { App } from 'vue'
import { DiceIcon as _DiceIcon } from './dice'

const DiceIcon = {
  install: (app: App) => {
    app.component('DiceIcon', _DiceIcon)
  }
}

export default DiceIcon
