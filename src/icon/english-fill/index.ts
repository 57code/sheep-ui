import type { App } from 'vue'
import { EnglishFillIcon as _EnglishFillIcon } from './english-fill'

const EnglishFillIcon = {
  install: (app: App) => {
    app.component('EnglishFillIcon', _EnglishFillIcon)
  }
}

export default EnglishFillIcon
