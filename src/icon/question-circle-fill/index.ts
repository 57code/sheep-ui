import type { App } from 'vue'
import { QuestionCircleFillIcon as _QuestionCircleFillIcon } from './question-circle-fill'

const QuestionCircleFillIcon = {
  install: (app: App) => {
    app.component('QuestionCircleFillIcon', _QuestionCircleFillIcon)
  }
}

export default QuestionCircleFillIcon
