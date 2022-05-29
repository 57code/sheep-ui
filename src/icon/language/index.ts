import type { App } from 'vue'
import { LanguageIcon as _LanguageIcon } from './language'

const LanguageIcon = {
  install: (app: App) => {
    app.component('LanguageIcon', _LanguageIcon)
  }
}

export default LanguageIcon
