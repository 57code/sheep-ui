import type { App } from 'vue'
import { QuestionIcon as _QuestionIcon } from './question'

const QuestionIcon = {
  install: (app: App) => {
    app.component('QuestionIcon', _QuestionIcon)
  }
}

export default QuestionIcon
