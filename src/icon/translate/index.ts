import type { App } from 'vue'
import { TranslateIcon as _TranslateIcon } from './translate'

const TranslateIcon = {
  install: (app: App) => {
    app.component('TranslateIcon', _TranslateIcon)
  }
}

export default TranslateIcon
