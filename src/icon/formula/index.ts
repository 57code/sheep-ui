import type { App } from 'vue'
import { FormulaIcon as _FormulaIcon } from './formula'

const FormulaIcon = {
  install: (app: App) => {
    app.component('FormulaIcon', _FormulaIcon)
  }
}

export default FormulaIcon
