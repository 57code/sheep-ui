import type { App } from 'vue'
import { UnlockIcon as _UnlockIcon } from './unlock'

const UnlockIcon = {
  install: (app: App) => {
    app.component('UnlockIcon', _UnlockIcon)
  }
}

export default UnlockIcon
