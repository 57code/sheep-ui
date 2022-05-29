import type { App } from 'vue'
import { PoweroffIcon as _PoweroffIcon } from './poweroff'

const PoweroffIcon = {
  install: (app: App) => {
    app.component('PoweroffIcon', _PoweroffIcon)
  }
}

export default PoweroffIcon
