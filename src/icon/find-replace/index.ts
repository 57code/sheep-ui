import type { App } from 'vue'
import { FindReplaceIcon as _FindReplaceIcon } from './find-replace'

const FindReplaceIcon = {
  install: (app: App) => {
    app.component('FindReplaceIcon', _FindReplaceIcon)
  }
}

export default FindReplaceIcon
