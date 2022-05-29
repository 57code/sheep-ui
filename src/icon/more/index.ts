import type { App } from 'vue'
import { MoreIcon as _MoreIcon } from './more'

const MoreIcon = {
  install: (app: App) => {
    app.component('MoreIcon', _MoreIcon)
  }
}

export default MoreIcon
