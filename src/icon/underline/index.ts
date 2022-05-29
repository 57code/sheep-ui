import type { App } from 'vue'
import { UnderlineIcon as _UnderlineIcon } from './underline'

const UnderlineIcon = {
  install: (app: App) => {
    app.component('UnderlineIcon', _UnderlineIcon)
  }
}

export default UnderlineIcon
