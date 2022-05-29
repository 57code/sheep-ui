import type { App } from 'vue'
import { IdcardIcon as _IdcardIcon } from './idcard'

const IdcardIcon = {
  install: (app: App) => {
    app.component('IdcardIcon', _IdcardIcon)
  }
}

export default IdcardIcon
