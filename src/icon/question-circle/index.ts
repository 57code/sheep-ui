import type { App } from 'vue'
import { QuestionCircleIcon as _QuestionCircleIcon } from './question-circle'

const QuestionCircleIcon = {
  install: (app: App) => {
    app.component('QuestionCircleIcon', _QuestionCircleIcon)
  }
}

export default QuestionCircleIcon
