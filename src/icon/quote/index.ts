import type { App } from 'vue'
import { QuoteIcon as _QuoteIcon } from './quote'

const QuoteIcon = {
  install: (app: App) => {
    app.component('QuoteIcon', _QuoteIcon)
  }
}

export default QuoteIcon
